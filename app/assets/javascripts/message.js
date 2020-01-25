$(function(){
  function buildHTML(message){
    if( message.image ){
      var html = 
      `<div class="messages__message">
        <div class = "messages__message__info">
          <div class = "messages__message__info__talker">
            ${message.user_name}
          </div>
          <div class="messages__message__info__date">
            ${message.created_at}
          </div>
      </div>
        <div class="messages__lower-message">
          <p class="messages__message__text">
          ${message.content}
          </p>
        </div>
        <img src=${message.image}>
      </div>`
    return html;
    } else {
      var html = 
      `<div class="messages__message">
        <div class = "messages__message__info">
          <div class = "messages__message__info__talker">
            ${message.user_name}
          </div>
          <div class="messages__message__info__date">
            ${message.created_at}
          </div>
      </div>
        <div class="messages__lower-message">
          <p class="messages__message__text">
          ${message.content}
          </p>
        </div>
      </div>`
      return html;
      };
    }
$('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
     .done(function(data){
       var html = buildHTML(data);
       $('.messages').append(html);
       $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight});
       $('form')[0].reset();
       $('.submit-btn').prop('disabled', false);
     })
     .fail(function(){
       alert("メッセージ送信に失敗しました");
     })
})
});