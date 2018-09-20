$(function() {
  // function buildHTML(message) {
  //   var html
  // }
  $('#new_message').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var href = window.location.href + '/mesasges'
    $.ajax({
      url: href,
      type: "POST",
      data:formData,
      dataType: 'jason',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      var html = buildHTML(data);
      $('.messages').append(html);
      $('f.text_field').val('');
    })

  })
})
