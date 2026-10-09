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


//  track 1 

const trackElements = document.querySelectorAll(".track"); 
const t1 = await (await fetch (`https://api.spotify.com/v1/tracks/${trackID1}`, { 

  headers: { Authorization: `Bearer ${accessToken}` }  

})).json() ; 

  trackElements[0].querySelector(".track-title").textContent = t1.name; 

  trackElements[0].querySelector("img").src = t1.album.images[0].url; 

  trackElements[0].querySelector(".track-album").textContent = t1.album.name; 

  trackElements[0].querySelector(".track-duration").textContent = convertMsToMinSec(t1.duration_ms); 

 //  track 2 

const t2 = await (await fetch(`https://api.spotify.com/v1/tracks/${trackID2}`, { 

  headers: { Authorization: `Bearer ${accessToken}` }  

})).json() ; 

  trackElements[1].querySelector(".track-title").textContent = t2.name; 

  trackElements[1].querySelector("img").src = t2.album.images[0].url; 

  trackElements[1].querySelector(".track-album").textContent = t2.album.name; 

  trackElements[1].querySelector(".track-duration").textContent = convertMsToMinSec(t2.duration_ms); 

 // track 3 

const t3 = await (await fetch(`https://api.spotify.com/v1/tracks/${trackID3}`, { 

  headers: { Authorization: `Bearer ${accessToken}` }  

})).json() ; 

  trackElements[2].querySelector(".track-title").textContent = t3.name; 

  trackElements[2].querySelector("img").src = t3.album.images[0].url; 

  trackElements[2].querySelector(".track-album").textContent = t3.album.name; 

  trackElements[2].querySelector(".track-duration").textContent = convertMsToMinSec(t3.duration_ms); 


  // albums 
const albumCards = document.querySelectorAll(".album-card"); 

async function loadAlbum(albumID, card) { 
  const response = await fetch( `https://api.spotify.com/v1/albums/${albumID}`, 

    { headers: { Authorization: `Bearer ${accessToken}` } } 

    ); 

  const album = await response.json(); 

  card.querySelector("img").src = album.images[0].url; 
  card.querySelector("h3").textContent = album.name; 
  card.querySelector("p").textContent = 

    `${album.release_date.slice(0, 4)} • ${album.album_type}`; 

  } 

 

await loadAlbum(albumID1, albumCards[0]); 
await loadAlbum(albumID2, albumCards[1]); 

await loadAlbum(albumID3, albumCards[2]); 

await loadAlbum(albumID4, albumCards[3]);
  
}
load();

