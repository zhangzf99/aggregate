<template>
  <div>
    <div>{{aMessage}}</div>
    <button @click="changeMeaasge">点击我</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      aaa:'我是子组件给的父组件'
    }
  },
  created() {
    console.log(this.aMessage)
  },
  props:['aMessage'],
  methods:{
    changeMeaasge(){
      this.$emit('change',this.aaa)
    }
  }
}
</script>