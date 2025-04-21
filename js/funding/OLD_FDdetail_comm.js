// 버튼클릭시 댓글창 열기
function toggleComment(){
    const commentBox = document.getElementById('commentBox');
    commentBox.classList.toggle('show');
}

document.getElementById('commBtn').onclick = toggleComment;

//댓글 쓰기+댓글삭제
// $('#send_button2').click(()=>{
//     let com = $('input[type=text]').val()
//     $('.comment1').prepend("<h3>"+com+"<button class='removeCom'>삭제</button></h3>")
//     $('input[type=text]').val("")
// })

// $(document).on('click','.removeCom',function(){
//     $(this).parent().remove()
// })
$(document).ready(() => {
    $('#send_button2').click(()=>{
        let com = $('input[type=text]').val().trim();

        if(com ==="") return; //비어있는 댓글 입력 방지

        let comment = `
        <div class="comment_new">
            <i class="fa-solid fa-circle-user"></i>
            <h2>human4567</h2>
            <h3>1m</h3>
            <p>${com}</p>
            <button class="removeCom">삭제</button>
        </div>`;

        $('.commentList').prepend(comment);
        $('input[type=text]').val("")
    });
});

$(document).on('click','.removeCom',function(){
$(this).parent().remove()
});

// 1,2 => on('click')사용
        // 1. '좋아요' 버튼을 눌렀을 때, 0->1 / 좋아요 -> 좋아요 취소
        //      => id를 dislike로 변경
        // 2. '좋아요 취소' 버튼을 눌렀을 때, 1-> 0 / 좋아요 취소 -> 좋아요
        //      => id를 like로 변경
        // 3. 댓글을 작성
        // 내가 적은 댓글 + 삭제버튼
        // 댓글을 작성한 후 => input창은 비워줄것!
        // 삭제 버튼 => 내가 삭제한 '그 댓글'만 지워줄 것!

        $(document).on('click','#heartBtn',function(){
            const $heartScore = $(this).find('.heartScore');
            const currentScore = parseInt($heartScore.text());

            if($(this).attr('data-liked')==='true'){
                $heartScore.text(currentScore-1);
                $(this).attr('data-liked','false');
                $(this).find('i').removeClass('fa-solid').addClass('fa-regular');
            }else{
                $heartScore.text(currentScore+1);
                $(this).attr('data-liked','true'); 
                $(this).find('i').removeClass('fa-regular').addClass('fa-solid');
            }
        });

        //댓글창 껐다키기ㅠㅠㅠㅠㅠㅠ
        $(document).on('click','#commBtn',function(){
            $('#FD_commentBox').slideToggle(400);
        });