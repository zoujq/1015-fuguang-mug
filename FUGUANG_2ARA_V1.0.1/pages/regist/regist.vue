<template>
	<view class="content">
		<image class="idimg" src="../../static/xxhdpi/idimg.png"></image>
		<view class="connecting">
			<view class="jin-du">
				<view class="num">12</view>
				<view class="bai-fen">%</view>
			</view>
			<view class="bang-ding-ing">设备绑定中...</view>
		</view>
		<view class="fail-tip">
			<image class="icon-error" src="../../static/xxhdpi/ic_tips_filled.png"></image>
			<view class="lian-jie-shi-bai">连接失败</view>
			<view class="tip-title">连接过程中，请确保：</view>
			<view class="tip-content">1.手机蓝牙是否打开</view>
			<view class="tip-content">2.设备与手机的距离小于5米</view>
			<view class="tip-content">3.手机网络畅通</view>
			<view class="tip-content">4.当前设备没有被其他账户注册</view>
			<view class="footer">重新注册</view>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
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
	.connecting .jin-du .num{
		height: 105.21rpx;
		width: 89.58rpx;
		font-size: 79.17rpx;
		color: #191919;
		line-height: 105.21rpx;
		
	}
	.connecting .jin-du .bai-fen{
		width: 30.73rpx;
		height: 55.73rpx;
		color: #191919;
		margin-top: 45.31rpx;
		margin-left: 4.17rpx;
		
	}
	.connecting .bang-ding-ing{
		height: 40.63rpx;
		width: 683.33rpx;
		font-size: 29.17rpx;
		text-align: center;
		margin-top: 16.15rpx;
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
	.tip-title{
		height: 44.80rpx;
		width: 683.33rpx;
		text-align: left;
		font-size: 33.33rpx;
		margin-top: 50rpx;
		margin-left: 50rpx;
		margin-bottom: 8.85rpx;
	}
	.tip-content{
		height: 44.80rpx;
		width: 683.33rpx;
		text-align: left;
		font-size: 33.33rpx;
		margin-top: 8.33rpx;
		margin-left: 50rpx;
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
</style>
