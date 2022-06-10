import datetime

def main():
  
  ahora = datetime.datetime.now().time()
  hora_actual = ahora.hour
  minuto_actual = ahora.minute

  hora_salida = 19
  minuto_salida = 60
  print(ahora)

  if hora_actual >= hora_salida:
    print('Hora de ir a casa!')
  else:
    horas_restantes = hora_salida - hora_actual
    minutos_restantes = minuto_salida - minuto_actual
    print(f'Te quedan {horas_restantes} horas y {minutos_restantes} minutos para irte')

if __name__ == '__main__':
  main()