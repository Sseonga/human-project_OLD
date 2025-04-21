// 댓글 작성
$('#send_button').click(()=>{
    let comm=$('input[type=text]').val()
    $('.comm_interBox').pretend("<h3>"+comm+"<button class='removeComm'>삭제</button></h3>")
    $('input[type=text]').val("")
})

$(document).on('click','.removeComm',function(){
    $(this).parent().remove()
})