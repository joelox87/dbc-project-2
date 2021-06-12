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
engine = create_engine("sqlite:///spotify.sqlite")


from flask_sqlalchemy import SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///spotify.sqlite"
# Remove tracking modifications
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

#reflection to get the table meta
db.reflect()

class Spotify(db.Model):
    __tablename__ = 'spotify'


@app.route("/")
def home():
    
    return render_template("index_joel.html")

if __name__ == "__main__":
    app.run(debug=True)