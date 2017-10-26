<template>
  <div>{{logId}}</div>
</template>

<script>
  export default {
    name: 'weblogDtail',
    computed: {
      logId () {
        if (this.$route && this.$route.params) {
          return this.$route.params.id
        }
        return 'Hanks10100'
      }
    },
    mounted(){
      // setInterval(()=>{
      //   console.log(this.$route.params.id)
      // },1000)
    }
  }
</script>

<style scoped lang="css" src="./StoriesView.css">
</style>
