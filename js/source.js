// *********************************************************************
// Homework 4 APIs
// *********************************************************************

function convertMsToMinSec(ms) {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const paddedSeconds = String(seconds).padStart(2, '0');
  return `${minutes}:${paddedSeconds}`;
}

// **************** Update code below  **************** 


// IDs and secret token should come from Spotify
localStorage.setItem("artist_id", "4iJLPqClelZOBCBifm8Fzv");
localStorage.setItem("access_token", "BQCKEnAeWLWcVdo1nYZDrhvigbG3LExMFMStwIgMKfIVxSn0xQx5yt2Q3bQJU6-oNa7wuvVJLpUxqWHW6k-Z65SkVS6I6OzVq4AHi72EIzhmSv7q8fW_XN3-YK2EcPe8pnkl-PCbguv_");
localStorage.setItem("track_id_1", "55z9JKoPKREhOv1bppouag");
localStorage.setItem("track_id_2", "3Fnf4J72Y1ImGILcAh1Z2s");
localStorage.setItem("track_id_3", "6u9Rx9oQbS949L5udUvYzi");

localStorage.setItem("album_id_1", "661Hz0qJK8WIp7vAWsqKvk"); // collide with the sky
localStorage.setItem("album_id_2", "4wIX07SiESzMbSLCK3qCWQ"); // misadventures
localStorage.setItem("album_id_3", "6LkthUHeWKSJsXhjs7SXFq"); // flair for the dramatic
localStorage.setItem("album_id_4", "01dcOm8Whefyve6zChrq9Q"); // selfish mashines

async function load(){
    
    let artistID = localStorage.getItem("artist_id");
    let accessToken = localStorage.getItem("access_token");
    let trackID1 = localStorage.getItem("track_id_1");
    let trackID2 = localStorage.getItem("track_id_2");
    let trackID3 = localStorage.getItem("track_id_3");
    
    let albumID1 = localStorage.getItem("album_id_1");
    let albumID2 = localStorage.getItem("album_id_2");
    let albumID3 = localStorage.getItem("album_id_3");
    let albumID4 = localStorage.getItem("album_id_4");


// artist fetch 

const artistResponse = await fetch(`https://api.spotify.com/v1/artists/${artistID}`, { 

  headers: { Authorization: `Bearer ${accessToken}` }  

}); 

 const artist = await artistResponse.json(); 

  document.querySelector("#artist-name").textContent = artist.name; 

  document.querySelector(".artist-image img").src = artist.images[0].url; 




    
}
load();

