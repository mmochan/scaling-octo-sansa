class ReleaseValidationsController < ApplicationController

        def index
        @release_validations = ReleaseValidation.all
    end
end
