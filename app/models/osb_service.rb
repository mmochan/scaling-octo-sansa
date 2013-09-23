class OsbService
  include Mongoid::Document
  include Mongoid::Timestamps
  field :server, type: String
  field :name, type: String
  field :version, type: String
  field :harvested_at, type: Time
end
