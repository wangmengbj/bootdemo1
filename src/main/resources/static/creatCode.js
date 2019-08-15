function creatCode(code,canvas,width,height,text){
	$("#"+code).qrcode({ 
	    render: canvas, //canvas方式 
	    width: width, //宽度 
	    height:height, //高度 
	    text: text //任意内容 
	});
}
