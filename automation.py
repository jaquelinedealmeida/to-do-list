import pyautogui
pyautogui.PAUSE = 0.5
import time 

pyautogui.press("win")
pyautogui.write("chrome")
pyautogui.press("enter")

link = "https://dlp.hashtagtreinamentos.com/python/intensivao/login"
pyautogui.write(link)
pyautogui.press("enter")

time.sleep(3)

pyautogui.press("tab")

pyautogui.write("emailtest@emailtest.com")
pyautogui.press("tab")  
pyautogui.write("Codigo do produto")


pyautogui.click(x=677, y=538)
time.sleep(3)

import pandas
table= pandas.read_csv("produtos.csv")

print(table)

for line in table.index:
    #click on the first field
    pyautogui.click(x=431, y=267)

    pyautogui.write(table.loc[line, "codigo"])
    pyautogui.press("tab")

    pyautogui.write(table.loc[line, "marca"])
    pyautogui.press("tab")

    pyautogui.write(table.loc[line, "tipo"])
    pyautogui.press("tab")

    pyautogui.write(str(table.loc[line, "categoria"]))
    pyautogui.press("tab")

    pyautogui.write(str(table.loc[line, "preco_unitario"]))
    pyautogui.press("tab")

    pyautogui.write(str(table.loc[line, "custo"]))
    pyautogui.press("tab")

    obs = table.loc[line, "obs"]
    if not pandas.isna(obs): 
        pyautogui.write(obs)
    pyautogui.press("tab")

    pyautogui.press("enter")
    pyautogui.scroll(5000)  
