<template>
	
	<view class="content" :class="[dark ? 'content-dark' : '']">
		<view class="popup-lalay" :class="[pop_show]">
			<view class="dialog-connect-fail"  >
				<view class="d-title">{{lan['Lan01']}}</view>
				<view class="d-content">
					{{lan['Lan02']}}<br/>
					{{lan['Lan03']}}<br/>
					{{lan['Lan04']}}
				</view>
				<view class="d-footer-container">
					<view class="chongshi" @click="shao_hou_retry">{{lan['Lan05']}}</view>
					<view class="like" @click="like_chong_lian">{{lan['Lan06']}}</view>
				</view>
			</view>
		</view>
		<view class="error-notice">
			<image class="error-notice-img"></image>
			<view class="notic-text">{{lan['Lan07']}}</view>
		</view>
		<image @click="click_s" class="idimg" ></image>
		<image class="logo"  @click="testx"></image>
		
		<view class="cup-state" :class="[dark ? 'cup-state-dark' : '']">
			<view class="connect-state" :class="[dark ? 'connect-state-dark' : '']">
				{{lan['Lan08']}}
			</view>
			<view class="temp-state">
				<view class="temp-num">
					<view class="temp-num-v" :class="[dark ? 'temp-num-v-dark' : '']">38</view>
					<view class="temp-num-c" :class="[dark ? 'temp-num-c-dark' : '']">℃</view>
				</view>
				<view class="temp-shuiwen" :class="[dark ? 'temp-shuiwen-dark' : '']">{{lan['Lan09']}}</view>
				
			</view>
			<view class="state-con">
				<view class="loading-state"><loading></loading></view>
				<view class="battery-state">
					<view class="battery-container">
						<view class="battery-show"></view>
					</view>
					
					<image class="charging"></image>
					<view class="battrey_v">85%</view>
				</view>
			</view>
			
		</view>
		<view class="cup-set" :class="[dark ? 'cup-set-dark' : '']" >
			<view class="cup-set-title" :class="[dark ? 'cup-set-title-dark' : '']">{{lan['Lan10']}}</view>
			<view class="cup-set-container">
				<view class="cup-set-item">
					<view class="set-icon" :class="[dark ? 'set-icon-dark' : '']">
						<image class="set-icon-ic_water" :class="[dark ? 'set-icon-ic_water-dark' : '']"></image>
					</view>
					<view class="item-name" :class="[dark ? 'item-name-dark' : '']" >{{lan['Lan11']}}</view>
				</view>
				<view class="cup-set-item">
					<view class="set-icon" :class="[dark ? 'set-icon-dark' : '']">
						<image class="set-icon-ic_milk" :class="[dark ? 'set-icon-ic_milk-dark' : '']"></image>
					</view>
					<view class="item-name" :class="[dark ? 'item-name-dark' : '']">{{lan['Lan12']}}</view>
				</view>
				<view class="cup-set-item">
					<view class="set-icon" :class="[dark ? 'set-icon-dark' : '']">
						<image class="set-icon-ic_blacktea" :class="[dark ? 'set-icon-ic_blacktea-dark' : '']"></image>
					</view>
					<view class="item-name" :class="[dark ? 'item-name-dark' : '']">{{lan['Lan13']}}</view>
				</view>
				<view class="cup-set-item">
					<view class="set-icon" :class="[dark ? 'set-icon-dark' : '']">
						<image class="set-icon-ic_greentea" :class="[dark ? 'set-icon-ic_greentea-dark' : '']"></image>
					</view>
					<view class="item-name" :class="[dark ? 'item-name-dark' : '']">{{lan['Lan14']}}</view>
				</view>
				<view class="cup-set-item">
					<view class="set-icon" :class="[dark ? 'set-icon-dark' : '']">
						<image class="set-icon-ic_coffee" :class="[dark ? 'set-icon-ic_coffee-dark' : '']"></image>
					</view>
					<view class="item-name" :class="[dark ? 'item-name-dark' : '']">{{lan['Lan15']}}</view>
				</view>
			</view>
		</view>
		<view @click="t1">tesdt</view>
	</view>
</template>

<script>
	import loading from "../loading/loading";
	import lan_data from "../../static/language/language.js";
	
	
	var init_ed=0;
	var intervalID=0;
	var main_count=0;
	function init_index()
	{
		if(init_ed==0)
		{
			init_ed=1;
			intervalID= setInterval(index_loop, 10000, '');
		}	
	}
	function de_init_index()
	{
		clearInterval(intervalID);
		init_ed=0;
	}
	function index_loop()
	{
		console.log('index'+main_count++);
	}

	export default {
		 globalData: {  
		    parse_data: '' 
		},  
		components: {
			loading
		},
		data() {
			return {
				pop_show: '',
				// lan:navigator.language=='zh-CN' ? lan_data.cn : lan_data.en
				lan:lan_data.cn,
				dark:1
				
			}
		},
		onLoad() {
			
		},
		onHide(){
			de_init_index();
		},
		onShow(){
			init_index();
		},
		methods: {
			click_s(e){
				this.pop_show='popup-lalay-show'
			},
			shao_hou_retry(e){
				this.pop_show='';
			},
			like_chong_lian(e){
				this.pop_show='';
			},
			testx(e){
				console.log('123')
			},
			t1(){
				uni.redirectTo({
				    url: "../connect/connect"
				});
	
			}
			
			
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #F7F7F7;
		height: 100vh;
	}
	.content-dark{
		background: #000000;
	}
	.popup-lalay{
		position: absolute;
		height: 100vh;
		width: 100vw;
		z-index: 2;
		display: none;
		background-color: rgba(0,0,0,0.01);
		justify-content: center;
		
		
	}
	.popup-lalay-show{
		display: flex;
		background-color: rgba(0,0,0,0.2);		
		
	}

	.dialog-connect-fail{
		height: 392.71rpx;
		width: 683.33rpx;
		background-color: #FFFFFF;
		bottom: 33.33rpx;
		position: fixed;
		border-radius: 33.33rpx;
		display: flex;
		align-items: center;
		flex-direction: column;
		transition: all 3s;
	}
	.dialog-connect-fail .d-title{
		height: 116.67rpx;
		width: 583.33rpx;
		font-size: 41.67rpx;
		line-height: 116.67rpx;
	}
	.dialog-connect-fail .d-content{
		height: 142.71rpx;
		width: 583.33rpx;
		font-size: 33.33rpx;
	}
	.dialog-connect-fail .d-footer-container{
		height: 50rpx;
		width: 583.33rpx;
		display: flex;
		justify-content: center;
		flex-direction: row;
		font-size: 33.33rpx;
		color: #007DFF;
		margin-top: 52.60rpx;
	}
	.d-footer-container .chongshi{
		height: 50rpx;
		width: 291.14rpx;
		border-right: 0.52rpx solid rgba(0,0,0,0.20);
		text-align: center;
	}
	.d-footer-container .like{
		height: 50rpx;
		width: 291.14rpx;
		border-left: 0.52rpx solid rgba(0,0,0,0.20);
		text-align: center;
		/* background-color: #007AFF; */
	}
	.error-notice{
		width: 750rpx;
		height: 100rpx;
		background-color:rgba(251,42,45,0.05);
		display: flex;
		align-items: center;
	}
	.error-notice-img{
		height: 45.83rpx;
		width: 45.83rpx;
		margin-left: 52.08rpx;
		background-image: url(../../static/error_notice.png);
		background-size: cover;
	}
	.error-notice .notic-text{
		font-size: 33.33rpx;
		margin-left: 35.42rpx;
		color: #FB2A2D;
	}
	.idimg{
		height: 525rpx;
		width:  525rpx;
		background-image: url(../../static/xxhdpi/idimg.png) ;
		background-size:cover;
	}

	.logo {
		height: 37.5rpx;
		width: 145.83rpx;
		background-image:url(../../static/xxhdpi/logo.png);
		background-size:cover;
	}
	.cup-state{
		width: 683.33rpx;
		height: 183.33rpx;
		background-color: #FFFFFF;
		margin-top:20.83rpx ;
		box-shadow: 0 6.25rpx 12.5rpx 0 rgba(0,0,0,0.03);
		border-radius: 16.67rpx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.cup-state-dark{
		background-color: #262626;
	}
	.connect-state{
		height: 50rpx;
		width: 112.5rpx;
		/* background-color: #999999; */
		opacity: 0.9;
		font-size: 37.5rpx;
		color: #0000000;
		line-height: 50rpx;
	}
	.connect-state-dark{
		opacity: 0.86;
		color: #FFFFFF;
	}
	.temp-state{
		height: 102rpx;
		width: 163.54rpx;
		/* background-color: #999999; */
		margin-left: 97.4rpx;
		margin-right: 79.17rpx;
		display: flex;
		flex-direction: column;
		
	}
	.temp-num{
		height: 66.66rpx;
		width: 163.54rpx;
		/* background-color:#007AFF; */
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	.temp-num-v{
		font-size:50rpx ;
		width: 56.25rpx;
		height:66.66rpx;
		color: #000;
		margin-right:1.05rpx ;
	}
	.temp-num-v-dark{
		opacity: 0.86;
		color: #FFFFFF;
	}
	.temp-num-c{
		font-size: 25rpx;
		opacity: 0.6;
		width: 25rpx;
		height: 33.33rpx;
		line-height: 72.91rpx;
		color: #000;
	}
	.temp-num-c-dark{
		opacity: 0.6;
		color: #FFFFFF;
	}
	.temp-shuiwen{
		font-size: 25rpx;
		height: 38.02rpx;
		width: 163.54rpx;
		text-align: center;
		line-height: 38.2rpx;
		color: #000000;
		opacity: 0.6;
	}
	.temp-shuiwen-dark{
		opacity: 0.6;
		color: #FFFFFF;
	}
	.cup-set {
		display: flex;
		height: 456.25rpx;
		width: 683.33rpx;
		background-color: #FFFFFF;
		margin-top: 16.67rpx;
		border-radius: 16.67rpx;
		flex-direction: column;
		align-items: center;
		
	}
	.cup-set-dark{		
		background: #262626;
	}
	.disabled{
		 pointer-events: none;
		 opacity: 0.6;
	}
	.state-con{
		height: 130.73rpx;
		width: 130.73rpx;
		display: flex;
		justify-content: center;
		align-items:center;
	}
	.loading-state{
		height: 130.73rpx;
		width: 130.73rpx;
		/* background-color: #999999; */
		display: flex;
		justify-content: center;
		align-items:center;

	}
	.battery-state{
		height: 48.96rpx;
		width: 130.73rpx;
		/* background-color: #999999; */
		display: none;
		flex-direction: row;
		justify-content: center;		
		align-items: center;
	}
	.battery{
		height: 22.92rpx;
		width: 44.79rpx;
		
	}
	.battery-container
	{
		height: 22.9rpx;
		width: 44.79rpx;
		background-image: url(../../static/battery.png);
		/* background-color: #F0AD4E; */
		background-size:44.79rpx 22.9rpx ;
		display: flex;
		justify-content: left;
		align-items: center;
		
	}
	.battery-show{
		height: 16rpx;
		width: 20rpx;
		background-color: #1A1A1A;
		border-radius: 2rpx;
		margin-left: 4rpx;
		
	}
	.charging{
		width: 22.91rpx;
		height: 22.91rpx;
		display: none;
		background-image: url(../../static/charging.png);
		background-size: cover;
	}
	.battrey_v{
		margin-left: 9rpx;
		font-size: 37.5rpx;
	}
	.cup-set-title{
		height:48.96rpx ;
		width: 583.34rpx;
		/* background-color: #4CD964; */
		margin-top: 30.73rpx;
		font-size: 37.5rpx;
	}
	.cup-set-title-dark{
		opacity: 0.9;
		color: #FFFFFF;
	}
	.cup-set-container{
		width: 650rpx;
		height: 333.34rpx;
		display: flex;
		flex-direction: row;
		/* background-color:#555555; */
		margin-top: 37.5rpx;
		flex-wrap: wrap;
	}
	.cup-set-item{
		width: 162.5rpx;
		height: 133.84rpx;
		/* background-color: #DD524D; */
		margin-bottom: 32.81rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.set-icon{
		height: 83.34rpx;
		width: 83.34rpx;
		border-radius: 50%;
		/* background-color: #4CD964; */
		border:2.09rpx solid rgba(0,0,0,0.2);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.set-icon-dark{
		border:2.09rpx solid rgba(255,255,255,0.2);
	}
	.set-icon image{
		height: 55rpx;
		width: 55rpx;
		background-size: cover;
	}
	.set-icon-ic_water{
		background-image: url(../../static/xxhdpi/ic_water.png);		
	}
	.set-icon-ic_water_pressed{
		background-image: url(../../static/xxhdpi/ic_water_pressed.png);		
	}
	.set-icon-ic_water-dark{
		background-image: url(../../static/xxhdpi-dark/ic_water.png);		
	}
	.set-icon-ic_water_pressed-dark{
		background-image: url(../../static/xxhdpi-dark/ic_water_pressed.png);		
	}
	.set-icon-ic_milk{
		background-image:url(../../static/xxhdpi/ic_milk.png);		
	}
	.set-icon-ic_milk_pressed{
		background-image:url(../../static/xxhdpi/ic_milk_pressed.png);		
	}
	.set-icon-ic_milk-dark{
		background-image:url(../../static/xxhdpi-dark/ic_milk.png);		
	}
	.set-icon-ic_milk_pressed-dark{
		background-image:url(../../static/xxhdpi-dark/ic_milk_pressed.png);		
	}
	.set-icon-ic_blacktea{
		background-image:url(../../static/xxhdpi/ic_blacktea.png);		
	}
	.set-icon-ic_blacktea_pressed{
		background-image:url(../../static/xxhdpi/ic_blacktea_pressed.png);		
	}
	.set-icon-ic_blacktea-dark{
		background-image:url(../../static/xxhdpi-dark/ic_blacktea.png);		
	}
	.set-icon-ic_blacktea_pressed-dark{
		background-image:url(../../static/xxhdpi-dark/ic_blacktea_pressed.png);		
	}
	.set-icon-ic_greentea{
		background-image:url(../../static/xxhdpi/ic_greentea.png);		
	}
	.set-icon-ic_greentea_pressed{
		background-image:url(../../static/xxhdpi/ic_greentea_pressed.png);		
	}
	.set-icon-ic_greentea-dark{
		background-image:url(../../static/xxhdpi-dark/ic_greentea.png);		
	}
	.set-icon-ic_greentea_pressed-dark{
		background-image:url(../../static/xxhdpi-dark/ic_greentea_pressed.png);		
	}
	.set-icon-ic_coffee{
		background-image:url(../../static/xxhdpi/ic_coffee.png);		
	}
	.set-icon-ic_coffee_pressed{
		background-image:url(../../static/xxhdpi/ic_coffee_pressed.png);		
	}
	.set-icon-ic_coffee-dark{
		background-image:url(../../static/xxhdpi-dark/ic_coffee.png);		
	}
	.set-icon-ic_coffee_pressed-dark{
		background-image:url(../../static/xxhdpi-dark/ic_coffee_pressed.png);		
	}
	.item-name
	{
		height: 32.81rpx;
		width: 145.83rpx;
		color: #1A1A1A;
		font-size: 25rpx;
		text-align: center;
		line-height: 32.81rpx;
		margin-top: 13.1rpx;
	}
	.item-name-dark{
		opacity: 0.86;
		color: #FFFFFF;
	}
	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
