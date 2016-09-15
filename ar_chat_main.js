var mainLoader = function (){
	/*adding default styles to chat-holder*/
	document.getElementsByTagName("head")[0].innerHTML +='<style>#chat-holder{position:fixed!important;top:10px;right:5px;bottom:0;width:300px;height:470px;min-height:300px;border:1px solid grey;border-radius:6px}#chat-window{width:100%;height:100%}.dragger{height:68px;width:100%;position:absolute}.visibilityHidden{visibility:hidden}.visibilityVisible{visibility:visible}.close-btn{position:absolute;top:5px;right:10px;border:0;background:0 0;cursor: pointer; z-index: 99999}.chat-launch-button{width:36px;min-height:97px;position:fixed;right:0;bottom:100px;cursor:pointer;background-color:#c7d544;border:1px solid #E0E0E0}.chat-launch{display:inline-block}.chat-launch-heading{border-top:1px solid #E0E0E0;padding-top:10px}.chat-launch-icon{max-width:25px;margin:6px 6px 0}.chat-launch-char{width:36px;cursor:pointer;color:#fff;font-size:18px;text-align:center;height:12px;line-height:12px;-ms-transform:rotate(90deg);-webkit-transform:rotate(90deg);transform:rotate(90deg)}#dragger{height: 90px;width: 100%;position: absolute;z-index: 9999;cursor: move;}</style>';
	/*appending markup to the document body*/
	document.getElementsByTagName("body")[0].innerHTML += '<div type="button" id="chat-launch-button" class="btn btn-lg visibilityVisible chat-launch-button" onClick="showElement(\'chat-launch-button\',\'chat-holder\');"><img class="chat-lunch chat-launch-icon" src="images/ic_chat_white_48dp_2x.png" alt=""><div class="chat-launch chat-launch-heading"><div class="chat-launch-char">П</div><div class="chat-launch-char">о</div><div class="chat-launch-char">м</div><div class="chat-launch-char">о</div><div class="chat-launch-char">щ</div><div class="chat-launch-char">ь</div><div class="chat-launch-char"> </div><div class="chat-launch-char">о</div><div class="chat-launch-char">н</div><div class="chat-launch-char">л</div><div class="chat-launch-char">а</div><div class="chat-launch-char">й</div><div class="chat-launch-char">н</div></div></div><div id="chat-holder" class="visibilityHidden"><div id="dragger"></div><button class="close-btn" onClick="hideElement(\'chat-holder\',\'chat-launch-button\');">X</button><object id="chat-window" type="text/html" data="" onload="addCustomStyles();"></object></div>';

	/*Appending css file to customize chat-styles*/
	addCustomStyles();

	/*Setting URL to chat file itself*/
	var chatUrl = "http://10.30.0.8/chat_customer/vicidial_chat_customer_side_areon.php";
	document.getElementById("chat-window").setAttribute("data", chatUrl);

	/*dragger function*/
	(function(elementSelector) {
		var dragStartX, dragStartY; var objInitLeft, objInitTop;
		var inDrag = false;
		var dragTarget = document.querySelector(elementSelector);
		dragTarget.addEventListener("mousedown", function(e) {
			inDrag = true;
			objInitLeft = dragTarget.offsetLeft; objInitTop = dragTarget.offsetTop;
			dragStartX = e.pageX; dragStartY = e.pageY;
		});
		document.addEventListener("mousemove", function(e) {
			if (!inDrag) {return;}
			dragTarget.style.left = (objInitLeft + e.pageX-dragStartX) + "px";
			dragTarget.style.top = (objInitTop + e.pageY-dragStartY) + "px";
		});
		document.addEventListener("mouseup", function(e) {inDrag = false;});
	}("#chat-holder"))
}
document.addEventListener("DOMContentLoaded", mainLoader);

function addCustomStyles(){
	/* Targeting <head> inside object tag */
	var objectHead = document.getElementById('chat-window').contentDocument.head;
	objectHead.innerHTML += '<link rel="stylesheet" type="text/css" href="css/ar_style_for_chat.css" />';
}
function showElement(elemToHide, elemToShow){
	var elemToHide = document.getElementById(elemToHide);
	var elemToShow = document.getElementById(elemToShow);
  elemToShow.className =
		elemToShow.className.replace("visibilityHidden","visibilityVisible");
	elemToHide.className =
		elemToHide.className.replace("visibilityVisible","visibilityHidden");
	}
function hideElement(elemToHide, elemToShow){
	var elemToHide = document.getElementById(elemToHide);
	var elemToShow = document.getElementById(elemToShow);
	elemToShow.className =
		elemToShow.className.replace("visibilityHidden","visibilityVisible");
	elemToHide.className =
		elemToHide.className.replace("visibilityVisible","visibilityHidden");
}
