var myColors = ['#000000','#FFFFFF'];

var maxColors = 2;

var w = 20; // width of rect in pattern
var h = 20; // height of rect in pattern

var r = 7;

var warp = [];
var weft = [];

var warpCount = 24; //initial number of blocks
var weftCount = 60; // initial number of blocks


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");




/*var backgroundColor = 'white';*/


window.addEventListener("load", startup, false);

function startup() {



  //console.log("starting up");

  makeGrid();
  makePattern();
}





function makeGrid() {
  warp = [];
  weft = [];

  /*console.log("make grid", warpCount, " x ", weftCount);*/

  //dynamical count of warp und weft
  for (i = 0; i < warpCount; i++) {
    warp.push(0);
  }

  for (i = 0; i < weftCount; i++) {
    weft.push(0);
  }

  c.width = (warp.length + 3) * w;
  c.height = (weft.length + 3) * h;

}

function makePattern() {
  ctx.clearRect(0, 0, c.width, c.height);
  warp2();
  weft2();
  pattern();
  document.getElementById("check").style.background = "#ffffff";

}




function saveImage() {

  var canvas = document.getElementById("myCanvas");

  if (window.navigator.msSaveBlob) {
    window.navigator.msSaveBlob(myCanvas.msToBlob(), "canvas-image.png");
  } else {

    var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    var link = document.createElement('a');
    link.download = "pattern.png";
    link.href = image;
    link.click();
  }
}


function warp2() {

  for (var i = 0; i < warp.length; i++) {
    warp[i] = myColors[Math.floor(Math.random() * maxColors)];
  }
}



function weft2() {
  for (var i = 0; i < weft.length; i++) {
    weft[i] = myColors[Math.floor(Math.random() * maxColors)];

  }
}





function pattern() {

  for (y = 0; y < weft.length; y +=2) {

    var yPos = y * h + h * 3;



    /*console.log("yPos1", yPos);*/

    for (x = 0; x < warp.length; x +=2) {


      /* circle*/
      ctx.strokeStyle = '#000000';
      ctx.fillStyle = warp[x];
      ctx.lineWidth = "1";
      ctx.beginPath();
      ctx.arc((x + 2) * w, yPos, r, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fill();

      ctx.strokeStyle = '#000000';
      ctx.fillStyle = weft[y];
      ctx.lineWidth = "1";
      ctx.beginPath();
      ctx.arc((x + 3) * w, yPos, r, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fill();


      /* rect
      ctx.fillStyle = myColors[Math.floor(Math.random() * maxColors)];
      ctx.lineWidth = "1";

      ctx.fillRect((x + 3) * w, yPos, w, h);
      ctx.strokeStyle = "#6C6C6C";
      ctx.strokeRect((x + 3) * w, yPos, w, h);*/


    }
  }

  for (y = 1; y < weft.length; y += 2) {

  var yPos = y * h + h * 3;

  console.log("yPos2", yPos);

  for (x = 0; x < warp.length; x += 2) {

    /* circle*/
    ctx.strokeStyle = '#000000';
    ctx.fillStyle = weft[y];
    ctx.lineWidth = "1";
    ctx.beginPath();
    ctx.arc((x + 2) * w, yPos, r, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    ctx.strokeStyle = '#000000';
    ctx.fillStyle = warp[x + 1];
    ctx.lineWidth = "1";
    ctx.beginPath();
    ctx.arc((x + 3) * w, yPos, r, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
  }
}

}
