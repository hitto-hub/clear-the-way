import random

komudotto = "コムドット"
ga = "が"
tooru = "通る"
kara = "から"
miti = "道"
wo = "を"
akero = "あけろ"
orera = "俺ら"
nihonn = "日本"
toru = "獲る"
output = ""

output += komudotto
while True:
    output += ga
    randamu = random.randint(1,100)
    if randamu >= 50:
        output += tooru + kara + miti
    else:
        output += nihonn
    output += wo
    randamu = random.randint(1,100)
    if randamu >= 50:
        output += toru
        break
    else:
        output += akero + orera
print(output)
if output == "コムドットが通るから道をあけろ俺らが日本を撮る":
    print("おまえがコムドットだ！")