require 'httparty'

url = 'http://localhost:4567'

# make a get request
response = HTTParty.get(url)

puts response

