<template>
  <div class="calenderSelf">
    <div class="custom-tree-container">
      <div class="block">
        <el-tree
          :data="data"
          node-key="id"
          default-expand-all
          :expand-on-click-node="false"
          highlight-current="true"
          :render-content="renderContent"
          @node-contextmenu="rightClick"
          >
        </el-tree>
      </div>
    </div>
    <div class="changeName">
      <el-dialog title="修改角色名" :visible.sync="changeRoleName.visible" width="30%">
        <el-form :model="changeRoleName.form">
          <el-form-item label="角色名称" :label-width="formLabelWidth">
            <el-input v-model="changeRoleName.form.name" autocomplete="off" size="mini"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="closeDialog()" size="mini">取 消</el-button>
          <el-button type="primary" @click="saveRoleName()" size="mini">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
let id = 1000;
export default {
  data(){
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
    const data1 = [{
      id: 2,
      label: '上海俊悦光纤网络科技有限公司',
      children: [{
        id: 5,
        label: '总经办',
      }, {
        id: 6,
        label: '经营部'
      }, {
        id: 7,
        label: '财务部'
      }, {
        id: 8,
        label: '工程部',
      }, {
        id: 9,
        label: '人事部',
      }, {
        id: 10,
        label: '采购部'
      }, {
        id: 11,
        label: '项目部'
      }]
    }];
    return {
      data: JSON.parse(JSON.stringify(data1)),
      data: JSON.parse(JSON.stringify(data1)),
      changeRoleName:{
        visible:false,
        form:{
          name:''
        }
      },
      formLabelWidth: '80px',
      // 修改节点
      currentData:[],
      newChild:{},
    }
  },
  watch:{
    'changeRoleName.form.name'(){
      this.newChild.label = this.changeRoleName.form.name
      // this.currentData.children.push(this.newChild);
      // console.log(this.data)
    }
  },
  methods:{
    append(data) {
      // console.log(data)
      const newChild = { id: id++, label: 'testtest', children: [] };
      if (!data.children) {
        this.$set(data, 'children', []);
      }
      
      this.currentData = data;
      this.newChild = newChild
      data.children.push(newChild);
    },
    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex(d => d.id === data.id);
      children.splice(index, 1);
    },
    // 修改
    change(node,data){
      // console.log(node.data)
      this.changeRoleName.form.name = ''
      this.changeRoleName.visible = true

    },
    // 保存更改的角色名
    saveRoleName(){
      this.closeDialog()
    },
    // 关闭模态框
    closeDialog(){
      this.changeRoleName.visible = false
    },
    rightClick(MouseEvent, object, Node, element) {
      console.log(Node.data);
    },
    renderContent(h, { node, data, store }) {
      console.log(node)
      var styles1 = {  
         fontWeight:700,
         marginLeft:'12px',  
      }  
      var styles2 = {  
         fontWeight:700,
      }  
      return (
        <span class="custom-tree-node">
          <span>{node.label}</span> 
          <span>
            <el-button size="mini" type="text" on-click={ () => this.append(data)} style={styles1}>+</el-button>
            <el-button size="mini" type="text" on-click={ () => this.remove(node, data)} style={styles2}>-</el-button>
            <el-button size="mini" type="text" on-click={ () => this.change(node, data)} style={styles1}><i class="el-icon-edit"></i></el-button>
          </span>
        </span>);
    },
  }
}
</script>


<style scoped>
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
  .el-button--text{
    margin-left: 20px;
  }
</style>