# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Create demo user account
User.create({ username: "demouser", email: "demo@user.local", password: "demouser" })

20.times do 
  User.create({ username: Faker::Internet.username(6..10), email: Faker::Internet.safe_email, password: Faker::Internet.password(8, 12)})
end