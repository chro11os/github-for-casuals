import os
import requests
from dotenv import load_dotenv

def get_github_api():
    load_dotenv()
    api_key = os.getenv("GITHUB_API_CHROLLOS")

    url = "https://api.github.com/repos/owner/repo/releases/latest"
    response = requests.get(url)

    data = response.json()
    print(data.get("name"))

get_github_api()