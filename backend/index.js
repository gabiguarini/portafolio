'use strict'

var mongoose = require('mongoose');
var app = require('./app.js');
var port = 3700;

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/portafolio', { useNewUrlParser:true, useUnifiedTopology: true })
		.then(() => {
			console.log("Conexión con la db exitosa");

			//creacion del servidor
			app.listen(port, () => {
				console.log("Servidor funciona correctamente en localhost:3700");
			});

		})
		.catch(err => console.log(err));
