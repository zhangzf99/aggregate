<template>
	<div>
		<el-select v-model="value" placeholder="请选择">
			<el-option
				v-for="item in options"
				:key="item.value"
				:label="item.label"
				:value="item.value">
			</el-option>
		</el-select>
		<el-select v-model="value1" placeholder="请选择">
			<el-option
				v-for="item in options1"
				:key="item.value"
				:label="item.label"
				:value="item.value">
			</el-option>
		</el-select>
	</div>
</template>

<script>
export default {
	data(){
		return{
			options: [{
        label:'全部',
        value:'',
      },{
        value: '选项1',
        label: '人',
        child:[{
          value: '选项2',
          label: '男人'
        },{
          value: '选项3',
          label: '女人'
        }]
      }, {
        value: '选项4',
        label: '动物',
        child:[{
          value: '选项5',
          label: '猫'
        },{
          value: '选项6',
          label: '狗'
        }]
      }, {
        value: '选项7',
        label: '水果',
        child:[{
          value: '选项8',
          label: '橘子'
        },{
          value: '选项9',
          label: '城子'
        }]
      }],
			value:'',
			value1:'',
			options1:[],
			options2:[]
		}
	},
	mounted(){
		this.value1 = ''
		this.options1 = []
		this.options.map((item)=>{
			if(item.child){
				// console.log(item.child)
				item.child.map((item1)=>{
					this.options1.push(item1)
				})
			}
		})
		this.options1.unshift({label:'全部',value:'',})
	},
	watch:{
		value(now,old){
			// console.log(typeof(now))
			// console.log('now:',now,'old:',old)
			// this.options1 = []
			switch(now){
				case '':
					this.options1 = [],
					this.value1 = ''
					// console.log(this.options)
					this.options.map((item)=>{
						if(item.child){
							item.child.map((item1)=>{
								this.options1.push(item1)
							})
						}
					})
					this.options1.unshift({label:'全部',value:''})
					break;
				case '选项1':
					this.options1 = [],
					this.value1 = '',
					// console.log(this.options)
					this.options.map((item)=>{
						if(item.value === '选项1'){
							// console.log(item)
							item.child.map((item1)=>{
								console.log(item1)
								this.options1.push(item1)
							})
						}
					})
					this.options1.unshift({label:'全部',value:''})
					break;
				case '选项4':
					this.options1 = [],
					this.value1 = '',
					// console.log(this.options)
					this.options.map((item)=>{
						if(item.value === '选项4'){
							// console.log(item)
							item.child.map((item1)=>{
								console.log(item1)
								this.options1.push(item1)
							})
						}
					})
					this.options1.unshift({label:'全部',value:''})
					break;
				case '选项7':
					this.options1 = [],
					this.value1 = '',
					// console.log(this.options)
					this.options.map((item)=>{
						if(item.value === '选项7'){
							// console.log(item)
							item.child.map((item1)=>{
								console.log(item1)
								this.options1.push(item1)
							})
						}
					})
					this.options1.unshift({label:'全部',value:''})
					break;
			}
		}
	}
}
</script>
<style lang="">
	table{
		width: 100%
	}
</style>