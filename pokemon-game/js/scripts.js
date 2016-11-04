var result, nameArray, urlArray, identifier;
var settingsApi = {
  "async": true,
  "crossDomain": true,
  "method": "GET",
  "headers": {},
  "data": "{}"
}

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

$(document).ready(function(){
  //  $('#start').click(function(){
       settingsApi.url = "http://www.pokeapi.co/api/v2/pokemon/?limit=150";
       $.ajax(settingsApi).done(function(dataReturned){
         result = dataReturned;

         nameArray = result.results.map(function(a){
           return a.name;
         });
         urlArray = result.results.map(function(a){
           return a.url;
         });
         for (var i=0;i<nameArray.length;i++){
           $("#pokemon").append("<div class='pokeImage' id='" + nameArray[i] + "'>" + nameArray[i] + "</div>");
         }

         $('.pokeImage').click(function(){
           identifier = $(this).text();
           settingsApi.url = ("http://www.pokeapi.co/api/v2/pokemon/" + identifier + "/")
           $.ajax(settingsApi).done(function(dataReturned){
             result = dataReturned;
             var image = result.sprites.front_default;
               $("#" + identifier).append("<img src='" + image + "'>");
               for (i=0;i<=3;i++){
                 $("#" + identifier).append("<li>" + result.stats[i].stat.name + ": " + result.stats[i].base_stat + "</li>");
               }
               $("#" + identifier).slideDown();
           });
         });
       });




 });
