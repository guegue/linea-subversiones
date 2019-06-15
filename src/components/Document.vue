<template>
    <div>
        <div class="column one-fifth" v-for="(doc,index) in documents" :key="index">
            <a href="javascript:;"  @click="showModalDocument(doc.url,doc.title)">
                <img :src="doc.img" :alt="doc.title">
                <h6>{{doc.title}}</h6>
            </a>
        </div>

        <!--modal-->
        <modal name="modal-document"
               transition="nice-modal-fade"
               :width="1000"
               :height="650"
               :delay="100"
               :resizable="false">
            <div class="header-content">
                <h4>{{titleDocument}}</h4>
            </div>
            <div class="body-content">
                <embed :src="urlDocument">
            </div>
        </modal>
    </div>


</template>


<script>
    export default {
        name: "Document",
        props:['documents'],
        data() {
            return {
                titleDocument: '',
                urlDocument: '',
            }
        },
        methods: {
            showModalDocument(urlDocument, titleDocument) {
                this.titleDocument = titleDocument;
                this.urlDocument = urlDocument;
                this.$modal.show('modal-document');
            }
        }
    }
</script>

<style scoped>
    .header-content {
        height: 30px;
        width: 100%;
        padding: 5px 5px;
    }

    .header-content h4 {
        color: #000 !important;
    }

    .body-content {
        width: 100%;
        height: 100%;
    }

    embed {
        margin-left: 26px;
        width: 95%;
        height: 100%;
    }

</style>