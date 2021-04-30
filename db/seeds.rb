# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.destroy_all
Post.destroy_all
User.destroy_all

@jerry = User.create!(username: 'jerry', email: 'jerry@jerry.com', password: '123456')
@david = User.create!(username: 'david', email: 'david@david.com', password: '123456')
@stefon = User.create!(username: 'stefon', email: 'stefon@stefon.com', password: '123456')
@ashley = User.create!(username: 'ashley', email: 'ashley@ashley.com', password: '123456')
@anna = User.create!(username: 'anna', email: 'anna@anna.com', password: '123456')

puts "#{User.count} users created"

@jordan1 = Post.create!(user: @jerry, title: 'Banned 1', content: 'Jordan 1 banned', photo_url: 'https://i.imgur.com/vwXfDszm.jpg', price: '300', contact_info: 'jordan1@jordan1.com'
)
@adiddasyeezy = Post.create!(user: @david, title: 'Adiddas Yeezy', content: 'Yeezy 350 V2 Bred', photo_url: 'https://i.imgur.com/wIlpEQNm.jpg', price: '500', contact_info: 'yeezy@yeezy.com'
)
@airmax = Post.create!(user: @stefon, title: 'Air Max', content: 'Air Max 90', photo_url: 'https://i.imgur.com/dgkCRg6m.jpg', price: '250', contact_info: 'airmax@airmax.com'
)
@airmag = Post.create!(user: @jerry, title: 'Air Mag', content: 'Air Mag ', photo_url: 'https://i.imgur.com/KcSCjy5m.jpg', price: '50000', contact_info: 'airmag@airmag.com'
)
@nikeyeezy = Post.create!(user: @jerry, title: 'Nike Yeezy', content: 'Nike Yeezy', photo_url: 'https://i.imgur.com/qVfqSksm.jpg', price: '5000', contact_info: 'nikeyeezy@nikeyeezy.com'
)
@balenciaga = Post.create!(user: @ashley, title: 'Balenciaga', content: 'Balenciaga', photo_url: 'https://i.imgur.com/LgnUlY0m.jpg', price: '2000', contact_info: 'balenciaga@balenciaga.com'
)
@jordan4 = Post.create!(user: @anna, title: 'Jordan 4', content: 'University Blue Jordan 4', photo_url: 'https://i.imgur.com/0SCT3GDm.jpg', price: '750', contact_info: 'jordan4@jordan4.com'
)
@jordan6 = Post.create!(user: @david, title: 'Travis Scott x Jordan 6', content: 'Jordan 6', photo_url: 'https://i.imgur.com/IhfLF7lm.jpg', price: '800', contact_info: 'jordan6@jordan6.com'
)
@jordan3 = Post.create!(user: @stefon, title: 'Jordan 3 Black Cement', content: 'Jordan 3', photo_url: 'https://i.imgur.com/6nBK4sUm.jpg', price: '350', contact_info: 'jordan3@jordan3.com'
)
puts "#{Post.count} posts created"

Comment.create!(user: @jerry, post: @jordan1, content: 'These are fire!')

puts "#{Comment.count} comments created"


