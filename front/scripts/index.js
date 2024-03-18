const renderCard = require("./renderCard");
const axios = require("axios");

$(document).ready(function () {
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/movies');
            console.log(response);
            const data = response.data;
            renderCard(data);
        } catch (err) {
            alert("Error: " + err.message);
            // No se hace nada en caso de error, no se renderiza nada
        }
    };

    fetchData();

});

// $(document).ready(function () {
//     // Event listener para el envío del formulario
//     $('#movieForm').submit(async function (event) {
//         event.preventDefault(); // Evitar el comportamiento predeterminado de recargar la página

//         const movieData = {
//             title: $('#title').val(),
//             poster: $('#post').val(),
//             director: $('#director').val(),
//             year: $('#year').val(),
//             duration: $('#duracion').val(),
//             genre: $('#genre').val().split(',').map(genre => genre.trim()), // Convertir a un array de géneros
//             rate: $('#rate').val()
//         };
//         console.log("Estoy en index.js después de recuperar los datos del formulario", movieData);

//         // Realizar la solicitud al backend utilizando axios
//         try {
//             const response = await axios.post('http://localhost:3000/movies', movieData);
//             console.log("Respuesta del envío al backend:", response);
//             if (response.status !== 201) {
//                 throw new Error('Error al guardar la película');
//             }
//             // Si el POST es exitoso, puedes hacer algo como mostrar un mensaje de éxito al usuario, etc.
//             alert('Película guardada con éxito');
//             // Limpiar el formulario después de enviar los datos
//             $('#movieForm')[0].reset();
//         } catch (error) {
//             alert('Error al guardar la película: ' + error.message);
//         }
//     });
// });