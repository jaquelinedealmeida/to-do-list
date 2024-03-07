import pyautogui
pyautogui.PAUSE = 0.5
import time 

pyautogui.press("win")
pyautogui.write("chrome")
pyautogui.press("enter")

link = "https://dlp.hashtagtreinamentos.com/python/intensivao/tabela"
pyautogui.write(link)
pyautogui.press("enter")

time.sleep(2)

print(pyautogui.position())
pyautogui.press("tab")
