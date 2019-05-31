class CreateNewsSources < ActiveRecord::Migration[5.2]
  def change
    create_table :news_sources do |t|
      t.string :news_source_id
      t.string :name
      t.text :description
      t.string :url
      t.string :category
      t.string :country
      t.timestamps
    end
  end
end
