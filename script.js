var video =document.getElementById('vid');
var play= document.getElementById('play')
var stopB= document.getElementById('stop')
var decTen= document.getElementById('decTen')
var incTen= document.getElementById('incTen')
var begin= document.getElementById('begin')
var end= document.getElementById('end')
var videoRange=document.getElementById('videoRange')
var time =document.getElementById('time')
var speedRange =document.getElementById('speed')
var speedVal =document.getElementById('speedval')
var volumeRange= document.getElementById('volume')
var muteBtn =document.getElementById('mute')
var fullscreen =document.getElementById('fullscreen')
// var videoMuted=false;


play.addEventListener('click' ,function(){
    video.play()
})

stopB.addEventListener('click' ,function(){
    video.pause()
})

begin.addEventListener('click' ,function(){
    video.load()
    video.play()
})
end.addEventListener('click' ,function(){
    
    video.currentTime= video.duration
})

incTen.addEventListener('click' ,function(){
    
    video.currentTime+=1
})

decTen.addEventListener('click' ,function(){
    
    video.currentTime-=1
})
speedRange.addEventListener('input' ,function(){
    video.playbackRate=speedRange.value;
    speedval.innerText=speedRange.value
    speedVal.style.fontWeight='bold'
})
volumeRange.addEventListener('input' ,function(){
    video.volume=volumeRange.value;
    
})
muteBtn.addEventListener('click' ,function(){
    muteBtn.classList.toggle('muted')
        if (video.muted === true) {
          video.muted = false;
          muteBtn.innerHTML='Mute'

        }
        else if (video.muted === false) {
          video.muted = true;
          muteBtn.innerHTML='unMute'

        }
    
})

videoRange.addEventListener('click' ,function(){
    videoRange.value=video.currentTime
})

fullscreen.addEventListener('click' ,function(){
    fullscreen.classList.toggle('fullScreen')
        if (video.style.width=='600px' && video.style.height=='600px')
        {
            video.style.width='100%';
            video.style.height='90vh';
        }
        else {
            video.style.width='600px';
            video.style.height='600px';
        }
    
   

    
})

//function progress

function progressLoop() {
    setInterval(function () {
      document.getElementById("videoRange").value = Math.round(
        (video.currentTime / video.duration) * 100
      )
    })
  }
progressLoop()