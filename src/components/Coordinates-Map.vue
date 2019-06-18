<template>
    <div id="map">

    </div>
</template>

<script>
    import 'leaflet/dist/leaflet.css'

    export default {
        name: "Coordinates-Map",
        props: ['coordinates'],
        components: {
        },
        data() {
            return {
                zoom: 4,
                center: window.L.latLng(47.413220, -1.219482),
                url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                marker: [],
            }
        },
        mounted() {
            let map = new window.L.Map('map');

            window.L.tileLayer(this.url, {
                attribution: this.attribution,
                maxZoom: 13,
            }).addTo(map);

            // latitud -12.0431800,longitud  -77.0282400
            let PeruPosition = new window.L.LatLng(-12.0431800, -77.0282400);
            map.attributionControl.setPrefix('');
            map.setView(PeruPosition, this.zoom);

            for (const coordinate of this.coordinates){
                let marker_location = new window.L.LatLng(coordinate.lat,coordinate.lng);
                let marker = new window.L.Marker(marker_location);
                map.addLayer(marker);

                marker.bindPopup(coordinate.title);
            }

        }
    }
</script>

<style scoped>

    #map {
        position: relative !important;
        z-index: 0;
        width: 100%;
        height: 400px;
    }
</style>