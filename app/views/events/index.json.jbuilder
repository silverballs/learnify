json.array!(@events) do |event|
  json.extract! event, :name, :location, :date, :price, :points, :category, :sponsor
  json.url event_url(event, format: :json)
end
