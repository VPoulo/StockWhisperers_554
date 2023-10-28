#This class manages the database interactions that stores 1) User data and 2)Stock information.
#Current stock database includes daily T:ticker, c:close, h:high, l:low, n:num of transact, 
# o:open, t:timestamp, v:volume, vw:vol weighted avg price
import requests
import pandas as pd

API_KEY = "8FEghfdkqaH3lQ923eyGZewt5Upf7eqC"
stockFile = "database/stocks.csv"  # Currently holds stock data
userFile = "database/users.csv"  # Currently holds user data

def getStockDaily(API_KEY, stockFile):

    url = f"https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-01-09?adjusted=true&apiKey={API_KEY}"
    # Make a GET request to the API and fetch the data
    response = requests.get(url)

    if response.status_code == 200:
        data = response.json()
        df = pd.DataFrame(data['results'])
        df.to_csv(stockFile, index=False)
        print(f"Data saved successfully to {stockFile}")
    else:
        print(f"Request failed with status code {response.status_code}")

def getAllUsers(userFile):
    user = pd.read_csv(userFile, delimiter=',')

    print(user)

if __name__ == "__main__":

    getStockDaily(API_KEY, stockFile)
    getAllUsers(userFile)