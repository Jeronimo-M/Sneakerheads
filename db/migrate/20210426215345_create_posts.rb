class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.text :title
      t.text :content
      t.string :photo_url
      t.integer :price
      t.string :contact_info
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
