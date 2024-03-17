
const validarCampos = (req, res, next) => {
    const { title, director, genre, rate, duration, poster } = req.body;
    
  
    if (!title || !director || !genre || !rate || !duration || !poster) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

   
    next();
};


const validarAnio = (req, res, next) => {
    const { year } = req.body;

   
    if (year && year.length !== 4) {
        return res.status(400).json({ error: 'El año debe tener exactamente 4 dígitos' });
    }

    
    next();
};




module.exports = {validarCampos,validarAnio }