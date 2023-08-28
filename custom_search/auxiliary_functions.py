from datetime import datetime
from django.contrib.auth.models import AnonymousUser
from tienda.models import Good, Subcategory, Category, TypeGood
from autenticacion.models import Shop, UserCustomer
from numpy import inf
from custom_search.models import CommunesBorders
from django.contrib.gis.geos import Point
from ventas.auxiliary_functions import get_puntuality, get_quality

comunes_dict = {}
days_dict = {}
comunes_array = ['arica', 'camarones', 'putre', 'general_lagos', 'iquique', 'alto_hospicio', 'pozo_almonte', 'caminna',
                 'colchane', 'huara', 'pica', 'antofagasta', 'mejillones', 'sierra_gorda', 'taltal', 'tocopilla',
                 'maria_elena', 'calama', 'ollague', 'san_pedro_de_atacama', 'copiapo', 'caldera', 'tierra_amarilla',
                 'vallenar', 'alto_del_carmen', 'freirina', 'huasco', 'channaral', 'diego_de_almagro', 'illapel',
                 'canela', 'los_vilos', 'salamanca', 'salamanca', 'coquimbo', 'andacollo', 'la_higuera', 'paihuano',
                 'vicunna', 'ovalle', 'combarbala', 'monte_patria', 'punitaqui', 'rio_hurtado', 'isla_de_pascua',
                 'los_andes', 'calle_larga', 'rinconada', 'san_esteban', 'quillota', 'la_calera', 'hijuelas', 'la_cruz',
                 'nogales', 'valparaiso', 'casablanca', 'concon', 'juan_fernandez', 'puchuncavi', 'quintero',
                 'vinna_del_mar', 'la_ligua', 'cabildo', 'papudo', 'petorca', 'zapallar', 'san_antonio', 'algarrobo',
                 'cartagena', 'el_quisco', 'el_tabo', 'san_felipe', 'catemu', 'llaillay', 'panquehue', 'putaendo',
                 'santa_maria', 'quilpue', 'limache', 'olmue', 'villa_alemana', 'rancagua', 'codegua', 'coinco',
                 'coltauco', 'donnihue', 'graneros', 'las_cabras', 'machali', 'malloa', 'mostazal', 'olivar', 'peumo',
                 'pichidegua', 'quinta_de_tilcoco', 'rengo', 'requinoa', 'san_vicente', 'navidad', 'paredones',
                 'pichilemu', 'la_estrella', 'litueche', 'marchihue', 'san_fernando', 'chepica', 'chimbarongo', 'lolol',
                 'nancagua', 'palmilla', 'peralillo', 'placilla', 'pumanque', 'santa_cruz', 'parral', 'linares',
                 'colbun', 'longavi', 'retiro', 'san_javier', 'villa_alegre', 'yerbas_buenas', 'curico', 'hualanne',
                 'licanten', 'molina', 'rauco', 'romeral', 'sagrada_familia', 'teno', 'vichuquen', 'cauquenes',
                 'chanco', 'pelluhue', 'talca', 'constitucion', 'curepto', 'empedrado', 'maule', 'pelarco', 'pencahue',
                 'rio_claro', 'san_clemente', 'san_rafael', 'talagante', 'el_monte', 'isla_de_maipo', 'padre_hurtado',
                 'pennaflor', 'la_pintana', 'la_reina', 'las_condes', 'lo_barnechea', 'lo_espejo', 'lo_prado', 'macul',
                 'maipu', 'nnunnoa', 'pedro_aguirre_cerda', 'pennalolen', 'providencia', 'pudahuel', 'quilicura',
                 'quinta_normal', 'recoleta', 'renca', 'san_joaquin', 'san_miguel', 'san_ramon', 'vitacura', 'santiago',
                 'cerrillos', 'cerro_navia', 'conchali', 'el_bosque', 'estacion_central', 'huechuraba', 'independencia',
                 'la_cisterna', 'la_florida', 'la_granja', 'colina', 'lampa', 'tiltil', 'puente_alto', 'pirque',
                 'san_jose_de_maipo', 'san_bernardo', 'buin', 'calera_de_tango', 'paine', 'melipilla', 'alhue',
                 'curacavi', 'maria_pinto', 'san_pedro', 'porvenir', 'primavera', 'timaukel', 'punta_arenas',
                 'laguna_blanca', 'rio_verde', 'san_gregorio', 'natales', 'torres_del_paine', 'cabo_de_hornos',
                 'antartica', 'aysen', 'cisnes', 'guaitecas', 'lago_verde', 'coyhaique', 'cochrane', 'ohiggins',
                 'tortel', 'chile_chico', 'rio_ibannez', 'quinchao', 'castro', 'ancud', 'chonchi',
                 'curaco_de_velez', 'dalcahue', 'puqueldon', 'queilen', 'quellon', 'quemchi', 'rio_negro', 'osorno',
                 'puerto_octay', 'purranque', 'puyehue', 'san_juan_de_la_costa', 'san_pablo', 'puerto_montt', 'calbuco',
                 'cochamo', 'fresia', 'frutillar', 'los_muermos', 'llanquihue', 'maullin', 'puerto_varas', 'chaiten',
                 'futaleufu', 'hualaihue', 'palena', 'valdivia', 'corral', 'lanco', 'los_lagos', 'mafil', 'mariquina',
                 'paillaco', 'panguipulli', 'la_union', 'futrono', 'lago_ranco', 'rio_bueno', 'angol', 'collipulli',
                 'curacautin', 'ercilla', 'lonquimay', 'los_sauces', 'lumaco', 'puren', 'renaico', 'traiguen',
                 'victoria', 'gorbea', 'lautaro', 'loncoche', 'melipeuco', 'nueva_imperial', 'padre_las_casas',
                 'perquenco', 'pitrufquen', 'pucon', 'saavedra', 'teodoro_schmidt', 'tolten', 'vilcun', 'villarrica',
                 'cholchol', 'temuco', 'carahue', 'cunco', 'curarrehue', 'freire', 'galvarino', 'concepcion', 'coronel',
                 'chiguayante', 'florida', 'hualqui', 'lota', 'penco', 'san_pedro_de_la_paz', 'santa_juana',
                 'talcahuano', 'tome', 'hualpen', 'lebu', 'arauco', 'cannete', 'contulmo', 'curanilahue', 'los_alamos',
                 'tirua', 'los_angeles', 'antuco', 'laja', 'mulchen', 'nacimiento', 'negrete', 'quilaco', 'quilleco',
                 'san_rosendo', 'santa_barbara', 'tucapel', 'alto_biobio', 'cabrero', 'yumbel', 'quirihue',
                 'cobquecura', 'coelemu', 'ninhue', 'portezuelo', 'ranquil', 'treguaco', 'san_carlos', 'coihueco',
                 'nniquen', 'san_fabian', 'san_nicolas', 'chillan', 'bulnes', 'chillan_viejo', 'el_carmen', 'pemuco',
                 'pinto', 'quillon', 'san_ignacio', 'yungay']


def normalize(s):
    replacements = (
        ("á", "a"),
        ("é", "e"),
        ("í", "i"),
        ("ó", "o"),
        ("ú", "u"),
        ("A", "a"),
        ("B", "b"),
        ("C", "c"),
        ("D", "d"),
        ("E", "e"),
        ("F", "f"),
        ("G", "g"),
        ("H", "h"),
        ("I", "i"),
        ("J", "j"),
        ("K", "k"),
        ("L", "l"),
        ("M", "m"),
        ("N", "n"),
        ("Ñ", "nn"),
        ("O", "o"),
        ("P", "p"),
        ("R", "r"),
        ("S", "s"),
        ("T", "t"),
        ("U", "u"),
        ("V", "v"),
        ("W", "w"),
        ("X", "x"),
        ("Y", "y"),
        ("Z", "z"),
        (" ", "_")
    )
    for a, b in replacements:
        s = s.replace(a, b)
    return s


def build_days_dict():
    days_dict['lunes'] = 0
    days_dict['martes'] = 1
    days_dict['miercoles'] = 2
    days_dict['jueves'] = 3
    days_dict['viernes'] = 4
    days_dict['sabado'] = 5
    days_dict['domingo'] = 6


def build_comunes_dictionary():
    for i in range(0, len(comunes_array)):
        comunes_dict[comunes_array[i]] = i


def free_day(array):
    for time in array:
        if time != 0:
            return False
    return True


def useful_day(day, rango):
    hora_inicio = int(rango[0].split(":")[0]) * 60
    minuto_inicio = int(rango[0].split(":")[1])
    inicio = hora_inicio + minuto_inicio
    hora_termino = int(rango[1].split(":")[0]) * 60
    minuto_termino = int(rango[1].split(":")[1])
    termino = hora_termino + minuto_termino
    for index in range(0, len(day), 4):
        aux_0 = day[index] * 60 + day[index + 1]
        aux_f = day[index + 2] * 60 + day[index + 3]
        if inicio >= aux_0 and termino <= aux_f:
            return True
    return False


def quality_good(good, filter_quality, min_stars_quality, max_stars_quality):
    if filter_quality:
        mark = get_quality(good)
        if mark == "Sin evaluaciones":
            return False
        return int(min_stars_quality) <= float(mark[0]) <= int(max_stars_quality)
    return True


def puntuality_shop(shop, filter_puntuality, min_stars_puntuality, max_stars_puntuality):
    if filter_puntuality:
        mark = get_puntuality(shop)
        if mark == "Sin evaluaciones":
            return False
        return int(min_stars_puntuality) <= float(mark[0]) <= int(max_stars_puntuality)
    return True


def has_any_quality_good(shop, filter_quality, min_stars_quality, max_stars_quality):
    goods = Good.objects.filter(shop=shop)
    if filter_quality:
        for good in goods:
            if quality_good(good, filter_quality, min_stars_quality, max_stars_quality):
                return True
        return False
    return True


def useful_datetime(schedule, index_day, time):
    if sum(schedule[index_day])>0 and len(time)==0:
        return True
    if sum(schedule[index_day])==0:
        return False
    else:
        time= int(time.split(':')[0])*60 + int(time.split(':')[1])
        for i in range(0,len(schedule[index_day]),4):
            min=int(schedule[index_day][i]*60) + int(schedule[index_day][i+1])
            max=int(schedule[index_day][i+2]*60) + int(schedule[index_day][i+3])
            if min<=time and max>=time:
                return True
        return False


def get_data_from_shop(shop):
    if "Tienda anónima" != shop.name:
        return shop.name, shop.id
    else:
        provider = UserCustomer.objects.filter(shop=shop)[0]
        provider = provider.first_name + " " + provider.last_name
        shop_name = "tienda de "+provider
        return shop_name, shop.id

def json_output_custom_search(self):
    dict = {}
    build_comunes_dictionary()
    build_days_dict()
    filter_subcategory = False
    filter_puntuality = False
    filter_quality = False
    filter_datetime= False
    filter_geo = False
    count_shops = 0
    count_goods = 0
    type_good = ""
    category = ""
    subcategory = ""
    min_price = 0
    max_price = inf
    min_stars_quality = 1
    max_stars_quality = 5
    min_stars_puntuality = 1
    max_stars_puntuality = 5
    latitude = ""
    longitude = ""
    date = ""
    time = ""
    index_day = 0
    types_good = TypeGood.objects.all()
    categories = Category.objects.all()
    subcategories = Subcategory.objects.all()
    goods = Good.objects.all()
    shops = Shop.objects.all()
    array_shops = []
    if len(self.request.POST["search_text"]) > 0:
        goods = goods.filter(name__search=self.request.POST["search_text"])
    for key in self.request.POST:
        if key == 'type_good':
            types_good = types_good.get(name=self.request.POST["type_good"])
            categories = categories.filter(type_good=types_good)
            subcategories = subcategories.filter(category__in=categories)
        if key == 'category':
            categories = categories.get(name=self.request.POST["category"])
            subcategories = subcategories.filter(category=categories)
        if key == 'subcategory':
            filter_subcategory = True
            subcategories = subcategories.get(name=self.request.POST["subcategory"])
        if key == 'input_filter_time':
            time = self.request.POST["input_filter_time"]
            filter_datetime = True
            date = self.request.POST["input_filter_date"]
            index_day=datetime.strptime(date, "%Y-%m-%d").weekday()
    if len(self.request.POST["min_price"]) > 0:
        goods = goods.filter(price__gte=int(self.request.POST["min_price"]))
    if len(self.request.POST["max_price"]) > 0:
        goods = goods.filter(price__lte=int(self.request.POST["max_price"]))
    if len(self.request.POST["cantidad_estrellas_minima_quality"]) > 0 and len(self.request.POST["cantidad_estrellas_maxima_quality"]) > 0:
        filter_quality = True
        min_stars_quality = self.request.POST["cantidad_estrellas_minima_quality"].split(':')[1]
        max_stars_quality = self.request.POST["cantidad_estrellas_maxima_quality"].split(':')[1]
    if len(self.request.POST["cantidad_estrellas_minima_puntuality"]) > 0 and len(self.request.POST["cantidad_estrellas_maxima_puntuality"]) > 0:
        filter_puntuality = True
        min_stars_puntuality = self.request.POST["cantidad_estrellas_minima_puntuality"].split(':')[1]
        max_stars_puntuality = self.request.POST["cantidad_estrellas_maxima_puntuality"].split(':')[1]
    if len(self.request.POST["latitude"]) > 0 and len(self.request.POST["longitude"]) > 0:
        filter_geo = True
        latitude = self.request.POST["latitude"]
        longitude = self.request.POST["longitude"]
        print(latitude)
        print(longitude)
        id_commune = comunes_dict[normalize(CommunesBorders.objects.get(id=CommunesBorders.objects.filter(geom__contains=Point(float(longitude.replace(',','.')), float(latitude.replace(',','.'))))[0].id).comuna)]
        shops = shops.filter(scope__contains=[id_commune])
    for shop in shops:
        array_shops.append(shop)
    if filter_subcategory:
        goods = goods.filter(subcategory=subcategories)
    else:
        goods = goods.filter(subcategory__in=subcategories)
    if filter_datetime:
        for shop in shops:
            if len(shop.schedule) == 0:
                array_shops.remove(shop)
                continue
            if not useful_datetime(shop.schedule, index_day, time):
                array_shops.remove(shop)
                continue
    dict['geo_jsons'] = []
    for shop in array_shops:
        if len(goods.filter(shop=shop)) > 0 and puntuality_shop(shop, filter_puntuality, min_stars_puntuality, max_stars_puntuality) and has_any_quality_good(shop,filter_quality,min_stars_quality,max_stars_quality):
            count_shops = count_shops + 1
            if shop.locations.num_points > 0:
                html_name = shop.name
                if html_name == "Tienda anónima":
                    html_name = "<ul>"
                    for user in UserCustomer.objects.filter(shop=shop):
                        html_name = html_name + "<li>" + str(user.first_name) + " " + str(user.last_name) + "</li>"
                    html_name = html_name + "</ul>"
                arr_goods = goods.filter(shop=shop, available=True).order_by('subcategory').distinct('subcategory')
                html_button = ""
                html_goods = "Se ofrecen:\n<ul>"
                for good in arr_goods:
                    html_goods = html_goods + "<li>" + str(good.subcategory.name) + "</li>"
                html_goods = html_goods + "</ul>"
                html_button = '<a target="_blank" href="../../tienda/?id=' + str(shop.id) + '" class="btn btn-primary" style="color: whitesmoke">Visitar tienda</a>'
                n = shop.locations.num_points
                while n > 0:
                    n = n - 1
                    point = shop.locations.pop(0)
                    geo_json = {
                        "type": "Feature",
                        "properties": {
                            "name": html_name,
                            "goods": html_goods,
                            "button": html_button
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [point.x, point.y]
                        }
                    }
                    dict['geo_jsons'].append(geo_json)
    dict["number_shops"] = count_shops
    goods = goods.order_by("-id")
    dict['type'] = 'list'
    dict['goods'] = []
    for good in goods:
        if is_valid_good(good, array_shops) and quality_good(good, filter_quality, min_stars_quality, max_stars_quality) and puntuality_shop(good.shop, filter_puntuality, min_stars_puntuality, max_stars_puntuality):
            count_goods = count_goods + 1
            mark="-.-"
            if get_quality(good)!="Sin evaluaciones":
                mark = get_quality(good)[0]
            url="/"
            if good.image:
                url = good.image.url
            shop_name, shop_id = get_data_from_shop(good.shop)
            dict['goods'].append({
                "name": good.name,
                "type_good": good.subcategory.category.type_good.name,
                "shop_name": shop_name,
                "shop_id": shop_id,
                'price': good.price,
                'unit_measurement': good.unit_measurement.name,
                'url': url,
                'description': good.description,
                'date_joined': str(good.date_joined)[0:16],
                'link': '../../ventas/?good='+str(good.id),
                'mark': mark,
                'logged': self.request.user != AnonymousUser() and 1 in self.request.user.type_user
            })
    dict["number_goods"] = count_goods
    return dict

def is_valid_good(good, arr):
    for e in arr:
        if e.id == good.shop.id:
            return True
    return False