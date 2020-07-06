<template>
	<div>
		<div v-show="show" v-hotkey="{
			'esc':onClose,
			'ctrl+enter':onshow
		}">
			Press `esc` to close me!
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			show:true
		}
	},
	methods:{
		onClose(){
			this.show = false
		},
		onShow(){
			this.show = true
		}
	}
}
</script>