<template>
  <div class="regional-linkage">
    <!-- 省市区级联 -->
    <el-cascader size="mini" :options="options" v-model="selectedOptions" @change="addressChange" style="height: 40px" clearable="" :props="props"></el-cascader>
  </div>
</template>

<script>
import { regionData, CodeToText } from "element-china-area-data";
export default {
  data() {
    return {
      props: {
        value: 'label'
      },
      options: regionData,
      selectedOptions: []
    }
  },
  methods: {
    addressChange(arr) {
      console.log(arr);
      console.log(CodeToText[arr[0]], CodeToText[arr[1]], CodeToText[arr[2]]);
    }
  }
}
</script>

<style scoped>
  
</style>