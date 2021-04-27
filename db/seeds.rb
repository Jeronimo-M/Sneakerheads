# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all
Comment.destroy_all

@user = User.create!(username: 'jerry', email: 'jerry@jerry.com', password: '123')

puts "#{User.count} users created"

@post = Post.create!(title: 'Banned 1', content: 'Jordan 1 banned', photo_url: 'https://image.goat.com/crop/500/attachments/product_template_additional_pictures/images/045/223/287/original/693245_01.jpg.jpeg?1605033875', price: '300', contact_info: 'jordan@jordan.com')


puts "#{Post.count} posts created"

@comment = Comment.create!(content: 'These are fire!')

puts "#{Comment.count} comments created"


