// İstediğin YouTube videolarını buraya ekleyebilirsin.
// videoId kısmına YouTube bağlantısındaki ?v= sonrasındaki kodu yazman yeterlidir.
const videos = [
    {
        title: "Lofi Girl - Relaxing Beats to Study/Code to",
        videoId: "jfKfPfyJRdk",
        thumbnail: "https://img.youtube.com/vi/jfKfPfyJRdk/hqdefault.jpg"
    },
    {
        title: "Synthwave Radio - Chill Synth / Retro Beats",
        videoId: "4xDzrJKXOOY",
        thumbnail: "https://img.youtube.com/vi/4xDzrJKXOOY/hqdefault.jpg"
    },
    {
        title: "Classical Piano Music for Working and Studying",
        videoId: "4Tr0otuiQuU",
        thumbnail: "https://img.youtube.com/vi/4Tr0otuiQuU/hqdefault.jpg"
    },
    {
        title: "Jazz & Bossa Nova Acoustic Cafe",
        videoId: "Dx5qFachd3A",
        thumbnail: "https://img.youtube.com/vi/Dx5qFachd3A/hqdefault.jpg"
    }
];

const videoListEl = document.getElementById('videoList');
const youtubePlayer = document.getElementById('youtubePlayer');
const videoTitleEl = document.getElementById('videoTitle');

function renderVideoList() {
    videoListEl.innerHTML = '';
    
    videos.forEach((video, index) => {
        const card = document.createElement('div');
        card.classList.add('video-card');
        if (index === 0) card.classList.add('active');

        card.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title}" class="video-thumbnail">
            <div class="video-info">
                <h4>${video.title}</h4>
            </div>
        `;

        card.addEventListener('click', () => {
            // Aktif sınıfını değiştir
            document.querySelectorAll('.video-card').forEach(el => el.classList.remove('active'));
            card.classList.add('active');

            // Videoyu yükle ve otomatik oynat
            youtubePlayer.src = `https://www.youtube.com/embed/${video.videoId}?autoplay=1`;
            videoTitleEl.textContent = video.title;
        });

        videoListEl.appendChild(card);
    });

    // Sayfa açıldığında ilk videoyu otomatik yükle
    if (videos.length > 0) {
        youtubePlayer.src = `https://www.youtube.com/embed/${videos[0].videoId}?autoplay=1`;
        videoTitleEl.textContent = videos[0].title;
    }
}

// Uygulamayı başlat
renderVideoList();
