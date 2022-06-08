from cmath import pi
import math

def area_triangulo(altura, base):
  area = (base * altura) / 2
  print('El área del triángulo es: ' + str(area))

area_triangulo(5, 3);

def area_circulo(radio):
  area = pi * radio ** 2
  print('El área del círculo es: '+ str(area))

area_circulo(7)