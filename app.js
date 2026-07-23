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
    }
];

const videoListEl = document.getElementById('videoList');
const youtubePlayer = document.getElementById('youtubePlayer');
const videoTitleEl = document.getElementById('videoTitle');

function renderVideoList() {
    videoListEl.innerHTML = '';
    
    videos.forEach((video) => {
        const card = document.createElement('div');
        card.classList.add('video-card');

        card.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title}" class="video-thumbnail">
            <div class="video-info">
                <h4>${video.title}</h4>
            </div>
        `;

        card.addEventListener('click', () => {
            // Tesla tarayıcısının engeline takılmamak için doğrudan YouTube linkini açar
            window.open(`https://www.youtube.com/watch?v=${video.videoId}`, '_blank');
        });

        videoListEl.appendChild(card);
    });
}

renderVideoList();
