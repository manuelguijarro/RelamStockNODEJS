import Express from 'express';


const indexRouter = Express.Router();

/* GET home page. */

//¿Se hacen async o no?Buscar esta solucion
indexRouter.get('/',/*¿async?*/  function (req, res) {
  try {
    //Se pasa el objeto para obtener luego sus  
    //propiedades en la vista
    res.render('index', { title: 'RelamStock' });
  } catch (error) {
    throw error;
  }
});

export { indexRouter };