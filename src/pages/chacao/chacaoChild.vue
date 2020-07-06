<template>
  <div class="chacaoChild">
    <div>宿州学院</div>
    <slot name='collage'></slot>
    <slot name='class'></slot>
    <slot :username='zhangsan'></slot>
  </div>
</template>

<script>
export default {
  data(){
    return{
      zhangsan:'张三'
    }
  }
}
</script>