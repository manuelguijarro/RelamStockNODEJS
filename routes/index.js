import express from 'express';


const indexRouter = express.Router();

/* GET home page. */

//¿Se hacen async o no?Buscar esta solucion
indexRouter.get('/',/*¿async?*/  (req, res) => {
  try {
    //Se pasa el objeto para obtener luego sus  
    //propiedades en la vista
    res.render('index', { title: 'RelamStock' });
  } catch (error) {
    throw error;
  }
});

export { indexRouter };