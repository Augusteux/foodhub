const textOverlay = document.querySelector(".overlay");
document.getElementById("new-product").addEventListener('click',function(){
    textOverlay.classList.add('active');
});
document.getElementById("close-overlay").addEventListener('click',function(){
    textOverlay.classList.remove('active')
})