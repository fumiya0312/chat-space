json.array! @new_messages do |new_message|
  json.id       new_message.id
  json.name     new_message.user.name
  json.image    new_message.image.url
  json.content  new_message.content
  json.time     new_message.created_at
end
