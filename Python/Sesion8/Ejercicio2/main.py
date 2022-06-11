import pickle

class Vehiculo():
  def __init__(self, nombre, color, puertas):
    self.nombre = nombre
    self.color = color
    self.puertas = puertas
    
  def __str__(self):
    return f'Modelo: {self.nombre}\nColor: {self.color}\nPuertas: {4}'

def main():

  vehiculo1 = Vehiculo('Siena','Negro', 4)
  print(vehiculo1)

  with open('fichero.bin','wb') as f:
    pickle.dump(vehiculo1, f)
    f.close()
  with open('fichero.bin','rb') as f:
    siena = pickle.load(f)
    print(repr(siena))
    f.close()


if __name__ == '__main__':
  main()