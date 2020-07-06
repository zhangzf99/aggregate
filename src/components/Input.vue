<template>
  <div class="select">
    <div class="inner" v-clickOut="test">
      <div class="classWrapper" @click="showOptions = !showOptions">
        <input type="text" placeholder="请选择菜品" readonly :value="selected">
        <i class="el-icon-arrow-down"></i>
      </div>
      <ul class="options" v-show="showOptions">
        <li v-for="item in options" :key="item.id" @click="choose(item.value)">{{item.value}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      options:[{
        value:'西红柿鸡蛋',
        id:1
      },{
        value:'糖醋排骨',
        id:2
      },{
        value:'鸡公煲',
        id:3
      },{
        value:'红烧鱼',
        id:4
      },{
        value:'青椒鸡蛋',
        id:5
      }],
      showOptions:false,
      selected:''
    }
  },
  methods:{
    choose(value){
      // console.log(value)
      this.showOptions = false;
      if(value != this.selected){
        this.selected = value
      }
    },
    // test函数，作为参数传递给了指令
    test(){
      // console.log('test')
      this.showOptions = false
    }
  },
  // 自定义指令
  // vue自定义指令是用来操作dom的，所以所有的vue指令都会挂载在template里的某个元素上
  // 4个钩子函数
  // bind:它在指令第一次绑定到元素上调用,且只调用一次
  // inserted:在元素插入到父元素上的时候调用
  // update:vnode更新时调用
  // 在指令和元素解绑时调用
  directives:{
    // 自定义v-clickout指令
    clickOut:{
      bind:function(el,binding){
        // console.log('el',el)
        // console.log('binding.name',binding.name)
        // console.log('binding.expression',binding.expression)
        // console.log('binding.value',binding.value)
        function handler(e){
          if(el.contains(e.target)) return false
          if(binding.expression){
            binding.value()
          }
        }
        el.handler = handler
        document.addEventListener('click',el.handler)
      },
      unbind:function(el){
        document.removeEventListener('click',el.handler)
      }
    }
  }
}
</script>

<style scoped>
  .classWrapper{
    position: relative;
  }
  input{
    padding: .5em;
    /* border-radius: 3px; */
    box-shadow: none;
    border: 1px solid #ccc;
    border-radius: 3px;
    cursor: pointer;
  }
  i{
    position: absolute;
    left: 160px;
    top: 10px;
    width: 7px;
    height: 7px;
    cursor: pointer;
  }
  ul{
    border: 1px solid #ccc;
    padding: .5em;
    width: 162px;
    margin-top: 5px;
    border-radius: 3px
  }
  li{
    line-height: 30px;
    cursor: pointer;
  }
</style>