import numpy as np
from datetime import datetime
from django.contrib.gis.geos import Point, MultiPoint
from .models import TypeUser, Shop, UserCustomer

comunes_dict={}
days_dict={}
comunes_array=['arica' ,'camarones', 'putre', 'general_lagos', 'iquique', 'alto_hospicio', 'pozo_almonte', 'caminna', 'colchane', 'huara', 'pica', 'antofagasta', 'mejillones', 'sierra_gorda', 'taltal', 'tocopilla', 'maria_elena', 'calama', 'ollague', 'san_pedro_de_atacama', 'copiapo', 'caldera', 'tierra_amarilla', 'vallenar', 'alto_del_carmen', 'freirina', 'huasco', 'channaral', 'diego_de_almagro', 'illapel', 'canela', 'los_vilos', 'salamanca', 'salamanca', 'coquimbo', 'andacollo', 'la_higuera', 'paihuano', 'vicunna', 'ovalle', 'combarbala', 'monte_patria', 'punitaqui', 'rio_hurtado', 'isla_de_pascua', 'los_andes', 'calle_larga', 'rinconada', 'san_esteban', 'quillota', 'la_calera', 'hijuelas', 'la_cruz', 'nogales', 'valparaiso', 'casablanca', 'concon', 'juan_fernandez', 'puchuncavi', 'quintero', 'vinna_del_mar', 'la_ligua', 'cabildo', 'papudo', 'petorca', 'zapallar', 'san_antonio', 'algarrobo', 'cartagena', 'el_quisco', 'el_tabo', 'san_felipe', 'catemu', 'llaillay', 'panquehue', 'putaendo', 'santa_maria', 'quilpue', 'limache', 'olmue', 'villa_alemana', 'rancagua', 'codegua', 'coinco', 'coltauco', 'donnihue', 'graneros', 'las_cabras', 'machali', 'malloa', 'mostazal', 'olivar', 'peumo', 'pichidegua', 'quinta_de_tilcoco', 'rengo', 'requinoa', 'san_vicente', 'navidad', 'paredones', 'pichilemu', 'la_estrella', 'litueche', 'marchihue', 'san_fernando', 'chepica', 'chimbarongo', 'lolol', 'nancagua', 'palmilla', 'peralillo', 'placilla', 'pumanque', 'santa_cruz', 'parral', 'linares', 'colbun', 'longavi', 'retiro', 'san_javier', 'villa_alegre', 'yerbas_buenas', 'curico', 'hualanne', 'licanten', 'molina', 'rauco', 'romeral', 'sagrada_familia', 'teno', 'vichuquen', 'cauquenes', 'chanco', 'pelluhue', 'talca', 'constitucion', 'curepto', 'empedrado', 'maule', 'pelarco', 'pencahue', 'rio_claro', 'san_clemente', 'san_rafael', 'talagante', 'el_monte', 'isla_de_maipo', 'padre_hurtado', 'pennaflor', 'la_pintana', 'la_reina', 'las_condes', 'lo_barnechea', 'lo_espejo', 'lo_prado', 'macul', 'maipu', 'nnunnoa', 'pedro_aguirre_cerda', 'pennalolen', 'providencia', 'pudahuel', 'quilicura', 'quinta_normal', 'recoleta', 'renca', 'san_joaquin', 'san_miguel', 'san_ramon', 'vitacura', 'santiago', 'cerrillos', 'cerro_navia', 'conchali', 'el_bosque', 'estacion_central', 'huechuraba', 'independencia', 'la_cisterna', 'la_florida', 'la_granja', 'colina', 'lampa', 'tiltil', 'puente_alto', 'pirque', 'san_jose_de_maipo', 'san_bernardo', 'buin', 'calera_de_tango', 'paine', 'melipilla', 'alhue', 'curacavi', 'maria_pinto', 'san_pedro', 'porvenir', 'primavera', 'timaukel', 'punta_arenas', 'laguna_blanca', 'rio_verde', 'san_gregorio', 'natales', 'torres_del_paine', 'cabo_de_hornos', 'antartica', 'aysen', 'cisnes', 'guaitecas', 'lago_verde', 'coyhaique', 'cochrane', 'ohiggins', 'tortel', 'chile_chico', 'rio_iba%C3%B1ez', 'quinchao', 'castro', 'ancud', 'chonchi', 'curaco_de_velez', 'dalcahue', 'puqueldon', 'queilen', 'quellon', 'quemchi', 'rio_negro', 'osorno', 'puerto_octay', 'purranque', 'puyehue', 'san_juan_de_la_costa', 'san_pablo', 'puerto_montt', 'calbuco', 'cochamo', 'fresia', 'frutillar', 'los_muermos', 'llanquihue', 'maullin', 'puerto_varas', 'chaiten', 'futaleufu', 'hualaihue', 'palena', 'valdivia', 'corral', 'lanco', 'los_lagos', 'mafil', 'mariquina', 'paillaco', 'panguipulli', 'la_union', 'futrono', 'lago_ranco', 'rio_bueno', 'angol', 'collipulli', 'curacautin', 'ercilla', 'lonquimay', 'los_sauces', 'lumaco', 'puren', 'renaico', 'traiguen', 'victoria', 'gorbea', 'lautaro', 'loncoche', 'melipeuco', 'nueva_imperial', 'padre_las_casas', 'perquenco', 'pitrufquen', 'pucon', 'saavedra', 'teodoro_schmidt', 'tolten', 'vilcun', 'villarrica', 'cholchol', 'temuco', 'carahue', 'cunco', 'curarrehue', 'freire', 'galvarino', 'concepcion', 'coronel', 'chiguayante', 'florida', 'hualqui', 'lota', 'penco', 'san_pedro_de_la_paz', 'santa_juana', 'talcahuano', 'tome', 'hualpen', 'lebu', 'arauco', 'cannete', 'contulmo', 'curanilahue', 'los_alamos', 'tirua', 'los_angeles', 'antuco', 'laja', 'mulchen', 'nacimiento', 'negrete', 'quilaco', 'quilleco', 'san_rosendo', 'santa_barbara', 'tucapel', 'alto_biobio', 'cabrero', 'yumbel', 'quirihue', 'cobquecura', 'coelemu', 'ninhue', 'portezuelo', 'ranquil', 'treguaco', 'san_carlos', 'coihueco', 'nniquen', 'san_fabian', 'san_nicolas', 'chillan', 'bulnes', 'chillan_viejo', 'el_carmen', 'pemuco', 'pinto', 'quillon', 'san_ignacio', 'yungay']

def detectUserTypeField(body):
    body=str(body)
    files=body.split('&')
    for i in range(0,len(files)):
        data=files[i].split('=')
        for j in range(0,len(data)):
            if data[j] == 'text_type_user':
                return True
    return False

def extractComunesFromForm(param):
    comunas=[]
    index_comunes=[]
    files=param.split('&')
    if len(comunes_dict)==0:
        build_comunes_dictionary()
    for i in range(0,len(files)):
        data=files[i].split('=')
        for j in range(1,len(data)):
            if data[j]=='on' and data[j-1].find("lunes")==-1 and data[j-1].find("martes")==-1 and data[j-1].find("miercoles")==-1 and data[j-1].find("jueves")==-1 and data[j-1].find("viernes")==-1 and data[j-1].find("sabado")==-1 and data[j-1].find("domingo")==-1:
                comunas.append(data[j-1])
    for i in range(0,len(comunas)):
        index_comunes.append(comunes_dict[comunas[i]])
    return index_comunes

def build_days_dict():
    days_dict['lunes']=0
    days_dict['martes']=1
    days_dict['miercoles']=2
    days_dict['jueves']=3
    days_dict['viernes']=4
    days_dict['sabado']=5
    days_dict['domingo']=6

def normalize(final_schedule):
    n = len(final_schedule)
    m = len(final_schedule[0])
    for i in range(1,n):
        if len(final_schedule[i])>m:
            m = len(final_schedule[i])
    for i in range(0,n):
        for j in range(len(final_schedule[i]),m):
            final_schedule[i].append(0)
    return final_schedule

def extractScheduleFromForm(param, mode):
    schedule=[]
    final_schedule=[]
    if mode=='static':
        files=param.split('&')
        if len(days_dict)==0:
            build_days_dict()
        for i in range(0,len(files)):
            data=files[i].split('=')
            for j in range(1,len(data)):
                if data[j]=='on' and (data[j-1].find("lunes")!=-1 or data[j-1].find("martes")!=-1 or data[j-1].find("miercoles")!=-1 or data[j-1].find("jueves")!=-1 or data[j-1].find("viernes")!=-1 or data[j-1].find("sabado")!=-1 or data[j-1].find("domingo")!=-1):
                    aux=((data[j-1].split('_'))[0], (data[j-1].split('_'))[1])
                    schedule.append(aux)
        grid_schedule=np.zeros((7,24))
        for i in range(0,len(schedule)):
            grid_schedule[days_dict[schedule[i][0]]][int(schedule[i][1])]=1
        for i in range(0,7):
            for j in range(0,23):
                if grid_schedule[i][j]>0 and grid_schedule[i][j+1]==1:
                    grid_schedule[i][j+1]=grid_schedule[i][j+1]+grid_schedule[i][j]
                    grid_schedule[i][j]=0
        array_schedule=[[],[],[],[],[],[],[]]
        for i in range(0,7):
            for j in range(0,24):
                if grid_schedule[i][j]>0:
                    array_schedule[i].append(j-grid_schedule[i][j]+1)
                    array_schedule[i].append(0)
                    array_schedule[i].append(j+1)
                    array_schedule[i].append(0)
        final_schedule = array_schedule
    if mode == 'dynamic':
        grid_schedule=[[],[],[],[],[],[],[]]
        files=param.split('&')
        for i in range(0, len(files)):
            field=files[i].split('=')[0]
            if field.find("lunes_conjunto")!= - 1:
                conjunto=field.split('_')[1]
                for j in range(0, len(files)):
                    field = files[j].split('=')[0]
                    if field.find(conjunto) != -1 and field.find("lunes") == -1 and field.find("martes") == -1 and field.find("miercoles") == -1 and field.find("jueves") == -1 and field.find("viernes") == -1 and field.find("sabado") == -1  and field.find("domingo") == -1:
                        if len(files[j].split('=')[1])>0:
                            grid_schedule[0].append(int(files[j].split('=')[1]))
                        else:
                            grid_schedule[0].append(0)
            if field.find("martes_conjunto")!= - 1:
                conjunto=field.split('_')[1]
                for j in range(0, len(files)):
                    field = files[j].split('=')[0]
                    if field.find(conjunto) != -1 and field.find("lunes") == -1 and field.find("martes") == -1 and field.find("miercoles") == -1 and field.find("jueves") == -1 and field.find("viernes") == -1 and field.find("sabado") == -1  and field.find("domingo") == -1:
                        if len(files[j].split('=')[1])>0:
                            grid_schedule[1].append(int(files[j].split('=')[1]))
                        else:
                            grid_schedule[1].append(0)
            if field.find("miercoles_conjunto")!= - 1:
                conjunto=field.split('_')[1]
                for j in range(0, len(files)):
                    field = files[j].split('=')[0]
                    if field.find(conjunto) != -1 and field.find("lunes") == -1 and field.find("martes") == -1 and field.find("miercoles") == -1 and field.find("jueves") == -1 and field.find("viernes") == -1 and field.find("sabado") == -1  and field.find("domingo") == -1:
                        if len(files[j].split('=')[1])>0:
                            grid_schedule[2].append(int(files[j].split('=')[1]))
                        else:
                            grid_schedule[2].append(0)
            if field.find("jueves_conjunto")!= - 1:
                conjunto=field.split('_')[1]
                for j in range(0, len(files)):
                    field = files[j].split('=')[0]
                    if field.find(conjunto) != -1 and field.find("lunes") == -1 and field.find("martes") == -1 and field.find("miercoles") == -1 and field.find("jueves") == -1 and field.find("viernes") == -1 and field.find("sabado") == -1  and field.find("domingo") == -1:
                        if len(files[j].split('=')[1])>0:
                            grid_schedule[3].append(int(files[j].split('=')[1]))
                        else:
                            grid_schedule[3].append(0)
            if field.find("viernes_conjunto")!= - 1:
                conjunto=field.split('_')[1]
                for j in range(0, len(files)):
                    field = files[j].split('=')[0]
                    if field.find(conjunto) != -1 and field.find("lunes") == -1 and field.find("martes") == -1 and field.find("miercoles") == -1 and field.find("jueves") == -1 and field.find("viernes") == -1 and field.find("sabado") == -1  and field.find("domingo") == -1:
                        if len(files[j].split('=')[1])>0:
                            grid_schedule[4].append(int(files[j].split('=')[1]))
                        else:
                            grid_schedule[4].append(0)
            if field.find("sabado_conjunto")!= - 1:
                conjunto=field.split('_')[1]
                for j in range(0, len(files)):
                    field = files[j].split('=')[0]
                    if field.find(conjunto) != -1 and field.find("lunes") == -1 and field.find("martes") == -1 and field.find("miercoles") == -1 and field.find("jueves") == -1 and field.find("viernes") == -1 and field.find("sabado") == -1  and field.find("domingo") == -1:
                        if len(files[j].split('=')[1])>0:
                            grid_schedule[5].append(int(files[j].split('=')[1]))
                        else:
                            grid_schedule[5].append(0)
            if field.find("domingo_conjunto")!= - 1:
                conjunto=field.split('_')[1]
                for j in range(0, len(files)):
                    field = files[j].split('=')[0]
                    if field.find(conjunto) != -1 and field.find("lunes") == -1 and field.find("martes") == -1 and field.find("miercoles") == -1 and field.find("jueves") == -1 and field.find("viernes") == -1 and field.find("sabado") == -1  and field.find("domingo") == -1:
                        if len(files[j].split('=')[1])>0:
                            grid_schedule[6].append(int(files[j].split('=')[1]))
                        else:
                            grid_schedule[6].append(0)
        final_schedule = grid_schedule
    return normalize(final_schedule)

def extractDataFromRequest(request):
    dict={}
    dict["first_name"]=request.POST["first_name"]
    dict["last_name"]=request.POST["last_name"]
    dict["email"]=request.POST["email"]
    dict["phonenumber"]=""
    dict["password"]=request.POST["password1"]
    dict["valid_branch_office"] = True
    if len(request.POST["phonenumber"]) > 0:
        dict["phonenumber"]=request.POST["prefijo_phonenumber"]+request.POST["phonenumber"]
    dict["has_personal_location"] = request.POST["personal_location"]
    if dict["has_personal_location"]=='yes':
        dict["personal_latitude"]=float(request.POST["personal_latitude"])
        dict["personal_longitude"]=float(request.POST["personal_longitude"])
    if detectUserTypeField(request.body):
        dict["type_user"]=request.POST["text_type_user"]
        if len(dict["type_user"].split('-'))>1 or dict["type_user"]=="provider":
            dict["type_user"] = request.POST["text_type_user"]
            dict["existence_trade_name"] = request.POST["ask_existence_trade_name"]
            if dict["existence_trade_name"] == 'yes':
                dict["trade_name"] = request.POST["ask_trade_name"]
            dict["ask_personal_trade_location"] = request.POST["ask_personal_trade_location"]
            dict["ask_branch"] = request.POST["ask_branch"]
            if dict["ask_branch"] == 'yes':
                array_branch_office_latitudes = []
                array_branch_office_longitudes = []
                dict["number_branch_office"] = int(request.POST["number_branch_office"])
                if dict["number_branch_office"]>0:
                    for i in range(0, dict["number_branch_office"]):
                        array_branch_office_latitudes.append(float(request.POST["trade_latitude" + str(i)]))
                        array_branch_office_longitudes.append(float(request.POST["trade_longitude" + str(i)]))
                    dict["branch_office_latitudes"] = array_branch_office_latitudes
                    dict["branch_office_longitudes"] = array_branch_office_longitudes
                else:
                    dict["valid_branch_office"]=False
            dict["div_ask_zone"] = request.POST["div_ask_zone"]
            if dict["div_ask_zone"] == 'yes':
                dict["radio_country_or_commune"] = request.POST["radio_country_or_commune"]
                if dict["radio_country_or_commune"] == 'no_todo_chile':
                    dict["comunas"]=extractComunesFromForm(str(request.body))
            dict["ask_schedule"]=request.POST["ask_schedule"]
            if dict["ask_schedule"]=='yes':
                dict["schedule"] = extractScheduleFromForm(str(request.body), 'dynamic')
                #dict["ask_dynamic_static_table"]=request.POST["ask_dynamic_static_table"]
                #if dict["ask_dynamic_static_table"] == 'static':
                #    dict["schedule"]=extractScheduleFromForm(str(request.body), 'static')
                #if dict["ask_dynamic_static_table"] == 'dynamic':
                #    dict["schedule"]=extractScheduleFromForm(str(request.body), 'dynamic')
    return dict

def build_comunes_dictionary():
    for i in range(0, len(comunes_array)):
        comunes_dict[comunes_array[i]]=i

def save_data(dict):
    date_joined = datetime.now()
    user= UserCustomer()
    user.first_name=dict["first_name"]
    user.last_name=dict["last_name"]
    user.email=dict["email"]
    user.phone_number=dict["phonenumber"]
    user.set_password(dict["password"])
    type_user=[]
    personal_location = None
    for i in range(0, len(dict["type_user"].split("-"))):
        type_user.append(TypeUser.objects.get(name=dict["type_user"].split("-")[i].strip()).id)
    user.type_user=type_user
    if dict["has_personal_location"] == 'yes':
        personal_location = Point(x=dict["personal_longitude"], y=dict["personal_latitude"], srid=4326)
        user.location=personal_location
    if len(type_user)>1 or type_user[0]==2:
        shop = Shop()
        trade_locations=MultiPoint()
        if dict["existence_trade_name"] == 'yes':
            trade_name=dict["trade_name"]
            shop.name=trade_name
        if dict["ask_personal_trade_location"] == 'yes':
            user.personal_location_equal_trade_location= True
            if personal_location is not None:
                trade_locations.append(personal_location)
        if dict["ask_personal_trade_location"] == 'no':
            user.personal_location_equal_trade_location = False
        if dict["ask_branch"] == 'yes' and dict["valid_branch_office"]:
            n = len(dict["branch_office_latitudes"])
            for i in range(0,n):
                point = Point(x=dict["branch_office_longitudes"][i], y=dict["branch_office_latitudes"][i], srid=4326)
                trade_locations.append(point)
        shop.locations=trade_locations
        if dict["div_ask_zone"] == 'yes':
            scope = []
            if dict["radio_country_or_commune"] == 'todo_chile':
                for i in range(0,345):
                    scope.append(i)
            if dict["radio_country_or_commune"] == 'no_todo_chile':
                scope=dict["comunas"]
            shop.scope=scope
        if dict["ask_schedule"] == 'yes':
            schedule=dict["schedule"]
            shop.schedule = schedule
        shop.date_joined=date_joined
        shop.save()
        user.shop=shop
    user.date_joined=date_joined
    user.save()
