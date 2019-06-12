export default {
    data() {
        return {
            nameSite: '',
            slugSite: '',
            aboutSite: '',
            optionMenu: [],
            id_video: null,
            url: '',
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
                    //recorrelo el arreglo de id de items sets
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
                        slug = this.formatStringToUrl(details.data['o:title']);
                    } else if (type === 'url') {
                        url = this.$domainOmeka + 'api/item_sets/' + option.data['url'];
                        title = option.data['label'];
                        slug = this.formatStringToUrl(option.data['label']);
                    }
                    this.optionMenu.push({
                        url: url,
                        type: option.type,
                        slug: slug,
                        title: title,
                    });
                }

            }
            // return a list of ids items
            return items['item_set_id'];
        },
        async getArrayMedia(data) {
            let array_img = [], array_video = [], array_audio = [];
            for (const datum of data) {
                let mediaData = await this.$axios(datum['@id']);
                let media_type = this.getTypeMedia(mediaData.data);
                switch (media_type) {
                    case 'image':
                        array_img.push({
                            title: this.getAttribEmptyOrFilled(mediaData.data, 'dcterms:title'),
                            type: media_type,
                            url: this.getMediaEmptyOrFilled(mediaData.data, 'o:original_url'),
                        });
                        break;
                    case 'video' :
                        array_video.push({
                            title: this.getAttribEmptyOrFilled(mediaData.data, 'dcterms:title'),
                            type: media_type,
                            extension: mediaData.data['o:media_type'],
                            img_large: 'https://sub-versiones.hijosdeperu.org/files/medium/bd560d32c4900d5b594951d717640ebb582c41ab.jpg',
                            img_medium: 'https://sub-versiones.hijosdeperu.org/files/medium/bd560d32c4900d5b594951d717640ebb582c41ab.jpg',
                            url: this.getMediaEmptyOrFilled(mediaData.data, 'o:original_url'),
                        });
                        break;
                    case 'youtube':
                    case 'vimeo':
                        this.id_video = mediaData.data['data']['id'];
                        if (media_type === 'youtube') {
                            this.url = '//youtube.com/embed/' + this.id_video + '?wmode=opaque&amp;enablejsapi=1';
                        } else {
                            this.url = '//player.vimeo.com/video/' + this.id_video + '?autoplay=1&amp;api=1';
                        }

                        array_video.push({
                            title: this.getAttribEmptyOrFilled(mediaData.data, 'dcterms:title'),
                            type: media_type,
                            extension: '',
                            img_large: mediaData.data['o:thumbnail_urls']['large'],
                            img_medium: mediaData.data['o:thumbnail_urls']['medium'],
                            url: this.url,
                        });
                        break;
                    case 'audio':
                        array_audio.push({
                            title: this.getAttribEmptyOrFilled(mediaData.data, 'dcterms:title'),
                            type: mediaData.data['o:media_type'],
                            url: this.getMediaEmptyOrFilled(mediaData.data, 'o:original_url'),
                        });
                        break;
                }
            }
            // return a array of arrays images,videos,audios
            return [array_img, array_video, array_audio];
        },
        getAttribEmptyOrFilled(objectArray, attribName) {
            return (objectArray[attribName] !== undefined) ? objectArray[attribName][0]['@value'] : '';
        },
        getMediaEmptyOrFilled(objectArray, attribName) {
            return (objectArray[attribName] !== undefined) ? objectArray[attribName] : '';
        },
        getTypeMedia(objectArray) {
            return (objectArray['o:media_type'] !== null) ? objectArray['o:media_type'].split('/')[0] : objectArray['o:ingester'];
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

        }
    }
}