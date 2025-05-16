document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动效果
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 20,
                behavior: 'smooth'
            });
        });
    });

    // 确保视频缩略图加载
    const videos = document.querySelectorAll('video');
    videos.forEach((video, index) => {
        // 确保视频有正确的poster属性
        if (!video.hasAttribute('poster') || video.getAttribute('poster') === '') {
            video.setAttribute('poster', `./video-thumbnail-${index + 1}.jpg`);
        }
    });

    // 添加视频函数
    window.addVideo = function(videoUrl, videoType) {
        const videoContainer = document.querySelector('.video-container');
        const placeholder = document.querySelector('.video-placeholder');
        
        if (placeholder) {
            placeholder.remove();
        }
        
        const videoElement = document.createElement('video');
        videoElement.controls = true;
        videoElement.autoplay = false;
        videoElement.playsInline = true;
        
        const sourceElement = document.createElement('source');
        sourceElement.src = videoUrl;
        sourceElement.type = videoType || 'video/mp4';
        
        videoElement.appendChild(sourceElement);
        videoElement.innerHTML += '您的浏览器不支持视频播放';
        
        videoContainer.appendChild(videoElement);
    };

    // 添加多个视频的函数
    window.addMultipleVideos = function(videoArray) {
        const videoContainer = document.querySelector('.video-container');
        const placeholder = document.querySelector('.video-placeholder');
        
        if (placeholder) {
            placeholder.remove();
        }
        
        // 清空现有内容
        videoContainer.innerHTML = '';
        
        // 创建视频网格容器
        const gridContainer = document.createElement('div');
        gridContainer.className = 'video-grid';
        videoContainer.appendChild(gridContainer);
        
        // 添加每个视频
        videoArray.forEach(video => {
            const videoWrapper = document.createElement('div');
            videoWrapper.className = 'video-item';
            
            // 添加标题（如果有）
            if (video.title) {
                const title = document.createElement('h4');
                title.className = 'video-title';
                title.textContent = video.title;
                videoWrapper.appendChild(title);
            }
            
            // 创建视频元素
            const videoElement = document.createElement('video');
            videoElement.controls = true;
            videoElement.autoplay = false;
            videoElement.playsInline = true;
            
            const sourceElement = document.createElement('source');
            sourceElement.src = video.url;
            sourceElement.type = video.type || 'video/mp4';
            
            videoElement.appendChild(sourceElement);
            videoElement.innerHTML += '您的浏览器不支持视频播放';
            
            videoWrapper.appendChild(videoElement);
            
            // 添加描述（如果有）
            if (video.description) {
                const description = document.createElement('p');
                description.className = 'video-description';
                description.textContent = video.description;
                videoWrapper.appendChild(description);
            }
            
            gridContainer.appendChild(videoWrapper);
        });
        
        // 添加视频网格样式
        const style = document.createElement('style');
        style.textContent = `
            .video-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 20px;
                width: 100%;
            }
            
            .video-item {
                margin-bottom: 15px;
                border-radius: 8px;
                background-color: #f9f9f9;
                padding: 10px;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }
            
            .video-title {
                margin-bottom: 10px;
                color: #1565c0;
            }
            
            .video-description {
                margin-top: 10px;
                font-size: 0.9rem;
                color: #666;
            }
        `;
        document.head.appendChild(style);
    };

    // 添加渐入动画效果
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(section);
    });

    // 检测微信环境
    function isWechat() {
        return /MicroMessenger/i.test(navigator.userAgent);
    }

    // 微信环境特定优化
    if (isWechat()) {
        document.body.classList.add('wechat-env');
        
        // 添加微信特定样式
        const wechatStyle = document.createElement('style');
        wechatStyle.textContent = `
            .wechat-env {
                padding-bottom: 30px;
            }
            
            .wechat-env video {
                max-height: 230px;
            }
        `;
        document.head.appendChild(wechatStyle);
    }
}); 