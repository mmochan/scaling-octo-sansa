class RuntimeValidationsController < ApplicationController

    def index
        @runtime_validations = RuntimeValidation.all
    end
end
