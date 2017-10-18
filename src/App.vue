<template>
  <router-view/>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  body{
    margin: 0;padding: 0;
  }
  *{box-sizing: border-box;}
  @media screen and (max-width: 424px) {
    .content {
      width: 88%;
      margin: 30px auto 0;
      position: relative;
      left: 0;
      top: 0;
    }
    .header form input[type="text"] {
      width: 86%;
    }
    .header form button {
      width: 14%;
    }
  }

</style>
