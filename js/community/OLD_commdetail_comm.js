// 댓글 작성
$(document).ready(() => {
    $('#send_button2').click(()=>{
        let com = $('.commentForm input[type=text]').val().trim();

        if(com ==="") return; //비어있는 댓글 입력 방지

        let comment = `
        <div class="comment_new">
            <i class="fa-solid fa-circle-user"></i>
            <h2>human4567</h2>
            <h3>1m</h3>
            <p>${com}</p>
            <button class="removeCom">삭제</button>
        </div>`;

        $('.commentList').append(comment);
        $('.commentForm input[type=text]').val("")
    });
});

$(document).on('click','.removeCom',function(){
$(this).parent().remove()
});

//하트 누르기
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

//댓글창 껐다키기
$(document).on('click','#commBtn',function(){
    $('#comm_commentBox').slideToggle(400);
});

//메인 디테일 이미지 전환
document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.querySelector('.comm_detail_mainImage img');
    const imageList = document.querySelectorAll('.comm_detail_images img');
    const changeBtn = document.querySelector('.comm_detail_button');

    let currentIndex = 0;

    changeBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % imageList.length;
      mainImage.src = imageList[currentIndex].src;
    });
  });

  //커뮤니티 투표창 체크박스 전환
  document.addEventListener('DOMContentLoaded', function () {
    const voteBoxes = document.querySelectorAll('.voteBox');
  
    voteBoxes.forEach(box => {
      box.addEventListener('click', function (e) {
        const radio = box.querySelector('input[type="radio"]');
        if (radio) {
          radio.checked = true;
          radio.dispatchEvent(new Event('change')); 
        }
      });
    });
  });
