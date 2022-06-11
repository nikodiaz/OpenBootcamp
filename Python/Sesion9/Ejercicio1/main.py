def main():

  def quitar_espacios(string):
    return string.strip()

  paises = input('Introduce una lista de países, separados por \',\': ')
  lista_paises = paises.split(',')

  lista_paises = list(map(quitar_espacios, lista_paises))
  print(lista_paises)

  lista_paises_ordenada = sorted(lista_paises)
  print(lista_paises_ordenada)

if __name__ == '__main__':
  main()