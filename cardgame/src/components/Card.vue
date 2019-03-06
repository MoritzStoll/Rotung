<template>
  <div id="card" v-on:click="changeCard">
      <div id="cardWrapper" ref=cardWrapper>
        <div class="imageWrapper appearing" ref=imageWrapper>
          <img id="cardimage" :src="url" class="image" ref=pureImage>
        </div>
        <div class="textWrapper disappearing" ref=textWrapper>
          <div id="allDescription" ref=allDescription>
            <h3 id="title">{{ name }}</h3>
            
            <p id="description" class="text">{{ text }}</p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Card',
    props: ['name','url', 'text', 'type'],
    data: function() {
      return {
        cardType: this.type,
      }
    },
    methods: {
      prepareImages: function() {
        
        var pureImage = this.$refs.pureImage;
        console.log(this.$refs.pureImage)
        
        var horizontal = pureImage.clientWidth > pureImage.clientHeight;
        console.log("Horizontal: ", horizontal, "width: ", pureImage.clientWidth, "height: ", pureImage.clientHeight, this.$el)
        if(horizontal) {
          pureImage.classList.add("horizontal")
          pureImage.classList.remove("vertical")

        } else {
          pureImage.classList.remove("horizontal")
          pureImage.classList.add("vertical")
        }
      },
      changeCard: function(event) {
        var text = this.$refs.textWrapper;
        var image = this.$refs.imageWrapper;
        var allDescription = this.$refs.allDescription;

        if (image.classList.contains("appearing")) {
          image.classList.remove("appearing")
          image.classList.add("disappearing")
          //pureImage.classList.remove("appearing")
          //pureImage.classList.add("disappearing")
          text.classList.remove("disappearing");
          text.classList.add("appearing")
        } else if (text.classList.contains("appearing")) {
          text.classList.remove("appearing")
          text.classList.add("disappearing")
          image.classList.remove("disappearing")
          image.classList.add("appearing")
          //pureImage.classList.remove("disappearing")
          //pureImage.classList.add("appearing")
        }
      }
     
    },
    mounted(){
      this.prepareImages()
    }
    

   
}



</script>
<!-- styling for the component -->
<style>

#card {
  width: 90%;
  height: auto;
  
  margin: 2em 0;
}
#description {

}
#cardWrapper {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2em 0;
}

#allDescription {
  width: 40vw;
  margin-left: 5em;
}



.horizontal {
  width: 15em;
}

.vertical {
  height: 20em;
}

.imageWrapper {
  width: 30vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

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
.notVisible {
  display: none;
}

@media screen and (max-width: 800px) {
  h3, .text {
    padding: 0;
  }
  #card {
    width: 100vw;
  }

  #cardWrapper {
    width: 100%;
    height: 70vh;
  }

  #allDescription {
    width: 90vw;
    margin: auto;
  }


  .imageWrapper {
    height: auto;
    opacity: 1;
    transition: width 1s;
    display: flex;
    justify-content: center;
    z-index: -1;
    
  }
  .image {
  height: 20em;

}


  .imageWrapper .disappearing {
    opacity: 0;
  }

  .textWrapper .disappearing {
    opacity: 0;
  }

  .textWrapper {
    padding: 0;
    transition: width 1s;
    background: white;
    height: 100%;
  }

  .appearing {
    width: 100%;
  }

  .disappearing {
    width: 0%;
  }

 
}




</style>