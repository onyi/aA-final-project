# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

# Create demo user account
User.create({ username: "demouser", email: "demo@user.local", password: "demouser" })

40.times do 
  User.create({ username: Faker::Internet.username(6..10), email: Faker::Internet.safe_email, password: Faker::Internet.password(8, 12)})
end

users_id = User.all.map { |user| user.id } 
p = Product.create({
  title: 'Daily Chinese',
  header: 'The simple, effective way to grow your Chinese vocabulary',
  header_img: 'https://ph-files.imgix.net/238be54f-8cfa-4d59-9bad-b681db01ec70?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop',
  description: 'Daily Chinese is the simplest, most effective way to grow and keep track of your Chinese vocabulary. Our spaced-repetition review system gradually introduces new words each day while ensuring you never forget the words you already know. Start learning today!',
  publisher_id: users_id.sample,
  link: 'https://www.producthunt.com/r/031e94e13866c9'
})

# p = Product.find_by_title("Daily Chinese")
ProductImage.create(product_id: p.id, product_img: "https://ph-files.imgix.net/c48ef2e9-4a26-4754-bfdc-90a12e5c1075?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=635&h=380&fit=max&dpr=3")

p = Product.create({
  title: 'SLACK',
  header: 'Be less busy. Real-time messaging, archiving & search.',
  header_img: 'https://ph-files.imgix.net/a1a7887b-04ad-4d69-b395-f2d58443f836?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop',
  description: 'Slack is a collaboration hub for work, no matter what work you do. It’s a place where conversations happen, decisions are made, and information is always at your fingertips. With Slack, your team is better connected.',
  publisher_id: users_id.sample,
  link: 'https://www.producthunt.com/r/1ca95d917f'
})

# p = Product.find_by_title("SLACK")
ProductImage.create(product_id: p.id, product_img: "https://ph-files.imgix.net/8de1063d-0104-40e1-a5b3-4991ef8079a1?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=431.4285714285714&h=380&fit=max&dpr=3 ")


p = Product.create({
  title: 'Red Hat Enterprise Linux Troubleshooting Guide',
  header: 'Identify, capture and resolve common issues faced by Red Hat',
  header_img: 'https://ph-files.imgix.net/0aa53436-0199-4592-82ae-af96a1098ec1?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop',
  description: 'Red Hat is the best!',
  publisher_id: users_id.sample,
  link: 'https://www.producthunt.com/r/bee37a4f81de8a'
})
ProductImage.create(product_id: p.id, product_img: "https://ph-files.imgix.net/791091e4-7098-4507-8809-a53a37b617cd?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=307.9416531604538&h=380&fit=max&dpr=3")


p = Product.create({
  title: 'Reply Now',
  header: 'Make messengers work for your business',
  header_img: 'https://ph-files.imgix.net/4d49ea3b-4122-4c9a-af63-932f640f1c4a?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop',
  description: 'Reply Now is a messaging platform and team inbox for popular messengers. Engage with your customers on Facebook Messenger, Viber, Telegram and other messaging apps.',
  publisher_id: users_id.sample,
  link: 'https://www.producthunt.com/posts/reply-now'
})
ProductImage.create(product_id: p.id, product_img: "https://ph-files.imgix.net/929ec4cc-37c7-455e-9275-7ede0bea1462?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=624.8453608247423&h=380&fit=max&dpr=3")


p = Product.create({
  title: 'Sony WF-1000XM3',
  header: 'True wireless noise-cancelling earbuds by Sony',
  header_img: 'https://ph-files.imgix.net/b48da033-8262-409e-8a1f-606ecba18cf4?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop',
  description: 'Put the outside world on hold – this is all about you and your music. No noise, no wires, no distractions. Just exceptional sound, industry-leading noise cancellation, and hour upon hour of pure listening freedom.',
  publisher_id: users_id.sample,
  link: 'https://www.producthunt.com/r/161dc42c409eda'
})
ProductImage.create(product_id: p.id, product_img: "https://ph-files.imgix.net/8bb469ef-02c6-4be0-ae8d-f107819266fa?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=654.7692307692308&h=380&fit=max&dpr=3")
ProductImage.create(product_id: p.id, product_img: "https://ph-files.imgix.net/a468a5dd-96f3-4301-b8de-7c5200b8619c?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=570.4103671706264&h=380&fit=max&dpr=3")


p = Product.create({
  title: 'Read 💩 Faster',
  header: 'Speed read articles w/o compromising your comprehension',
  header_img: 'https://ph-files.imgix.net/db7fd979-e438-4a2d-85f6-2a5335ea7cae?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop',
  description: "Read 💩 Faster is a web app that allows you to drastically increase your WPM without compromising your reading comprehension. Rather than reading left-to-right, you're reading one word at a time as each word flashes on your screen.",
  publisher_id: users_id.sample,
  link: 'https://www.producthunt.com/posts/read-faster'
})

Product.create({
  title: 'Pathfinder',
  header: 'AI Marketing Employee For Shopify & Magento Stores',
  header_img: 'https://ph-files.imgix.net/5842005e-9958-494a-840f-014457980530?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop',
  description: 'Hunters, looking for a new and better way to market your store? It’s time you met Pathfinder, the world’s first AI employee for e-commerce stores',
  publisher_id: users_id.sample,
  link: 'https://www.producthunt.com/r/p/147825?ref=home&promo_id=4912'
})

# file = open("https://ph-files.imgix.net/081cadf1-709a-4ac6-9a99-46aeed83e93d?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop")
Product.create({
  title: 'Saleter',
  header: 'Transform your Instagram into an online store',
  header_img: 'https://ph-files.imgix.net/081cadf1-709a-4ac6-9a99-46aeed83e93d?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop',
  description: 'Description goes here',
  publisher_id: users_id.sample,
  link: 'https://www.producthunt.com/posts/saleter'
})

p = Product.create({
  title: 'Base API',
  header: 'API for authentication, email sending, images and more!',
  header_img: 'https://ph-files.imgix.net/c0991d66-36a5-48a7-b20c-09c1a64f814e?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=3',
  description: 'Base offers your next project an API that handles user flow (sign up, sign in, forgot password), email sending, file upload, image upload and processing including crop and resize, all with only one API key and a nice clean UI.',
  publisher_id: users_id.sample,
  link: 'https://www.producthunt.com/posts/saleter'
})

ProductImage.create(product_id: p.id, product_img: "https://ph-files.imgix.net/a1ff5414-d162-4e79-90e9-30c34e372f84?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=758.1047381546135&h=380&fit=max&dpr=3")
ProductImage.create(product_id: p.id, product_img: "https://ph-files.imgix.net/0be3a9de-e317-47cf-8ec2-42b0c5c488a2?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=758.1047381546135&h=380&fit=max&dpr=3")



p = Product.create({
  title: 'DoodleLens',
  header: 'Bring your doodles to life with AR ✨',
  header_img: 'https://ph-files.imgix.net/c0b9f4ea-1029-414e-b706-63bfef4aade3?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=3',
  description: 'DoodleLens turns your flat sketchpad scribbles into animated AR characters, scenes, and stories!',
  publisher_id: users_id.sample,
  link: 'https://www.producthunt.com/posts/saleter'
})
ProductImage.create(product_id: p.id, product_img: "https://ph-files.imgix.net/ce21ff1f-03c3-478e-89c8-bce4844f2d6a?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=175.58035714285714&h=380&fit=max&dpr=3")




image_path_prefix = "app/assets/images/icons"
image_files = Dir.new("#{image_path_prefix}").to_a.select { |f| f.downcase.match(/\.svg/)}

p = Product.create({
  title: 'Streben',
  header: 'A Strava clone',
  header_img: image_files.sample,
  description: 'App Academy Full Stack Project created by Christopher Gee!',
  publisher_id: users_id.sample,
  link: 'https://streben.herokuapp.com/#/'
})
p = Product.create({
  title: 'Aerbnb',
  header: 'A AirBnB clone',
  header_img: image_files.sample,
  description: 'App Academy Full Stack Project created by Kenneth Choi!',
  publisher_id: users_id.sample,
  link: 'https://aerbnb.herokuapp.com/#/'
})
p = Product.create({
  title: 'Slide',
  header: 'A Slack clone',
  header_img: image_files.sample,
  description: 'App Academy Full Stack Project created by Ken Ha!',
  publisher_id: users_id.sample,
  link: 'https://slide-fps.herokuapp.com/#/'
})
p = Product.create({
  title: 'Tubular',
  header: 'A YouTube clone',
  header_img: image_files.sample,
  description: 'App Academy Full Stack Project created by Sam Walker!',
  publisher_id: users_id.sample,
  link: 'https://walkertubular.herokuapp.com/'
})
p = Product.create({
  title: 'InstaKilogram',
  header: 'A Instagram clone',
  header_img: image_files.sample,
  description: 'App Academy Full Stack Project created by Nicolas Piper!',  
  publisher_id: users_id.sample,
  link: 'https://instakilogramme.herokuapp.com/#/'
})


10.times do 
  img = image_files.sample

  product = Product.create({
    title: Faker::App.name,
    header: Faker::Hacker.say_something_smart,
    header_img: img,
    description: Faker::Quote.famous_last_words,
    publisher_id: users_id.sample,
    link: 'https://www.appacademy.io/'
  })

  # p img
  # file = open("https://s3.amazonaws.com/product-hub-dev/#{img}")
  # product = Product.new(
  #   title: Faker::App.name,
  #   header: Faker::Hacker.say_something_smart,
  #   header_img: image_files.sample,
  #   description: '',
  #   publisher_id: users_id.sample,
  #   link: 'https://www.appacademy.io/'
  # )
  # product.header_img.attach(io: file, filename: img)
  # product.save
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

15.times do 
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