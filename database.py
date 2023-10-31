#This class manages the database interactions that stores 1) User data and 2)Stock information.
#Current stock database includes daily T:ticker, c:close, h:high, l:low, n:num of transact, 
# o:open, t:timestamp, v:volume, vw:vol weighted avg price
import requests
import pandas as pd
import os
import re
import json

__BASH_PATH = os.path.expanduser('~/.bash_profile')
__STOCK_JSON = "./database/stocks.json"  # Currently holds stock data
__STOCK_CSV = "./database/stocks.csv"
__USER_FILE = "./database/users.csv"  # Currently holds user data

def extract_api_key(file_path):
    with open(file_path, 'r') as file:
        content = file.read()
        match = re.search(r'^export\s+POLYGON_API_KEY=(.*)$', content, re.MULTILINE)
        if match:
            api_key = match.group(1)
        else:
            raise ValueError("POLYGON_API_KEY not found in .bash_profile or .bashrc")
    
    os.environ['POLYGON_API_KEY']=api_key
    polygon_api_key = os.environ.get('POLYGON_API_KEY')
    polygon_api_key = polygon_api_key.replace('"', '')
    return polygon_api_key

def getStockDaily():
    
    if __API_KEY is None:
        raise EnvironmentError("Polygon API key not found.  Set the environment variable")

    else:
        url = f"https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-01-09?adjusted=true&apiKey={__API_KEY}"
        # Make a GET request to the API and fetch the data
        response = requests.get(url)

    if response.status_code == 200:
        data = response.json()
        df = pd.DataFrame(data['results'])
        df.to_csv(__STOCK_CSV, index=False)
        with open(__STOCK_JSON, 'w') as json_file:
            json.dump(data, json_file, indent=4)
            print(f"Data saved successfully to {__STOCK_JSON}")
    else:
        print(f"Request failed with status code {response.status_code}")

def getAllUsers():
    user = pd.read_csv(__USER_FILE, delimiter=',')

    print(user)

if __name__ == "__main__":
    __API_KEY = extract_api_key(__BASH_PATH)
    getStockDaily()
    getAllUsers()