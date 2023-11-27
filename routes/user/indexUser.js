import Express from 'express';


const indexUserRouter = Express.Router();

/* GET home page. */

//¿Se hacen async o no?Buscar esta solucion
indexUserRouter.get('/',/*¿async?*/(req, res) => {
  try {
    //Se pasa el objeto para obtener luego sus  
    //propiedades en la vista
    res.render('user/indexUser', { title: 'RelamStock,Area usuario' });
  } catch (error) {
    throw error;
  }
});

export { indexUserRouter };