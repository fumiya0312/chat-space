  json.content  @message.content
  json.id  @message.id
  json.name  @message.user.name
  json.image  @message.image
  json.time  @message.created_at
  #jsonの後ろは呼び出す時の任意の名前
