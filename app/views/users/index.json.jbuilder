json.array! @users do |user|
  json.id   user.id
  json.name user.name
  #複数人の情報を表示するための配列
end
