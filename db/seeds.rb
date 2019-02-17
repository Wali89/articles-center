# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Search.create(query: 'Bitcoin', likes: 0)
Search.create(query: 'NBA', likes: 4)
Search.create(query: 'NFL', likes: 1)
Search.create(query: 'Stocks', likes: 0)
Search.create(query: 'Tech', likes: 3)