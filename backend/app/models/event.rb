class Event < ApplicationRecord
    has_many :participants, dependent: :destroy


    validates_presence_of :name, :description
end
