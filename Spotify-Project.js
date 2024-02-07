// ----------------information about songs----------------
let songs = [
    {
        name: 'Akon - Right Now',
        artist: 'Ariana Grande',
        album: 'Akon',
        date: '2 days ago',
        image: 'images/1st.jpg',
        path: 'audios/Akon - Right Now.mp3',
        duration: '3:12'
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
        duration: '3:22'
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

    {
        name: 'NCS release- HIGH',
        artist: 'NCS',
        album: 'High',
        date: '5 days ago',
        image: 'images/11th.jpg',
        path: 'audios/NCS release- HIGH.mp3',
        duration: '2:00'
    },

    {
        name: 'TheFatRat - Rise Up',
        artist: 'Rihanna',
        album: 'Rise Up',
        date: '2 days ago',
        image: 'images/12th.jpg',
        path: 'audios/TheFatRat - Rise Up.mp3',
        duration: '2:49'
    },

    {
        name: 'Tobu & Itro - [NCS]',
        artist: 'NCS',
        album: 'Tobu & Itro',
        date: '3 days ago',
        image: 'images/13th.jpg',
        path: 'audios/Tobu & Itro - [NCS].mp3',
        duration: '4:08'
    },

    {
        name: 'WildStarry - Anywhere',
        artist: 'Whitney Houston',
        album: 'WildStarry ',
        date: '3 days ago',
        image: 'images/14th.jpg',
        path: 'audios/WildStarry - Anywhere.mp3',
        duration: '3:24'
    },

    {
        name: 'William Black - Deep End',
        artist: 'Katy Perry',
        album: 'Deep End',
        date: '2 days ago',
        image: 'images/15th.jpg',
        path: 'audios/William Black - Deep End.mp3',
        duration: '3:28'
    },

]


// -----------------Initialize the variables-----------------
var songIndex = 0;
let audioElement = new Audio('audios/Akon - Right Now.mp3');
let masterPlay = document.getElementById("masterPlay");
let backward = document.getElementById("backward");
let forward = document.getElementById("forward");
let myProgressBar = document.getElementById("proggres-bar");
let master_img = document.getElementById("master_img");
let m_audio = document.getElementById("m_audio");
let current_time = document.getElementById("current-time");
let duration = document.getElementById("duration");
let tog_btn = document.getElementById("tog-btn");
let songItem = Array.from(document.getElementsByClassName("s-card"));


// ---------------insert values in s-cards---------------
songItem.forEach((el, i) => {
    el.querySelectorAll('span')[0].innerText = (i + 1);
    el.querySelectorAll('span')[1].innerText = songs[i].album;
    el.querySelectorAll('span')[2].innerText = songs[i].date;
    el.querySelectorAll('span')[3].innerText = songs[i].duration;
    el.querySelector('h3').innerText = songs[i].name;
    el.querySelector('p').innerText = songs[i].artist;
    el.querySelector('img').setAttribute('src', songs[i].image);


    el.addEventListener('click', (e) => {
        // console.log(e.target.parentNode);

        let vl = e.target.parentNode.querySelectorAll('span')[0].innerText;
        // console.log(vl-1);

        songIndex = vl - 1;

        audioplay(songIndex);

        active(songIndex);
    })
})




// ---------------------Play/Pause button---------------------

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
    active(songIndex);
})


// ------------------forward/backward button------------------

forward.addEventListener('click', () => {
    if (songIndex < songs.length - 1) {
        songIndex++;
    } else {
        songIndex = 0;
    }

    audioplay(songIndex);

    active(songIndex);
})
backward.addEventListener('click', () => {
    if (songIndex > 0) {
        songIndex--;
    } else {
        songIndex = (songs.length - 1);
    }

    audioplay(songIndex);

    active(songIndex);
})



// -----------------mute button-----------------

m_audio.addEventListener('click', () => {
    if (audioElement.muted) {
        audioElement.muted = false;
        m_audio.classList.remove('fa-volume-xmark');
        m_audio.classList.add('fa-volume-high');
    }
    else {
        audioElement.muted = true;
        m_audio.classList.add('fa-volume-xmark');
        m_audio.classList.remove('fa-volume-high');
    }
})



// --------------------progress bar--------------------

audioElement.addEventListener('timeupdate', () => {
    let a1 = parseInt(audioElement.duration);
    let a2 = parseInt(audioElement.currentTime);
    duration.innerText = timecal(a1);
    current_time.innerText = timecal(a2);
    myProgressBar.value = parseInt(audioElement.currentTime / audioElement.duration * 1000);

    if (audioElement.duration == audioElement.currentTime) {
        if (tog_btn.classList.contains('fa-toggle-on') && (songIndex < songItem.length - 1)) {
            songIndex++;

            audioplay(songIndex);
            active(songIndex);
        }
        else {
            masterPlay.classList.remove('fa-pause');
            masterPlay.classList.add('fa-play');
        }
    }

})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value / 1000 * audioElement.duration;
})


// --------------calculate time in min and sec--------------

function timecal(time) {

    let min = parseInt(time / 60);
    let sec = time % 60;
    if (sec < 10) {
        return min + ':0' + sec;
    }
    else {
        return min + ':' + sec;
    }
}


// -------------audio play function-------------

function audioplay(indx) {
    audioElement.src = songs[indx].path;
    audioElement.play()
    masterPlay.classList.add('fa-pause');
    masterPlay.classList.remove('fa-play');
    let sng = songs[indx].image;
    master_img.setAttribute('src', sng);
}




// -----------------add active class-----------------

function active(indx) {
    songItem.forEach((elm) => {
        elm.classList.remove('active')
    })
    songItem[indx].classList.add('active');
}


// ------------------autoplay button------------------

tog_btn.addEventListener('click', (e) => {
    e.target.classList.toggle('fa-toggle-off');
    e.target.classList.toggle('fa-toggle-on');
    if (e.target.classList.contains('fa-toggle-on')) {
        e.target.style.color = 'var(--green)';
    }
    else {
        e.target.style.color = 'var(--white)';
    }
})