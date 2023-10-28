#This class manages the database interactions that stores 1) User data and 2)Stock information.
import requests
import pandas as pd

API_KEY = "8FEghfdkqaH3lQ923eyGZewt5Upf7eqC"
filename = "10262023"  # Currently records date

def getStockDaily(API_KEY, filename):

    url = f"https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-01-09?adjusted=true&apiKey={API_KEY}"
    # Make a GET request to the API and fetch the data
    response = requests.get(url)

    if response.status_code == 200:
        data = response.json()
        df = pd.DataFrame(data['results'])
        df.to_csv(f"{filename}_stock_data.csv", index=False)
        print(f"Data saved successfully to {filename}_stock_data.csv")
    else:
        print(f"Request failed with status code {response.status_code}")

def getAllUsers():
    
if __name__ == "__main__":

    getStockDaily(API_KEY, filename)