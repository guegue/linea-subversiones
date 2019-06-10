export default {
    data() {
        return {
            nameSite: '',
            slugSite: '',
            aboutSite: '',
            optionMenu: [],
        }
    },
    methods: {
        async getDetailsSite(array_items) {
            //obtenemos todos los sitios de omeka
            const response = await this.$axios(this.$domainOmeka + 'api/sites');
            let siteName = '';
            let idSite = 0;
            //validamos que el parametro namesite no este indefinido
            if (this.$route.params.namesite !== undefined) {
                siteName = this.$route.params.namesite.toLowerCase();
                response.data.forEach((site) => {
                    if (site['o:slug'] === siteName) {
                        idSite = site['o:id'];
                        this.nameSite = site['o:title'];
                        this.slugSite = site['o:slug'];
                    }
                    //recorrelos el arreglo de id de items sets
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
                let pages = responseData['o:navigation'];
                items = responseData['o:item_pool'];
                if (responseData['o:summary'] !== null) {
                    this.aboutSite = responseData['o:summary'].replace(/\r/g, '').split('\n');
                }
                for (const page of pages) {
                    let url = '';
                    if (page.type.toLowerCase() === 'page') {
                        url = this.$domainOmeka + 'api/site_pages/' + page.data['id'];
                        const details = await this.$axios(url);
                        this.optionMenu.push({
                            url: url,
                            type: page.type,
                            slug: this.formatStringToUrl(details.data['o:title']),
                            title: details.data['o:title'],
                        });
                    } else if (page.type.toLowerCase() === 'url') {
                        let urlSplit = page.data['url'].split('/');
                        urlSplit[3] = urlSplit[3].toLowerCase();
                        let subOption = (urlSplit[3] === 'item-set') ? 'item_sets' : 'item';
                        url = this.$domainOmeka + 'api/' + subOption + '/' + urlSplit[4];
                        this.optionMenu.push({
                            url: url,
                            type: page.type,
                            slug: this.formatStringToUrl(page.data['label']),
                            title: page.data['label'],
                        });
                    }
                }

            }
            // return a list of ids items
            return items['item_set_id'];
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