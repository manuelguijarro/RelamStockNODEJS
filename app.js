//Importaciones que necesitamos para ejecutar 
import  { express }  from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

//Importaciones de enrutadores internos.
import {indexRouter} from './routes/index.mjs';
import {indexAdminRouter} from './routes/admin/indexAdmin.mjs';
import {indexUserRouter} from './routes/user/indexUser.mjs';
const app = express();

//Necesitamos la variable __dirname para luego 
//utilizarlo en los set(para que conozca la ruta)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Configuración de Pug
//METODOS set()
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middleware para servir archivos estáticos desde el directorio 'public'
//METODOS use()
app.use(express.static(path.join(__dirname, 'public')));

/*
Configurar base de datos
esto tiene que estar en un js independiente
const pool = mariadb.createPool({
  host: 'localhost',
  user: 'manuel',
  password: 'manuel',
  database: 'projectnode',
  connectionLimit: 5, // ajusta según sea necesario
});
export default pool;
*/


//CREACION DE PUERTO Y CONEXION CON METODO listen()

//Puerto
const PORT = process.env.PORT || 3000;

//Ponemos la aplicacion a escuchar en el puerto.


app.listen(PORT,() => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});


//MODIFICAR APARTIR DE ABAJO

/*
Comprobar para que sirven estos metodos que se nos 
precargan en la plantilla
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
*/

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
