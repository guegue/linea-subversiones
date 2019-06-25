export default {
    data() {
        return {
            nameSite: '',
            slugSite: '',
            aboutSite: '',
            optionMenu: [],
            id_video: null,
            url: '',
            sites: [],
            urlVideoPage: '',
        }
    },
    methods: {
        async getDetailsSite(array_items) {
            //validamos que el parametro namesite este definido
            if (this.$route.params.namesite !== undefined) {
                //obtenemos todos los sitios de omeka
                const response = await this.$axios(this.$domainOmeka + 'api/sites');
                let siteName = this.$route.params.namesite.toLowerCase();
                let idSite = 0;
                response.data.forEach((site) => {
                    if (site['o:slug'] === siteName) {
                        idSite = site['o:id'];
                        this.nameSite = site['o:title'];
                        this.slugSite = site['o:slug'];
                    }
                    //recorro el arreglo de id de items sets
                    array_items.forEach((data, index) => {
                        //obtenemos el id de cada item set con la propiedad id_item_set
                        let idItemSet = data.id_item_set.toString();
                        //obtenemos el arreglo de item set del sitio en iteracion
                        let listItemSet = site['o:item_pool']['item_set_id'];
                        //validamos que la propiedad item_set_id exista
                        if (listItemSet !== undefined) {
                            //buscamos en el arreglo de item set del sitio en iteracion buscamos si existe un id que obtivumos previamente
                            let found = listItemSet.indexOf(idItemSet);
                            if (found > -1 && site['o:id'] !== idSite) {
                                array_items[index]["title_site"] = site['o:title'];
                                array_items[index]["slug"] = site['o:slug'];
                                array_items[index]["description"] = site['o:summary'];
                                array_items[index]["exist_img"] = true;
                            } else if (found <= -1 && array_items[index]["exist_img"] !== undefined
                                && array_items[index]["exist_img"] !== true) {
                                array_items[index]["exist_img"] = false;
                            }
                        }
                    });
                });
                return [array_items, idSite];
            }
        },
        async buildMenu(idSite) {

            const response = await this.$axios(this.$domainOmeka + 'api/sites/' + idSite);
            let items;
            //validamos que la propiedad de navegacion este definida
            if (response.data['o:navigation'] !== undefined) {
                let responseData = response.data;
                let navigation = responseData['o:navigation'];
                items = responseData['o:item_pool'];
                if (responseData['o:summary'] !== null) {
                    this.aboutSite = responseData['o:summary'].replace(/\r/g, '').split('\n');
                }
                for (const option of navigation) {
                    let url = '', title = '', slug = '';
                    let type = option.type.toLowerCase();
                    //validamos si cada opcion de navegacion es tipo pagina o url para crear obtener los datos de la opcion
                    if (type === 'page') {
                        url = this.$domainOmeka + 'api/site_pages/' + option.data['id'];
                        const details = await this.$axios(url);
                        title = details.data['o:title'];
                        type = option.type;
                        slug = this.formatStringToUrl(details.data['o:title']);
                    } else if (type === 'url') {
                        url = this.$domainOmeka + 'api/item_sets/' + option.data['url'];
                        let dataItemSet = await this.$axios(url);
                        type = (dataItemSet.data['o:resource_class'] !== null) ? dataItemSet.data['o:resource_class']['o:id'] : option.type;
                        title = option.data['label'];
                        slug = this.formatStringToUrl(option.data['label']);
                        if (type === 38) {
                            this.urlVideoPage = '/' + this.$route.params.namesite + '/page/' + slug;
                        }
                    }
                    if (title !== '') {
                        this.optionMenu.push({
                            url: url,
                            type: type,
                            slug: slug,
                            title: title,
                        });
                    }
                }
            }
            // return a list of ids items
            return items['item_set_id'];
        },
        async getArrayMedia(data) {
            let array_img = [], array_video = [], array_audio = [], array_document = [], array_coordinate = [];
            let id = 0;
            //recorremos toda la media que viene de un item
            for (const datum of data['o:media']) {
                let mediaData = await this.$axios(datum['@id']);
                let media_type = this.getTypeMedia(mediaData.data);
                switch (media_type) {
                    case 'image':
                        //llenamos el arreglo de images subidas a la plataforma de omeka
                        array_img.push({
                            title: this.getAttribEmptyOrFilled(mediaData.data, 'dcterms:title'),
                            type: media_type,
                            url: this.getMediaEmptyOrFilled(mediaData.data),
                        });
                        break;
                    case 'video' :
                        //llenamos el arreglo de videos subidos a la plataforma de omeka
                        array_video.push({
                            title: this.getAttribEmptyOrFilled(mediaData.data, 'dcterms:title'),
                            type: media_type,
                            extension: mediaData.data['o:media_type'],
                            img_large: 'https://sub-versiones.hijosdeperu.org/files/medium/bd560d32c4900d5b594951d717640ebb582c41ab.jpg',
                            img_medium: 'https://sub-versiones.hijosdeperu.org/files/medium/bd560d32c4900d5b594951d717640ebb582c41ab.jpg',
                            url: this.getMediaEmptyOrFilled(mediaData.data),
                        });
                        break;
                    case 'youtube':
                    case 'vimeo':
                        id = mediaData.data['data']['id'];
                        //llenamos el arreglo de videos
                        array_video.push({
                            title: this.getAttribEmptyOrFilled(mediaData.data, 'dcterms:title'),
                            type: media_type,
                            extension: '',
                            img_large: mediaData.data['o:thumbnail_urls']['large'],
                            img_medium: mediaData.data['o:thumbnail_urls']['medium'],
                            url: this.buildUrlVimeoYoutube(media_type, id),
                        });
                        break;
                    case 'audio':
                        //llenamos el arreglo de audios
                        array_audio.push({
                            title: this.getAttribEmptyOrFilled(mediaData.data, 'dcterms:title'),
                            type: mediaData.data['o:media_type'],
                            url: this.getMediaEmptyOrFilled(mediaData.data),
                        });
                        break;
                    case 'application':
                        //llenamos el arreglo de documentos generalmente son pdfs
                        array_document.push({
                            title: mediaData.data['o:source'],
                            type: mediaData.data['o:media_type'],
                            url: mediaData.data['o:original_url'],
                            img: mediaData.data['o:thumbnail_urls']['large'],
                        });
                        break;
                }
            }
            if (data['o-module-mapping:marker'] !== undefined) {
                for (const coordinate of data['o-module-mapping:marker']) {
                    let img = '';
                    if (coordinate['o:media'] !== null) {
                        let media = await this.$axios(coordinate['o:media']['@id']);
                        img = this.getMediaEmptyOrFilled(media.data);
                    }
                    array_coordinate.push({
                        img: img,
                        title: this.getEmptyStringOrValue(coordinate, 'o-module-mapping:label'),
                        lng: this.getEmptyStringOrValue(coordinate, 'o-module-mapping:lng'),
                        lat: this.getEmptyStringOrValue(coordinate, 'o-module-mapping:lat'),
                    });
                }
            }
            // return a array of arrays images,videos,audios
            return [array_img, array_video, array_audio, array_document, array_coordinate];
        },
        async getFirstImageFound(array) {
            let media = '';
            for (const dataMedia of array['o:media']) {
                let imgData = await this.$axios(dataMedia['@id']);
                media = this.getMediaEmptyOrFilled(imgData.data);
                if (media !== '') {
                    break;
                }
            }
            //return the url of the first img found
            return media;
        },
        async getAllSites(getCurrentSite = 'si') {
            const response = await this.$axios(this.$domainOmeka + 'api/sites');

            let data_sites = response.data;
            let summary = '';
            for (const site of data_sites) {

                summary = this.getEmptyStringOrValue(site, 'o:summary')
                    .replace(/\r/g, '')
                    .split('\n');

                for (const item_set of site['o:site_item_set']) {
                    let id = item_set['o:item_set']['o:id'];
                    let image_url ='';
                    let url = this.$domainOmeka + 'api/items?item_set_id=' + id;
                    let items = await this.$axios(url);
                    for (const item of items.data) {
                        if (item['o:media'].length > 0) {
                            image_url = await this.getFirstImageFound(item);
                        }
                    }
                }
                if (getCurrentSite === 'si') {

                    this.sites.push({
                        id: site['o:id'],
                        slug: site['o:slug'],
                        title: site['o:title'],
                        summary: summary,
                    })
                } else {
                    if (this.slugSite !== site['o:slug']) {

                        this.sites.push({
                            id: site['o:id'],
                            slug: site['o:slug'],
                            title: site['o:title'],
                            summary: summary,
                        });
                    }
                }

            }
        },
        getEmptyStringOrValue(objectArray, attribName) {
            return (objectArray[attribName] !== null) ? objectArray[attribName] : '';
        },
        getAttribEmptyOrFilled(objectArray, attribName) {
            return (objectArray[attribName] !== undefined) ? objectArray[attribName][0]['@value'] : '';
        },
        getMediaEmptyOrFilled(objectArray) {
            let media = '';
            switch (objectArray['o:media_type']) {
                case 'audio/mpeg':
                case 'image/png':
                case 'image/jpeg':
                    media = objectArray['o:original_url'];
                    break;
                case 'application/pdf':
                    media = objectArray['o:thumbnail_urls']['large'];
                    break;
                case 'video/mp4':
                case null:
                    if (objectArray['o:thumbnail_urls'].length > 0) {
                        media = objectArray['o:thumbnail_urls']['large'];
                    } else {
                        media = '';
                    }
                    break;
            }
            return media;
        },
        getTypeMedia(objectArray) {
            return (objectArray['o:media_type'] !== null) ? objectArray['o:media_type'].split('/')[0] : objectArray['o:ingester'];
        },
        buildUrlVimeoYoutube(mediaType, id) {
            let url = ``;
            if (mediaType === 'youtube') {
                url = `//youtube.com/embed/${id}?wmode=opaque&amp;enablejsapi=1`;
            } else {
                url = `//player.vimeo.com/video/${id}?autoplay=1&amp;api=1`;
            }
            return url
        },
        formatStringToUrl(str) {
            let from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç",
                to = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc",
                mapping = {};

            for (let i = 0, j = from.length; i < j; i++) {
                mapping[from.charAt(i)] = to.charAt(i);
            }

            let ret = [];
            for (let k = 0, l = str.length; k < l; k++) {
                let c = str.charAt(k);
                if (mapping.hasOwnProperty(str.charAt(k))) {
                    ret.push(mapping[c]);
                } else {
                    ret.push(c);
                }
            }
            return ret.join('').replace(/[^-A-Za-z0-9]+/g, '-').toLowerCase();
        },
    }
}