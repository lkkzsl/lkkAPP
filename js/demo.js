// var aa="123"
// // 当整个页面加载完成时才能对元素进行操作;
// // 或许元素：document.getElementsByClassName("")[0];
// // 添加时间函数
// // 进行样式操作
// window.online=function(){

// }
// // 关于城市的信息
var aa="123";
console.log(aa);
let button=document.getElementsByClassName("button");
console.log(button);

window.onload=function(){
	// 当点击按钮时出现弹框
	button[0].onclick=function(){
		// alert("这是一个按钮");
		var city=document.getElementsByClassName("city");
		console.log(city);
		city[0].style.display="none";
	}

	var pos= document.getElementsByClassName("pos");
	pos[0].onclick= function(){
		var city=document.getElementsByClassName("city");
		console.log(city);
		city[0].style.display="block";
	}
}
$.ajax({
	url:"https://www.toutiao.com/stream/widget/local_weather/city/",
	dataType:"jsonp",
	method:"get",
	success:function(obj){
		var city=obj.data;
		console.log(city);
	}
})

$.ajax({
	url:"https://www.toutiao.com/stream/widget/local_weather/data/?city=太原",
	dataType:"jsonp",
	method:"get",
	success:function(obj){
	    var tianqi=obj.data;
		// var weather=obj.data;
		// console.log(weather);
		console.log(tianqi);
		console.log(tianqi.weather.currunt_temperature);
		// console.log(tianqi.weather.tomorrow_low_temperature);
	}
})
