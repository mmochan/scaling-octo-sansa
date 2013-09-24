class OsbDeploymentTracker
  include Mongoid::Document
  field :environment_config
  field :server
  field :tag
  field :artifacts, type: Array
end
