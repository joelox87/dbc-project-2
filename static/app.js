function init() {
        d3.json('./data').then(response => {
          var dataKeys = Object.keys(response[0])
          var selector1 = d3.select("#selector1")

          selector1.selectAll('option')
            .data(dataKeys)
            .enter()
            .append('option')
            .text(d => d)
            .attr('value', d => d)
            
          selector1.on('change', function() {
              //console.log('test')
              var value = d3.select("#selector1").property("value")
              //var y = data.map(row => row[value])

              //plotly.restyle()
              //console.log(value)
            })
        });
        d3.json('./data').then(response => {
            console.log(response)
            var x = response.map(row => row.tempo)
            var y = response.map(row => row.danceability)
            var trace1 = {
                x: x,
                y: y,
                mode: 'markers',
                type: 'scatter',
            };
            var data = [trace1];
            var layout = {
                title: {
                  text:'Tempo Vs Danceability Plot',
                  font: {
                    family: 'Courier New, monospace',
                    size: 24
                  },
                  xref: 'paper',
                  x: 0.05,
                },
                xaxis: {
                  title: {
                    text: 'Tempo',
                    font: {
                      family: 'Courier New, monospace',
                      size: 18,
                      color: '#7f7f7f'
                    }
                  },
                },
                yaxis: {
                  title: {
                    text: 'Danceability',
                    font: {
                      family: 'Courier New, monospace',
                      size: 18,
                      color: '#7f7f7f'
                    }
                  }
                }
              };
            Plotly.newPlot('scatter', data, layout);
        });
        
        d3.json('./data').then(response => {
            console.log(response)
            var trace2 = {
            y: response.map(row => row.acousticness),
            name: "acousticness",
            type: "box",
            boxpoints: "all"
          };
          
          var data = [trace2];
          
          var layout = {
            title: "accousticness levels by genres",
            yaxis: { title: "accousticness levels"}
          };
          
          // Plot the chart to a div tag with id "plot"
          Plotly.newPlot("boxplot1", data, layout);
        });

        d3.json('./data').then(response => {
            console.log(response)
            var trace3 = {
            y: response.map(row => row.loudness),
            name: "loudness",
            type: "box",
            boxpoints: "all"
          };
          
          var data = [trace3];
          var layout = {
            title: "loudness levels by genres",
            yaxis: { title: "level of loudness"}
          };
          
          // Plot the chart to a div tag with id "plot"
          Plotly.newPlot("boxplot2", data, layout);
        });

        
        // Create a map object
    var myMap = L.map("map", {
        center: [37.09, -95.71],
        zoom: 3
      
    });

    // Add a tile layer
    L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        tileSize: 512,
        maxZoom: 18,
        zoomOffset: -1,
        id: "mapbox/streets-v11",
        accessToken: API_KEY
    }).addTo(myMap);

    // An array containing each city's name, location, and population
    var artists = [{
        location: [53.7270, -1.8575],
        name: "Ed Sheeran",
        followers: "78,900,234",
        song: "Shape of You"
    },
    {
        location: [26.3683, -80.1289],
        name: "Ariana Grande",
        followers: "61,301,006",
        song: " 7 rings"
    },
    {
        location: [43.6532, -79.3832],
        name: "Drake",
        followers: "54,416,812",
        song: "One Dance"
    },
    {
        location: [42.9849, -81.2453],
        name: "Justin Bieber",
        followers: "44,606,973",
        song: "Love Yourself"
    },
    {
        location: [39.7675, -94.8467],
        name: "	Eminem",
        followers: "43,747,833",
        song: "Lose Yourself"
    },
    {
        location: [13.1132, -59.5988],
        name: "Rihanna",
        followers: "42,244,011",
        song: "Umbrella"
    },
    {
        location: [34.0522, -118.2437],
        name: "Billie Eilish",
        followers: "41,792,604",
        song: "Bad Guy"
    },
    {
        location: [40.3337, -75.9474],
        name: "Taylor Swift",
        followers: "38,869,193",
        song: "Shake if Off"
    },
    {
        location: [36.1699, -115.1398],
        name: "Imagine Dragon",
        followers: "33,665,795",
        song: "Thunder"
    },
    {
        location: [51.5074, - 0.1278],
        name: "Queen",
        followers: "33,483,326",
        song: "	Bohemian Rhapsody"
    },
    ];

     // Loop through the artists array and create one marker for each artists
     for (var i = 0; i < artists.length; i++) {
        var artist = artists[i];
        L.marker(artist.location)
            .bindPopup("<h1>" + artist.name + "</h1> <hr> <h3> # of Followers : " + artist.followers + "<hr>Top Song: "+ artist.song +  "</h3>")
            .addTo(myMap);
    }
};



window.addEventListener('DOMContentLoaded', init);