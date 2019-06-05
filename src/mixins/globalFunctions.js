export default {
    data() {
        return {
            nameSite: '',
            slugSite: '',
            aboutSite: '',
            optionMenu: [],
            urlSite: this.$domainOmeka + 'api/sites/',
        }
    },
    methods: {
        getDetailsSite(array_items) {
            return new Promise((solved) => {
                this.$axios(this.$domainOmeka + 'api/sites')
                    .then((response) => {
                        let siteName = this.$route.params.namesite;
                        let idSite = 0;
                        response.data.forEach((page) => {
                            if (page['o:slug'] === siteName) {
                                idSite = page['o:id'];
                                this.nameSite = page['o:title'];
                                this.slugSite = page['o:slug'];
                            }

                            array_items.forEach((data, index) => {
                                let found = page['o:item_pool']['item_set_id'].indexOf(data.id_item_set.toString());
                                if (found > -1 && page['o:id'] !== idSite) {
                                    array_items[index]["title_site"] = page['o:title'];
                                    array_items[index]["slug"] = page['o:slug'];
                                    array_items[index]["description"] = page['o:summary'];
                                    array_items[index]["exist_img"] = true;
                                } else if (found <= -1 && array_items[index]["exist_img"] !== undefined
                                    && array_items[index]["exist_img"] !== true) {
                                    array_items[index]["exist_img"] = false;
                                }
                            });
                        });
                        solved([array_items, idSite]);
                    });
            });

        },
        buildMenu(idSite) {
            return new Promise((resolved) => {
                this.$axios(this.urlSite + idSite)
                    .then((response) => {
                        let pageSites = [];
                        let items;
                        if (response.data['o:page'] !== undefined) {
                            let responseData = response.data;
                            let pages = responseData['o:page'];
                            items = responseData['o:item_pool'];
                            if (responseData['o:summary'] !== null) {
                                this.aboutSite = responseData['o:summary'].replace(/\r/g, '').split('\n');
                            }

                            pages.forEach((page) => {
                                pageSites.push(page['@id']);
                            });
                        }

                        if (pageSites.length > 0) {
                            pageSites.forEach((page) => {
                                this.$axios(page)
                                    .then((response2) => {
                                        let dataResponse = response2.data;

                                        let pageData = {
                                            slug: dataResponse['o:slug'],
                                            title: dataResponse['o:title'],
                                        };

                                        this.optionMenu.push(pageData)
                                    })
                            })
                        }
                        resolved(items['item_set_id']);
                    });
            })
        }
    }
}