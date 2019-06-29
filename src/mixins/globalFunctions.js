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
            url: '',
            sites: [],
            urlVideoPage: '',
            urlImageVideo: 'https://sub-versiones.hijosdeperu.org/files/medium/bd560d32c4900d5b594951d717640ebb582c41ab.jpg'
        }
    },
    methods: {
        async getAllAboutSite() {
            if (localStorage.getItem('dataSite') === null) {
                let sites = await this.$axios
                    .get(this.$domainOmeka + 'api/sites');
                for (const site of sites.data) {
                    if (site['o:slug'] === this.dataSite.slug) {
                        console.log(1);
                        this.dataSite.id = site['o:id'];
                        this.dataSite.name = site['o:title'];
                        this.dataSite.summary = this.getEmptyStringOrValue(site, 'o:summary')
                            .replace(/\r/g, '')
                            .split('\n');
                        localStorage.setItem('dataSite', JSON.stringify(this.dataSite));
                    }
                }
            } else {
                let data = JSON.parse(localStorage.getItem('dataSite'));
                this.dataSite.id = data.id;
                this.dataSite.name = data.name;
                this.dataSite.summary = data.summary;
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
                    localStorage.setItem('optionMenu', JSON.stringify(this.optionMenu));
                }
            } else {
                let option_menu;
                option_menu = JSON.parse(localStorage.getItem('optionMenu'));
                this.optionMenu = option_menu;
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
            let url_media = '', image_urls_site = {original: '', large: '', medium: ''};
            let data_sites = response.data;

            if (localStorage.getItem('sites') === null) {
                for (const site of data_sites) {
                    let id_site = site['o:id'];
                    url_media = this.$domainOmeka + `api/media?site_id=${id_site}&per_page=10`;
                    let mediaData = await this.$axios.get(url_media);
                    if (mediaData.data.length > 0) {
                        for (const media of mediaData.data) {
                            let type = this.getTypeMedia(media);
                            if (type === 'image') {
                                image_urls_site.original = media['o:original_url'];
                                image_urls_site.large = media['o:thumbnail_urls'].large;
                                image_urls_site.medium = media['o:thumbnail_urls'].medium;
                                break;
                            }
                        }
                    }

                    if (getCurrentSite === 'si') {
                        this.sites.push({
                            id: site['o:id'],
                            slug: site['o:slug'],
                            title: site['o:title'],
                            summary: site['o:summary'],
                            img_original: image_urls_site.original,
                            img_large: image_urls_site.large,
                            img_medium: image_urls_site.medium,
                            exist_img: (image_urls_site.original !== ''),
                        });
                        localStorage.setItem('sites', JSON.stringify(this.sites));
                    } else if (getCurrentSite !== 'si' && this.dataSite.slug !== site['o:slug']) {
                        this.sites.push({
                            id: site['o:id'],
                            slug: site['o:slug'],
                            title: site['o:title'],
                            summary: site['o:summary'],
                            img_original: image_urls_site.original,
                            img_large: image_urls_site.large,
                            img_medium: image_urls_site.medium,
                            exist_img: (image_urls_site.original !== ''),
                        });
                        localStorage.setItem('sites', JSON.stringify(this.sites));
                    }
                }

            } else {
                let site;
                site = JSON.parse(localStorage.getItem('sites'));

                this.sites = site;
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