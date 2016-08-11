if (Titanium.Platform.osname == 'android') {
	var ventana = Titanium.UI.createWindow({
		backgroundImage : '/images/fondo_chica.png',
		theme: 'materialThemeNoAB',
		layout : 'vertical'
	});
};

if (Titanium.Platform.osname == 'iphone') {
	var ventana = Titanium.UI.createWindow({
		backgroundImage : 'fondo_chica.png',
		layout : 'vertical'
	});
};

/**
 * ------- VISTA SUPERIOR -------
 */
var view_sup = Titanium.UI.createView({
	backgroundColor : 'red',
	opacity : 0.5,
	width : Titanium.UI.FILL,
	height : '60%'
});

var view_mes_hora = Titanium.UI.createView({
	backgroundColor : 'pink',
	opacity : 0.5,
	width : Titanium.UI.SIZE,
	height : Titanium.UI.SIZE,
	top : '15%',
	layout : 'vertical'
});

var lb_mes = Titanium.UI.createLabel({
	text : 'Ago',
	color : '#FFFFFF',
	font : {
		fontSize : 20
	}
});

var lb_hora = Titanium.UI.createLabel({
	text : '21:30',
	color : '#FFFFFF',
	top : '-15dp',
	font : {
		fontFamily: 'TitilliumWeb-Light',
		fontSize : 45
	}
});

view_mes_hora.add(lb_mes);
view_mes_hora.add(lb_hora);

/**
 * ------- VISTA INFERIOR -------
 */
var view_inf = Titanium.UI.createView({
	backgroundColor : 'blue',
	opacity : 0.5,
	width : Titanium.UI.FILL,
	height : '40%',
	layout : 'vertical'
});

var view_dias = Titanium.UI.createView({
	backgroundColor : 'purple',
	opacity : 0.5,
	width : Titanium.UI.FILL,
	height : '25%'
});

var view_alarma_1 = Titanium.UI.createView({
	backgroundColor : 'orange',
	opacity : 0.5,
	width : Titanium.UI.FILL,
	height : '25%'
});

var view_alarma_2 = Titanium.UI.createView({
	backgroundColor : 'yellow',
	opacity : 0.5,
	width : Titanium.UI.FILL,
	height : '25%'
});

var view_alarma_3 = Titanium.UI.createView({
	backgroundColor : 'cyan',
	opacity : 0.5,
	width : Titanium.UI.FILL,
	height : '25%'
});

view_sup.add(view_mes_hora);
ventana.add(view_sup);

view_inf.add(view_dias);
view_inf.add(view_alarma_1);
view_inf.add(view_alarma_2);
view_inf.add(view_alarma_3);
ventana.add(view_inf);
ventana.open();
