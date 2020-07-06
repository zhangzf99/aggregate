<template>
  <div class="chacao">
    <chacao-child ref="chacaoChild">
      <template v-slot:collage>
        <div>信息工程学院</div>
      </template>
      <template v-slot:class>
        <div>1班</div>
      </template>
      <template slot-scope="scope">
        <div>
          {{scope.username}}
        </div>
      </template>
    </chacao-child>
  </div>
</template>

<script>
import chacaoChild from './chacaoChild'
export default {
  components:{
    chacaoChild
  },
  data(){
    return {

    }
  }
}
</script>