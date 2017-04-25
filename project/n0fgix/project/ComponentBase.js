/* 内容管理对象 */
var H5ComponentBase=function(name,cfg){
	var cfg=cfg||{};
	
	var cls='  h5_component_'+cfg.type;//创建classname 名字之间注意打上空格
	var id=('h5_c_'+Math.random()).replace('.','_');//创建id
	var component=$('<div class="h5_component  '+'  h5_component_'+name+cls+'" id="'+id+'">');//创建div 
	
	//编写div的样式--------------------
	cfg.width && component.width(cfg.width/2);
	cfg.height&& component.height(cfg.height/2);
	cfg.bg&&component.css('backgroundImage','url('+cfg.bg+')');
	cfg.css&&component.css(cfg.css);
	cfg.text&&component.text(cfg.text);
	
	if(typeof cfg.onclick==='function'){
		component.on('click',cfg.onclick);
		
		};
	
	if(cfg.center===true){
		component.css({
			
			marginLeft:(cfg.width/4*-1),
			left:'50%'
			
			
			});
		
		
		};
	
	component.on('onLoad',function(){
		setTimeout(function(){
			
		component.addClass(cls+'_load').removeClass(cls+'_leave');
		cfg.animateIn&&component.animate(cfg.animateIn);
			
			},cfg.delay||0);
		
		return false;
		});
	
	component.on('onLeave',function(){
		setTimeout(function(){
			
	    component.addClass(cls+'_leave').removeClass(cls+'_load');
		
		cfg.animateOut&&component.animate(cfg.animateOut);
			
			},cfg.delay||0);
		
		return false;
		
		});
	
	
	
	
	
	
	return component;//将创建的div返回回去
	
	};






