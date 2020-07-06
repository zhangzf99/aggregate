<template>
  <div class="fileUpload">
    <el-upload
      ref="upload"
      class="upload-demo"
      action="xxxx"
      :on-remove="OnchangeAssist"
      :on-change="OnchangeAssist"
      :file-list="assistForm"
      :auto-upload="false"
      :headers='headers'
      multiple
    >
      <el-button size="small" type="primary" slot="trigger">选取文件</el-button>
      <el-button size="small" type="success" style="margin-left: 10px" @click="UploadAssist">开始上传</el-button>
    </el-upload>
  </div>
</template>

<script>
import axios from "../http/axios";
// import service from '@/utils/request'
// import { getToken } from '@/utils/auth'
export default {
  data() {
    return {
      assistForm: []
    };
  },
  computed: {
    headers() {
      return {
        'Authorization': 'Token ' + getToken()
      }
    }
  },
  methods: {
    UploadAssist() {
      // this.$refs.upload.submit();
      const assistForm = new FormData();
      console.log("assistForm", assistForm);
      console.log(this.assistForm);
      if (this.assistForm.length > 0) {
        this.assistForm.forEach(item => {
          // assistForm.append("st_name", item.name)
          // assistForm.append("accessory", item.raw)
          assistForm.st_name = item.name;
          assistForm.accessory = item.raw;
        });
      }
      console.log("assistForm", assistForm);
      var testName = false;
      for (var value of assistForm.getAll("fileName")) {
        console.log("文件名", value);
        if (!/.(pdf|jpeg|jpg|png|zip|txt)$/.test(value)) {
          testName = true;
        }
      }
      axios
        .post("/api_adm/create_companysystem/", assistForm)
        .then(res => {
          // var pathArr = [];
          // res != "" && (pathArr = res.split(";"));
          // !pathArr[pathArr.length - 1] && pathArr.pop();
          // console.log("路径", pathArr);
          // pathArr.forEach(item => {
          //   var name = item.split("/")[item.split("/").length - 1];
          //   var fileName = name.split(".")[0];
          //   var fileSuffix = name.split(".")[1];
          //   const { subsidiarityName, fileRemark } = this.assistForm;
          //   this.assistAddress.push({
          //     subsidiarityName,
          //     fileRemark,
          //     subsidiarityFilePath: item,
          //     fileName,
          //     fileSuffix,
          //     eventId: this.eventId
          //   });
          // });
          // console.log("this.assistAddress", this.assistAddress);
          // this.assistForm.assistList = [];
          // Loading.close();
          console.log(res);
        })
        .catch(() => {

        });
    },
    OnchangeAssist(file, fileList) {
      console.log("===========", file, fileList);
    },
    OnchangeAssist(file) {
      console.log("++++++++++++", file);
      this.assistForm[0] = file;
    }
  }
};
</script>