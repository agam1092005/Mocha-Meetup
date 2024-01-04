# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end


User.create(username: "Agam", password: "1092005")
User.create(username: "Ekam", password: "1092005")

Message.create(body: "Hey, anyone online ??", user_id: 1)
Message.create(body: "Yeah, Whats Up...", user_id: 2)
