document.addEventListener('DOMContentLoaded', function () {
    const voteBtn = document.getElementById('vote_end');

    voteBtn.addEventListener('click', function (e) {
        const checkedVote = document.querySelector('input[name="vote"]:checked');

        if (!checkedVote) {
            e.preventDefault(); // 버튼 기본 동작 방지
            alert('투표 항목을 선택해주세요');
        }else{
            const btn = document.getElementById("vote_end");
            const voteResult = document.getElementById("voteResult");
            const returnBtn = document.getElementById("returnBtn");

            btn.onclick = function(){
                voteResult.style.display = "block";
            };

            returnBtn.onclick = function(){
                voteResult.style.display = "none";
            };

            window.onclick = function(event){
                if(event.target == voteResult){
                    voteResult.style.display = "none";
                }
            };
        }
    });
});





