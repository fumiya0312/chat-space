# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## usersテーブル

|Column|Type  |Options     |
|------|----  |-------     |
|name  |string|null: false |
|emaile|string|null: false |
|pass  |string|null: false |

### Association
- has_many :groups, through: :user_groups
- has_many :messages



## messagesテーブル

|Column  |Type      |Options                       |
|------  |----      |-------                       |
|user_id |references|null: false, foreign_key: true|
|message |text      |null: false                   |
|image   |text      |null: true                    |
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user



## user_groupsテーブル

|Column |Type|Options|
|------ |----|-------|
|user_id |references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user



## groupsテーブル

|Column |Type      |Options    |
|------ |----      |-------    |
|name   |string    |null: false|
|user_id|references|null: false, foreign_key: true|


### Association
- has_many :users, through: :user_groups
- has_many :messages
