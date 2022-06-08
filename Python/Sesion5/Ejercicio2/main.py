
def es_primo(numero):
  for n in range(2, numero):
    if numero % n == 0:
      print('No es primo')
      return False
  print('Es primo')
  return True

es_primo(4)
    