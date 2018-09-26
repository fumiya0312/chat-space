$(function() {
  function scroll() {
    $(".main-chat").animate({scrollTop: $(".main-chat")[0].scrollHeight}, 1000, "swing");
  };
  // #スクロールの定義
  function buildHTML(message) {
    var image = message.image ?`<img class="main-text__iamge" src="${message.image}">` :""
    var html = `<div class = "main-sub" data-id= ${message.id}>
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
      // #送信ボタンの二度押し可能
      scroll();
      // #変数化したスクロール
    })
    .fail(function(){
      alert('error');
    })
  })

    setInterval(function() {
      var url = location.pathname;    // #現在開いてるページurl
      if (url.match(/\/groups\/\d+\/messages/)) {
        // #.matchnにてd+の何らかの数字が入ってpathの記述が同じならば、、、
        var new_message_id = $(".main-sub:last").data("id")
        console.log(new_message_id)
        $.ajax({
          url: url,
          type: "GET",
          data: { id: new_message_id },// ここで先ほど取得した画面上メッセージIDを入れて、コントローラに送られる
          dataType: 'json',
        })

        .done(function(new_message) {
          new_message.forEach(function(messages) {
          // #new_messageのmessageの中身をmessageの単発に変換
          var html = buildHTML(messages);
          $('.main-chat').append(html);
          scroll();
          });
        });
      }
    }, 5000 );
});
