const btn = document.getElementById("reportBtn");
const reportModal = document.getElementById("reportModal");
const closeBtn = document.getElementById("closeBtn");

btn.onclick = function(){
    reportModal.style.display = "block";
};

closeBtn.onclick = function(){
    reportModal.style.display = "none";
};

window.onclick = function(event){
    if(event.target == reportModal){
        reportModal.style.display = "none";
    }
};