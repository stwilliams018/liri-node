require("dotenv").config();
var fs = require("fs");
var key = require("./key.js");
var axios = require("axios");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(key.spotify);
var moment = require('Moment');
var fs = require('fs')


var action = process.argv[2];
var required =  process.argv[3];


switch (action) {
    case "concert-this":
      concert();
      break;
    
    case "spotify-this-song":
      song();
      break;
    
    case "movie-this":
      movie();
      break;
    
    case "do-what-it-says":
      dwis();
      break;
    }


// on the concert info below I cannot get the correct data to pull. according to the diocumentation (and the example there) 
//and the upcoming to the end should pull each event back but instead i just get artist info.  
//I added that in my liri bot to show it works and also add in the corrct ones i would use. I plan to revisit this but wanted to get a submission in as these are already late
    function concert(){
      axios.get("https://rest.bandsintown.com/artists/" + required + "?app_id=codingbootcamp&date=upcoming").then(
        function(response) {
          console.log("-----------------------------------");
          console.log("          Concert Info               ");
          console.log(" ");
          console.log("Artist: " + response.data.name);
          console.log("Fan Tracker: " + response.data.tracker_count);
          console.log("Show Tracker: " + response.data.upcoming_event_count);
          console.log(" ");
          console.log("-----------------------------------");
        }

         // for (i =0, 1 < response.length, i++){

           // console.log("-----------------------------------");
          //  console.log("          Concert Info               ");
         //   console.log(" ");
          //  console.log("Name of Venue: " + response.data[i].venue.name);
          //  console.log("Venue Location: " + response.data[i].venue.city);
          //  var formattedTime = moment(parsed[i].datetime, "YYYY-MM-DD HH:mm:ss").format("MM-DD-YYYY")
         //   console.log("Date of Event: " + formattedTime);
          //  console.log(" ");
           // console.log("-----------------------------------"); 


          //}
     
        
        
       ) }
      

    function song(){
      spotify.search({
        type: 'track',
        query: required
      }, function(error,response){
          console.log("-----------------------------------");
          console.log("          Track Info               ");
          console.log(" ");
          console.log("Artist: " + response.tracks.items[0].artists[0].name);
          console.log("Song: " + response.tracks.items[0].name);
          console.log("Preview: " + response.tracks.items[0].preview_url);
          console.log("Album: " + response.tracks.items[0].album.name);
          console.log(" ");
          console.log("-----------------------------------");
          
        }
      )}
   
    function movie(){
      axios.get("http://www.omdbapi.com/?t="+ required + "&y=&plot=short&apikey=trilogy").then(
        function(response) {
          console.log("-----------------------------------");
          console.log("          Movie Info               ");
          console.log(" ");
          console.log("The Movie's Title : " + response.data.Title);
          console.log("The Year the Movie Came Out : " + response.data.Released);
          console.log("IMDB Rating of the Movie : " + response.data.imdbRating);
          console.log("Rotten Tomatoes Score : " + response.data.Ratings[1].Value);
          console.log("Country of Production : " + response.data.Country);
          console.log("Language of Movie : " + response.data.Language);
          console.log("The Movie's Plot : " + response.data.Plot);
          console.log("Actors in the Movie : " + response.data.Actors);
          console.log(" ");
          console.log("-----------------------------------");
          }
      );
    }
     
    
   function dwis(){
    console.log("DWIS")
    fs.readFile("random.txt", "utf8", function(error, data) {

      if (error) {
        return console.log(error);
      }
      else{

      }})
// I have not been able to determin the next steps for this ideally we  would 
// return text data from file
// determine which liri command it was applicable
// run the function associated with the text from file as the 'required variable'
// results would then be displayed as per liri functionality


    }

    console.log(required)