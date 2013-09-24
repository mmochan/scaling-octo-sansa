

json.array! @osb_trackers do |tracker|
  json.environment_config tracker.environment_config
  json.server tracker.server
  json.tag tracker.tag
  json.artifacts tracker.artifacts
end