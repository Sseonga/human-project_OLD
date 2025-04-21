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