import os
import json
import requests

# Set Name, Card ID, Card Name, Market Price

cardCategory = 79

r = requests.get(f"https://tcgcsv.com/{cardCategory}/groups")
all_groups = r.json()['results']

setAndCardData = {}
index = 0
for group in all_groups:
    productID = 0

    group_id = (group)['groupId']

    r = requests.get(f"https://tcgcsv.com/{cardCategory}/{group_id}/products")
    products = r.json()['results']
    r = requests.get(f"https://tcgcsv.com/{cardCategory}/{group_id}/prices")
    prices = r.json()['results']

    setAndCardData[group['name']] = []
    for product in products:
        if product['extendedData'] != []:
            setAndCardData[group['name']].append({'id': product['productId'], 'name': product['name']})
            for price in prices:
                if product['productId'] == price['productId']:
                    setAndCardData[group['name']][-1][price['subTypeName']] = price['marketPrice']



f = open("SetsAndCards.txt", 'w')
for cardSet in setAndCardData:
    f.write(f"\'{cardSet}\': [\n")
    for card in setAndCardData[cardSet]:
        #print(card)
        #f.write(str(card))
        f.write("{ ")
        for key in card:
            if key == 'name':
                f.write(f"{key}: \"{card[key]}\"")
            else:
                f.write(f"{key}: {card[key]}")
            if key == list(card)[-1]:
                f.write(" }")
            else:
                f.write(", ")

        if card != setAndCardData[cardSet][-1]:
            f.write(",\n")

    if cardSet == list(setAndCardData)[-1]:
        f.write("\n]\n")
    else:
        f.write("\n],\n")
f.close()

with open("SetsAndCards.txt", 'rb+') as filehandle:
    filehandle.seek(-1, os.SEEK_END)
    filehandle.truncate()
filehandle.close()

#f = open("SetsAndCards.txt", 'w')
#f.write("\n")

# with open("SetsAndCards.json", "w") as outfile:
#     json.dump(setAndCardData, outfile)


#print(setAndCardData)
