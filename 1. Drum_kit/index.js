'use strict';
for (var i=0;i<document.querySelectorAll('.key').length;i++)
{
    document.querySelectorAll('.key')[i].addEventListener('click', playFunc);
    document.addEventListener('keypress', animationFunc);
}

function playFunc()
{
    this.classList.add('playing');
    let sound = new Audio("sounds/sound_"+this.dataset.key+".wav");
    sound.play();
    setTimeout(() => {
        this.classList.remove('playing');
    }, 50);
    
}

function animationFunc(event)
{
    let temp=event.charCode;
    if (temp>96)
    {
        temp-=32;
    }
    let sound = new Audio("sounds/sound_"+temp+".wav");
    sound.play();
    let x=document.querySelector(`[data-key="${temp}"]`);
    
    x.classList.add('playing');
    setTimeout(() => {
        x.classList.remove('playing');
    }, 50);

}