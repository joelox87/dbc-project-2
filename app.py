import numpy as np
import pandas as pd
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
# from flask_pymongo import PyMongo
from flask import Flask, jsonify,request, render_template

# Flask setup
app = Flask(__name__)

#################################################
# Database Setup
#################################################


from flask_sqlalchemy import SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///spotify_genres.sqlite"
# Remove tracking modifications
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

#reflection to get the table meta
db.reflect()

class Spotify(db.Model):
    __tablename__ = 'sortedgenres'


@app.route("/")
def home():
    
    return render_template("index_joel.html")

@app.route("/data")
def data():
    #Index(['mode', 'genres', 'acousticness', 'danceability', 'duration_ms',
       #'energy', 'instrumentalness', 'liveness', 'loudness', 'speechiness',
      # 'tempo', 'valence', 'popularity', 'key'],
    spotify = db.session.query(
        Genres.genres,
        Genres.acousticness,
        Genres.danceability,
        Genres.duration_ms, 
        Genres.energy,
        Genres.instrumentalness,
        Genres.liveness,
        Genres.loudness,
        Genres.tempo,
        Genres.popularity
    ).all()
    
    spotify_dataJson = [{
        'genres': data[0],
        'acousticness': data[1],
        'danceability': data[2],
        'duration_ms': data[3],
        'energy' : data[4],
        'instrumentalness' : data[5],
        'liveness' : data[6],
        'loudness' : data[7],
        'tempo' : data[8],
        'popularity' : data[9]

    } for data in spotify]

    print(spotify_dataJson[1:10])

if __name__ == "__main__":
    app.run(debug=True)