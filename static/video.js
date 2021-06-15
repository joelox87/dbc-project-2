// Create a player.
var player = videojs('my-player');

// Create a track object.
var track = new videojs.AudioTrack({
  id: '#1 Song',
  kind: 'translation',
  label: 'Ed Sheeran - Shape of You',
  language: 'es'
});

// Add the track to the player's audio track list.
player.audioTracks().addTrack(track);






$(function(){
    var $refreshButton = $('#refresh');
    var $results = $('#css_result');
    
    function refresh(){
      var css = $('style.cp-pen-styles').text();
      $results.html(css);
    }
  
    refresh();
    $refreshButton.click(refresh);
    
    // Select all the contents when clicked
    $results.click(function(){
      $(this).select();
    });
  });
  