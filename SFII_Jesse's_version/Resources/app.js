// this sets the background color of the master UIView (when there are no windows/tab groups on it)

//variable naming convention: The images that appear on the opening page are call fighterName_thumb.
//The images that appear after clicking them are called fighterName_cnt short for content.

//This set the background color but we really want to load bg@2x.png as the background image but
//for some reason it's not loading when we plug that image into the 'backgroundImage' property.
//Something to figure out later.
var win1 = Titanium.UI.createWindow({
	backgroundColor:'black'
});

var win2 = Ti.UI.createWindow({
	backgroundColor:'blue'
});

//This opens the base window.
win1.open();

//This is the header.
var header = Titanium.UI.createImageView({  
    image:'images/header@2x.png',
    top:0,
    left:0,
    width:'100%',
    height:'auto',
});
win1.add(header);

//This section puts the thumbnail images on top of the win1 background.
//This is the beginning of the FIRST ROW.
//This is the Ken thumbnail.
var ken_thumb = Titanium.UI.createImageView({  
    image:'ken_thumb@2x.png',
    top:'10.5%',
    left:'2.5%',
    width:'30%',
    height:'auto',
});
win1.add(ken_thumb);

//This is the Chunli thumbnail.
var chunli_thumb = Titanium.UI.createImageView({  
    image:'chunli_thumb@2x.png',
    top:'10.5%',
    left:'35%',
    width:'30%',
    height:'auto',
});
win1.add(chunli_thumb);

//This is the Guile thumbnail.
var guile_thumb = Titanium.UI.createImageView({  
    image:'guile_thumb@2x.png',
    top:'10.5%',
    left:'67.5%',
    width:'30%',
    height:'auto',
});
win1.add(guile_thumb);

//This begins the SECOND ROW.
//This is the Ryu thumbnail.
var ryu_thumb = Titanium.UI.createImageView({  
    image:'images/ryu_thumb@2x.png',
    top:'30.6%',
    left:'2.5%',
    width:'30%',
    height:'auto',
});
win1.add(ryu_thumb);

//This is the Blanka thumbnail.
var blanka_thumb = Titanium.UI.createImageView({  
    image:'images/blanka_thumb@2x.png',
    top:'30.6%',
    left:'35%',
    width:'30%',
    height:'auto',
});
win1.add(blanka_thumb);

//This is the Balrog thumbnail.
var balrog_thumb = Titanium.UI.createImageView({  
    image:'images/balrog_thumb@2x.png',
    top:'30.6%',
    left:'67.5%',
    width:'30%',
    height:'auto',
});
win1.add(balrog_thumb);

//This begins the THIRD ROW.
//This is the Dhalsim thumbnail.
var dhalsim_thumb = Titanium.UI.createImageView({  
    image:'images/dhalsim_thumb@2x.png',
    top:'50.7%',
    left:'2.5%',
    width:'30%',
    height:'auto',
});
win1.add(dhalsim_thumb);

//This is the Ehonda thumbnail.
var ehonda_thumb = Titanium.UI.createImageView({  
    image:'images/ehonda_thumb@2x.png',
    top:'50.7%',
    left:'35%',
    width:'30%',
    height:'auto',
});
win1.add(ehonda_thumb);

//This is the Mbison thumbnail.
var mbison_thumb = Titanium.UI.createImageView({  
    image:'images/mbison_thumb@2x.png',
    top:'50.7%',
    left:'67.5%',
    width:'30%',
    height:'auto',
});
win1.add(mbison_thumb);

//This begins the FOURTH ROW.
//This is the Sagat thumbnail.
var sagat_thumb = Titanium.UI.createImageView({  
    image:'images/sagat_thumb@2x.png',
    top:'70.8%',
    left:'2.5%',
    width:'30%',
    height:'auto',
});
win1.add(sagat_thumb);

//This is the Vega thumbnail.
var vega_thumb = Titanium.UI.createImageView({  
    image:'images/vega_thumb@2x.png',
    top:'70.8%',
    left:'35%',
    width:'30%',
    height:'auto',
});
win1.add(vega_thumb);

//This is the Zangief thumbnail.
var zangief_thumb = Titanium.UI.createImageView({  
    image:'images/zangief_thumb@2x.png',
    top:'70.8%',
    left:'67.5%',
    width:'30%',
    height:'auto',
});
win1.add(zangief_thumb);


//This section makes the thumbnails clickable and defines the parameters (special moves pages) for the click result.

//THIS LOADS THE Ken SPECIAL MOVES PAGE.
ken_thumb.addEventListener('click', function(){
    
    win2.open();
    var ken_view = Ti.UI.createScrollView({
	contentWidth : 'auto',
	contentHeight : 'auto',
	top : 0,
	showVerticalScrollIndicator : true,
	showHorizontalScrollIndicator : true,
});

var ken_cnt = Ti.UI.createImageView({
	image:'images/ken@2x.png',
	width : 480,
	height : 2156,
	top:0,
	left:0,
    });
 
    ken_view.add(ken_cnt);
	win2.add(ken_view);

});


//THIS LOADS THE Chunli SPECIAL MOVES PAGE.
chunli_thumb.addEventListener('click', function(){
    
    win2.open();
    var chunli_view = Ti.UI.createScrollView({
	contentWidth : 'auto',
	contentHeight : 'auto',
	top : 0,
	showVerticalScrollIndicator : true,
	showHorizontalScrollIndicator : true,
});

var chunli_cnt = Ti.UI.createImageView({
	image:'images/chunli@2x.png',
	width : 480,
	height : 2156,
	top:0,
	left:0,
    });
 
    chunli_view.add(chunli_cnt);
	win2.add(chunli_view);

});


//THIS LOADS THE Guile SPECIAL MOVES PAGE.
guile_thumb.addEventListener('click', function(){
    
    win2.open();
    var guile_view = Ti.UI.createScrollView({
	contentWidth : 'auto',
	contentHeight : 'auto',
	top : 0,
	showVerticalScrollIndicator : true,
	showHorizontalScrollIndicator : true,
});

var guile_cnt = Ti.UI.createImageView({
	image:'guile@2x.png',
	width : 480,
	height : 2156,
	top:0,
	left:0,
    });
 
    guile_view.add(guile_cnt);
	win2.add(guile_view);

});


//THIS LOADS THE Ryu SPECIAL MOVES PAGE.
ryu_thumb.addEventListener('click', function(){
    
    win2.open();
    var ryu_view = Ti.UI.createScrollView({
	contentWidth : 'auto',
	contentHeight : 'auto',
	top : 0,
	showVerticalScrollIndicator : true,
	showHorizontalScrollIndicator : true,
});

var ryu_cnt = Ti.UI.createImageView({
	image:'images/ryu@2x.png',
	width : 480,
	height : 2156,
	top:0,
	left:0,
    });
 
    ryu_view.add(ryu_cnt);
	win2.add(ryu_view);

});


//THIS LOADS THE Blanka SPECIAL MOVES PAGE.
blanka_thumb.addEventListener('click', function(){
    
    win2.open();
    var blanka_view = Ti.UI.createScrollView({
	contentWidth : 'auto',
	contentHeight : 'auto',
	top : 0,
	showVerticalScrollIndicator : true,
	showHorizontalScrollIndicator : true,
});

var blanka_cnt = Ti.UI.createImageView({
	image:'images/blanka@2x.png',
	width : 480,
	height : 2156,
	top:0,
	left:0,
    });
 
    blanka_view.add(blanka_cnt);
	win2.add(blanka_view);

});


//THIS LOADS THE Balrog SPECIAL MOVES PAGE.
balrog_thumb.addEventListener('click', function(){
    
    win2.open();
    var balrog_view = Ti.UI.createScrollView({
	contentWidth : 'auto',
	contentHeight : 'auto',
	top : 0,
	showVerticalScrollIndicator : true,
	showHorizontalScrollIndicator : true,
});

var balrog_cnt = Ti.UI.createImageView({
	image:'images/balrog@2x.png',
	width : 480,
	height : 2156,
	top:0,
	left:0,
    });
 
    balrog_view.add(balrog_cnt);
	win2.add(balrog_view);
 
});


//THIS LOADS THE Dhalsim SPECIAL MOVES PAGE.
dhalsim_thumb.addEventListener('click', function(){
    
    win2.open();
    var dhalsim_view = Ti.UI.createScrollView({
	contentWidth : 'auto',
	contentHeight : 'auto',
	top : 0,
	showVerticalScrollIndicator : true,
	showHorizontalScrollIndicator : true,
});

var dhalsim_cnt = Ti.UI.createImageView({
	image:'images/dhalsim@2x.png',
	width : 480,
	height : 2156,
	top:0,
	left:0,
    });
 
    dhalsim_view.add(dhalsim_cnt);
	win2.add(dhalsim_view);
	
});


//THIS LOADS THE Ehonda SPECIAL MOVES PAGE.
ehonda_thumb.addEventListener('click', function(){
    
    win2.open();
    var ehonda_view = Ti.UI.createScrollView({
	contentWidth : 'auto',
	contentHeight : 'auto',
	top : 0,
	showVerticalScrollIndicator : true,
	showHorizontalScrollIndicator : true,
});

var ehonda_cnt = Ti.UI.createImageView({
	image:'images/ehonda@2x.png',
	width : 480,
	height : 2156,
	top:0,
	left:0,
    });
 
    ehonda_view.add(ehonda_cnt);
	win2.add(ehonda_view);
 
});

//THIS LOADS THE Mbison SPECIAL MOVES PAGE.
mbison_thumb.addEventListener('click', function(){
    
    win2.open();
    var mbison_view = Ti.UI.createScrollView({
	contentWidth : 'auto',
	contentHeight : 'auto',
	top : 0,
	showVerticalScrollIndicator : true,
	showHorizontalScrollIndicator : true,
});

var mbison_cnt = Ti.UI.createImageView({
	image:'images/mbison@2x.png',
	width : 480,
	height : 2156,
	top:0,
	left:0,
    });
 
    mbison_view.add(mbison_cnt);
	win2.add(mbison_view);
 
});


//THIS LOADS THE Sagat SPECIAL MOVES PAGE.
sagat_thumb.addEventListener('click', function(){
    
    win2.open();
    var sagat_view = Ti.UI.createScrollView({
	contentWidth : 'auto',
	contentHeight : 'auto',
	top : 0,
	showVerticalScrollIndicator : true,
	showHorizontalScrollIndicator : true,
});

var sagat_cnt = Ti.UI.createImageView({
	image:'images/sagat@2x.png',
	width : 480,
	height : 2156,
	top:0,
	left:0,
    });
 
    sagat_view.add(sagat_cnt);
	win2.add(sagat_view);
 
});


//THIS LOADS THE Vega SPECIAL MOVES PAGE.
vega_thumb.addEventListener('click', function(){
    
    win2.open();
    var vega_view = Ti.UI.createScrollView({
	contentWidth : 'auto',
	contentHeight : 'auto',
	top : 0,
	showVerticalScrollIndicator : true,
	showHorizontalScrollIndicator : true,
});

var vega_cnt = Ti.UI.createImageView({
	image:'images/vega@2x.png',
	width : 480,
	height : 2156,
	top:0,
	left:0,
    });
 
    vega_view.add(vega_cnt);
	win2.add(vega_view);
	
});


//THIS LOADS THE Zangief SPECIAL MOVES PAGE.
zangief_thumb.addEventListener('click', function(){
    
    win2.open();
    var zangief_view = Ti.UI.createScrollView({
	contentWidth : 'auto',
	contentHeight : 'auto',
	top : 0,
	showVerticalScrollIndicator : true,
	showHorizontalScrollIndicator : true,
});

var zangief_cnt = Ti.UI.createImageView({
	image:'images/zangief@2x.png',
	width : 480,
	height : 2156,
	top:0,
	left:0,
    });
 
    zangief_view.add(zangief_cnt);
	win2.add(zangief_view);
 
});


win2.addEventListener('android:back', function() {
    win2.close();
    win1.open();
});