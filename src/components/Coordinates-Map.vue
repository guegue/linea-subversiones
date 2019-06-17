<template>
    <div id="ap">
        <l-map :zoom="zoom" :center="center">
            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
            <l-marker :lat-lng="marker"></l-marker>
        </l-map>
    </div>
</template>

<script>
    import {LMap, LTileLayer, LMarker} from 'vue2-leaflet'

    export default {
        name: "Coordinates-Map",
        components: {
            LMap,
            LTileLayer,
            LMarker
        },
        data() {
            return {
                zoom:13,
                center: window.L.latLng(47.413220, -1.219482),
                url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
                attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                marker: window.L.latLng(47.413220, -1.219482),
            }
        }
    }
</script>

<style scoped>

</style>