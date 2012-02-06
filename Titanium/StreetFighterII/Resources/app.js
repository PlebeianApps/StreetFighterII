// Custom View

var Startup = Titanium.UI.createWindow({
    left: 0,
    top: 0,
    width: 320,
    height: 480,
    title: "home",
    backgroundColor: '#bfbfbf',
	navBarHidden: true,
	exitOnClose: false
});

var view0 = Titanium.UI.createView({
    width: 320,
    height: 480,
    top: 0,
    backgroundColor: '#292222'
});

var imageView1 = Titanium.UI.createImageView({
    left: 0,
    top: 44,
    width: 320,
    height: 416
});
view0.add(imageView1);

var button2 = Titanium.UI.createButton({
    left: 110,
    top: 52,
    width: 100,
    height: 97,
    font: {fontFamily: 'Helvetica-Bold', fontSize: 15},
    title: '',
    color: '#324f85',
    image: 'images/chunli_thumb.png'
});
button2.addEventListener('click', function()
{
  Chunli.open();  // write the code here
});
view0.add(button2);

var imageView3 = Titanium.UI.createImageView({
    width: 320,
    height: 44,
    top: 0,
    image: 'images/header.png'
});
view0.add(imageView3);

var button4 = Titanium.UI.createButton({
    left: 110,
    top: 153,
    width: 100,
    height: 97,
    title: '',
    color: '#324f85',
    image: 'images/ryu_thumb.png'
});
button4.addEventListener('click', function()
{
   Ryu.open(); // write the code here
});
view0.add(button4);

var button5 = Titanium.UI.createButton({
    left: 6,
    top: 355,
    width: 100,
    height: 97,
    title: '',
    color: '#324f85',
    image: 'images/blanka_thumb.png'
});
button5.addEventListener('click', function()
{
    Blanka.open();// write the code here
});
view0.add(button5);

var button6 = Titanium.UI.createButton({
    left: 110,
    top: 254,
    width: 100,
    height: 97,
    title: '',
    color: '#324f85',
    image: 'images/balrog_thumb.png'
});
button6.addEventListener('click', function()
{
    Balrog.open();// write the code here
});
view0.add(button6);

var button7 = Titanium.UI.createButton({
    left: 214,
    top: 254,
    width: 100,
    height: 97,
    title: '',
    color: '#324f85',
    image: 'images/dhalsim_thumb.png'
});
button7.addEventListener('click', function()
{
    Dhalsim.open();// write the code here
});
view0.add(button7);

var button8 = Titanium.UI.createButton({
    left: 6,
    top: 52,
    width: 100,
    height: 97,
    title: '',
    color: '#324f85',
    image: 'images/guile_thumb.png'
});
button8.addEventListener('click', function()
{
    Guile.open();// write the code here
});
view0.add(button8);

var button9 = Titanium.UI.createButton({
    left: 214,
    top: 52,
    width: 100,
    height: 97,
    title: '',
    color: '#324f85',
    image: 'images/ken_thumb.png'
});
button9.addEventListener('click', function()
{
    Ken.open();// write the code here
});
view0.add(button9);

var button10 = Titanium.UI.createButton({
    left: 6,
    top: 153,
    width: 100,
    height: 97,
    title: '',
    color: '#324f85',
    image: 'images/mbison_thumb.png'
});
button10.addEventListener('click', function()
{
    Mbison.open();// write the code here
});
view0.add(button10);

var button11 = Titanium.UI.createButton({
    left: 214,
    top: 153,
    width: 100,
    height: 97,
    title: '',
    color: '#324f85',
    image: 'images/sagat_thumb.png'
});
button11.addEventListener('click', function()
{
    Sagat.open();// write the code here
});
view0.add(button11);

var button12 = Titanium.UI.createButton({
    left: 6,
    top: 254,
    width: 100,
    height: 97,
    title: '',
    color: '#324f85',
    image: 'images/vega_thumb.png'
});
button12.addEventListener('click', function()
{
    Vega.open();// write the code here
});
view0.add(button12);

var button13 = Titanium.UI.createButton({
    left: 110,
    top: 355,
    width: 100,
    height: 97,
    title: '',
    color: '#324f85',
    image: 'images/zangief_thumb.png'
});
button13.addEventListener('click', function()
{
    Zangief.open();// write the code here
});
view0.add(button13);

var button14 = Titanium.UI.createButton({
    left: 214,
    top: 355,
    width: 100,
    height: 97,
    title: '',
    color: '#324f85',
    image: 'images/ehonda_thumb.png'
});
button14.addEventListener('click', function()
{
    Ehonda.open();// write the code here
});
view0.add(button14);

Startup.add(view0);

// Custom View
var Chunli = Titanium.UI.createWindow({
    top: 0,
    width: 320,
    height: 460,
    navBarHidden: true,
    modal: true,
    backgroundColor: '#000000'
});

var imageView15 = Titanium.UI.createImageView({
    width: 320,
    height: 44,
    top: 0,
    image: 'images/header.png'
});
Chunli.add(imageView15);

var scrollView16 = Titanium.UI.createScrollView({
	top: 44,
    contentWidth: 'auto',
    contentHeight: 'auto'
});

var imageView17 = Titanium.UI.createImageView({
    width: 320,
    height: 'auto',
    image: 'images/chunli.png'
});

scrollView16.add(imageView17);

Chunli.add(scrollView16);

Chunli.addEventListener('android:back', function() {
    Chunli.close();
});


// Custom View
var Ryu = Titanium.UI.createWindow({
    top: 0,
    width: 320,
    height: 460,
    navBarHidden: true,
    modal: true,
    backgroundColor: '#000000'
});

var imageView19 = Titanium.UI.createImageView({
    width: 320,
    height: 44,
    top: 0,
    image: 'images/header.png'
});
Ryu.add(imageView19);

var scrollView20 = Titanium.UI.createScrollView({
    contentWidth: 'auto',
    contentHeight: 'auto',
    top: 44
});
var imageView21 = Titanium.UI.createImageView({
    width: 320,
    height: 'auto',
    image: 'images/ryu.png'
});
scrollView20.add(imageView21);

Ryu.add(scrollView20);

Ryu.addEventListener('android:back', function() {
    Ryu.close();
});

// Custom View
var Blanka = Titanium.UI.createWindow({
    top: 0,
    width: 320,
    height: 460,
    navBarHidden: true,
    modal: true,
    backgroundColor: '#000000'
});

var imageView23 = Titanium.UI.createImageView({
    width: 320,
    height: 44,
    top: 0,
    image: 'images/header.png'
});
Blanka.add(imageView23);

var scrollView24 = Titanium.UI.createScrollView({
    contentWidth: 'auto',
    contentHeight: 'auto',
    top: 44,
});
var imageView25 = Titanium.UI.createImageView({
    width: 320,
    height: 'auto',
    images: 'images/blanka.png'
});
scrollView24.add(imageView25);

Blanka.add(scrollView24);

Blanka.addEventListener('android:back', function() {
    Blanka.close();
});

// Custom View
var Balrog = Titanium.UI.createWindow({
    top: 0,
    width: 320,
    height: 460,
    navBarHidden: true,
    modal: true,
    backgroundColor: '#000000'
});

var imageView27 = Titanium.UI.createImageView({
    width: 320,
    height: 44,
    top: 0,
    image: 'images/header.png'
});
Balrog.add(imageView27);

var scrollView28 = Titanium.UI.createScrollView({
    contentWidth: 'auto',
    contentHeight: 'auto',
    top: 44
});
var imageView29 = Titanium.UI.createImageView({
    width: 320,
    height: 'auto',
    image: 'images/balrog.png'
});
scrollView28.add(imageView29);

Balrog.add(scrollView28);

Balrog.addEventListener('android:back', function() {
    Balrog.close();
});

// Custom View
var Dhalsim = Titanium.UI.createWindow({
    top: 0,
    width: 320,
    height: 460,
    navBarHidden: true,
    modal: true,
    backgroundColor: '#000000'
});

var imageView31 = Titanium.UI.createImageView({
    width: 320,
    height: 44,
    top: 0,
    image: 'images/header.png'
});
Dhalsim.add(imageView31);

var scrollView32 = Titanium.UI.createScrollView({
    contentWidth: 'auto',
    contentHeight: 'auto',
    top: 44
});
var imageView33 = Titanium.UI.createImageView({
    width: 320,
    height: 'auto',
    image: 'images/dhalsim.png'
});
scrollView32.add(imageView33);

Dhalsim.add(scrollView32);

Dhalsim.addEventListener('android:back', function() {
    Dhalsim.close();
});

// Custom View
var Guile = Titanium.UI.createWindow({
    top: 0,
    width: 320,
    height: 460,
    navBarHidden: true,
    modal: true,
    backgroundColor: '#000000'
});

var imageView35 = Titanium.UI.createImageView({
    width: 320,
    height: 44,
    top: 0,
    image: 'images/header.png'
});
Guile.add(imageView35);

var scrollView36 = Titanium.UI.createScrollView({
    contentWidth: 'auto',
    contentHeight: 'auto',
    top: 44
});
var imageView37 = Titanium.UI.createImageView({
    width: 320,
    height: 'auto',
    image: 'images/guile.png'
});
scrollView36.add(imageView37);

Guile.add(scrollView36);

Guile.addEventListener('android:back', function() {
    Guile.close();
});

// Custom View
var Ken = Titanium.UI.createWindow({
    top: 0,
    width: 320,
    height: 460,
    navBarHidden: true,
    modal: true,
    backgroundColor: '#000000'
});

var imageView39 = Titanium.UI.createImageView({
    width: 320,
    height: 44,
    top: 0,
    image: 'images/header.png'
});
Ken.add(imageView39);

var scrollView40 = Titanium.UI.createScrollView({
    contentWidth: 'auto',
    contentHeight: 'auto',
    top: 44
});
var imageView41 = Titanium.UI.createImageView({
    width: 320,
    height: 'auto',
    image: 'images/ken.png'
});
scrollView40.add(imageView41);

Ken.add(scrollView40);

Ken.addEventListener('android:back', function() {
    Ken.close();
});

// Custom View
var Mbison = Titanium.UI.createWindow({
    top: 0,
    width: 320,
    height: 460,
    navBarHidden: true,
    modal: true,
    backgroundColor: '#000000'
});

var imageView43 = Titanium.UI.createImageView({
    width: 320,
    height: 44,
    top: 0,
    image: 'images/header.png'
});
Mbison.add(imageView43);

var scrollView44 = Titanium.UI.createScrollView({
    contentWidth: 'auto',
    contentHeight: 'auto',
    top: 44
});
var imageView45 = Titanium.UI.createImageView({
    width: 320,
    height: 'auto',
    image: 'images/mbison.png'
});
scrollView44.add(imageView45);

Mbison.add(scrollView44);

Mbison.addEventListener('android:back', function() {
    Mbison.close();
});

// Custom View
var Sagat = Titanium.UI.createWindow({
    top: 0,
    width: 320,
    height: 460,
    navBarHidden: true,
    modal: true,
    backgroundColor: '#000000'
});

var imageView47 = Titanium.UI.createImageView({
    width: 320,
    height: 44,
    top: 0,
    image: 'images/header.png'
});
Sagat.add(imageView47);

var scrollView48 = Titanium.UI.createScrollView({
    contentWidth: 'auto',
    contentHeight: 'auto',
    top: 44
});
var imageView49 = Titanium.UI.createImageView({
    width: 320,
    height: 'auto',
    image: 'images/sagat.png'
});
scrollView48.add(imageView49);

Sagat.add(scrollView48);

Sagat.addEventListener('android:back', function() {
    Sagat.close();
});
// Custom View
var Vega = Titanium.UI.createWindow({
    top: 0,
    width: 320,
    height: 460,
    navBarHidden: true,
    modal: true,
    backgroundColor: '#000000'
});

var imageView51 = Titanium.UI.createImageView({
    width: 320,
    height: 44,
    top: 0,
    image: 'images/header.png'
});
Vega.add(imageView51);

var scrollView52 = Titanium.UI.createScrollView({
    contentWidth: 'auto',
    contentHeight: 'auto',
    top: 44
});
var imageView53 = Titanium.UI.createImageView({
    width: 320,
    height: 'auto',
    image: 'images/vega.png'
});
scrollView52.add(imageView53);

Vega.add(scrollView52);

Vega.addEventListener('android:back', function() {
    Vega.close();
});

// Custom View
var Zangief = Titanium.UI.createWindow({
    top: 0,
    width: 320,
    height: 460,
    navBarHidden: true,
    modal: true,
    backgroundColor: '#000000'
});

var imageView55 = Titanium.UI.createImageView({
    width: 320,
    height: 44,
    top: 0,
    image: 'images/header.png'
});
Zangief.add(imageView55);

var scrollView56 = Titanium.UI.createScrollView({
    contentWidth: 'auto',
    contentHeight: 'auto',
    top: 44
});
var imageView57 = Titanium.UI.createImageView({
    width: 320,
    height: 'auto',
    image: 'images/zangief.png'
});
scrollView56.add(imageView57);

Zangief.add(scrollView56);

Zangief.addEventListener('android:back', function() {
    Zangief.close();
});
// Custom View
var Ehonda = Titanium.UI.createWindow({
    top: 0,
    width: 320,
    height: 460,
    navBarHidden: true,
    modal: true,
    backgroundColor: '#000000'
});

var imageView59 = Titanium.UI.createImageView({
    width: 320,
    height: 44,
    top: 0,
    image: 'images/header.png'
});
Ehonda.add(imageView59);

var scrollView60 = Titanium.UI.createScrollView({
    contentWidth: 'auto',
    contentHeight: 'auto',
    top: 44
});
var imageView61 = Titanium.UI.createImageView({
    width: 320,
    height: 'auto',
    image: "images/ehonda.png"
});
scrollView60.add(imageView61);

Ehonda.add(scrollView60);

Ehonda.addEventListener('android:back', function() {
    Ehonda.close();
});

Startup.open();
