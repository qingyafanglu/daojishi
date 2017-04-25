var H5=function(){
	this.id=('h5_'+Math.random()).replace('.','_');
	this.el=$('<div class="h5" id="'+this.id+'">').hide();
	
	this.page=[];
	$('body').append(this.el);


//增加addPage---------------
 this.addPage=function(name,text){
	 var page=$('<div class="h5_page section  ">');
	 if(name!=undefined){
		 page.addClass('  h5_page_'+name);
		 };
	  
	  this.el.append(page);
	  this.page.push(page );
	  	 
	  return this;	 
	 };
 
//增加addComponent----------------
this.addComponent=function(name,cfg){
	
	var cfg=cfg||{};
	cfg=$.extend({
		
		type:'base'
		},cfg);
	var component;
	switch(cfg.type){
		case 'base':
		  component=new H5ComponentBase(name,cfg);
		break; 
		
		default:
		
		};
	console.log(component);
	var page=this.page.slice(-1)[0];
	
	
	page.append(component);
	return this;
	}; 
	
	
this.loader=function(){
	
	$('.h5').fullpage({
		
		 
		  onLeave:function(index,nextIndex,direction){
			  $(this).find('.h5_component').trigger('onLeave');
			  
			  
			  },
		  afterLoad:function(anchorLink,index){
			  $(this).find('.h5_component').trigger('onLoad');
			  
			  
			  
			  
			  },
		
		
		});
	$('.h5').fadeIn();
	
	$('.h5').find('.h5_component').trigger('onLoad');
	
	};
	
	
	
	
	
	
	};
	
	
	
	
	
	
	