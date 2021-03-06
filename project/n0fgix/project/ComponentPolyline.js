var H5ComponentPolyline=function(name,cfg){
var component=new H5ComponentBase(name,cfg);



	
    var w=cfg.width;
	var h=cfg.height;

	
	
	 




//----------创建画布---------
     	
	var cns=document.createElement("canvas");
	var ctx=cns.getContext('2d');
	cns.width=ctx.width=w;
	cns.height=ctx.height=h;
	component.append(cns);
	
	var step=10;
   
	ctx.beginPath();
	ctx.lineWidth=1;
	ctx.strokeStyle="#AAAAAA";
//-------绘制水平网格线----------	
	for(var i=0;i<step+1;i++){
		var y=(h/step)*i;
		
		ctx.moveTo(0,y);
		ctx.lineTo(w,y);
		
		
		
		
		
	 };
//--------垂直网格线绘制------------

    step=cfg.data.length+1;
	var w_per=w/step>>0;
    for(var i=0;i<step+1;i++){
		var x=(w/step)*i;
		ctx.moveTo(x,0);
		ctx.lineTo(x,h);
		var item=cfg.data[i];
		
		if(cfg.data[i]){
		var text=$('<div class="text">');
		text.text(item[0]);
		text.width(w_per/2);
		text.css('left',x/2+w_per/4);
		
		component.append(text);
		};
		
		
		
	};
	 
	  ctx.stroke();	
	
//------------绘制折线数据--------------	
	
    var cns=document.createElement("canvas");
	var ctx=cns.getContext('2d');
	component.append(cns);
	cns.width=ctx.width=w;
	cns.height=ctx.height=h;
	ctx.beginPath();
	ctx.lineWidth=3;
	ctx.strokeStyle="#ff8878";
	
	
	
	
var draw=function(per){
//---------清处画布-----------	
   
 ctx.clearRect(0,0,w,h);	
	
//绘制圆心---------------	
    ctx.beginPath();
	var row_w=(w/(cfg.data.length+1));
	for(i in cfg.data){
		var item =cfg.data[i];
		x=row_w*i+row_w;
		y=h*(1-item[1]*per);
		ctx.moveTo(x,y);
		ctx.arc(x,y,5,0,2*Math.PI);
		
		};
//移动画笔到第一点--------------、
   ctx.moveTo(row_w,h*(1-cfg.data[0][1]*per)); 
//开始连线-------------  	
   	for(i in cfg.data){
		var item =cfg.data[i];
		x=row_w*i+row_w;
		y=h*(1-item[1]*per);
		ctx.lineTo(x,y);
		
		
		};	
   ctx.stroke(); 		
  

   ctx.fillStyle="rgba(255,136,120,0.2)";
   ctx.lineWidth=1; 
//绘制阴影------------------     
   ctx.lineTo(x,h);
   ctx.lineTo(row_w,h);
   
   ctx.fill();
   

   
   
   		
		
//写数据-------------------
  	for(i in cfg.data){
		var item =cfg.data[i];
		x=row_w*i+row_w;
		y=h*(1-item[1]*per);
		
		ctx.fillStyle=item[2]?item[2]: '#595959';
		
		ctx.fillText(((item[1]*100)>>0)+'%',x-5,y-10);
		
	}
		
 		
   
};






component.on('onLoad',function(){
	var s=0;
	for(i=0;i<100;i++){
		setTimeout(function(){
			s+=.01;
			draw(s);
			
			},i*10)
		
		
		
		}
	
	
	});
	
component.on('onLeave',function(){
	var s=1;
	for(i=0;i<100;i++){
		setTimeout(function(){
			s-=.01;
			draw(s);
			
			},i*10)
}
});	

	 return component;
	
	};
















