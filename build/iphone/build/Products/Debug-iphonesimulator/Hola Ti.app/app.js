var home = require('home');


var cb_http_tweetter = function() {
	// Create an HTTPClient.
	var anXhr = Ti.Network.createHTTPClient();
	anXhr.setTimeout(7000);

	// Define the callback.
	anXhr.onload = function() {
		// Handle the XML data.
		var doc = this.responseText;
		// alert(doc);
		console.log(doc);

	};
	anXhr.onerror = function() {
		alert('The HTTP request failed');
	};

	// Send the request data.
	anXhr.open('GET', 'http://www14.df.gob.mx/virtual/pushnot/smartcdmx_Ip/index.php/Welcome/get_tweets/jezrel_mx');
	anXhr.send();
};

home.open_home(cb_http_tweetter);

// // Create an HTTPClient.
// var anXhr = Ti.Network.createHTTPClient();
// anXhr.setTimeout(10000);
//
// // Define the callback.
// anXhr.onload = function() {
// var ventana = Titanium.UI.createWindow({
// backgroundColor : '#c1c1c1',
// });
//
// var scrollView = Ti.UI.createScrollView({
// backgroundColor : '#000000',
// top : '30dp',
// layout : 'vertical'
// });
// //alert(this.responseText);
// var xml = this.responseXML.documentElement;
// var data = [];
// var items = xml.getElementsByTagName("item");
//
// // var doctitle = xml.evaluate("//channel/title/text()").item(0).nodeValue;
// for (var i = 0; i < items.length; i++) {
// var view_noticia = Titanium.UI.createView({
// backgroundColor : '#FFFFFF',
// width : '90%',
// height : '400dp',
// layout : 'vertical'
// });
//
// var lb_titulo = Titanium.UI.createLabel({
// text : items.item(i).getElementsByTagName("title").item(0).text
// });
//
// var web_view_desc = Titanium.UI.createWebView({
// html : items.item(i).getElementsByTagName("description").item(0).text,
// width : '100%',
// height : '300dp'
// });
//
// var view_separador = Titanium.UI.createView({
// backgroundColor : '#cccccc',
// width : Ti.UI.FILL,
// height : '20dp'
// });
//
// view_noticia.add(lb_titulo);
// view_noticia.add(web_view_desc);
// view_noticia.add(view_separador);
// scrollView.add(view_noticia);
// };
//
//
//
// console.log(JSON.stringify(data));
// ventana.add(scrollView);
// ventana.open();
//
// };
// anXhr.onerror = function() {
// alert('The HTTP request failed');
// };
//
// // Send the request data.
// anXhr.open('GET', 'http://archivo.eluniversal.com.mx/rss/universalmxm.xml');
// anXhr.send();

// alert(Titanium.App.Properties.getString('midato'));
// if (Titanium.Platform.osname == 'android') {
// var ventana = Titanium.UI.createWindow({
// backgroundImage : '/images/fondo_chica.png',
// theme : 'materialThemeNoAB',
// layout : 'vertical'
// });
// };
//
// if (Titanium.Platform.osname == 'iphone') {
// var ventana = Titanium.UI.createWindow({
// backgroundImage : 'fondo_chica.png',
// layout : 'vertical'
// });
// };
//
// /**
// * ------- VISTA SUPERIOR -------
// */
// var view_sup = Titanium.UI.createView({
// width : Titanium.UI.FILL,
// height : '60%'
// });
//
// var view_mes_hora = Titanium.UI.createView({
// width : Titanium.UI.SIZE,
// height : Titanium.UI.SIZE,
// top : '15%',
// layout : 'vertical'
// });
//
// var lb_mes = Titanium.UI.createLabel({
// text : 'Ago',
// color : '#FFFFFF',
// font : {
// fontSize : 20
// }
// });
//
// var lb_hora = Titanium.UI.createLabel({
// text : '21:30',
// color : '#FFFFFF',
// top : '-15dp',
// font : {
// fontFamily : 'TitilliumWeb-Light',
// fontSize : 45
// }
// });
//
// view_mes_hora.add(lb_mes);
// view_mes_hora.add(lb_hora);
//
// view_mes_hora.addEventListener('click', function(e) {
// alert('Son las 03:03');
// });
//
// /**
// * ------- VISTA INFERIOR -------
// */
// var view_inf = Titanium.UI.createView({
// // backgroundColor : 'blue',
// width : Titanium.UI.FILL,
// height : '40%',
// layout : 'vertical'
// });
//
// var view_dias = Titanium.UI.createView({
// // backgroundColor : 'purple',
// width : Titanium.UI.FILL,
// height : '25%'
// });
//
// var view_alarma_1 = Titanium.UI.createView({
// // backgroundColor : 'orange',
// width : Titanium.UI.FILL,
// height : '25%',
// layout : 'horizontal'
// });
//
// var view_alarma_2 = Titanium.UI.createView({
// // backgroundColor : 'yellow',
// width : Titanium.UI.FILL,
// height : '25%',
// layout : 'horizontal'
// });
//
// var view_alarma_3 = Titanium.UI.createView({
// // backgroundColor : 'cyan',
// width : Titanium.UI.FILL,
// height : '25%',
// layout : 'horizontal'
// });
//
// for (var i = 1; i < 4; i++) {
// var view_alarma_izq = Titanium.UI.createView({
// // backgroundColor : 'red',
// height : Ti.UI.FILL,
// width : '80%',
// layout : 'horizontal'
// });
//
// var view_ico_campana = Titanium.UI.createView({
// // backgroundColor : 'green',
// width : '20%',
// height : Titanium.UI.FILL,
// layout : 'absolute'
// });
//
// var img_ico_campana = Titanium.UI.createImageView({
// top : '10dp',
// image : 'bell.png',
// height : '25dp'
// });
//
// view_ico_campana.add(img_ico_campana);
//
// var view_hora_desc = Titanium.UI.createView({
// // backgroundColor : 'pink',
// width : '80%',
// height : '98%',
// layout : 'vertical'
// });
//
// var lb_hora_alarma = Titanium.UI.createLabel({
// text : '06:30',
// color : '#FDDAA3',
// left : 0,
// font : {
// fontSize : '25dp',
// fontFamily : 'TitilliumWeb-Bold'
// }
// });
//
// var lb_hora_alarma_desc = Titanium.UI.createLabel({
// text : 'Alarma UAMI',
// color : '#FDDAA3',
// left : 0,
// top : '-10dp',
// font : {
// fontSize : '15dp',
// fontFamily : 'TitilliumWeb-Regular'
// },
// height : Titanium.UI.SIZE
// });
//
// view_hora_desc.add(lb_hora_alarma);
// view_hora_desc.add(lb_hora_alarma_desc);
//
// var view_linea = Titanium.UI.createView({
// backgroundColor : '#FDDAA3',
// width : '100%',
// height : 1
// });
//
// view_hora_desc.add(view_linea);
//
// view_alarma_izq.add(view_ico_campana);
// view_alarma_izq.add(view_hora_desc);
//
// var view_alarma_der = Titanium.UI.createView({
// // backgroundColor : 'blue',
// height : Ti.UI.FILL,
// width : '20%'
// });
//
// // Create a Switch.
// var s_alarma = Ti.UI.createSwitch({
// value : false,
// });
//
// // Listen for change events.
// s_alarma.addEventListener('change', function(e) {
// alert('Event value: ' + e.value + ', switch value: ' + s_alarma.value);
// });
//
// // Add to the parent view.
// view_alarma_der.add(s_alarma);
//
// if (i == 1) {
// view_alarma_1.add(view_alarma_izq);
// view_alarma_1.add(view_alarma_der);
// };
//
// if (i == 2) {
// view_alarma_2.add(view_alarma_izq);
// view_alarma_2.add(view_alarma_der);
// };
//
// if (i == 3) {
// view_alarma_3.add(view_alarma_izq);
// view_alarma_3.add(view_alarma_der);
// };
//
// };
//
// view_sup.add(view_mes_hora);
// ventana.add(view_sup);
//
// view_inf.add(view_dias);
// view_inf.add(view_alarma_1);
// view_inf.add(view_alarma_2);
// view_inf.add(view_alarma_3);
// ventana.add(view_inf);
// ventana.open();
