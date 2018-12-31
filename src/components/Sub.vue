<template>
	<div>
		我是猪
	<button @click="callDady">打电话</button>
</div>
	
</template>
<script >
	import connect from '../connector.js';
	export default {
		methods:{
			callDady(){
				connect.$emit('phone','woaini');
			}
		}
	}
</script>
<style >
	
</style>