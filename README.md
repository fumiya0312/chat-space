# README

## usersテーブル

|Column  |Type  |Options                               |
|------  |----  |-------                               |
|name    |string|null: false, index: true, unique: true|
|email   |string|null: false, unique: true             |
|password|string|null: false                           |

### Association
- has_many :groups, through: :user_groups
- has_many :messages
- has_many ::user_groups


## messagesテーブル

|Column  |Type      |Options                       |
|------  |----      |-------                       |
|user_id |references|null: false, foreign_key: true|
|message |text      |
|image   |string    |
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## user_groupsテーブル

|Column |Type|Options                              |
|------ |----|-------                              |
|user_id |references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## groupsテーブル

|Column |Type      |Options                       |
|------ |----      |-------                       |
|name   |string    |null: false, index: true      |


### Association
- has_many :users, through: :user_groups
- has_many :messages
- has_many ::user_groups
