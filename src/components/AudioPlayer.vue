<template>
    <div class="ml-3" >
        <h4>Audios</h4>
        <div  v-for="(audio,index) in audios" :key="index">
            <audio controls>
                <source :src="audio.url" :type="audio.type">
                Your browser does not support the audio element.
            </audio>
            <h5>{{audio.title}}</h5>
        </div>

    </div>
</template>

<script>
    export default {
        name: "AudioPlayer",
        props: ['audios']
    }
</script>

<style scoped>

</style>