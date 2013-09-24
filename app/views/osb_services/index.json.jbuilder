

json.array! @osb_services do |service|
  json.name service.name
  json.server service.server
  json.version service.version
  json.harvested_at service.harvested_at
  json.created_at service.created_at.to_s(:short)

end