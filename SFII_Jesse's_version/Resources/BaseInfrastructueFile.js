// this sets the background color of the master UIView (when there are no windows/tab groups on it)

//variable naming convention: The images that appear on the opening page are call fighterName_thumb.
//The images that appear after clicking them are called fighterName_cnt short for content.

//This set the background color but we really want to load bg@2x.png as the background image but
//for some reason it's not loading when we plug that image into the 'backgroundImage' property.
//Something to figure out later.
var win1 = Titanium.UI.createWindow({
	backgroundColor:'black'
});
//This opens the base window.
win1.open();

//This section starts putting the thumbnail images on top of the background.

var guile_thumb = Titanium.UI.createImageView({  
    image:'guile_thumb@2x.png',
    top:120,
    left:5,
    width:'33%',
    height:'auto',
});

win1.add(guile_thumb);

//This section makes the thumbnails clickable and defines the parameters for the click result.

guile_thumb.addEventListener('click', function(){
    
    guile_thumb.hide();
    var win = Ti.UI.createWindow();
    var guile_view = Ti.UI.createScrollView({
	contentWidth : 'auto',
	contentHeight : 'auto',
	top : 0,
	showVerticalScrollIndicator : true,
	showHorizontalScrollIndicator : true,
});

var guile_cnt = Ti.UI.createImageView({
	image:'guile@2x.png',
	backgroundColor : '#336699',
	width : 480,
	height : 2156,
	top:0,
	left:0,
    });
 
    guile_view.add(guile_cnt);
	win1.add(guile_view);
 
});