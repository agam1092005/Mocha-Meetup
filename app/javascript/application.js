// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import '@doabit/semantic-ui-sass'
import "semantic-ui"
import * as jquery from "jquery"

//= require jquery
//= require turbolinks
//= require semantic-ui
//= require semantic-ui/modal
//= require semantic-ui/dropdown
import "./channels"



scroll_bottom = function() {
    if ($('#messages').length > 0) {
      $('#messages').scrollTop($('#messages')[0].scrollHeight);
    }
  }

scroll_bottom();
