function slideBox(){
//获取元素
//1. 获取大盒子
const oBigBox = document.querySelector(".box");;
//2. 获取上半部
const oTop = document.querySelector(".box .slide");			
//7. 获取所有的大图
const oBigPic = oTop.getElementsByTagName('li');		
//16.1 声明一个控制轮播图片的下标
let indexCur = 0;
//16.2 声明控制大图轮播的zindex
let zIndex = 1;
//16.3 控制计时器变量
let timer = null;
slide();
autoPlay();
//19.设置轮播
function slide(){
	//1.大图轮播
	oBigPic[indexCur].style.zIndex = ++ zIndex;
}
//20. 自动轮播
function autoPlay(){
	timer = setInterval(function(){
		indexCur ++;
		if(indexCur === oBigPic.length){
			indexCur = 0;
		}
		slide();
	},3000)
}

}	