<template>
  <div id="app">
    <contents></contents>
  </div>
</template>
<script>
import ContentBody from "./components/ContentBody"
export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    "contents": ContentBody,
  },
}

</script>
<style>
* {
  margin: 0;
  padding: 0;
}

a {
  color: #fff;
  text-decoration: none;
}

a:hover {
  color: #fff;
  text-decoration: none;
}

a:focus {
  color: #fff;
  text-decoration: none;
}

</style>
