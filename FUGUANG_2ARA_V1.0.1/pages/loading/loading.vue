<template>
	<view id="loading3">
		<view class="demo3"></view>
		<view class="demo3"></view>
		<view class="demo3"></view>
		<view class="demo3"></view>
		<view class="demo3"></view>
		<view class="demo3"></view>
		<view class="demo3"></view>
		<view class="demo3"></view>
		<view class="demo3"></view>
		<view class="demo3"></view>
		<view class="demo3"></view>
		<view class="demo3"></view>

	</view>
</template>

<script>

	export default {
		name: "loading",	
		data() {
			return {
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	 #loading3 {
	     position: relative;
	     width: 116.65px;
	     height: 116.65px;
	 }
	 .demo3 {
	    width: 10px;
	     height: 10px;
	     border-radius: 50%;
	     background: #D0D0D0;
	     position: absolute;
	    animation: demo3 linear 1.2s infinite;
	     -webkit-animation: demo3 linear 1.2s infinite;
	 }
	 .demo3:nth-child(1){
	     left: 108px;
	     top: 87px;
	     animation-delay:0s;
	 }
	 .demo3:nth-child(2){
	     left: 87px;
	     top: 108.2px;
	     animation-delay:0.1s;
	 }
	 .demo3:nth-child(3){
	     left: 58px;
	     top: 116px;
	     animation-delay:0.1s;
	 }
	 .demo3:nth-child(4){
	     left: 29px;
	     top: 108px;
	     animation-delay:0.2s;
	 }
	 .demo3:nth-child(5){
	     left: 7.77px;
	     top: 87px;
	     animation-delay:0.4s;
	 }
	 .demo3:nth-child(6){
	     left: 1.56px;
	     top: 58px;
	     animation-delay:0.5s;
	 }
	 .demo3:nth-child(7){
	     left: 7.77px;
	     top: 29px;
	     animation-delay:0.6s;
	 }
	 .demo3:nth-child(8){
	     left: 29px;
	     top: 7.8px;
	     animation-delay:0.7s;
	 }
	 .demo3:nth-child(9){
	     left: 58px;
	     top: 0px;
	     animation-delay:0.8s;
	 }
	 .demo3:nth-child(10){
	     left: 87px;
	     top: 7.77px;
	     animation-delay:0.9s;
	 }
	 .demo3:nth-child(11){
	     left: 108.23px;
	     top: 29px;
	     animation-delay:1.0s;
	 }
	 .demo3:nth-child(12){
	     left: 116px;
	     top: 58px;
	     animation-delay:1.1s;
	 }
	
	 @keyframes demo3 
	 {
	     0%,40%,100% {transform: scale(1);}
	     20% {
			 transform: scale(2.17);
			 background-color: #666666;
		 }
	 }
	 @-webkit-keyframes demo3 
	 {
	     0%,40%,100% {transform: scale(1);}
	     20% {transform: scale(2.17);
			background-color: #666666;
		 }
	 }
	
	
</style>
