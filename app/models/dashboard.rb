class Dashboard
  include Mongoid::Document
  include Mongoid::Timestamps
  field :message, type: String
end
