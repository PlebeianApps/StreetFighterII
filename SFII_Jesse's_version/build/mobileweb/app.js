// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Ti.UI.setBackgroundColor('#ffffff');

// create tab group
//var tabGroup = Ti.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Ti.UI.createWindow({  
   backgroundImage:'bg@2x.png'
});


var guile_thumb = Ti.UI.createImageView({  
    image:'guile_thumb.png',
    top:0,
    left:0,
    width:'auto',
    height:'auto',
});

win1.add(guile_thumb);
win1.open();
/*
guile_thumb.addEventListener('click', function() {
	var win = Ti.UI.createWindow();
	guile_thumb.image = 'guile@2x.png';
	top:0; left:0; width:'100%'; height:'auto';
});
*/
/*
var scrollView = Ti.UI.createScrollView({
	contentWidth : 'auto',
	contentHeight : 'auto',
	top : 0,
	showVerticalScrollIndicator : true,
	showHorizontalScrollIndicator : true,
});
var view = Ti.UI.createImageView({
	image:'guile@2x.png',
	backgroundColor : '#336699',
	width : 480,
	height : 2156,
	top:0,
	left:0,
});
*/

//scrollView.add(view);
//win1.add(scrollView);


	
//to do list:
//find getWidth and getHeight funtions
//how to properly configure image sizes



/*
var label1 = Ti.UI.createLabel({
	color:'#999',
	text:'I am Window one',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win1.add(label1);

//
// create controls tab and root window
//
var win2 = Ti.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff'
});
var tab2 = Ti.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

var label2 = Ti.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);



//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
*/;