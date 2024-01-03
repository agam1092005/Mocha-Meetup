class ApplicationController < ActionController::Base
    def page
        render html: "Hello World"
      end  
end
