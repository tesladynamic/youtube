// İstediğin YouTube videolarını buraya ekleyebilirsin
const playlist = [
    {
        title: "Lofi Girl - Relaxing Beats",
        id: "jfKfPfyJRdk",
        thumb: "https://img.youtube.com/vi/jfKfPfyJRdk/hqdefault.jpg"
    },
    {
        title: "Synthwave Radio - Chill Beats",
        id: "4xDzrJKXOOY",
        thumb: "https://img.youtube.com/vi/4xDzrJKXOOY/hqdefault.jpg"
    },
    {
        title: "Classical Piano Music",
        id: "4Tr0otuiQuU",
        thumb: "https://img.youtube.com/vi/4Tr0otuiQuU/hqdefault.jpg"
    }
];

const videoListEl = document.getElementById('videoList');
const ytPlayer = document.getElementById('ytPlayer');
const videoTitleEl = document.getElementById('videoTitle');

function init() {
    videoListEl.innerHTML = '';
    
    playlist.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'video-item';
        if (index === 0) div.classList.add('active');

        div.innerHTML = `
            <img src="${item.thumb}" alt="${item.title}">
            <span>${item.title}</span>
        `;

        div.addEventListener('click', () => {
            // Aktif sınıfını değiştir
            document.querySelectorAll('.video-item').forEach(el => el.classList.remove('active'));
            div.classList.add('active');

            // Tıklanan videoyu YÖNLENDirmeden doğrudan sayfa içindeki iframe'e yükle ve oynat
            ytPlayer.src = `https://www.youtube.com/embed/${item.id}?autoplay=1`;
            videoTitleEl.textContent = item.title;
        });

        videoListEl.appendChild(div);
    });

    // İlk açılışta ilk videoyu yükle
    if (playlist.length > 0) {
        ytPlayer.src = `https://www.youtube.com/embed/${playlist[0].id}?autoplay=1`;
        videoTitleEl.textContent = playlist[0].title;
    }
}

init();
