<template>

</template>

<script>
    import GlobalFunctions from './../mixins/globalFunctions'

    export default {
        name: "Story",
        mixins: [GlobalFunctions],
        methods: {
            // async loadResourcesSitePages() {
            //
            //     let titlePage = null;
            //     let itemsOutstandingUrl = [];
            //     let itemsOutstandingResource = [];
            //
            //     this.urlSiteBase = this.$domainOmeka + 'api/sites/' + 13;
            //
            //     const response = await this.$axios(this.urlSiteBase);
            //     const data = response.data;
            //
            //     //Para los ítems destacados
            //     for (let page of data['o:page']) {
            //         const response = await this.$axios(page['@id']);
            //         const dataPage = response.data;
            //
            //         //Si encuentra el slug de línea de tiempo
            //         if (dataPage['o:slug'].search('linea-de-tiempo') !== -1) {
            //
            //             titlePage = dataPage['o:title'];
            //
            //             dataPage['o:block'].forEach((data) => {
            //                 if (data['o:layout'] === 'itemShowCase') {
            //
            //                     data['o:attachment'].forEach((item) => {
            //                         itemsOutstandingUrl.push(item['o:item']['@id']);
            //                     });
            //                 }
            //             });
            //         }
            //     }
            //
            //     //Ítems destacados
            //     for (let itemUrl of itemsOutstandingUrl) {
            //         const itemResponse = await this.$axios(itemUrl);
            //         const item = itemResponse.data;
            //         itemsOutstandingResource.push(item);
            //     }
            //     await this.loadOutstandingItems(itemsOutstandingResource);
            //
            // },
            // async loadOutstandingItems(itemsOutstandingResource) {
            //     this.itemsOutstanding = []; //Solo los ítems destacados
            //     this.itemsOutstandingCount = 0;
            //
            //     /* itemsOutstandingResource.forEach((item) => {
            //         this.getItem(item, 'outstanding');
            //     }); */
            //
            //     for (let item of itemsOutstandingResource) {
            //         await this.getItem(item, 'outstanding').then(() => {
            //             this.itemsOutstandingCount++;
            //         });
            //
            //         if (this.itemsOutstandingCount === 7) break;
            //     }
            //
            //     //this.groupItemsByDate();
            //
            //     //console.log(this.itemsOutstanding);
            //
            //     //Ordenar ítems por fecha
            //     this.itemsOutstanding.sort(function (a, b) {
            //         var dateA = new Date(a.date), dateB = new Date(b.date);
            //         return dateA - dateB;
            //     });
            // },
        }
    }
</script>

<style scoped>

</style>
