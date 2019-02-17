class CreateSearches < ActiveRecord::Migration[5.2]
  def change
    create_table :searches do |t|
      t.string :query
      t.integer :likes, :default => 0

      t.timestamps
    end
  end
end
