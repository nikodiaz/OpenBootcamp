from unittest.util import strclass


class Vehiculo():
  def __init__(self, color, ruedas, puertas):
    self.color = color
    self.ruedas = ruedas
    self.puertas = puertas

class Coche(Vehiculo):
  def __init__(self, color, ruedas, puertas, velocidad, cilindrada):
    super().__init__(color, ruedas, puertas)
    self.velocidad = velocidad
    self.cilindrada = cilindrada


siena = Coche('blanco', 4, 4, 160, 1368)

print('Color',siena.color)
print('Ruedas:',siena.ruedas)
print('Puertas:',siena.puertas)
print('Velocidad Máxima:',siena.velocidad)
print('Cilindrada:',siena.cilindrada)