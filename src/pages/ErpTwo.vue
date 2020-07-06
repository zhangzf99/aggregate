<template>
  <div class="erpTwo">
    <el-tree
      :data="data"
      show-checkbox
      node-key="id"
      :default-expanded-keys="[2, 3]"
      :default-checked-keys="[5]"
      :props="defaultProps">
    </el-tree>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: [{
          id: 1,
          label: '上海俊悦光纤网络科技有限公司',
          children: [{
            id: 4,
            label: '总经办',
            children: [{
              id: 9,
              label: '总经理'
            }, {
              id: 10,
              label: '副总经理'
            }]
          },{
            id: 5,
            label: '经营部',
            children: [{
              id: 19,
              label: '经理'
            }, {
              id: 110,
              label: '职员'
            }]
          },{
            id: 4,
            label: '财务部',
            children: [{
              id: 29,
              label: '财务部经理'
            }, {
              id: 210,
              label: '员工'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    }
  };
</script>

