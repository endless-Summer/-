//获取container对象
var container = document.getElementById("container");
//定义26个字母的数组
var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U',
	'V', 'W', 'X', 'Y', 'Z'
];
//定义flag,用来接收定时器返回的值
var creatFlag = null;
var downFlag = null;
var score = 0;
//定义开始游戏按钮
function startGame(){
	//随机生成字母
	createLetter();
	//字母下落
	downLetter();
	//监听键盘,开始游戏
	window.onkeydown = keydown;
}

//定义随机生成字母函数
function createLetter() {
	//定时器
	creatFlag = setInterval(function() {
		//随机生成数字
		var num = parseInt(Math.random() * 25);
		//随机生成一个数,用来作为元素的左边偏移位置
		var left = Math.round(Math.random() * 1000);
		//console.log(num);
		//创建input元素
		var inp = document.createElement("input");
		//设置input属性
		inp.value = letters[num];
		inp.style.top = "0px";
		inp.style.left = left + "px";
		inp.style.background = "url(img/" + letters[num] + ".png)";
		//把input元素添加到container
		container.appendChild(inp);
	}, 1000);
}

//定义字母下落
function downLetter() {
	//定时器,一定时间字母下落(top值+1)
	downFlag = setInterval(function() {
	

		var inps = document.getElementsByTagName("input");
		//获取当前input元素的top值
		for (var i = 0; i<inps.length; i++) {
			var inp = inps[i];
			var top = inp.style.top;
			top = parseInt(top);
			if (top < 580) {
				top += 1;
				inp.style.top = top + "px";
				
				
			} else {
				//游戏结束
				pauseGame();
				//计分清楚为0
				document.getElementById("score").innerHTML = 0;
				//内容清空
				document.getElementById("container").innerHTML="Game over"
			}
		}
	}, 30);
}

//定义暂停游戏
function pauseGame() {
	//清除生成字母
	clearInterval(creatFlag);
	//清除字母下落
	clearInterval(downFlag);
	//清除键盘监听事件
	window.onkeydown = null;
	clearInterval(container);
}
//定义键盘按下的函数
function keydown(){
	//获取所有input元素
	var inps = document.getElementsByTagName("input");
	for (var i = 0; i<inps.length; i++){
		var inp = inps[i];
		if (letters[event.keyCode-65]==inp.value){
			inp.parentNode.removeChild(inp);
			//分数加1
			score += 1;
			//显示在计分板上
			document.getElementById("score").innerHTML =score;
		}
	}
}
