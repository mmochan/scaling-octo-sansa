json.array! @release_validations do |release|
  json.server release.server
  json.file release.environment_file
  json.error release.error
  json.message release.message
  json.component release.component
end
