<template>
  <div id="icon">
    <div id="image">
      <img ref=fabelwesen :src="this.images.fabelwesen" class="icon" id="first">
      <img ref=pflanze :src="this.images.pflanze" class="icon">
      <img ref=tier :src="this.images.tier" class="icon">

      <img ref=untot :src="this.images.untot" class="icon">
      
      <img ref=krieger :src="this.images.krieger" class="icon">
    </div>
  </div>
</template>

<script>
export default {
    name: 'Icon',
    data: () => {
      return {
        currentType: 0,
        sources: [
          "untot",
          "fabelwesen",
          "krieger", 
          "pflanze", 
          "tier"],
        images: {
          untot: "../static/Untot.svg",
          fabelwesen: "../static/Fabelwesen.svg",
          krieger: "../static/Krieger.svg",
          pflanze: "../static/Pflanze.svg",
          tier: "../static/Tier.svg"
        }
      }
    },
    methods: {
      getSource(type) {
        console.log('../static/'+this.sources[this.currentType] + '.png')
        return '../static/'+this.sources[this.currentType] + '.png'
      },
    },
    watch: {
      currentType: function() {
        var currentCard = this.sources[this.currentType]
        this.sources.forEach((element) => {
          console.log(this.$refs[element])
          if (element != currentCard) {
            this.$refs[element].style.opacity = 0.2
          }
          
        })
        this.$refs[currentCard].style.opacity = 1
      
      }
    },
    
}



</script>
<!-- styling for the component -->
<style>


h3 {
  font-size: 30px;
  width: 100%;

}

.text {
  text-align: left;
  width: 100%;
  margin: 0;
  font-size: 20px;
}

h3, .text {
  padding: 0 20px;
}

#image {
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  height: 2em;
  display: flex; 
  flex-direction: column;
}
 
#image img {
  height: 2.5em;
  margin-top: 0.25em;
  margin-bottom: 0.25em;
  opacity: 0.2;
}
#first {
  opacity: 1;
}
#icon {
  height: 100%;
}

@media screen and (max-width: 800px) {
  #image {
    flex-direction: row;
  }
}




</style>