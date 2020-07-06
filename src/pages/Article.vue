<template>
	<div>
		<input @[eventName] = 'event' />
		<button @click="eventName = 'change'">change</button>
	</div>
</template>

<script>
export default {
	data(){
		return{
			eventName:''
		}
	},
	methods:{
		event(){
			console.log('触发'+this.eventName+'事件');
		}
	}
}
</script>