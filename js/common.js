$(function(){ //jqeryのお約束消さないで！

	
	console.log("外部ファィルからはろー");
	
	// tweet用リンクの作り方
	function twitText() {
		var s, url;
		s = "Javascriptから";
		url = document.location.href;
		
		if (s != "") {
			if (s.length > 140) {
				//文字数制限
			alert("テキストが140字を超えています");
		} else {
			//投稿画面を開く
			url = "http://twitter.com/share?url=" + escape(url) + "&text=" + s;
			window.open(url,"_blank","width=600,height=300");
		}
	}
}
// ここまでtweet

console.log("こんにちは、"+"にんじゃわんこさん");
console.log("1998-7-19");

console.log("SUNABACOKOZA".split("A"));

var user_name ="ninjawanko";
console.log(user_name);

var fruit ="いちご";
console.log(fruit+"を用意します");
console.log(fruit+"の皮を剥きます");
console.log(fruit+"をミキサーに入れます");
console.log(fruit+"ジュースの出来上がり!");
fruit ="オレンジ";
console.log(fruit+"を用意します");
console.log(fruit+"の皮を剥きます");
console.log(fruit+"をミキサーに入れます");
console.log(fruit+"ジュースの出来上がり!");

var region = ["KOZA","EBETSU","TAKAMATSU"]
console.log(region);
console.log(region[0]);

region ={"okinawa":"KOZA","hokkaido":"EBETSU"}
console.log(region["hokkaido"]);

var count = 0 ;

count +=1;
console.log(count); 

count +=1;
console.log(count); 

console.log(1<2);

var count = 0;
var greapes =1;
if (count> 0){
	console.log("オレンジジュースをつくる");
	
}else if(greapes> 0){
	console.log("ブドウジュースを作る");
	
}else{
	console.log("オレンジを買いに行く");
}

var limit = 8;
var getup =10;
if (limit<getup){
	console.log("遅刻です");
}else if(limit == getup){
	console.log("ギリギリセーフ!");
}else{
	console.log("よくがんばりました");
}
// for(初期値;いつまで繰り返すか条件式;増減式){}
var fruits =["りんご","みかん","バナナ","マンゴー"];
for (var i = 0;i<=3;i++){
	console.log(fruits[i]+"ジュースを作る");
}



for (var i=1;i<=100;i++){
	console.log(i);
}

function greet(user){
	console.log(user+"こんにちは");
	
}

var h1_node= document.getElementById("h1_node");
console.log(h1_node);
console.log(h1_node.textContent);

// var btn_node = document.getElementById("btn");
// btn_node.addEventListener("click", changeText);

// function changeText() {
// 	var h1_node = document.getElementById("h1_node")
// 	h1_node.textContent ="今日の感想を書いてね"
// }

var one= 7;
var two=7;
mennseki=(one*two/2);
console.log("三角形の面積は"+mennseki);



//jqery start
$("h1").text("hello,world!")
// $("どこの").なにを("どうする")
$("#btn").on("click",function(){
	$("#h1_node").text("jQueryで文字変更");
	$("body").css("color","red");
	$("img").attr("src",'./img/2.jpg');
	$("a").attr("href","https://twitter.com/home?lang=ja");
	$("header").toggle()
	// $("body").addClass("red");
	// $("body").removeClass("blue");
	$("body").toggleClass("blue");


});


});//jqeryの終了お約束消さないで！