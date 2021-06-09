import numpy as np
import pandas as pd
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask_pymongo import PyMongo
from flask import Flask, jsonify,request, render_template

# Flask setup
app = Flask(__name__)


if __name__ == "__main__":
    app.run(debug=True)