const renderCard = require("./renderCard");
const axios = require("axios")



$(document).ready(function() {
   
    $.get('https://students-api.2.us-1.fl0.io/movies', function(data) {
        renderCard(data);
    }).fail(function() {
        console.error('There was a problem with the request');
    });

})
