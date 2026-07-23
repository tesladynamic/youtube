<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tesla YouTube Player</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <!-- Sol taraf: Video Listesi -->
        <div class="sidebar">
            <h2>YouTube Listesi</h2>
            <div class="video-list" id="videoList">
                <!-- Videolar buraya gelecek -->
            </div>
        </div>

        <!-- Sağ taraf: YouTube Oynatıcı Alanı -->
        <div class="main-player">
            <div class="player-wrapper">
                <iframe id="youtubePlayer" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <h3 id="videoTitle">Bir video seçin</h3>
        </div>
    </div>

    <script src="app.js"></script>
</body>
</html>
