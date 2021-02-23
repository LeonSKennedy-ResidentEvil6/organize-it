class Event < ApplicationRecord
    has_many :participants

    validates_presence_of :name, :description
end
