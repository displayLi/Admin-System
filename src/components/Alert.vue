<template>
  <div id="Alert" class="container">
    <div class="alert alert-success alert-dismissible" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      {{message}}
    </div>
  </div>
</template>
<script>
export default {
  name: "Alert",
  props: ['message'],
  data() {
    return {

    }
  },
  methods: {

  }
}

</script>
<style scoped>
#Alert {
  margin-top: 60px;
}

</style>
