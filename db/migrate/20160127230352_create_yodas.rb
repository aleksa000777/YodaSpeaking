class CreateYodas < ActiveRecord::Migration
  def change
    create_table :yodas do |t|
      t.string :input
      t.string :output
      t.string :name

      t.timestamps null: false
    end
  end
end
