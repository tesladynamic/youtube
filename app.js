// Örnek video listesi (Buraya kendi 720p optimize MP4 video linklerini ekleyebilirsin)
const videos = [
    {
        title: "Örnek Video 1 - Doğa Manzarası",
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&q=80"
    },
    {
        title: "Örnek Video 2 - Elele Yolculuk",
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        thumbnail: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&q=80"
    },
    {
        title: "Örnek Video 3 - Sürüş Keyfi",
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        thumbnail: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=300&q=80"
    }
];

const videoListEl = document.getElementById('videoList');
const videoPlayer = document.getElementById('videoPlayer');
const videoTitleEl = document.getElementById('videoTitle');

// Videoları sol menüye listeleme
function loadVideoList() {
    videoListEl.innerHTML = '';
    videos.forEach((video, index) => {
        const item = document.createElement('div');
        item.classList.add('video-item');
        if (index === 0) item.classList.add('active'); // İlk video seçili başlasın

        item.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title}">
            <span>${video.title}</span>
        `;

        item.addEventListener('click', () => {
            // Aktif sınıfını güncelle
            document.querySelectorAll('.video-item').forEach(el => el.classList.remove('active'));
            item.classList.add('active');

            // Videoyu değiştir ve oynat
            videoPlayer.src = video.url;
            videoTitleEl.textContent = video.title;
            videoPlayer.play();
        });

        videoListEl.appendChild(item);
    });

    // Sayfa ilk açıldığında ilk videoyu yükle
    if (videos.length > 0) {
        videoPlayer.src = videos[0].url;
        videoTitleEl.textContent = videos[0].title;
    }
}

// Uygulamayı başlat
loadVideoList();
