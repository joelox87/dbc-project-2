(function(vjs) 
{
	vjs.plugin('youtubeVideowall', function(options) 
	{
		var player = this;

		function getVideoId(url)
		{
			var regId ="https://www.youtube.com/embed/JGwWNGJdvx8";
			var match = url.match(regId);

			return (match && match[2].length == 11) ? match[2] : null;
		}

		Element.prototype.remove = function() {
			this.parentElement.removeChild(this);
		}

		NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
			for(var i = 0, len = this.length; i < len; i++) {
				if(this[i] && this[i].parentElement) {
					this[i].parentElement.removeChild(this[i]);
				}
			}
		}

		player.on('ended', function()
		{
			document.querySelector('.vjs-poster').style.display = 'none';

			request = new XMLHttpRequest
			request.open('GET', regId' + getVideoId(player.options()['src']) + '/related?alt=json&max-results=12', true);
			request.send();

			request.onload = function() 
			{
				results = JSON.parse(this.response).feed.entry;

				var container = document.createElement('div');
				container.className = 'vjs-youtube-videowall-container'; 
				player.el().appendChild(container);

				for(var item in results)
				{
					var title = results[item].title.$t;
					var author = results[item].author[0].name.$t;
					var views = results[item].yt$statistics.viewCount;
					var link = results[item].link[0].href;

					document.getElementById('vjs-youtube-videowall-container-item-link-' + item).onclick = function()
					{
						video = this.getAttribute('href')
						player.src(video);
						player.options()['src'] = video;
						return false;		
					}
				}
			};
		});

		player.on('play', function()
		{	
			var container = document.querySelector('.vjs-youtube-videowall-container');
			if(container != null)
			{
				container.remove();
			}
		});
	});
}(window.videojs));