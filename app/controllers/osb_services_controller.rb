class OsbServicesController < ApplicationController

    def index
        @osb_services =OsbService.all
    end
end
