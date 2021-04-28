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

@jordan = Post.create!(user: @jerry, title: 'Banned 1', content: 'Jordan 1 banned', photo_url: 'https://image.goat.com/crop/500/attachments/product_template_additional_pictures/images/045/223/287/original/693245_01.jpg.jpeg?1605033875', price: '300', contact_info: 'jordan@jordan.com'
)
@yeezy = Post.create!(user: @david, title: 'Yeezy', content: 'Yeezy 350 V2 Bred', photo_url: 'https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/008/492/440/original/94407_01.jpg.jpeg?1513117674', price: '500', contact_info: 'yeezy@yeezy.com'
)
@airmax = Post.create!(user: @stefon, title: 'Air Max', content: 'Air Max 90', photo_url: 'https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/050/450/525/original/723428_01.jpg.jpeg?1613585015', price: '250', contact_info: 'airmax@airmax.com'
)
puts "#{Post.count} posts created"

Comment.create!(user: @jerry, post: @jordan, content: 'These are fire!')

puts "#{Comment.count} comments created"


