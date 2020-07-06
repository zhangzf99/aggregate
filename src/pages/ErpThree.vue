<template>
  <div class="block">
    <el-tree
      :data="data"
      show-checkbox
      node-key="id"
      default-expand-all
      :expand-on-click-node="false">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span>
          <el-button
            type="text"
            size="mini"
            @click="() => append(data)" v-if="currentType == node.label">
            +
          </el-button>
          <el-button
            type="text"
            size="mini"
            @click="() => remove(node, data)">
            -
          </el-button>
          <el-button
            type="text"
            size="mini"
            @click="() => remove(node, data)">
            <i class="icon el-icon-edit"></i>
          </el-button>
        </span>
      </span>
    </el-tree>
  </div>
</template>


<script>
  let id = 1000;

  export default {
    data() {
      const data = [{
        id: 2,
        label: '上海俊悦光纤网络科技有限公司',
        children: [{
          id: 5,
          label: '总经办',
          children: [{
            id: 111,
            label: '总经理'
          }, {
            id: 112,
            label: '副总经理'
          }]
        }, {
          id: 6,
          label: '经营部'
        }, {
          id: 7,
          label: '财务部'
        }, {
          id: 8,
          label: '工程部',
          children: [{
            id: 12,
            label: '工程部经理'
          }, {
            id: 13,
            label: '工程部施工队员'
          }]
        }, {
          id: 9,
          label: '人事部',
          children: [{
            id: 12,
            label: '人事部经理'
          }, {
            id: 13,
            label: '人事专员'
          }]
        }, {
          id: 10,
          label: '采购部'
        }, {
          id: 11,
          label: '项目部'
        }]
      }];
      return {
        data: JSON.parse(JSON.stringify(data)),
        data: JSON.parse(JSON.stringify(data)),
        // 当前的类型
        currentType: data[0].label
      }
    },

    methods: {
      append(data) {
        const newChild = { id: id++, label: 'testtest', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },

      renderContent(h, { node, data, store }) {
        return (
          <span class="custom-tree-node">
            <span>{node.label}</span>
            <span>
              <el-button size="mini" type="text" on-click={ () => this.append(data) }>+</el-button>
              <el-button size="mini" type="text" on-click={ () => this.remove(node, data) }>-</el-button>
              <el-button size="mini" type="text" on-click={ () => this.change(node, data)} style={styles1}><i class="el-icon-edit"></i></el-button>
            </span>
          </span>);
      }
    }
  };
</script>

<style scoped>
  .block{
    width: 35%;
  }
  .el-icon-edit{
    color: rgb(247, 123, 123);
  }
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>