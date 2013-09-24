class OsbDeploymentTrackersController < ApplicationController

    def index
        @osb_trackers =OsbDeploymentTracker.all
    end
end
