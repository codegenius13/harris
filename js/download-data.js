const videosList = [
    {
        video: 'assets/img/vid-9.mp4',
        title: 'How to Create an Animated Netflix-Inspired FAQ Section Step-by-Step Tutorial #javascript',
        autImg: 'assets/img/man(1).png',
        author: 'Harris Momodu'
    },
    {
        video: 'assets/img/vid-3.mp4',
        title: 'emoji falling animation',
        autImg: 'assets/img/man(1).png',
        author: 'Harris Momodu'
    },
    {
        video: 'assets/img/vid-1.mp4',
        title: 'house flood animation',
        autImg: 'assets/img/man(1).png',
        author: 'Harris Momodu'
    },
    {
        video: 'assets/img/vid-2.mp4',
        title: 'zoombie walking animation',
        autImg: 'assets/img/man(1).png',
        author: 'Harris Momodu'
    },
    {
        video: 'assets/img/vid-4.mp4',
        title: '3D town animation',
        autImg: 'assets/img/man(1).png',
        author: 'Harris Momodu'
    },
    {
        video: 'assets/img/vid-5.mp4',
        title: 'man chasing carrot animation',
        autImg: 'assets/img/man(1).png',
        author: 'Harris Momodu'
    },
    {
        video: 'assets/img/vid-6.mp4',
        title: 'door hinge animation',
        autImg: 'assets/img/man(1).png',
        author: 'Harris Momodu'
    },
    {
        video: 'assets/img/vid-7.mp4',
        title: 'poeple walking in town animation',
        autImg: 'assets/img/man(1).png',
        author: 'Harris Momodu'
    },
    {
        video: 'assets/img/vid-8.mp4',
        title: 'knight chasing virus animation',
        autImg: 'assets/img/man(1).png',
        author: 'Harris Momodu'
    },
    {
        video: 'assets/img/demo-video.mp4',
        title: 'knight chasing virus animation',
        autImg: 'assets/img/man(1).png',
        author: 'Harris Momodu'
    },
    ]
    
    const categories = [...new Set(videosList.map((item) => { return item }))]
    document.getElementById('videosList').innerHTML = categories.map((item) => {
        var { video, title, author, autImg } = item;
        return (
            `<div class="list active">
            <video src=${video} class="list-video"></video>
            <div class="list-title">
                <div class="list-link">
                    <h1 class="list-title">${title}</h1>
                    <div class="aut">
                        <img src=${autImg} class="list-img"/>
                         <p class="list-aut">${author}<p>
                    </div>
                </div>
                <i class="fa fa-options"></i>
            </div>
            </div>`
            )
    }).join('')
    
    let videoList = document.querySelectorAll('.video-list-container .list');
    videoList.forEach(remove => { remove.classList.remove('active') });
    videoList.forEach(vid => {
        vid.onclick = () => {
            videoList.forEach(remove => { remove.classList.remove('active') });
            vid.classList.add('active');
            let src = vid.querySelector('.list-video').src;
            let title = vid.querySelector('.list-title').innerHTML;
            let autImg = vid.querySelector('.list-img').src;
            let author = vid.querySelector('.list-aut').innerHTML;
            document.querySelector('.main-video-container .main-video').src = src;
            document.querySelector('.main-video-container .main-video').play();
            document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
        };
    });