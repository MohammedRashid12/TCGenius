import requests
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate("tcgenius-beeb9-6917419e94a2.json")

firebase_admin.initialize_app(cred)

db = firestore.client()

doc_ref = db.collection("TCGs")

r = requests.get(f"https://tcgcsv.com/categories")
all_categories = r.json()['results']

for category in all_categories:
    if category['categoryId'] == 68 or category['categoryId'] == 79:
        #doc_ref =
        cardCategory = category['categoryId']

        r = requests.get(f"https://tcgcsv.com/{cardCategory}/groups")
        all_groups = r.json()['results']

        for group in all_groups:
            group_id = group['groupId']

            r = requests.get(f"https://tcgcsv.com/{cardCategory}/{group_id}/products")
            products = r.json()['results']
            r = requests.get(f"https://tcgcsv.com/{cardCategory}/{group_id}/prices")
            prices = r.json()['results']

            doc_ref = db.document(f"TradingCardGames/{category['name']}/Sets/{group['name']}").collection('cards')
            card = {}

            #Set field to de-virtualize the 'Card Set' document.
            setData = {"name": group['name']}
            db.collection(f"TradingCardGames/{category['name']}/Sets").document(group['name']).set(setData)

            for product in products:
                if product['extendedData']:
                    card['id'] = product['productId']
                    card['name'] = product['name']
                    for price in prices:
                        if product['productId'] == price['productId']:
                            if price['marketPrice'] is not None:
                                card[price['subTypeName']] = format(price['marketPrice'], ".2f")
                            else:
                                card[price['subTypeName']] = format(0.00, ".2f")
                    card['imageUrl'] = product['imageUrl']

                    doc_ref.document(str(card['id'])).set(card)
