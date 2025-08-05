# This program will run every hour to extract Magnus Carlsen's FIDE rating from his official FIDE profile page and write it to the fide.html
# The code uses a loop and runs once every 1 hour

import urllib.request
import re
import time

while True:
    url = "https://ratings.fide.com/profile/1503014"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8')

    match = re.search(r'&nbsp;(\d{3,4})&nbsp;', html)
    fide_rating = "????"
    if match:
        fide_rating = match.group(1)
        print(fide_rating)  #print his rating
    else:
        print("Not found")

    output = f'''
    <p class="text-muted fst-italic" style="margin: 0;">
      Inspired by <span id="carlsen-name">Magnus Carlsen</span>
      <span class="fw-bold">(FIDE {fide_rating})</span>
    </p>
    '''

    with open('fide.html', 'w', encoding='utf-8') as f:
        f.write(output)

    print(f"Generated fide.html with FIDE {fide_rating}")

    # 1 hour cooldown before running again
    time.sleep(3600)