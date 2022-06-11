from functools import reduce

def main():

  lista = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  lista_impares = list(filter(lambda x: int(x) % 2 != 0, lista))
  print(lista_impares)

  def suma(a, b):
    return a + b

  lista_sumada = reduce(suma, lista_impares)
  print(lista_sumada)

if __name__ == '__main__':
  main()