import numpy as np
import pandas as pd
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
# from flask_pymongo import PyMongo
from flask import Flask, jsonify,request, render_template

#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///spotify.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
Passenger = Base.classes.passenger


# Flask setup
app = Flask(__name__)

@app.route("/")
def home():
    
    return render_template("index_joel.html")

if __name__ == "__main__":
    app.run(debug=True)