function htmlToPic(content){
	var copyDom = $("#"+content);
	var width = copyDom.offsetWidth;
	var height = copyDom.offsetHeight;
	//创建一个新的canvas  
    var canvas2 = document.createElement("canvas");  
    let _canvas = document.querySelector("#"+content);  
    var w = parseInt(window.getComputedStyle(_canvas).width);  
    var h = parseInt(window.getComputedStyle(_canvas).height);  
    //将canvas画布放大若干倍，然后盛放在较小的容器内，就显得不模糊了  
    canvas2.width = w * 2;  
    canvas2.height = h * 2;  
    canvas2.style.width = w + "px";
    canvas2.style.height = h + "px";  
    //可以按照自己的需求，对context的参数修改,translate指的是偏移量  
  
    var context = canvas2.getContext("2d");  
    context.scale(2, 2); 
    var rect = copyDom.get(0).getBoundingClientRect();//获取元素相对于视察的偏移量
    context.translate(-rect.left,-rect.top);//设置context位置，值为相对于视窗的偏移量负值，让图片复位
	
	
	html2canvas(copyDom.get(0), {
    	dpi: window.devicePixelRatio*2,
        scale:2,
        width:width,
        heigth:height,
		canvas: canvas2
    }).then(function(canvas){
    	var image = convertCanvasToImage(canvas);
        $("#"+content).html(image);
	})

}

function convertCanvasToImage(canvas) {
    var image = new Image();
    image.src = canvas.toDataURL("image/png");
    $(image).width("100%");
    $(image).height("auto");
    return image;
}