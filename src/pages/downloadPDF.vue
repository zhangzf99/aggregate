<template>
  <div>
    <div class="downloadPDF">
      <el-button type="primary" plain @click="download()">下载pdf</el-button>
    </div>
  </div>
</template>

<script>
import { base64ToFileOrBlob, saveFileToBlob, saveFileToLink } from 'web-downloadfile';
import axios from '../http/axios'
let url = 'http://192.168.50.50:10000'
export default {
  data() {
    return {
      newUrl: '',
      showIframe: false,
      input: ''
    }
  },
  methods: {
    download() {
      axios.get('/adm_qb/download/qb/1/').then(({data}) => {
        console.log(data)
        let word_url = data.match(/media(\S*)/)[0]
        // console.log(word_url)
        let newHttp = url + '/' + word_url
        // console.log('=============', newHttp)
        this.newUrl = newHttp
        this.downloadFile(newHttp)
        // this.showIframe = true
      }).catch((err) => {
        alert(111)
      })
    },
    // 下载文件
    downloadFile(fileUrl) {
      // window.open(fileUrl, false)
      var a = document.createElement('a')
      a.setAttribute('href', fileUrl)
      a.setAttribute('target', '_blank')
      a.setAttribute('id', 'camnpr')
      document.body.appendChild(a)
      a.click()
    },
  }
};
</script>