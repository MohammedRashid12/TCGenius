from flask import render_template, Flask, jsonify

from TCGTestin3 import getCardSets

app = Flask(__name__)

@app.route("/sets")
def TCGHtmlTesting():
    to_send = getCardSets()
    #return render_template("TCGHtmlTesting.html", to_send=to_send)
    return {"sets": to_send}

if __name__ == "__main__":
    app.run(debug=True)