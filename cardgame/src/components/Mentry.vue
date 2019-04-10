<template>
    <div id="manualentry">
        <h3>{{ title }}</h3>
        <ul>
          <li v-for="l in this.list">
          {{l}}
          </li>
        </ul>
    </div>
  
</template>

<script>
export default {
  name: 'Mentry',
  props: ["title", "list"],
  
}
</script>
<!-- styling for the component -->
<style>
#manualentry {
  font-family: 'Quicksand', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
    list-style: none;

}
#textWrapper {
  padding: 0 5em;
}
p {
  
  text-align: justify;
}
</style>