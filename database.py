#This class manages the database interactions that stores 1) User data and 2)Stock information.
#Current stock database includes daily T:ticker, c:close, h:high, l:low, n:num of transact, 
# o:open, t:timestamp, v:volume, vw:vol weighted avg price
import requests
import pandas as pd
import os
import re
import json

class Database:

    def __init__(self):
        self.__USER_FILE = "./database/users.csv"  # Currently holds user data
        self.__BASH_PATH = os.path.expanduser('~/.bash_profile')
        self.__STOCK_CSV = "./database/stocks.csv"
        self.__STOCK_JSON = "./database/stocks.json"  # Currently holds stock 
        self.__API_KEY = ""
        self.df_users = pd.read_csv(self.__USER_FILE, delimiter=',')  
        self.df_stocks = {}     

    def extract_api_key(self):
        with open(self.__BASH_PATH, 'r') as file:
            content = file.read()
            match = re.search(r'^export\s+POLYGON_API_KEY=(.*)$', content, re.MULTILINE)
            if match:
                api_key = match.group(1)
            else:
                raise ValueError("POLYGON_API_KEY not found in .bash_profile or .bashrc")
        
        os.environ['POLYGON_API_KEY']=api_key
        polygon_api_key = os.environ.get('POLYGON_API_KEY')
        polygon_api_key = polygon_api_key.replace('"', '')
        self.__API_KEY = polygon_api_key
        return polygon_api_key

    def getStockDaily(self):
        
        if self.__API_KEY is None:
            raise EnvironmentError("Polygon API key not found.  Set the environment variable")

        else:
            url = f"https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-01-09?adjusted=true&apiKey={self.__API_KEY}"
            # Make a GET request to the API and fetch the data
            response = requests.get(url)

        if response.status_code == 200:
            data = response.json()
            self.df_stocks = pd.DataFrame(data['results'])
            self.df_stocks.to_csv(self.__STOCK_CSV, index=False)
            with open(self.__STOCK_JSON, 'w') as json_file:
                json.dump(data, json_file, indent=4)
                print(f"Data saved successfully to {self.__STOCK_JSON}")
        else:
            print(f"Request failed with status code {response.status_code}")

    def getUserAction(self, row):
        self.df_users = pd.read_csv(self.__USER_FILE, delimiter=',')
        return self.df_users['email'][row], self.df_users['stock'][row], self.df_users['price'][row], self.df_users['action'][row]
        
    def stockCompare(self, user_info, stock_info):
        
        if user_info > stock_info:
            return True
        else: 
            return False
        

        


whisper01 = Database()
whisper01.extract_api_key()
email, stock, price, action = whisper01.getUserAction(1)
print(email, stock, price, action)

    # getStockDaily()
    # getAllUsers()



