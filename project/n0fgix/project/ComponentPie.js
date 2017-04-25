var H5ComponentPie=function(name,cfg){
var component=new H5ComponentBase(name,cfg);
    var w=cfg.width;
    var h=cfg.height;

//----------创建画布--------- 一次绘制
    var cns=document.createElement("canvas");
	var ctx=cns.getContext('2d');
	cns.width=ctx.width=w;
	cns.height=ctx.height=h;
	component.append(cns);
	
	var r=h/2;
	ctx.beginPath();
	ctx.arc(r,r,r,0,2*Math.PI);
    ctx.fillStyle='#ccc';
	ctx.fill();

//----------创建画布--------- 二次绘制数据层
    var cns=document.createElement("canvas");
	var ctx=cns.getContext('2d');
	cns.width=ctx.width=w;
	cns.height=ctx.height=h;
	component.append(cns);

    var step=cfg.data.length;
	var sAngle=1.5*Math.PI;
	
	for(var i=0;i<step;i++){
		var item=cfg.data[i];
		var aAngle=item[1]*2*Math.PI;
		var eAngle=sAngle+aAngle;
		ctx.beginPath();
		ctx.moveTo(r,r);
		ctx.arc(r,r,r,sAngle,eAngle);
		ctx.fillStyle=item[2];
		ctx.fill();
		
		
		sAngle=eAngle;
		};


//----------创建画布--------- 三次创建蒙版层
    var cns=document.createElement("canvas");
	var ctx=cns.getContext('2d');
	cns.width=ctx.width=w;
	cns.height=ctx.height=h;
	component.append(cns);


  
var draw=function(per){
//---------清处画布-----------
  ctx.clearRect(0,0,w,h);
   var aAngle=2*Math.PI*per;
   var eAngle=sAngle+aAngle;
    
   ctx.beginPath();
   ctx.moveTo(r,r);
   if(per<=0){
	   ctx.arc(r,r,r,0,2*Math.PI);
	   
	   }else{
   ctx.arc(r,r,r,sAngle,eAngle,true);
	   };
   ctx.fillStyle='#ccc';
   ctx.fill();

  
   

};

//----------------- 创建数据层-------------

var table=$('<div class="table">');

$('.iphone ').append(table);
$(table).css('left',470).css('top',300).css('height',150).css('width',150);;

var step=cfg.data.length;
for(var i=0;i<step;i++){
	var item=cfg.data[i];
	var content=$('<div class=content>');
	$(content).css('marginBottom',5).css('overflow','auto');
	var name=$('<div class="name">');
	$(name).text(item[0]).css('width',60).css('fontSize',6);;
	var color=$('<div class="color">');
	$(color).css('backgroundColor',item[2]).css('width',50);;
	var rate=$('<div class="rate">');
	$(rate).text(item[1]*100+'%');
	$(content).append(name).append(color).append(rate)
	$(table).append(content);
	}













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
















