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
        async getDetailsSite(array_items) {
            const response = await this.$axios(this.$domainOmeka + 'api/sites');

            let siteName = this.$route.params.namesite.toLowerCase();
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

            return [array_items, idSite];
        },
        async buildMenu(idSite) {
            const response = await this.$axios(this.urlSite + idSite);
            let items;
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
                            slug: details.data['o:slug'],
                            title: details.data['o:title'],

                        });
                    } else if (page.type.toLowerCase() === 'url') {
                        let urlSplit = page.data['url'].split('/');
                        urlSplit[3] = urlSplit[3].toLowerCase();
                        let subOption = (urlSplit[3] === 'item-set') ? 'item_sets' : 'item';
                        let url = this.$domainOmeka + 'api/'+subOption+'/' + urlSplit[4];
                        this.optionMenu.push({
                            url: url,
                            type: page.type,
                            slug: urlSplit[4],
                            title: page.data['label'],
                        });
                    }
                }

            }
            // return a list of ids items
            return items['item_set_id'];
        },
    }
}