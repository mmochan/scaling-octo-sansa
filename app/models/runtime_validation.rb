class RuntimeValidation
  include Mongoid::Document

  field :server, type: String
  field :environment_file, type: String
  field :error, type: String
  field :message, type: String
  field :component, type: String  
end
