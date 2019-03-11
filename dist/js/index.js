/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

//加载css样式
//require("!style-loader!css-loader!../../dist/css/index.css");
//js区域
aaa();
function aaa(){
	console.log('测试函数中的内容');
}

//轮播
slideBox();
//轮播函数
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

//轮播
slideBox2();
//轮播函数
function slideBox2(){
	//获取元素
	//1. 获取大盒子
	const oBigBox = document.querySelector(".box2");;
	//2. 获取上半部
	const oTop = document.querySelector(".box2 .slide2");			
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



/***/ })
/******/ ]);