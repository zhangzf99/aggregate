<template>
  <div>
    <el-upload
      class="upload-demo"
      action="http://192.168.50.50:10000/api_adm/create_companysystem/"
      :on-change="handleChange"
      :file-list="fileList"
    >
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
  </div>
</template>


<script>
export default {
  data() {
    return {
      fileList: []
    };
  },
  methods: {
    handleChange(file, fileList) {
      this.fileList = fileList.slice(-3);
    }
  }
};
</script>