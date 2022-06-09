class Alumno:
  def __init__(self, nombre, nota):
    self.nombre = nombre
    self.nota = nota
    self.aprobado = ''
    if self.nota > 6 :
      self.aprobado = 'ha aprobado.'
    else:
      self.aprobado = 'ha reprobado.'
  def __str__(self):
    return f'El alumno {self.nombre} ha obtenido la nota {self.nota} y {self.aprobado}'

alumno = Alumno('Nicolás', 9);

print(alumno)