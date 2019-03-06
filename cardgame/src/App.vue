<template>
  <div id="app">
    <div id="header">
      <h1>Tribes of Rotund</h1>
      <div id="linkContainer">
        <router-link class="link" v-bind:to="'/'">Home</router-link>
        <router-link class="link" v-bind:to="'/about'">About</router-link>
        <router-link class="link" v-bind:to="'/cards'">Cards</router-link>
        <router-link class="link" v-bind:to="'/manual'">Anleitung</router-link>
        
        <Icon></Icon>
      </div>
    </div>
    <!-- the router outlet, where all matched components would ber viewed -->
    
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import Icon from './components/Icon.vue' 
export default {
  name: 'app',
  components: {
    Icon: Icon
  }
}
</script>
<!-- styling for the component -->
<style>

html, body {
  margin: 0;
  padding: 0;
  height:100%;
  width: 100%;
}

body {
  overflow: hidden;
}

#app {
  font-family: 'Quicksand', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  text-decoration: none;
  display: flex;
  flex-direction: row;
}

.view {
  width: 80%;
  overflow-x: hidden;
}
#header {
  width: 20%;
  height: 40em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}
h1 {
  font-family: 'Montserrat';
  font-size: 2em;
}

#linkContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.link {
  text-decoration: none;
  font-size: 1em;
  margin: 0 10px;
  font-size: 1.5em;
  color: #165866;
}

@media screen and (max-width: 800px) {
  #app {
    flex-direction: column;
  }
  #header {
    width: 100%;
    height: 10em;
    
  }
  .view {
    width: 100%;
  }
}


</style>
