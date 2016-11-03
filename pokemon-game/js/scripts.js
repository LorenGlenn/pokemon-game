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
           $("#pokemon").append("<li value = '" + (i+1) +"'>" + nameArray[i] + "</li>");
         }

         $('li').click(function(){
           identifier = $(this).val();
           settingsApi.url = ("http://www.pokeapi.co/api/v2/pokemon/" + identifier + "/")
           $.ajax(settingsApi).done(function(dataReturned){
             var image = dataReturned.sprites.front_default;
               $("#pokeImage").append("<img src='" + image + "'>");
           });
         });
       });




 });
