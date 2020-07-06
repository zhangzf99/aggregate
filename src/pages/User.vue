<template>
	<div>
		<Child01 :a-message="aMessage" @change='parentChange'></Child01>
	</div>
</template>

<script>
import Child01 from '../components/Child01'
export default {
	components:{
		Child01
	},
	data(){
		return{
			aMessage:'父组件给的子组件1113333553'
		}
	},
	methods:{
		parentChange(e){
			alert(e)
		}
	}
}
</script>