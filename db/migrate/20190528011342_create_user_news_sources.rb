class CreateUserNewsSources < ActiveRecord::Migration[5.2]
  def change
    create_table :user_news_sources do |t|
      t.integer :user_id
      t.string :news_source_id

      t.timestamps
    end
  end
end
