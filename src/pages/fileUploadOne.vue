<template>
  <div class="fileUploadOne">
    <el-upload
      class="upload-demo"
      ref="upload"
      :action="UploadUrl()"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :data="otherData"
      :file-list="fileList"
      :auto-upload="false"
      :limit="1"
      :headers="headers"
      :on-success="onSuccess"
      :on-error="onError"
    >
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
      <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
    </el-upload>
  </div>
</template>

<script>
// import service from '@/utils/request'
// import { getToken } from '@/utils/auth'
export default {
  data() {
    return {
      fileList: [],
      otherData: {
        standard_no: "11111111",
        standard_name: "222222"
      }
    };
  },
  computed: {
    headers() {
      return {
        // Authorization: "Token " + getToken()
      };
    }
  },
  methods: {
    // 成功
    onSuccess() {
      console.log('成功')
    },
    onError() {
      console.log('失败')
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    // 根据新增还是修改决定url
    // UploadUrl: function() {
    //   if(otherData.id) {
    //     // 修改
    //     return (service.defaults.baseURL + 'address')
    //   }else{
    //     // 新增
    //     return (service.defaults.baseURL + 'address')
    //   }
    // }
  }
};
</script>