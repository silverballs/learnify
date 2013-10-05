class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.text :name
      t.text :location
      t.date :date
      t.decimal :price
      t.integer :points
      t.text :category
      t.text :sponsor

      t.timestamps
    end
  end
end
