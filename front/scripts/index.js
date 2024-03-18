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
            
        }
    };

    fetchData();

});

