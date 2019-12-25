# DB設計

## users table
|Column|Type|Option|
|------|----|------|
|username|string|null: false, index: true, unique: true|
|email|string|null: false|
|password|string|null: false|
## Association
- has_many :messages
- has_many :groups_users 
- has_many :groups, through:  :groups_users

## groups table
|Column|Type|Option|
|------|----|------|
|groupname|string|null: false|
|user_id|integer|null: false|
## Association
- has_many :groups_users 
- has_many :users, through:  :groups_users

## message table
|Column|Type|Option|
|------|----|------|
|body|text|null: false|
|image|string||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
## Association
- belongs_to :user
- belongs_to :group

## groups_users table
|Column|Type|Option|
|------|----|------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
## Association
- belongs_to :user
- belongs_to :group