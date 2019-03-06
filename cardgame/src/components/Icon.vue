<template>
  <div id="icon">
    <div id="image">
      <img :src="getSource(currentType)">
      <!--<h1>{{ getSource(currentType) }}</h1>-->
    </div>
  </div>
</template>

<script>
export default {
    name: 'Icon',
    data: () => {
      return {
        currentType: 0,
        sources: ["untot","fabelwesen","krieger", "pflanze", "tier"]
      }
    },
    methods: {
      getSource(type) {
        console.log('../static/'+this.sources[this.currentType] + '.png')
        return '../static/'+this.sources[this.currentType] + '.png'
      }
    }   

   
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
  height: 2em;
}
 
#image img {
  height: 100%;
}





</style>