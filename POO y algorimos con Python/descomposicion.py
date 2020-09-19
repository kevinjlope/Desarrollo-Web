class Automovil:
    def __init__(self, modelo, marca, color):
        self.modelo = modelo
        self.marca = marca
        self.color = color
        self._estado = "en_reposo"
        self._motor = Motor(cilindros = 4)

    def acelerar(self, tipo = 'despacio'):
        if tipo == 'rapida':
            self._motor.inyectar_gasolina(10)
        else:
            self._motor.inyectar_gasolina(3)

class Motor:
    def __init__(self, cilindros, tipo = "gasolina"):
        self.cilindros = cilindros
        self.tipo = tipo
        self._temperatura = 0

    def inyectar_gasolina(self, cantidad):
        pass
