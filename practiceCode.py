import requests

# Replace 'YOUR_API_KEY' with your actual API key if required.
api_key = '51edb33e-9524-40e9-8e07-5a8ae0a6f943'
card_name = 'Squirtle'

# Pokémon TCG API endpoint
api_url = f'https://api.pokemontcg.io/v2/cards?q=name:"{card_name}"'

headers = {
    'X-Api-Key': api_key
}

response = requests.get(api_url, headers=headers)
if response.status_code == 200:
    card_data = response.json()
    for card in card_data['data']:
        print(f"Card Name: {card['name']}")
        print(f"Set Name: {card['set']['name']}")
        print(f"Price (USD): {card['cardmarket']['prices']['averageSellPrice']}")
else:
    print('Error fetching data:', response.status_code)