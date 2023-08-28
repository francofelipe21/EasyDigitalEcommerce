from tienda.models import Good, Subcategory, UnitMeasurement
from assessment.models import Score, TypeScore
from ventas.models import Sales, DispatchHelp, Phase
from autenticacion.models import UserCustomer, Shop
from django.contrib.gis.geos import Point, MultiPoint
from datetime import datetime
import random

emails_array=[]
ids_shops_array = []

def delete_all_data():
    for good in Good.objects.all():
        if good.shop.id in ids_shops_array:
            good.delete()
    for score in Score.objects.all():
        if score.sale.shop.id in ids_shops_array:
            score.delete()
    for sale in Sales.objects.all():
        if sale.shop.id in ids_shops_array:
            sale.delete()
    for user in UserCustomer.objects.all().exclude(email = "francofelipe11@hotmail.com"):
        if user.email in emails_array:
            user.delete()
    for shop in Shop.objects.all().exclude(id = 1):
        if shop.id in ids_shops_array:
            shop.delete()

kilo = UnitMeasurement.objects.get(id = 1)
hora = UnitMeasurement.objects.get(id = 2)
otro = UnitMeasurement.objects.get(id = 3)
cantidad = UnitMeasurement.objects.get(id = 4)
copia = UnitMeasurement.objects.get(id = 6)
indeterminado = UnitMeasurement.objects.get(id = 8)
litro = UnitMeasurement.objects.get(id = 9)

fruta = Subcategory.objects.get(id = 1)
verdura = Subcategory.objects.get(id = 2)
matematica = Subcategory.objects.get(id = 3)
fisica = Subcategory.objects.get(id = 4)
otro = Subcategory.objects.get(id = 5)
camisa = Subcategory.objects.get(id = 6)
ropa_deportiva = Subcategory.objects.get(id = 7)
abrigo = Subcategory.objects.get(id = 8)
pantalon = Subcategory.objects.get(id = 9)
accesorio_ropa = Subcategory.objects.get(id = 10)
calzado = Subcategory.objects.get(id = 11)
ropa_formal = Subcategory.objects.get(id = 12)
celular = Subcategory.objects.get(id = 13)
computador = Subcategory.objects.get(id = 14)
electrodomestico = Subcategory.objects.get(id = 15)
accesorio_tec = Subcategory.objects.get(id = 16)
juegos_consolas = Subcategory.objects.get(id = 17)
tv = Subcategory.objects.get(id = 18)
literatura = Subcategory.objects.get(id = 19)
educativo = Subcategory.objects.get(id = 20)
comida_mascota = Subcategory.objects.get(id = 21)
ropa_mascota = Subcategory.objects.get(id = 22)
juguete_mascota = Subcategory.objects.get(id = 23)
abarrote = Subcategory.objects.get(id = 24)
revision_pc =Subcategory.objects.get(id = 25)
revision_auto =Subcategory.objects.get(id = 26)
revision_moto =Subcategory.objects.get(id = 27)
gasfiteria = Subcategory.objects.get(id = 28)
limpieza = Subcategory.objects.get(id = 29)
uber = Subcategory.objects.get(id = 30)
fletes = Subcategory.objects.get(id = 31)
arriendo_vehiculos = Subcategory.objects.get(id = 32)
arriendo_habitacion = Subcategory.objects.get(id = 33)
names_array = ["ANTONIO", "MARIA", "JOSE", "FRANCISCO", "JOSEFA", "JUAN", "ISABEL", "MANUEL", "PEDRO", "CARMEN", "JESUS", "FRANCISCA", "ANGEL", "MIGUEL", "DOLORES", "JAVIER", "ANTONIA", "DAVID", "ANA", "CARLOS", "ALEJANDRO", "PILAR", "LUCIA", "RAFAEL", "CRISTINA", "DANIEL", "LAURA", "ENCARNACION", "LUIS", "JUANA", "PABLO", "ROSARIO", "JOAQUIN", "ELENA", "SERGIO", "MARTA", "FERNANDO", "MANUELA"]
last_names_array = ["Gonzalez", "Munnoz", "Rojas", "Diaz", "Perez", "Soto", "Contreras", "Silva", "Martinez", "Sepulveda", "Morales", "Rodriguez", "Lopez", "Araya", "Fuentes", "Hernandez", "Torres", "Espinoza", "Flores", "Castillo", "Valenzuela", "Ramirez", "Reyes", "Gutierrez", "Castro", "Vargas", "Alvarez", "Vasquez", "Tapia", "Fernandez", "Sanchez", "Cortes", "Gomez", "Herrera", "Carrasco", "Nunnez", "Miranda", "Jara", "Vergara", "Rivera", "Figueroa", "Garcia", "Bravo", "Riquelme", "Vera", "Vega", "Molina", "Campos", "Sandoval", "Olivares"]
latitudes_array = [-33.4975242, -33.4971475, -33.4968246, -33.4965725, -33.4976479, -33.5008326, -33.5004816, -33.5001588, -33.5034546, -33.505067, -33.4622627, -33.4621083, -33.4648378, -33.4668062, -33.4665013, -33.4697066, -33.471426, -33.4764586, -33.4778767, -33.4793723, -33.4850636, -33.5030575, -33.4920178, -33.4880756, -33.480523, -33.4431195, -33.4431882, -33.4416593, -33.4404883, -33.4430457, -33.461087, -33.4610814, -33.4630979, -33.4628697, -33.4616256, -33.4159459, -33.4155527, -33.4117987, -33.41299, -33.4114333, -33.5650482, -33.5640963, -33.5641001, -33.5648082, -33.5649876, -33.3818896, -33.4464096, -33.418911, -33.3791212, -33.5395077]
longitudes_array = [-70.7438208, -70.7440041, -70.7438912, -70.7450199, -70.7453426, -70.7473674, -70.7481017, -70.7541963, -70.7578268, -70.7579172, -70.7440041, -70.7438912, -70.7450199, -70.7453426, -70.7473674, -70.7481017, -70.7541963, -70.7578268, -70.7579172, -70.6763912, -70.6773796, -70.6784669, -70.686774, -70.6910923, -70.6902565, -70.6932652, -70.5993813, -70.6003782, -70.6038132, -70.6145426, -70.7115807, -70.7174544, -70.7106447, -70.6989607, -70.7692028, -70.7707433, -70.7728622, -70.7713551, -70.7686226, -70.5905965, -70.5926892, -70.5938541, -70.5983523, -70.5996364, -70.5691172, -70.5675697, -70.5713233, -70.5752875, -70.5767158, -70.6833412, -70.6826156, -70.6817836, -70.6801651, -70.6792363, -70.6689999, -70.5632159, -70.5639261, -70.6208147, -70.5878836]
products_array = [[camisa, "Polera manga larga", 10000, cantidad, True, True], [camisa, "Camisa cuadrille", 5000, cantidad, True, True], [ropa_deportiva, "Camiseta de fútbol", 30000, cantidad, True, True], [abrigo, "Polerón", 15000, cantidad, True, True], [abrigo, "Chaqueta", 20000, cantidad, True, True], [abrigo, "Parka", 40000, cantidad, True, True], [ropa_formal, "Pantalón formal", 10000, cantidad, True, True], [abrigo, "Sueter cafe", 30000, cantidad, True, True], [abrigo, "Polerón canguro", 13000, cantidad, True, True], [pantalon, "Bermudas", 10000, cantidad, True, True], [ropa_deportiva, "Short deportivo", 14000, cantidad, True, True], [accesorio_ropa, "Sombrero", 7000, cantidad, True, True], [calzado, "Zapatillas deporte", 50000, cantidad, True, True], [calzado, "Tacos", 50000, cantidad, True, True], [accesorio_ropa, "Reloj pulsera", 12000, cantidad, True, True], [accesorio_ropa, "Anillo", 20000, cantidad, True, True], [pantalon, "Falda", 15000, cantidad, True, True], [accesorio_ropa, "Aro", 11000, cantidad, True, True], [abrigo, "Guantes", 5000, cantidad, True, True], [abrigo, "Bufanda", 2000, cantidad, True, True], [abrigo, "Gorro lana", 3000, cantidad, True, True], [accesorio_ropa, "Yoqui", 4000, cantidad, True, True], [ropa_deportiva, "Sudadera", 10000, cantidad, True, True], [abrigo, "Pillama", 30000, cantidad, True, True], [ropa_formal, "Vestido", 70000, cantidad, True, True], [ropa_formal, "Beston", 55000, cantidad, True, True], [ropa_formal, "Esmoquin", 60000, cantidad, True, True], [celular, "IPhone ùltimo modelo", 120000, cantidad, True, True], [computador, "Notebook", 500000, cantidad, True, True], [computador, "PC escritorio", 500000, cantidad, True, True], [computador, "PC gamer", 800000, cantidad, True, True], [electrodomestico, "Microondas", 49000, cantidad, True, True], [electrodomestico, "Aspiradora", 80000, cantidad, True, True], [electrodomestico, "Refrigerador", 120000, cantidad, True, True], [accesorio_tec, "Linterna", 9000, cantidad, True, True], [accesorio_tec, "Lampara escritorio", 12000, cantidad, True, True], [juegos_consolas, "PlayStation4", 200000, cantidad, True, True], [juegos_consolas, "PlayStation5", 600000, cantidad, True, True], [juegos_consolas, "XboxOne", 400000, cantidad, True, True], [celular, "Tablet", 70000, cantidad, True, True], [accesorio_tec, "Convertidor smart TV", 50000, cantidad, True, True], [tv, "TV 40 pulgadas", 50000, cantidad, True, True], [tv, "Plasma smart TV", 100000, cantidad, True, True], [celular, "Xaomi último modelo", 90000, cantidad, True, True], [celular, "Samsung last model", 100000, cantidad, True, True], [accesorio_tec, "Funda célular", 10000, cantidad, True, True], [literatura, "Robinson Crusoe", 5000, copia, True, True], [literatura, "La naranja mecánica", 6000, copia, True, True], [educativo, "Matemáticas", 3000, copia, True, True], [educativo, "Historia de Chile", 3000, copia, True, True], [educativo, "Culturas del mundo", 2000, copia, True, True], [educativo, "De Animales A Dioses", 4000, copia, True, True], [juegos_consolas, "GTA 5", 40000, copia, True, True], [juegos_consolas, "GTA 4", 40000, copia, True, True], [juegos_consolas, "FIFA 22", 40000, copia, True, True], [juegos_consolas, "FIFA 23", 50000, copia, True, True], [juegos_consolas, "Street Fighter", 30000, copia, True, True], [juegos_consolas, "Mortal Kombat", 30000, copia, True, True], [juegos_consolas, "Assassins creed 1", 40000, copia, True, True], [juegos_consolas, "Assassins creed 2", 30000, copia, True, True], [juegos_consolas, "Assassins creed 3", 30000, copia, True, True], [juegos_consolas, "Assassins creed 4", 30000, copia, True, True], [juegos_consolas, "Ghost of Tsushima", 60000, copia, True, True], [juegos_consolas, "Red Dead Redemption", 40000, copia, True, True], [juegos_consolas, "Halo", 30000, copia, True, True], [juegos_consolas, "God of War", 50000, copia, True, True], [comida_mascota, "Comida Dog Chow", 20000, kilo, True, True], [comida_mascota, "Comida Whiskas", 15000, kilo, True, True], [ropa_mascota, "Abrigo mascotaGrande", 8000, cantidad, True, True], [ropa_mascota, "Abrigo mascota chica", 4000, cantidad, True, True], [juguete_mascota, "Pelota para mascota", 3000, cantidad, True, True] , [celular, "Cargador Galaxy X", 4000, cantidad, True, True], [fruta, "Manzanas", 2000, kilo, True, True], [fruta, "Platanos", 2000, kilo, True, True], [fruta, "Uvas", 3000, kilo, True, True], [fruta, "Tomates", 2000, kilo, True, True], [fruta, "Paltas", 4000, kilo, True, True],[verdura, "Cilantro", 2000, kilo, True, True], [verdura, "Champiñones", 6000, kilo, True, True], [verdura, "Cebollín", 4000, kilo, True, True], [verdura, "Zapallo italiano", 3000, kilo, True, True], [verdura, "Zapallo", 3000, kilo, True, True], [verdura, "Pimenton", 4000, kilo, True, True], [verdura, "Ají", 4000, kilo, True, True], [abarrote, "Arroz", 3000, kilo, True, True], [abarrote, "Tallarines", 3000, kilo, True, True], [abarrote, "Corbatitas", 3000, kilo, True, True], [abarrote, "Canutos", 3000, kilo, True, True], [abarrote, "Lentejas", 3000, kilo, True, True], [fruta, "Aceitunas", 5000, kilo, True, True], [abarrote, "Queso", 4000, kilo, True, True], [abarrote, "Aceite", 5000, litro, True, True]]
services_array =[[matematica, "Clases matemáticas", 6000, hora, True, False], [fisica, "Clases física", 6000, hora, True, False], [revision_pc, "Servicio técnico pcs", 0, indeterminado, False, True], [revision_auto, "Revisión autos", 0, indeterminado, False, True], [revision_moto, "Revisión motos", 0, indeterminado, False, True], [gasfiteria, "Gasfitería", 0, indeterminado, True, False], [arriendo_vehiculos, "Arriendo vehiculos", 30000, hora, False, True], [limpieza, "Limpieza hogar", 20000, hora, True, False], [uber, "Transporte", 50000, hora, True, False], [fletes, "Fletes y mudanzas", 50000, hora, True, False], [arriendo_habitacion, "Arriendo pieza", 1000, hora, False, True]]


def add_score(good, shop, stars, user):
    sale = Sales()
    puntuality_stars = stars
    quality_stars = stars
    sale.client = user
    sale.good = good
    sale.shop = shop
    sale.phase = Phase.objects.get(id = 3)
    sale.unit_measurement = good.unit_measurement
    sale.amount = 1
    sale.price = 0
    sale.date_joined = datetime.now()
    sale.puntuality_evaluated = True
    sale.quality_evaluated = True
    sale.save()
    score = Score()
    if random.random() > 0.3:
        quality_stars = quality_stars +1
        if random.random() > 0.6:
            quality_stars = quality_stars + 1
    score.amount_stars= quality_stars
    score.sale = sale
    score.type_score = TypeScore.objects.get(id=1)
    score.date_joined = datetime.now()
    score.save()
    score = Score()
    if random.random() > 0.3:
        puntuality_stars = puntuality_stars +1
        if random.random() > 0.6:
            puntuality_stars = puntuality_stars + 1
    score.amount_stars = puntuality_stars
    score.sale = sale
    score.type_score = TypeScore.objects.get(id=2)
    score.date_joined = datetime.now()
    score.save()

def save_good(goods_array, shop, stars, user):
    for good in goods_array:
        new_row = Good()
        new_row.subcategory = good[0]
        new_row.shop = shop
        new_row.unit_measurement = good[3]
        new_row.name = good[1]
        new_row.price = good[2]
        new_row.deliverable = good[4]
        new_row.takeable = good[5]
        new_row.date_joined = datetime.now()
        new_row.save()
        add_score(new_row, shop, stars, user)

def run(n):
    delete_all_data()
    stars = 1
    if n==4 or n==2:
        stars=3
    length = 10
    scope = [156]
    schedule = [[9,0,14,0],[9,0,14,0],[9,0,14,0],[9,0,14,0],[9,0,14,0],[9,0,14,0],[9,0,14,0]]
    max_index_products = len(products_array)
    max_index_services = len(services_array)
    if n > 2:
        length=50
        schedule = [[0, 0, 23, 59], [0, 0, 23, 59], [0, 0, 23, 59], [0, 0, 23, 59], [0, 0, 23, 59], [0, 0, 23, 59], [0, 0, 23, 59]]
        scope = []
        for i in range(345):
            scope.append(i)
    for i in range(length):
        user = UserCustomer()
        email = names_array[i % len(names_array)]+"_"+last_names_array[i % len(last_names_array)]+"@gmail.com"
        user.email = email
        emails_array.append(email)
        user.first_name = names_array[i % len(names_array)]
        user.last_name = last_names_array[i % len(last_names_array)]
        user.type_user=[1,2]
        point = Point(x=longitudes_array[i], y=latitudes_array[i], srid=4326)
        shop = Shop()
        shop.name = "Tienda de " + names_array[i % len(names_array)]
        shop.date_joined = datetime.now()
        shop.locations = MultiPoint(point)
        shop.scope = scope
        shop.schedule = schedule
        shop.save()
        ids_shops_array.append(shop.id)
        user.shop = shop
        user.location = point
        user.personal_location_equal_trade_location = True
        user.set_password("franco1234")
        user.date_joined = datetime.now()
        user.save()
        goods_array = []
        goods_array.append(products_array[(i*2) % max_index_products])
        goods_array.append(products_array[(i*2 + 1) % max_index_products])
        goods_array.append(services_array[i % max_index_services])
        save_good(goods_array, shop, stars, user)

