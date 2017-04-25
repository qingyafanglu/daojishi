var H5ComponentRadar=function(name,cfg){
var component=new H5ComponentBase(name,cfg);



	
    var w=cfg.width;
	var h=cfg.height;

//----------创建画布---------
     	
	var cns=document.createElement("canvas");
	var ctx=cns.getContext('2d');
	cns.width=ctx.width=w;
	cns.height=ctx.height=h;

	component.append(cns);
	
	
//----------绘制网格背景--------------------

    var step=cfg.data.length;
	var r=h/2;
	var isBlue=false;

	for(var j=10;j>0;j--){
	
	ctx.beginPath();
	for(var i=0;i<step;i++){
		var x=r+Math.cos(i*(360/step)*(Math.PI/180))*r*(j/10);
		var y=r+Math.sin(i*(360/step)*(Math.PI/180))*r*(j/10);
		
		ctx.lineTo(x,y);
		
		
		
		};
	ctx.closePath();
	ctx.fillStyle=(isBlue=!isBlue)?'#99c0ff':'#f1f9ff';
	ctx.fill();
	
	};
	
//-----------绘制骨线--------------------------------	
	
	for(var i=0;i<step;i++){
		var x=r+Math.cos(i*(360/step)*(Math.PI/180))*r;
		var y=r+Math.sin(i*(360/step)*(Math.PI/180))*r;
		ctx.moveTo(r,r);
		ctx.lineTo(x,y);
		var text=$('<div class="text">');
		text.text(cfg.data[i][0]);
		
		
		if(x>w/2){
			text.css('left',x/2+3);
			}
		else{
			text.css('right',(w-x)/2+3);
			}
		if(y>h/2){
			text.css('top',y/2+3);
			}
		else{
			text.css('bottom',(h-y)/2);
			};	
			
		text.css('transition','all 1s '+i*.1+'s');
		if(cfg.data[i][2]){
			text.css('color',cfg.data[i][2]);
			
			};	
		component.append(text);
		};
	
	ctx.strokeStyle='#e0e0e0';
	ctx.stroke();
	
	
	
	
  
	



//-------------添加动态网线---------------

var cns=document.createElement('canvas');
var ctx=cns.getContext('2d');
cns.width=ctx.width=w;
cns.height=ctx.height=h;
component.append(cns);
var step=cfg.data.length;
	
var draw=function(per){
//---------清处画布-----------
ctx.clearRect(0,0,w,h);	
 //连线----------
if(per>=1){
	
	$('.h5_component').find('.text').css('opacity','1');
	
	}else{
		$('.h5_component').find('.text').css('opacity','0');
		
		}; 
 
 
ctx.beginPath();
for(var i=0;i<step;i++){
	var rate=cfg.data[i][1]*per;
	var x=r+Math.cos(i*(360/step)*(Math.PI/180))*r*rate;
	var y=r+Math.sin(i*(360/step)*(Math.PI/180))*r*rate;
	ctx.lineTo(x,y);
	
	
	
	};
ctx.closePath();
ctx.strokeStyle='#F44336';
ctx.stroke();

//绘制圆点----------

for(var i=0;i<step;i++){
	var rate=cfg.data[i][1]*per;
	var x=r+Math.cos(i*(360/step)*(Math.PI/180))*r*rate;
	var y=r+Math.sin(i*(360/step)*(Math.PI/180))*r*rate;
	ctx.beginPath();
	ctx.arc(x,y,5,0,2*Math.PI);
	
    ctx.fillStyle='#F44336';
    ctx.fill();
	
	};

	
};



//-----------动态变化函数---------------------
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
















