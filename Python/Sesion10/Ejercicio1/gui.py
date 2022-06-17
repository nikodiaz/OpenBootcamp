import tkinter as tk

def reiniciar():
  radioValue.set(None)

root = tk.Tk()
radioValue = tk.StringVar()
radioValue.set(None)

radio1 = tk.Radiobutton(root, text='Opción 1', variable=radioValue, value=1)
radio2 = tk.Radiobutton(root, text='Opción 2', variable=radioValue, value=2)
radio3 = tk.Radiobutton(root, text='Opción 3', variable=radioValue, value=3)

btn = tk.Button(root, text='Reiniciar', command=reiniciar)

radio1.grid(column=0, row=0)
radio2.grid(column=0, row=1)
radio3.grid(column=0, row=2)

btn.grid(column=1, row=3)

radio1.deselect()
radio2.deselect()
radio3.deselect()

root.mainloop()