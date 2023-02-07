const rightBtn = document.querySelector('.btn_next');
const leftBtn = document.querySelector('.btn_prev');
const imgContainer = document.querySelector('.img_container');
let currentImg = 1;
let timeout;
updateImg();
rightBtn.addEventListener('click',()=>{
    currentImg++;
    clearInterval(timeout);
    updateImg();
    
});

leftBtn.addEventListener('click',()=>{
    currentImg--;
    clearInterval(timeout);
    updateImg();
})

function updateImg() {
    if(currentImg > 5) {
        currentImg = 1;
    }else if(currentImg == 0){
        currentImg = 5;
    }

    imgContainer.style.transform = `translateX(-${(currentImg - 1) * 1000}px)`;

    timeout = setTimeout(()=>{
        currentImg++;
        updateImg();
    },3000)
}




