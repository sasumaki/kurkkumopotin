import pandas as pd 
import numpy as np
import pickle
import tensorflow as tf 
from keras.models import Sequential

from keras.layers import Dense, Dropout



    

if __name__ == "__main__":
    cucumbers = pd.read_csv("cucumber.csv")
    mopeds = pd.read_csv('moped.csv')

    cucumbers["y"] = 0
    mopeds["y"] = 1

    print(cucumbers.head())
    print(mopeds.head())
  

