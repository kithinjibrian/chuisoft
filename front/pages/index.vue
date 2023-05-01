<template>
  <div class="dark:text-white font-serif bg-black">
    <main-header
    @track="track()"/>
    <what-we-do/>
    <clients/>
    <hire-us
    @post="post($event)"
    :errors='errors'/>
    <main-footer/>
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  head(){
    return {
      title:"home",
      meta:[
        {
          hid:"description",
          name:"description",
          content:"The best web design agency in Kenya. To Build, solve and deploy the best software in the world. This page contains our contact details and how to reach us."
        }
      ]
    }
  },
  data:()=>({
    errors:[]
  }),
  methods:{
    async post(data) {
      try {
        await this.$store.dispatch("client/post",data)
        this.track()
        this.$router.push('/thank')
      } catch(e) {
        if(Array.isArray(e.message)) {
          this.errors = e.message;
        } else {
          this.errors = ["Server Error!"]
        }
        
      }
    },
    track() {
      this.$fb.track("Contact")
    }
  }
}
</script>

<style lang="postcss">
</style>
