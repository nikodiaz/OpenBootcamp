from logging import PlaceHolder
import tkinter as tk

root = tk.Tk()
root.title('Encuesta Desarrollador')
root.geometry('400x280')

radioVar = tk.StringVar()
radioVar.set(None)

# Entrada de texto
label1 = tk.Label(root, text = 'Cómo te llamas?')
inputNombre = tk.Entry(root)

# Selecciona el rol
label2 = tk.Label(root, text='Qué rol desempeñas?')
radio1 = tk.Radiobutton(root, text='Front End', variable=radioVar)
radio2 = tk.Radiobutton(root, text='Back End', variable=radioVar)
radio3 = tk.Radiobutton(root, text='Full Stack', variable=radioVar)

# Marca las tecnologías que conoces
label3 = tk.Label(root, text='Qué tecnologías conoces?')
tecnologias = ['HTML/CSS','JavaScript/NodeJS','React','Vue','Angular','Python/Django','C#','Java/Spring','Git']

# Posicionamiento de los elementos en la ventana
label1.grid(column=0, row=0)
inputNombre.grid(column=0, row=1)

label2.grid(column=0, row=2)
radio1.grid(column=0, row=3)
radio2.grid(column=0, row=4)
radio3.grid(column=0, row=5)

label3.grid(column=1, row=0)
for i in range(len(tecnologias)):
  tk.Checkbutton(root, text=tecnologias[i]).grid(column=1, row=1+i)


root.mainloop()