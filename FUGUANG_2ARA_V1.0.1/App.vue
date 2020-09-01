<script>
	import ble from "./ble/ble.js";  
	
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			ble.init_ble();
			console.log('App Show')
		},
		onHide: function() {
			ble.de_init_ble();
			console.log('App Hide')
		},
		globalData: {
			index_loop_id:-1
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
