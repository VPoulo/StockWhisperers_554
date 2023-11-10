from flask import Flask, request
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)


@app.route("/insert", methods=["POST"], strict_slashes=False)
def insert():
    name = request.json["name"]
    email = request.json["email"]
    ticker = str(request.json["ticker"]).upper()
    action = request.json["action"]
    price = request.json["price"]
    # Load file
    df = pd.read_csv("../database/users.csv")

    # Trim column headers
    df.columns = df.columns.str.strip()

    # Trim all values in DF.
    df = df.map(lambda x: x.strip() if isinstance(x, str) else x)

    # Insert new entry
    new_entry = {
        "name": name,
        "email": email,
        "stock": ticker,
        "action": action,
        "price": price,
    }
    df.loc[len(df)] = new_entry

    # Save dataframe as CSV by overwriting previous file.
    df.to_csv("../database/users.csv", index=False)

    return "ok", 200


@app.route("/delete", methods=["DELETE"], strict_slashes=False)
def delete():
    email = request.json["email"]
    ticker = str(request.json["ticker"]).upper()
    # Load file
    df = pd.read_csv("../database/users.csv")

    # Trim column headers
    df.columns = df.columns.str.strip()

    # Trim all values in DF.
    df = df.map(lambda x: x.strip() if isinstance(x, str) else x)

    # Create drop condition
    condition = (df["email"] == email) & (df["stock"] == ticker)

    # Delete entry
    df.drop(df[condition].index, inplace=True)

    # Reset the index after filtering
    df.reset_index(drop=True, inplace=True)

    print(df)

    # Save dataframe as CSV by overwriting previous file.
    df.to_csv("../database/users.csv", index=False)

    return "ok", 200


if __name__ == "__main__":
    app.run()
