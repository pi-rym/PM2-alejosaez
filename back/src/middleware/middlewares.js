
const validarCampos = (req, res, next) => {
    const { title, director, genre, rate, duration, poster } = req.body;
    
  
    if (!title || !director || !genre || !rate || !duration || !poster) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

   
    next();
};


const validarAnio = (req, res, next) => {
    const { year } = req.body;

   
    if (isNaN(year) || year.toString().length !== 4) {
        return res.status(400).json({ error: 'El año debe ser un número de 4 dígitos' });
    }
    
    next();
};




module.exports = {validarCampos,validarAnio }