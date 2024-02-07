
let songs = [
    {
        name: 'Akon - Right Now',
        artist: 'Ariana Grande',
        album: 'Akon',
        date: '2 days ago',
        image: 'images/1st.jpg',
        path: 'audios/Akon - Right Now.mp3',
        duration: '3:22'
    },

    {
        name: 'Arman Cekin & Faydee',
        artist: 'Justin Timberlake',
        album: 'Arman Cekin',
        date: '3 days ago',
        image: 'images/2nd.jpg',
        path: 'audios/Arman Cekin & Faydee.mp3',
        duration: '3:08'
    },

    {
        name: 'Azertion - Feelings (Lyrics)',
        artist: 'Whitney Houston',
        album: 'Azertion',
        date: '1 day ago',
        image: 'images/3rd.jpg',
        path: 'audios/Azertion - Feelings (Lyrics).mp3',
        duration: '2:54'
    },

    {
        name: 'Damon Empero ft. Veronica',
        artist: 'Madonna',
        album: 'Damon Empero',
        date: '3 days ago',
        image: 'images/4th.jpg',
        path: 'audios/Damon Empero ft. Veronica.mp3',
        duration: '3:40'
    },

    {
        name: 'David Guetta - Hey Mama',
        artist: 'Chris Brown',
        album: 'Hey Mama',
        date: '4 days ago',
        image: 'images/5th.jpg',
        path: 'audios/David Guetta - Hey Mama.mp3',
        duration: '2:34'
    },

    {
        name: 'DHARIA - Miles Above',
        artist: 'Lady Gaga',
        album: 'Dharia',
        date: '3 days ago',
        image: 'images/6th.jpg',
        path: 'audios/DHARIA - Miles Above.mp3',
        duration: '2:59'
    },

    {
        name: 'Forever Young ft. Veronica',
        artist: 'Ariana Grande',
        album: 'Forever Young',
        date: '3 days ago',
        image: 'images/7th.jpg',
        path: 'audios/Forever Young ft. Veronica.mp3',
        duration: '3:12'
    },

    {
        name: 'Heuse & Zeus x Crona',
        artist: 'Taylor Swift',
        album: 'Zeus x Crona',
        date: '2 days ago',
        image: 'images/8th.jpg',
        path: 'audios/Heuse & Zeus x Crona.mp3',
        duration: '2:16'
    },

    {
        name: 'Jarico - Island [NCS]',
        artist: 'NCS',
        album: 'Jarico',
        date: '1 day ago',
        image: 'images/9th.jpg',
        path: 'audios/Jarico - Island [NCS].mp3',
        duration: '3:35'
    },

    {
        name: 'Kronicle - [NCS]',
        artist: 'NCS',
        album: 'Kronicle',
        date: '3 days ago',
        image: 'images/10th.jpg',
        path: 'audios/Kronicle - [NCS].mp3',
        duration: '2:00'
    },

]



// -----------------Initialize the variables----------------- //
let songIndex = 0;
let audioElement = new Audio('audios/Akon - Right Now.mp3');
let masterPlay = document.getElementById('masterPlay');
let backward = document.getElementById('backward');
let forward = document.getElementById('forward');
let myProgressBar = document.getElementById('proggres-bar');
let master_img = document.getElementById('master_img');
let mute_audio = document.getElementById('m_audio');
let current_time = document.getElementById('current-time');
let duration =  document.getElementById('duration');
let songItem = Array.from(document.getElementsByClassName('s-card'));



// ---------------Insert values in s-cards--------------- //
songItem.forEach((el, index) => {
    el.querySelectorAll('span')[0].innerText = (index + 1);
    el.querySelectorAll('span')[1].innerText = songs[index].album;
    el.querySelectorAll('span')[2].innerText = songs[index].date;
    el.querySelectorAll('span')[3].innerText = songs[index].duration;
    el.querySelector('h3').innerText = songs[index].name;
    el.querySelector('p').innerText = songs[index].artist;
    el.querySelector('img').setAttribute('src', songs[index].image);


    el.addEventListener('click', (e) => {
        let scr1 = e.target.parentNode.querySelector('img').getAttribute('src');
        document.getElementById('master_img').setAttribute('src', scr1);

        let vl = e.target.parentNode.querySelectorAll('span')[0].innerText;
        // console.log(vl);

        
       audioElement.src = songs[vl-1].path;
       audioElement.play();
       masterPlay.classList.add('fa-pause');
       masterPlay.classList.remove('fa-play');

        songItem.forEach((elm) => {
            elm.classList.remove('active')
        })
        e.target.parentNode.classList.add('active');

    })
})



// --------------- Play/Pause Buttons --------------- //
masterPlay.addEventListener('click', () => {
    if (audioElement.paused) {
        audioElement.play();
        masterPlay.classList.add('fa-pause');
        masterPlay.classList.remove('fa-play');
    } 
    
    else {
        audioElement.pause();
        masterPlay.classList.add('fa-play');
        masterPlay.classList.remove('fa-pause');
    }
})



// ---------------- Forward/Backward Buttons ----------------- //
forward.addEventListener('click', () => {
    if (songIndex < songs.length -1) {
        songIndex++  
    } 
    
    else {
        songIndex = 0;
    }

    audioElement.src = songs[songIndex].path;
    audioElement.play();

    masterPlay.classList.add('fa-pause');
    masterPlay.classList.remove('fa-play');

    master_img.setAttribute('src', songs[songIndex].image);
})

backward.addEventListener('click', () => {
    if (songIndex > 0) {
        songIndex--
    } 
    
    else {
        songIndex = songs.length - 1
    }

    audioElement.src = songs[songIndex].path;
    audioElement.play();

    masterPlay.classList.add('fa-pause');
    masterPlay.classList.remove('fa-play');

    master_img.setAttribute('src', songs[songIndex].image);
})



// ----------------- Mute Button ----------------- //
mute_audio.addEventListener('click', () => {
    if (audioElement.muted) {
        audioElement.muted = false;
        mute_audio.classList.add('fa-volume-high');
        mute_audio.classList.remove('fa-volume-xmark');

    } else {
        audioElement.muted = true;
        mute_audio.classList.add('fa-volume-xmark');
        mute_audio.classList.remove('fa-volume-high');
    }
})




// ---------------- Proggres Bar --------------- //

audioElement.addEventListener('timeupdate', () => {
    let a1 = parseInt(audioElement.duration);
    // console.log(a1);
    let a2 = parseInt(audioElement.currentTime);
    // console.log(a2);
    
    duration.innerText = timecal(a1);
    current_time.innerText = timecal(a2);

    myProgressBar.value = parseInt(audioElement.currentTime / audioElement.duration * 1000);

    if (audioElement.currentTime == audioElement.duration) {
        masterPlay.classList.add('fa-play');
        masterPlay.classList.remove('fa-pause');
    }

})


myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value / 1000 * audioElement.duration;
})


// -------------- Calculate time in min and sec -------------- //

function timecal(time) {
    let min = parseInt(time / 60);
    let sec = parseInt(time % 60);

    if (sec < 10) {
        return min + ':0' + sec;
    } 
    else {
        return min + ':' + sec;
    }
}












