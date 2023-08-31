class CreateUrls < ActiveRecord::Migration[7.0]
  def change
    create_table :urls do |t|
      t.string :short_url
      t.string :long_url
      t.string :user_id

      t.timestamps
    end
  end
end
