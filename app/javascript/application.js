// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import '@doabit/semantic-ui-sass'

//= require jquery
//= require turbolinks
//= require semantic-ui
//= require semantic-ui/modal
//= require semantic-ui/dropdown

$(document).on('turbolinks:load', function() {
    $('.ui.dropdown').dropdown();
})