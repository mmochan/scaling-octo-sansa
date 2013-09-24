class OsbServicesController < ApplicationController

    def index
        @osb_services =OsbService.all.limit(10)
    end
end
