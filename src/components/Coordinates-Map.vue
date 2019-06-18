<template>
    <div id="map">

    </div>
</template>

<script>
    import 'leaflet/dist/leaflet.css'

    export default {
        name: "Coordinates-Map",
        props: ['coordinates'],
        components: {},
        data() {
            return {
                zoom: 5,
                url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                marker: [],
            }
        },
        mounted() {
            let map = new window.L.Map('map');
            let latitud = 0, longitud = 0;

            window.L.tileLayer(this.url, {
                attribution: this.attribution,
                maxZoom: 13,
            }).addTo(map);


            for (const coordinate of this.coordinates) {
                latitud = latitud + coordinate.lat;
                longitud = longitud + coordinate.lng;
                //posicion del marcador latitud, longitud
                let marker_location = new window.L.LatLng(coordinate.lat, coordinate.lng);
                //creamos un marcador  y le establecemos su posicion
                let marker = new window.L.Marker(marker_location);
                //agregamos el marcador al mapa
                map.addLayer(marker);
                //agregamos un popup al marcador que contiene el titulo
                marker.bindPopup(coordinate.title);
            }
            //contenemos la cantidad de coordinadas
            let length = this.coordinates.length;
            //realizamos el calculo medio de n cantidad de puntos
            let center_position = new window.L.LatLng(latitud / length, longitud / length);
            map.attributionControl.setPrefix('');
            //pasamos al mapa el punto medio de lo puntos y zoom por defecto del mapa
            map.setView(center_position, this.zoom);
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