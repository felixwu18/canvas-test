window.onload = function () {
  var button = document.getElementById('previewButton');
  button.onclick = previewHandler;
}

// 定义预览效果的函数
function previewHandler() {
  var canvas = document.getElementById('tshirtCanvas');
  // canvas.width = self.innerHeight;
  var context = canvas.getContext('2d');
  fillBackgroundColor(canvas, context);

  var selectObj = document.getElementById('shape');
  // var index=selectObj.selectedIndex;
  // var shape=selectObj[index].value;
  var shape = selectObj.value;
  if (shape == 'squares') {
    for (var squares = 0; squares < 20; squares++) {
      drawSquare(canvas, context);
    }
  } else if (shape == 'circles') {
    for (var circles = 0; circles < 20; circles++) {
      drawCircle(canvas, context);
    }
  }

  drawText(canvas, context);
  drawBird(canvas, context);
  //updateTweets(tweets);
}

// 定义背景填充的函数
function fillBackgroundColor(canvas, context) {
  var selectObj = document.getElementById('backgroundColor');
  // var index=selectObj.selectedIndex;
  // var bgColor=selectObj[index].value;
  var bgColor = selectObj.value;
  context.fillStyle = bgColor;
  context.fillRect(0, 0, 600, 200);
}

// 定义画 方块 的函数
function drawSquare(canvas, context) {
  var w = Math.floor(Math.random() * 40);
  var x = Math.floor(Math.random() * canvas.width);
  var y = Math.floor(Math.random() * canvas.height);
  context.fillStyle = 'lightblue';
  context.fillRect(x, y, w, w);
}

// 定义画 圆 的函数
function drawCircle(canvas, context) {
  var radius = Math.floor(Math.random() * 40); // 半径大小
  var x = Math.floor(Math.random() * canvas.width);
  var y = Math.floor(Math.random() * canvas.height);

  context.beginPath();
  context.arc(x, y, radius, 0, degreeToRadians(360), true);

  context.fillStyle = 'lightblue';
  context.fill();
}

// 角度的度数转 幅度数
function degreeToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

// 定义绘制 文字 的函数
function drawText(canvas, context) {
  var selectObj = document.getElementById('foregroundColor');
  // var index=selectObj.selectedIndex;
  // var fgColor=selectObj[index].value;
  var fgColor = selectObj.value;

  // 左上角的文字
  context.fillStyle = fgColor;
  context.font = 'bold 1em sans-serif';
  context.textAlign = 'left'; // 以 文本左侧 到 画布左边距
  context.fillText('I saw this tweet', 20, 40);

  // 右下角的文字
  context.font = 'bold 1em sans-serif';
  context.textAlign = 'right'; // 以 文本右侧 到 画布左边距
  context.fillText('and all I got was this lousy t-shirt!', 560, 145);
}

// 定义画入 图片 的函数
function drawBird(canvas, context) {
  var twitterBird = new Image();
  twitterBird.src = 'twitterbird.fw.png';
  twitterBird.onload = function () { // 图片加载后，立即调用drawImage()
    context.drawImage(twitterBird, 20, 120, 70, 70); // 传入绘制对象后, 先定位, 再确定大小
  }
}

/*function updateTweets(tweets){
  var tweetsSelection=document.getElementById('tweets');

  for(var i=0;i<tweets.length;i++){
    var tweet=tweets[i];
    var option=document.creatElement('option');
    option.text=tweet.text;
    option.value=tweet.text.replace("\"","'");
    tweetsSelection.options.add(option);
  }
  tweetsSelection.selectedIndex=0;
}
*/
