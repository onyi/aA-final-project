# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Create demo user account
User.create({ username: "demouser", email: "demo@user.local", password: "demouser" })

40.times do 
  User.create({ username: Faker::Internet.username(6..10), email: Faker::Internet.safe_email, password: Faker::Internet.password(8, 12)})
end

users_id = User.all.map { |user| user.id } 
Product.create({
  title: 'Daily Chinese',
  header: 'The simple, effective way to grow your Chinese vocabulary',
  header_img: 'https://ph-files.imgix.net/238be54f-8cfa-4d59-9bad-b681db01ec70?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop',
  description: 'Daily Chinese is the simplest, most effective way to grow and keep track of your Chinese vocabulary. Our spaced-repetition review system gradually introduces new words each day while ensuring you never forget the words you already know. Start learning today!',
  publisher_id: users_id.sample,
  link: 'https://www.producthunt.com/r/031e94e13866c9'
})

Product.create({
  title: 'SLACK',
  header: 'Be less busy. Real-time messaging, archiving & search.',
  header_img: 'https://ph-files.imgix.net/a1a7887b-04ad-4d69-b395-f2d58443f836?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop',
  description: 'Slack is a collaboration hub for work, no matter what work you do. It’s a place where conversations happen, decisions are made, and information is always at your fingertips. With Slack, your team is better connected.',
  publisher_id: users_id.sample,
  link: 'https://www.producthunt.com/r/1ca95d917f'
})

Product.create({
  title: 'Red Hat Enterprise Linux Troubleshooting Guide',
  header: 'Identify, capture and resolve common issues faced by Red Hat',
  header_img: 'https://ph-files.imgix.net/0aa53436-0199-4592-82ae-af96a1098ec1?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop',
  description: 'Slack is a collaboration hub for work, no matter what work you do. It’s a place where conversations happen, decisions are made, and information is always at your fingertips. With Slack, your team is better connected.',
  publisher_id: users_id.sample,
  link: 'https://www.producthunt.com/r/bee37a4f81de8a'
})

Product.create({
  title: 'Reply Now',
  header: 'Make messengers work for your business',
  header_img: 'https://ph-files.imgix.net/4d49ea3b-4122-4c9a-af63-932f640f1c4a?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop',
  description: 'Reply Now is a messaging platform and team inbox for popular messengers. Engage with your customers on Facebook Messenger, Viber, Telegram and other messaging apps.',
  publisher_id: users_id.sample,
  link: 'https://www.producthunt.com/posts/reply-now'
})

Product.create({
  title: 'Sony WF-1000XM3',
  header: 'True wireless noise-cancelling earbuds by Sony',
  header_img: 'https://ph-files.imgix.net/b48da033-8262-409e-8a1f-606ecba18cf4?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop',
  description: 'Put the outside world on hold – this is all about you and your music. No noise, no wires, no distractions. Just exceptional sound, industry-leading noise cancellation, and hour upon hour of pure listening freedom.',
  publisher_id: users_id.sample,
  link: 'https://www.producthunt.com/r/161dc42c409eda'
})

Product.create({
  title: 'Read 💩 Faster',
  header: 'Speed read articles w/o compromising your comprehension',
  header_img: 'https://ph-files.imgix.net/db7fd979-e438-4a2d-85f6-2a5335ea7cae?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop',
  description: '',
  publisher_id: users_id.sample,
  link: 'https://www.producthunt.com/posts/read-faster'
})

Product.create({
  title: 'Pathfinder',
  header: 'AI Marketing Employee For Shopify & Magento Stores',
  header_img: 'https://ph-files.imgix.net/5842005e-9958-494a-840f-014457980530?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop',
  description: '',
  publisher_id: users_id.sample,
  link: 'https://www.producthunt.com/r/p/147825?ref=home&promo_id=4912'
})
Product.create({
  title: 'Saleter',
  header: 'Transform your Instagram into an online store',
  header_img: 'https://ph-files.imgix.net/081cadf1-709a-4ac6-9a99-46aeed83e93d?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop',
  description: '',
  publisher_id: users_id.sample,
  link: 'https://www.producthunt.com/posts/saleter'
})


image_path_prefix = "app/assets/images/icons"
image_files = Dir.new("#{image_path_prefix}").to_a.select { |f| f.downcase.match(/\.svg/)}

10.times do 
  Product.create({
    title: Faker::App.name,
    header: Faker::Hacker.say_something_smart,
    header_img: image_files.sample,
    description: '',
    publisher_id: users_id.sample,
    link: 'https://www.appacademy.io/'
  })
end

# Product.create({
#   title: '',
#   header: '',
#   header_img: '',
#   description: '',
#   publisher_id: users_id.sample,
#   link: ''
# })

# Add Product Votes data

10.times do 
  user_id = User.all.map{ |u| u.id}.sample
  product_id = Product.all.map{ |u| u.id}.sample
  product_vote = ProductVote.where(" user_id = ? AND product_id = ?", user_id, product_id)
  until product_vote.empty?
    user_id = User.all.map{ |u| u.id}.sample
    product_id = Product.all.map{ |u| u.id}.sample
    product_vote = ProductVote.where(" user_id = ? AND product_id = ?", user_id, product_id)
  end
  ProductVote.create({
    user_id: user_id,
    product_id: product_id
  })
end



# Seed Product Discussion
user_ids = User.all.map{ |u| u.id }
product_ids = Product.all.map{ |p| p.id }

20.times do
  ProductDiscussion.create({
    author_id: user_ids.sample,
    product_id: product_ids.sample,
    body: Faker::Company.bs
  })
end

# Randomly creates subdiscussion

discussions = ProductDiscussion.all

10.times do 
    discussion = discussions.sample
    ProductDiscussion.create({
    author_id: user_ids.sample,
    product_id: discussion.product_id,
    parent_discussion_id: discussion.id,
    body: Faker::Hipster.sentence
  })
end