<template lang="pug">
  main.theme-container
    Header
    Content
    div.bg-red 5555
</template>

<script>
import Header from '../components/Header.vue'
export default {
  name: 'Layout',
  components: {
    Header,
  },
}
</script>

<style lang="stylus" src="../styles/index.styl" />
