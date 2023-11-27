import express from 'express';


const indexUserRouter = express.Router();

/* GET home page. */

//¿Se hacen async o no?Buscar esta solucion
indexUserRouter.get('/',/*¿async?*/(req, res) => {
  try {
    //Se pasa el objeto para obtener luego sus  
    //propiedades en la vista
    res.render('admin/indexAdmin', { title: 'RelamStock,Area administrador' });
  } catch (error) {
    throw error;
  }
});

export { indexUserRouter }; 