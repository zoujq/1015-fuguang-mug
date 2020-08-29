var ble_connect=0;
var intervalID=0;
var init_ed=0;
var count=0;
function init_ble()
{
	if(init_ed==0)
	{
		init_ed=1;
		intervalID= setInterval(ble_loop, 10000, '');
	}	
}
function de_init_ble()
{
	clearInterval(intervalID);
	init_ed=0;
}
function ble_loop()
{
	console.log(count++);
}
export default {  
    init_ble,  
    de_init_ble,
	count
}