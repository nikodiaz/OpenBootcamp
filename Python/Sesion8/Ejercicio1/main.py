def main():
	
  file = open('./fichero.txt', 'w')
  file.write('Se ha creado el fichero\n')
  file.close()

  file = open('./fichero.txt', 'r+')
  print(file.read())
  file.write('Texto agregado\n')
  file.close()


if __name__ == '__main__':
	main()