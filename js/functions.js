
let bandcampLinks = document.getElementsByClassName('bandcamp-link');

for (var i = 0; i < bandcampLinks.length; i++) {
   bandcampLinks[i].addEventListener('click', function (e) {
      e.stopPropagation();
   });
}


let songElements = document.getElementsByClassName('song');

//for (var i = 0; i < songElements.length; i++) {
//   /*
//      Ensure that on mouseover, CSS styles don't get messed up for active songs.
//   */
//   //songElements[i].addEventListener('mouseover', function () {
//   //  // this.style.backgroundColor = '#00A0FF';

//   //   this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#FFFFFF';
//   //   this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#FFFFFF';

//   //   if (!this.classList.contains('amplitude-active-song-container')) {
//   //      this.querySelectorAll('.play-button-container')[0].style.display = 'block';
//   //   }

//   //   this.querySelectorAll('img.bandcamp-grey')[0].style.display = 'none';
//   //   this.querySelectorAll('img.bandcamp-white')[0].style.display = 'block';
//   //   this.querySelectorAll('.song-duration')[0].style.color = '#FFFFFF';
//   //});

//   /*
//      Ensure that on mouseout, CSS styles don't get messed up for active songs.
//   */
//   songElements[i].addEventListener('mouseout', function () {
//      this.style.backgroundColor = '#FFFFFF';
//      this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#272726';
//      this.querySelectorAll('.play-button-container')[0].style.display = 'none';
//      this.querySelectorAll('.song-duration')[0].style.color = '#607D8B';
//   });

//   /*
//      Show and hide the play button container on the song when the song is clicked.
//   */
//   songElements[i].addEventListener('click', function () {
//      this.querySelectorAll('.play-button-container')[0].style.display = 'none';
//   });
//}

/*
   Initializes AmplitudeJS
*/
Amplitude.init({
   continue_next: false,
   callbacks: {
      song_change: function () {
         
      }
   },
   "songs": [
      {
         "name": "The Gun",
         "artist": "Lorn",
         "url": "songs/song9.mp3",
      },
      {
         "name": "Anvil",
         "artist": "Lorn",
         "url": "../songs/LORN - ANVIL.mp3",
      },
      {
         "name": "I Came Running",
         "artist": "Ancient Astronauts",
         "url": "../songs/ICameRunning-AncientAstronauts.mp3",
      },
      {
         "name": "First Snow",
         "artist": "Emancipator",
         "url": "../songs/FirstSnow-Emancipator.mp3",
      },
      {
         "name": "Terrain",
         "artist": "pg.lost",
         "url": "../songs/Terrain-pglost.mp3",
      },
      {
         "name": "Vorel",
         "artist": "Russian Circles",
         "url": "../songs/Vorel-RussianCircles.mp3",
      },
      {
         "name": "Intro / Sweet Glory",
         "artist": "Jimkata",
         "url": "../songs/IntroSweetGlory-Jimkata.mp3",
      },
      {
         "name": "Offcut #6",
         "artist": "Little People",
         "url": "../songs/Offcut6-LittlePeople.mp3",
      },
      {
         "name": "Dusk To Dawn",
         "artist": "Emancipator",
         "url": "../songs/DuskToDawn-Emancipator.mp3",
      },
      {
         "name": "Anthem",
         "artist": "Emancipator",
         "url": "../songs/Anthem-Emancipator.mp3",
      }
   ]
});