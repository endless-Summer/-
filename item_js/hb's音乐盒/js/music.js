var li=



li.click(function(){
	change_bg();
}
)

function change_bg(){
	$("body").css({"background":"url(img/"+(index+1)+"bg.jpg)"});
	$("body").css({"background-size":"cover"});
}