// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require turbolinks
//= require_tree .
Parse.initialize("NYuRjOBqE3YkOCn628Bms4BBPScRMdKUI9i0dXwk", "WfEhOYYmlBpFWw1zQZ5nVH4WN7G127n1WonpH9Db");
$(function(){ $(document).foundation(); });

var Event = Parse.Object.extend("event");


function Save()

{
 
var evevtObj = new Event();
 
evevtObj.set("name", $("#event_name").val());
evevtObj.set("description", "event description");
evevtObj.set("location", $("#event_location").val());
 
 
evevtObj.save(null, {
  success: function(eventObj) {
  	$("#event_name").val("")
    alert('Saved Successfully')
  },
  error: function(ob, err){
  		alert('Error saving the record')
  }
});

}

function GetEvent (eventId) {
	var query = new Parse.Query(Event);
query.get(eventId, {
  success: function(eventObj) {
	 // Display.
  },
  error: function(object, error) {
   
  }
});
}


function GetEvents () {
var query = new Parse.Query(Event);
query.find({
  success: function(results) {
      for (var i = 0; i < results.length; i++) { 
      var object = results[i];
      alert(object.id + ' - ' + object.get('name'));
    }
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});

query.get(eventId, {
  success: function(eventObj) {
	 // Display.
  },
  error: function(object, error) {
   
  }
});
}