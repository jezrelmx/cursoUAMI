var arreglo_colores = ['#BF360C', '#D84315', '#E64A19', '#F4511E', '#FF5722', '#FF7043', '#FF8A65', '#FFAB91', '#FFCCBC', '#FBE9E7'];
var arreglo_medidas = ['90%', '80%', '70%', '60%', '50%', '40%', '30%', '20%', '10%'];
var ventana = Titanium.UI.createWindow({
	backgroundColor : arreglo_colores[0]
});

for (var i = 1; i < arreglo_colores.length; i++) {
	var vista = Titanium.UI.createView({
		backgroundColor : arreglo_colores[i],
		width : arreglo_medidas[i - 1],
		height : arreglo_medidas[i - 1]
	});

	ventana.add(vista);
};

ventana.open();