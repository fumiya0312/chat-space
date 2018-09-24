$(function() {
  var search_list = $("#user-search-result");
  var member_list = $("#chat-group-users");

  function appendUser(user) {
    var html = `
      <div class="chat-group-user clearfix">
      <p class="chat-group-user__name">${user.name}</p>
      <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
      </div>`
    search_list.append(html);
  }

  function appendNoUser(nouser) {
    var html = `<div class='.chat-goup-form__search.clearfix'>
                 <p class="chat-group-user__name">${nouser}</p>
                </div>`
    search_list.append(html);
  }

  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val();
      $.ajax({
        type: 'GET',
        url: '/users',
        data: { keyword: input },
        dataType: 'json'
      })

      .done(function(users) {
        $("#user-search-result").empty();
        if (users.length !== 0) {
          // #user検索入力に文字数が０でなければユーザー情報をappendする
          users.forEach(function(user) {
            appendUser(user);
          });
         }
         else {
           appendNoUser("一致するユーザーはいません");
         }
        })
        .fail(function(){
          alert('ユーザー検索に失敗しました')
        })
  });

// #インクリメンタルサーチ終了(HTMLまとめ)

// #リスト追加、削除機能追加

  function addUser(userid, username) {
    var html = `
      <div class="chat-group-user clearfix js-chat-member" id="chat-group-user-id">
      <input name="group[user_ids][]" type="hidden" value="${userid}">
      <p class="chat-group-user__name">${username}</p>
      <a class="user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn">削除</a>
      </div>`
    member_list.append(html);
  }

    $("#user-search-result").on("click", ".user-search-add", function() {
      var userid = $(this).attr("data-user-id");
      var username = $(this).attr("data-user-name")
      addUser(userid, username)
      $(this).parent().remove();
    })

    $("#chat-group-users").on("click", ".chat-group-user__btn--remove", function() {
      $(this).parent().remove();
      console.log("ok")
    })
});
