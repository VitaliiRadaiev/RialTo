function cardVideoHandler() {
	function togglePlayPause(video,btn) {
		if(video.paused) {
			video.play();
			btn.querySelector('.main-slider__video-play').style.display = 'none';
			btn.querySelector('.main-slider__video-pause').style.display = 'block';
			
		} else {
			video.pause();
			btn.querySelector('.main-slider__video-play').style.display = 'block';
			btn.querySelector('.main-slider__video-pause').style.display = 'none';
		}
	}

	let videoBlock = document.querySelectorAll('._video');
	if(videoBlock.length) {
		let timerId;
		videoBlock.forEach((item) => {
			//let videoWrap = card.querySelector('.card-video__video-wrap');
			let video = item.querySelector('video');
			let btn = item.querySelector('.main-slider__video-control');
			//let time = item.querySelector('.card-video__duration-time');
			//let btnLink = item.querySelector('.card-video__btn');

			if(video) {
				btn.addEventListener('click', (e) => {
					e.preventDefault();
					if(e.target.closest('.main-slider__video-control')) {
						togglePlayPause(video,btn);
					}
				});
				video.addEventListener('ended', () => {
					video.pause();
					btn.querySelector('.main-slider__video-play').style.display = 'block';
					btn.querySelector('.main-slider__video-pause').style.display = 'none';
				});
				video.addEventListener('mousemove', (e) => { 
					if(!video.paused) {
						btn.style.opacity = '1';
						
							clearTimeout(timerId);
							timerId = setTimeout(() => {
								btn.style.opacity = '0';
							}, 500);

					} else {
						btn.style.opacity = '1';
					}

				});

			}
		})
	}

}

