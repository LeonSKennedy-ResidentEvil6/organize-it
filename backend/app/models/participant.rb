class Participant < ApplicationRecord
  belongs_to :event

  validates_presence_of :full_name, :email, :phone_number
end
