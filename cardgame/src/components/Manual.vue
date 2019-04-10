<template>
  <div id="manual" ref=manual>
    <Mentry
      v-for="m in manual"
      v-bind:title="m.title"
      v-bind:list="m.list"
    ></Mentry>
  </div>
  
</template>

<script>
import Mentry from './Mentry.vue'

export default {
  name: 'Manual',
  components: {
    Mentry: Mentry
  },
  data: () => {
    return {
      manual: [
        {title: "Beginn des Zugs", list: ["Karte ziehen", "AP ziehen", "AP auf Feld, oder den Sparstapel legen"]},
        {title: "Ausspiel-Phase", list: ["Kreaturen, Zauber, Segen oder Flüche können ausgespielt werden"]},
        {title: "Kampf-Phase", list: ["Enttappen der AP", "Ansagen machen", "Schaden verrechnen"]},
        {title: "Aktionspunkte", list: ["1.	Wird mit einer Karte angegriffen muss der Spieler Aktionspunkte in Höhe des ANG-Werts tappen."]}
        
      ]
    }
  }
}
</script>
<!-- styling for the component -->
<style>
#manual {
  font-family: 'Quicksand', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100%;
  list-style: none;
  overflow-y: scroll;
  position: relative;
  align-items: center;
}
#textWrapper {
  padding: 0 5em;
}
p {
  text-align: justify;
}
</style>