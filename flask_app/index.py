from flask import Flask
import pandas as pd

app = Flask(__name__)

#@app.route("/insert")
def insert(name, email, ticker , price, action):
     
     # Load file
     df = pd.read_csv("../database/users.csv")
     
     # Trim column headers
     df.columns = df.columns.str.strip()
     
     # Trimp all values in DF.
     df = df.applymap(lambda x: x.strip() if isinstance(x, str) else x)
     
     # Insert new entry
     new_entry = {'name': name, 'email': email, 'stock': ticker, 'price': price, 'action': action}
     df = df.append(new_entry, ignore_index=True)

     # Save dataframe as CSV by overwriting previous file.
     df.to_csv('../database/users.csv', index=False)
     
     return True


#@app.route("/delete")
def delete(email, ticker):
     # Load file
     df = pd.read_csv("../database/users.csv")
     
     # Trim column headers
     df.columns = df.columns.str.strip()
     
     # Trimp all values in DF.
     df = df.applymap(lambda x: x.strip() if isinstance(x, str) else x)
     
     # Create drop condition
     condition = (df['email'] == email) & (df['stock'] == ticker)
     
     # Delete entry
     df.drop(df[condition].index, inplace=True)

     # Reset the index after filtering
     df.reset_index(drop=True, inplace=True)
     
     print(df)

     # Save dataframe as CSV by overwriting previous file.
     df.to_csv('../database/users.csv', index=False)
     
     return True
