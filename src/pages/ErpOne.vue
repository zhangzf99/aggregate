<template>
  <div class="erpOne">
    <el-transfer
      filterable
      :filter-method="filterMethod"
      filter-placeholder="请输入姓名拼音"
      v-model="value"
      :data="data">
    </el-transfer>
  </div>
</template>

<script>
  export default {
    data() {
      const generateData = _ => {
        const data = [];
        const cities = ['张三', '李四', '王五', '吉艺', '丁丁', '王凯', '李媛'];
        cities.forEach((city, index) => {
          data.push({
            label: city,
            key: index,
          });
        });
        return data;
      };
      return {
        data: generateData(),
        value: [],
        filterMethod(query, item) {
          // console.log(query)
          // console.log(item)
          return item.label.indexOf(query) > -1;
        }
      };
    }
  };
</script>
