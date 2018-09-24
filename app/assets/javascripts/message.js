$(function() {
  function buildHTML(message) {
    var image = message.image ?`<img class="main-text__iamge" src="${message.image}">` :""
    var html = `<div class = "main-sub">
                  <div class = "main-name">${message.name}</div>
                  <div class = "main-time">${message.time}</div>
                  <div class = 'main-text'>${message.content}</div>
                  ${image}
                </div>`

    return html;
  }
  $('#new_message').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data:formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      var html = buildHTML(data);
      $('.main-chat').append(html);
      $('#new_message')[0].reset();
      $('.form__submit').attr("disabled",false)
      $(".main-chat").animate({scrollTop: $(".main-chat")[0].scrollHeight}, 1000, "swing");
    })
    .fail(function(){
      alert('error');
      $('.form__submit').attr("disabled",false)
    })
  })
})
