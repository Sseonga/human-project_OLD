const btn = document.getElementById("shareBtn");
const shareModal = document.getElementById("shareModal");
const closeBtn = document.getElementById("closeBtn");

btn.onclick = function(){
    shareModal.style.display = "block";
};

closeBtn.onclick = function(){
    shareModal.style.display = "none";
};

window.onclick = function(event){
    if(event.target == shareModal){
        shareModal.style.display = "none";
    }
};