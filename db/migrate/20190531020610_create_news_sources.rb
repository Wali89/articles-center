class CreateNewsSources < ActiveRecord::Migration[5.2]
  def change
    create_table :news_sources do |t|
      t.news_source_id :integer
      t.name :string
      t.description :text
      t.url :string
      t.category :string
      t.country :string

      t.timestamps
    end
  end
end
