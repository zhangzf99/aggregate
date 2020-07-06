<template>
  <div class="table-changes-column-color">
    <!-- 表格的有关于状态的那一列根据不同的状态使用不同的颜色 -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column label="状态" width="200">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.textColor == 1 ? 'success' : scope.row.textColor == 2?'danger': scope.row.textColor == 3?'info':'warning'"
          >{{scope.row.statusText}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          textColor: 1,
          statusText: '启用'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          textColor: 2,
          statusText: '报废'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          textColor: 3,
          statusText: '停用'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          textColor: 4,
          statusText: '未归还'
        }]
      }
    }
  }
</script>