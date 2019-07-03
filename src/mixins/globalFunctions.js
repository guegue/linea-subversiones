export default {
    data() {
        return {
            dataSite: {
                id: '',
                name: '',
                slug: this.$route.params.namesite,
                summary: '',
            },
            optionMenu: [],
            sites: [],
            urlVideoPage: '',
            urlImageVideo: 'https://sub-versiones.hijosdeperu.org/files/medium/bd560d32c4900d5b594951d717640ebb582c41ab.jpg'
        }
    },
    methods: {
        async getAllAboutSite() {
            if (localStorage.getItem('dataSite') === null) {
                const sites = await this.$axios
                    .get(this.$domainOmeka + `api/sites`);
                for (const site of sites.data) {
                    if (site['o:slug'] === this.dataSite.slug) {
                        this.dataSite.id = site['o:id'];
                        this.dataSite.name = site['o:title'];
                        this.dataSite.summary = this.getEmptyStringOrValue(site, 'o:summary')
                            .replace(/\r/g, '')
                            .split('\n');

                        let storageLocal;
                        storageLocal = {
                            slug: this.dataSite.slug,
                            data: this.dataSite
                        };
                        localStorage.setItem('dataSite', JSON.stringify(storageLocal));
                    }
                }
            } else {
                let site = JSON.parse(localStorage.getItem('dataSite'));
                if (site.data.slug === this.dataSite.slug) {
                    this.dataSite.id = site.data.id;
                    this.dataSite.name = site.data.name;
                    this.dataSite.summary = site.data.summary;
                } else {
                    localStorage.removeItem('dataSite');
                    await this.getAllAboutSite();
                }
            }
        },
        async buildMenu() {
            if (localStorage.getItem('optionMenu') === null) {
                const response = await this.$axios(this.$domainOmeka + `api/sites/${this.dataSite.id}`);
                //validamos que la propiedad de navegacion este definida
                if (response.data['o:navigation'] !== undefined) {
                    let responseData = response.data;
                    let navigation = responseData['o:navigation'];
                    for (const option of navigation) {
                        let url = '', title = '', slug = '', id;
                        let type = option.type.toLowerCase();
                        //validamos si cada opcion de navegacion es tipo pagina o url para crear obtener los datos de la opcion
                        if (type === 'page') {
                            id = option.data['id'];
                            url = this.$domainOmeka + `api/site_pages/${id}`;
                            const details = await this.$axios(url);
                            title = details.data['o:title'];
                            type = option.type;
                            slug = this.formatStringToUrl(details.data['o:title']);
                        } else if (type === 'url') {
                            id = option.data['url'];
                            url = this.$domainOmeka + `api/item_sets/${id}`;
                            let dataItemSet = await this.$axios(url);
                            type = (dataItemSet.data['o:resource_class'] !== null) ? dataItemSet.data['o:resource_class']['o:id'] : option.type;
                            title = option.data['label'];
                            slug = this.formatStringToUrl(option.data['label']);
                            this.urlVideoPage = (type === 38) ? `/${this.dataSite.slug}/page/${slug}` : ``;
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
                    let storageLocal;
                    storageLocal = {
                        idPage: this.dataSite.id,
                        data: this.optionMenu,
                    };
                    localStorage.setItem('optionMenu', JSON.stringify(storageLocal));
                }
            } else {
                let option_menu;
                option_menu = JSON.parse(localStorage.getItem('optionMenu'));

                if (option_menu.idPage === this.dataSite.id) {
                    this.optionMenu = option_menu.data;
                } else {
                    localStorage.removeItem('optionMenu');
                    this.buildMenu();
                }
            }
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
                            id: this.getEmptyStringOrValue(mediaData.data, 'o:id'),
                            title: this.getAttribEmptyOrFilled(mediaData.data, 'dcterms:title'),
                            type: media_type,
                            img_large: this.urlImageVideo,
                            img_medium: this.urlImageVideo,
                            url: this.getEmptyStringOrValue(mediaData.data, 'o:original_url'),
                        });
                        break;
                    case 'youtube':
                    case 'vimeo':
                        id = mediaData.data['data']['id'];
                        //llenamos el arreglo de videos
                        array_video.push({
                            id: this.getEmptyStringOrValue(mediaData.data, 'o:id'),
                            title: this.getAttribEmptyOrFilled(mediaData.data, 'dcterms:title'),
                            type: media_type,
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
                            img: mediaData.data['o:thumbnail_urls'].medium,
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
            let media = {original: '', large: ''};
            for (const dataMedia of array['o:media']) {
                let imgData = await this.$axios(dataMedia['@id']);
                media = this.getMediaEmptyOrFilled(imgData.data);
                if (media.original !== '') {
                    break;
                }
            }
            //return the url of the first img found
            return media;
        },
        async getAllSites(getCurrentSite = 'si') {
            const response = await this.$axios(this.$domainOmeka + 'api/sites');
            let item_set_url = '', media_url = '';
            let data_sites = response.data;

            if (localStorage.getItem('sites') === null) {
                for (const site of data_sites) {
                    let image_urls_site = {original: '', square: ''};
                    let id_site = site['o:id'];
                    item_set_url = this.$domainOmeka + `api/item_sets?resource_class_label=slider&site_id=${id_site}`;
                    const item_set = await this.$axios.get(item_set_url);
                    if (item_set.data.length > 0) {
                        //is -> item set
                        let is_detail_url = item_set.data[0]['o:items']['@id'];
                        const details = await this.$axios.get(is_detail_url);
                        media_url = details.data[0]['o:media'][0]['@id'];
                        const media = await this.$axios.get(media_url);
                        image_urls_site.original = media.data['o:original_url'];
                        image_urls_site.square = media.data['o:thumbnail_urls'].square;
                    }
                    if (getCurrentSite === 'si') {
                        this.sites.push({
                            id: site['o:id'],
                            slug: site['o:slug'],
                            title: site['o:title'],
                            summary: site['o:summary'],
                            img_original: image_urls_site.original,
                            img_square: image_urls_site.square,
                            exist_img: (image_urls_site.original !== ''),
                        });
                    } else if (getCurrentSite !== 'si' && this.dataSite.slug !== site['o:slug']) {
                        this.sites.push({
                            id: site['o:id'],
                            slug: site['o:slug'],
                            title: site['o:title'],
                            summary: site['o:summary'],
                            img_original: image_urls_site.original,
                            img_square: image_urls_site.square,
                            exist_img: (image_urls_site.original !== ''),
                        });
                    }
                }

                let storageLocal;
                storageLocal = {
                    idPage: this.dataSite.id,
                    data: this.sites
                };
                localStorage.setItem('sites', JSON.stringify(storageLocal));

            } else {
                let site;
                site = JSON.parse(localStorage.getItem('sites'));
                if (this.dataSite.id === site.idPage) {
                    this.sites = site.data;
                } else {
                    localStorage.removeItem('sites');
                    this.getAllSites(getCurrentSite);
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
            let media = {original: '', large: ''};
            switch (objectArray['o:media_type']) {
                case 'audio/mpeg':
                case 'image/png':
                case 'image/jpeg':
                    media.original = objectArray['o:original_url'];
                    media.large = objectArray['o:thumbnail_urls']['large'];
                    break;
                case 'application/pdf':
                    media.original = objectArray['o:thumbnail_urls']['large'];
                    media.large = objectArray['o:thumbnail_urls']['large'];
                    break;
                case 'video/mp4':
                case null:
                    if (objectArray['o:thumbnail_urls'].length > 0) {
                        media.original = objectArray['o:thumbnail_urls']['large'];
                        media.large = objectArray['o:thumbnail_urls']['large'];
                    } else {
                        media.original = '';
                        media.large = '';
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