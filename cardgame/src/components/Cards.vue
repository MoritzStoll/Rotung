<template>
  <div id="cards" v-on:scroll="onScroll">
    <Card
      v-for="c in carddata"
      v-bind:name="c.name"
      v-bind:url="'../static/' + c.imageurl"
      v-bind:text="c.text"
      v-bind:type="c.type"
    ></Card>
  </div>
</template>

<script>
import Card from './Card.vue'
export default {
    name: 'Cards',
    components: {
      Card: Card
    },
    data: () => {return {
    /*
    Untote: 0
    Fabelwesen: 1
    Krieger: 2
    Pflanzen: 3
    Tiere: 4
    */
    carddata: [
      {name: "Elementargeist des Feuers", imageurl: "04.png", text: "Die Bewohner Rotunds konnten sich nicht erklären, wie das Feuer entsteht und was es eigentlich ist. So entwickelte sich die Fabel des „Eementargeists des Feuers“. Er ist der Geist, der in den Flammen wohnt, Waldbrände verursacht, aber auch das Feuer im heimischen Herd am Leben erhält. Durch den Austritt der großen Magiemengen nach dem Krieg, wurde der Elementargeist des Feuers schließlich real.", type: 1},
      {name: "Elementargeist des Meeres", imageurl: "05.png", text: "Das Meer umgibt ganz Rotund. Niemand weiß, was es dazu bringt hin und wieder den Kontinent zu überschwemmen, Seefahrer zu verschlingen oder in Form von Regen die Felder auf Rotund zu wässern. Man erzählte sich die Geschichte, der Elementargeist des Meeres sei für all diese Phänomene verantwortlich. Schließlich formte sich, durch große Mengen Magie, aus der Fabel ein reales Wesen.",type: 1},
      {name: "Elementargeist des Waldes", imageurl: "06.png", text: "Der Wald war schon immer ein komplexes System, in dem die verschiedensten Lebewesen miteinander lebten. Rotunds Bewohner konnten sich nicht erklären, wie dieser so perfekt ausbalancierte Lebensraum existieren konnte, wenn nicht durch die Hilfe eines Wesens, dessen Aufgabe genau darin bestand diesen Lebensraum zu erhalten. So war die Fabel des Elementargeists des Waldes geboren, aus der durch die magische Katastrophe Wirklichkeit geworden ist. ",type: 1},
      {name: "Geist vereinter Elemente", imageurl: "hirsch.png", text: "orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id dignissim nisi, eu imperdiet eros. Cras faucibus nunc in odio mattis blandit. Quisque laoreet sodales nisl at suscipit. Vestibulum suscipit erat tortor, vitae malesuada lectus hendrerit at. Phasellus nec purus nunc. Duis vitae fringilla neque, at molestie metus. Curabitur placerat mauris eget nisl blandit, eget auctor tortor accumsan.",type: 1},
      {name: "Fandir", imageurl: "Dragon.png", text: "orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id dignissim nisi, eu imperdiet eros. Cras faucibus nunc in odio mattis blandit. Quisque laoreet sodales nisl at suscipit. Vestibulum suscipit erat tortor, vitae malesuada lectus hendrerit at. Phasellus nec purus nunc. Duis vitae fringilla neque, at molestie metus. Curabitur placerat mauris eget nisl blandit, eget auctor tortor accumsan.",type: 1},
      {name: "Lorena Tiefenstrom", imageurl: "meerjungfrau.png", text: "orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id dignissim nisi, eu imperdiet eros. Cras faucibus nunc in odio mattis blandit. Quisque laoreet sodales nisl at suscipit. Vestibulum suscipit erat tortor, vitae malesuada lectus hendrerit at. Phasellus nec purus nunc. Duis vitae fringilla neque, at molestie metus. Curabitur placerat mauris eget nisl blandit, eget auctor tortor accumsan.",type: 1},
      
      {name: "Hutmier", imageurl: "08_2.png", text: "orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id dignissim nisi, eu imperdiet eros. Cras faucibus nunc in odio mattis blandit. Quisque laoreet sodales nisl at suscipit. Vestibulum suscipit erat tortor, vitae malesuada lectus hendrerit at. Phasellus nec purus nunc. Duis vitae fringilla neque, at molestie metus. Curabitur placerat mauris eget nisl blandit, eget auctor tortor accumsan.",type: 3},
      {name: "Ungeborene Waldgeister", imageurl: "baumgeist.png", text: "orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id dignissim nisi, eu imperdiet eros. Cras faucibus nunc in odio mattis blandit. Quisque laoreet sodales nisl at suscipit. Vestibulum suscipit erat tortor, vitae malesuada lectus hendrerit at. Phasellus nec purus nunc. Duis vitae fringilla neque, at molestie metus. Curabitur placerat mauris eget nisl blandit, eget auctor tortor accumsan.",type: 3},
      {name: "Kanuum", imageurl: "Carot.png", text: "orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id dignissim nisi, eu imperdiet eros. Cras faucibus nunc in odio mattis blandit. Quisque laoreet sodales nisl at suscipit. Vestibulum suscipit erat tortor, vitae malesuada lectus hendrerit at. Phasellus nec purus nunc. Duis vitae fringilla neque, at molestie metus. Curabitur placerat mauris eget nisl blandit, eget auctor tortor accumsan.",type: 3},
      {name: "Bogenschütze Liev", imageurl: "Leaf elve.png", text: "orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id dignissim nisi, eu imperdiet eros. Cras faucibus nunc in odio mattis blandit. Quisque laoreet sodales nisl at suscipit. Vestibulum suscipit erat tortor, vitae malesuada lectus hendrerit at. Phasellus nec purus nunc. Duis vitae fringilla neque, at molestie metus. Curabitur placerat mauris eget nisl blandit, eget auctor tortor accumsan.",type: 3},
      {name: "Wünschel der Baum", imageurl: "Small tree.png", text: "orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id dignissim nisi, eu imperdiet eros. Cras faucibus nunc in odio mattis blandit. Quisque laoreet sodales nisl at suscipit. Vestibulum suscipit erat tortor, vitae malesuada lectus hendrerit at. Phasellus nec purus nunc. Duis vitae fringilla neque, at molestie metus. Curabitur placerat mauris eget nisl blandit, eget auctor tortor accumsan.",type: 3},
      {name: "Gevatter Natur", imageurl: "Tree.png", text: "orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id dignissim nisi, eu imperdiet eros. Cras faucibus nunc in odio mattis blandit. Quisque laoreet sodales nisl at suscipit. Vestibulum suscipit erat tortor, vitae malesuada lectus hendrerit at. Phasellus nec purus nunc. Duis vitae fringilla neque, at molestie metus. Curabitur placerat mauris eget nisl blandit, eget auctor tortor accumsan.",type: 3},
      
      {name: "Shadow", imageurl: "eule.png", text: "orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id dignissim nisi, eu imperdiet eros. Cras faucibus nunc in odio mattis blandit. Quisque laoreet sodales nisl at suscipit. Vestibulum suscipit erat tortor, vitae malesuada lectus hendrerit at. Phasellus nec purus nunc. Duis vitae fringilla neque, at molestie metus. Curabitur placerat mauris eget nisl blandit, eget auctor tortor accumsan.",type: 4},
      {name: "Hoppelnde Informantin", imageurl: "hase.png", text: "orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id dignissim nisi, eu imperdiet eros. Cras faucibus nunc in odio mattis blandit. Quisque laoreet sodales nisl at suscipit. Vestibulum suscipit erat tortor, vitae malesuada lectus hendrerit at. Phasellus nec purus nunc. Duis vitae fringilla neque, at molestie metus. Curabitur placerat mauris eget nisl blandit, eget auctor tortor accumsan.",type: 4},
      {name: "Geisterqualle Kwena", imageurl: "qualle.png", text: "orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id dignissim nisi, eu imperdiet eros. Cras faucibus nunc in odio mattis blandit. Quisque laoreet sodales nisl at suscipit. Vestibulum suscipit erat tortor, vitae malesuada lectus hendrerit at. Phasellus nec purus nunc. Duis vitae fringilla neque, at molestie metus. Curabitur placerat mauris eget nisl blandit, eget auctor tortor accumsan.",type: 4},
      {name: "Sir Wilfred - Spalter des Berges", imageurl: "Widder.png", text: "orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id dignissim nisi, eu imperdiet eros. Cras faucibus nunc in odio mattis blandit. Quisque laoreet sodales nisl at suscipit. Vestibulum suscipit erat tortor, vitae malesuada lectus hendrerit at. Phasellus nec purus nunc. Duis vitae fringilla neque, at molestie metus. Curabitur placerat mauris eget nisl blandit, eget auctor tortor accumsan.",type: 4},
      {name: "Heimtücke, List und Verrat", imageurl: "cerberus.png", text: "orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id dignissim nisi, eu imperdiet eros. Cras faucibus nunc in odio mattis blandit. Quisque laoreet sodales nisl at suscipit. Vestibulum suscipit erat tortor, vitae malesuada lectus hendrerit at. Phasellus nec purus nunc. Duis vitae fringilla neque, at molestie metus. Curabitur placerat mauris eget nisl blandit, eget auctor tortor accumsan.",type: 4},

      {name: "Til Seelenspiegel", imageurl: "02.png", text: "orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id dignissim nisi, eu imperdiet eros. Cras faucibus nunc in odio mattis blandit. Quisque laoreet sodales nisl at suscipit. Vestibulum suscipit erat tortor, vitae malesuada lectus hendrerit at. Phasellus nec purus nunc. Duis vitae fringilla neque, at molestie metus. Curabitur placerat mauris eget nisl blandit, eget auctor tortor accumsan.",type: 0},
      {name: "Rabentod", imageurl: "07.png", text: "orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id dignissim nisi, eu imperdiet eros. Cras faucibus nunc in odio mattis blandit. Quisque laoreet sodales nisl at suscipit. Vestibulum suscipit erat tortor, vitae malesuada lectus hendrerit at. Phasellus nec purus nunc. Duis vitae fringilla neque, at molestie metus. Curabitur placerat mauris eget nisl blandit, eget auctor tortor accumsan.",type: 0},
      {name: "Unterhändler des Totengottes", imageurl: "09_2.png", text: "orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id dignissim nisi, eu imperdiet eros. Cras faucibus nunc in odio mattis blandit. Quisque laoreet sodales nisl at suscipit. Vestibulum suscipit erat tortor, vitae malesuada lectus hendrerit at. Phasellus nec purus nunc. Duis vitae fringilla neque, at molestie metus. Curabitur placerat mauris eget nisl blandit, eget auctor tortor accumsan.",type: 0},
      {name: "Totengott", imageurl: "01.png", text: "orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id dignissim nisi, eu imperdiet eros. Cras faucibus nunc in odio mattis blandit. Quisque laoreet sodales nisl at suscipit. Vestibulum suscipit erat tortor, vitae malesuada lectus hendrerit at. Phasellus nec purus nunc. Duis vitae fringilla neque, at molestie metus. Curabitur placerat mauris eget nisl blandit, eget auctor tortor accumsan.",type: 0},
      {name: "Die Gebrüder Geo und Lehm", imageurl: "Gnome.png", text: "orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id dignissim nisi, eu imperdiet eros. Cras faucibus nunc in odio mattis blandit. Quisque laoreet sodales nisl at suscipit. Vestibulum suscipit erat tortor, vitae malesuada lectus hendrerit at. Phasellus nec purus nunc. Duis vitae fringilla neque, at molestie metus. Curabitur placerat mauris eget nisl blandit, eget auctor tortor accumsan.",type: 0},
      {name: "Totenhändler", imageurl: "händler.png", text: "orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id dignissim nisi, eu imperdiet eros. Cras faucibus nunc in odio mattis blandit. Quisque laoreet sodales nisl at suscipit. Vestibulum suscipit erat tortor, vitae malesuada lectus hendrerit at. Phasellus nec purus nunc. Duis vitae fringilla neque, at molestie metus. Curabitur placerat mauris eget nisl blandit, eget auctor tortor accumsan.",type: 0},

      {name: "Rasmus Grau", imageurl: "11.png", text: "orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id dignissim nisi, eu imperdiet eros. Cras faucibus nunc in odio mattis blandit. Quisque laoreet sodales nisl at suscipit. Vestibulum suscipit erat tortor, vitae malesuada lectus hendrerit at. Phasellus nec purus nunc. Duis vitae fringilla neque, at molestie metus. Curabitur placerat mauris eget nisl blandit, eget auctor tortor accumsan.",type: 2},
      {name: "Michelledóttir", imageurl: "wikingerin.png", text: "orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id dignissim nisi, eu imperdiet eros. Cras faucibus nunc in odio mattis blandit. Quisque laoreet sodales nisl at suscipit. Vestibulum suscipit erat tortor, vitae malesuada lectus hendrerit at. Phasellus nec purus nunc. Duis vitae fringilla neque, at molestie metus. Curabitur placerat mauris eget nisl blandit, eget auctor tortor accumsan.",type: 2},
      {name: "Yakki", imageurl: "10.png", text: "orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id dignissim nisi, eu imperdiet eros. Cras faucibus nunc in odio mattis blandit. Quisque laoreet sodales nisl at suscipit. Vestibulum suscipit erat tortor, vitae malesuada lectus hendrerit at. Phasellus nec purus nunc. Duis vitae fringilla neque, at molestie metus. Curabitur placerat mauris eget nisl blandit, eget auctor tortor accumsan.",type: 2},
      {name: "Sir Robert der Lügenbaron", imageurl: "knight 1.png",text: "orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id dignissim nisi, eu imperdiet eros. Cras faucibus nunc in odio mattis blandit. Quisque laoreet sodales nisl at suscipit. Vestibulum suscipit erat tortor, vitae malesuada lectus hendrerit at. Phasellus nec purus nunc. Duis vitae fringilla neque, at molestie metus. Curabitur placerat mauris eget nisl blandit, eget auctor tortor accumsan.",type: 2},
      {name: "Sir Edmund der rostige Samurai", imageurl: "Knight.png",text: "orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id dignissim nisi, eu imperdiet eros. Cras faucibus nunc in odio mattis blandit. Quisque laoreet sodales nisl at suscipit. Vestibulum suscipit erat tortor, vitae malesuada lectus hendrerit at. Phasellus nec purus nunc. Duis vitae fringilla neque, at molestie metus. Curabitur placerat mauris eget nisl blandit, eget auctor tortor accumsan.",type: 2},
      {name: "Gunnar der Gottesvernichter", imageurl: "12.png",text: "orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id dignissim nisi, eu imperdiet eros. Cras faucibus nunc in odio mattis blandit. Quisque laoreet sodales nisl at suscipit. Vestibulum suscipit erat tortor, vitae malesuada lectus hendrerit at. Phasellus nec purus nunc. Duis vitae fringilla neque, at molestie metus. Curabitur placerat mauris eget nisl blandit, eget auctor tortor accumsan.",type: 2},     
    ]
    }},
    methods: {
      onScroll(event)  {
        event.preventDefault()
        var thisElement = this
        this.$children.forEach(function(element) {
          thisElement.inViewport(element)
        });

      },
      inViewport(element) {        
        var rect = element.$el.getBoundingClientRect()
        var middle = window.screen.height/2
        if(rect.top <= middle) {
          console.log(this.$root.$children[0].$children)
          this.$root.$children[0].$children[2].currentType = element.cardType
          //console.log(this.$root.$children[0].$children[4].currentType)
        }
      }
    },   
}

</script>
<!-- styling for the component -->
<style>
div#cards {
  font-family: 'Quicksand', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow-y: scroll;
  position: relative;
  align-items: center;
}


</style>