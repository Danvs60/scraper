from bs4 import BeautifulSoup
import requests
import json
from datetime import datetime

URL = "https://www.imdb.com"
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36 Edg/117.0.2045.60"
}

def get_upcoming_games():
    html = requests.get(f"{URL}/list/ls021182882/", headers=HEADERS).text
    soup = BeautifulSoup(html, "html.parser")
    
    list = soup.find("div", class_="lister-list")
    headers = list.find_all("h3", class_="lister-item-header")
    links = [header.find("a")["href"] for header in headers]
    return links

def get_game_data(url, id):
    html = requests.get(url, headers=HEADERS).text
    soup = BeautifulSoup(html, "html.parser")
    
    title = soup.find("h1").text
    rating = soup.find("span", class_="sc-bde20123-1 iZlgcd").text
    details = soup.find("ul", class_="ipc-inline-list ipc-inline-list--show-dividers sc-afe43def-4 kdXikI baseAlt").find_all("li")
    release_year = details[1].text
    age_rating = details[2].text
    print(rating, release_year, age_rating)
    img_src = soup.find("img", class_="ipc-image")["src"]
    print(img_src)

    # release_date_raw = soup.find("div", class_="object-summary-text initial-release-info").text
    # release_date = datetime.strptime(release_date_raw, "%b %d, %Y")
    
    return {
        "id": id,
        "title": title,
        "img_src": img_src,
        "imdb_rating": rating,
        "age_rating": age_rating,
    }

games = get_upcoming_games()

# print(get_game_data(URL + games[5]))

games_data = [get_game_data(URL + game, i) for i, game in zip(range(20), games)]


with open('./scraper/test.json', 'w', encoding='utf-8') as f:
    json.dump(games_data, f, ensure_ascii=False, indent=4)