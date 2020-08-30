<template>
	<view class="content" :class="[dark ? 'content-dark' : '']">
		<image class="idimg" src="../../static/xxhdpi/idimg.png"></image>
		<view class="connecting">
			<view class="jin-du">
				<view class="num" :class="[dark ? 'num-dark' : '']">12</view>
				<view class="bai-fen" :class="[dark ? 'bai-fen-dark' : '']">%</view>
			</view>
			<view class="bang-ding-ing" :class="[dark ? 'bang-ding-ing-dark' : '']">{{lan['Lan16']}}</view>
		</view>
		<view class="fail-tip">
			<image class="icon-error" src="../../static/xxhdpi/ic_tips_filled.png"></image>
			<view class="lian-jie-shi-bai" :class="[dark ? 'lian-jie-shi-bai-dark' : '']">{{lan['Lan17']}}</view>
			<view class="tip-title" :class="[dark ? 'tip-title-dark' : '']">{{lan['Lan18']}}</view>
			<view class="tip-content" :class="[dark ? 'tip-content-dark' : '']">{{lan['Lan19']}}</view>
			<view class="tip-content" :class="[dark ? 'tip-content-dark' : '']">{{lan['Lan20']}}</view>
			<view class="tip-content" :class="[dark ? 'tip-content-dark' : '']">{{lan['Lan21']}}</view>
			<view class="tip-content" :class="[dark ? 'tip-content-dark' : '']">{{lan['Lan22']}}</view>
			<view class="footer" :class="[dark ? 'footer-dark' : '']">{{lan['Lan23']}}</view>
			
		</view>
		
	</view>
</template>

<script>
	import lan_data from "../../static/language/language.js";
	export default {
		data() {
			return {
				lan:navigator.language=='zh-CN' ? lan_data.cn : lan_data.en,
				dark:1
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.content{
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #F7F7F7;
		height: 100vh;
	}
	.content-dark{
		background-color: #000000;
	}
	.connecting{
		margin-top: 83.33rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.connecting .jin-du{
		height: 105.21rpx;
		width: 500rpx;
		display: flex;
		justify-content: center;
	}
	.num{
		height: 105.21rpx;
		width: 89.58rpx;
		font-size: 79.17rpx;
		color: #191919;
		line-height: 105.21rpx;
		
	}
	.num-dark{
		opacity: 0.86;
		color: #FFFFFF;
	}
	.bai-fen{
		width: 30.73rpx;
		height: 55.73rpx;
		color: #191919;
		margin-top: 45.31rpx;
		margin-left: 4.17rpx;
		
	}
	.bai-fen-dark{
		opacity: 0.86;
		color: #FFFFFF;
	}
	.connecting .bang-ding-ing{
		height: 40.63rpx;
		width: 683.33rpx;
		font-size: 29.17rpx;
		text-align: center;
		margin-top: 16.15rpx;
	}
	.bang-ding-ing-dark{
		color: #FFFFFF;
	}
	.fail-tip{	
		margin-top: 83.33rpx;
		display: none;
		flex-direction: column;
		align-items: center;
	}
	.idimg{
		height: 525rpx;
		width:  525rpx;
	}
	.icon-error{
		height: 96rpx;
		width: 96rpx;
	}
	.lian-jie-shi-bai{
		margin-top: 20.83rpx;
		height: 55.73rpx;
		width: 683.33rpx;
		line-height: 55.73rpx;
		text-align: center;
		font-size: 41.67rpx;
	}
	.lian-jie-shi-bai-dark{
		color: #FFFFFF;
	}
	.tip-title{
		height: 44.80rpx;
		width: 683.33rpx;
		text-align: left;
		font-size: 33.33rpx;
		margin-top: 50rpx;
		margin-left: 50rpx;
		margin-bottom: 8.85rpx;
	}
	.tip-title-dark{
		color: #FFFFFF;
	}
	.tip-content{
		height: 44.80rpx;
		width: 683.33rpx;
		text-align: left;
		font-size: 33.33rpx;
		margin-top: 8.33rpx;
		margin-left: 50rpx;
	}
	.tip-content-dark{
		color: #FFFFFF;
	}
	.footer{
		margin-top: 213.02rpx;
		height: 75rpx;
		width: 375rpx;
		border-radius: 37.5rpx;
		background: rgba(0,0,0,0.05);
		line-height: 75rpx;
		text-align: center;
		color: #007DFF;
		font-size: 33.33rpx;
	}
	.footer-dark{
		background: rgba(255,255,255,0.10);
	}
</style>
