
//二级菜单
$(function(){
   $('.top .t-c ul li').hover(function(){
     $(this).find('.t-c-er').css('display', 'block');
   }, function(){
     $(this).find('.t-c-er').css('display', 'none');
   });
 });
 
//跳转到详情页
aaa();
function aaa(){
	var oShift = document.getElementById("nova");
	oShift.onclick = function(){
		location.href = "nova.html";
	};
}