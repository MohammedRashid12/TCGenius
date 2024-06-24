import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import json

json_file_path = "SetsAndCards.json"

with open(json_file_path, 'r') as j:
    contents = json.loads(j.read())

cred = credentials.Certificate("tcgenius-beeb9-6917419e94a2.json")

firebase_admin.initialize_app(cred)

db = firestore.client()
counter = 0
#doc_ref = db.collection("TCGs").document("Star Wars Unlimited")
for cardSet, cards in contents.items():
    #if cardSet == 'Spark of Rebellion':
    doc_ref = db.document('TradingCardGames/Star Wars Unlimited/Sets/' + cardSet).collection('cards')  #.set({'cards': cards})
    for card in cards:
        #doc_ref = doc_ref.document(card['name'])
        doc_ref.document(str(card['id'])).set(card)
        counter += 1
        #if counter == 5:
        #break
#break
print(f"printed {counter} cards to db")
j.close()
