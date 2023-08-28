from tienda.models import Good, Subcategory, Category, TypeGood
from autenticacion.models import UserCustomer, Shop


def offers_any_product(shop):
    subcategories = Subcategory.objects.filter(category__in = Category.objects.filter(type_good = TypeGood.objects.get(id = 1)))
    goods = Good.objects.filter(shop = shop, subcategory__in = subcategories)
    return len(goods) > 0

def offers_any_service(shop):
    subcategories = Subcategory.objects.filter(category__in=Category.objects.filter(type_good=TypeGood.objects.get(id=2)))
    goods = Good.objects.filter(shop=shop, subcategory__in=subcategories)
    return len(goods) > 0

def create_jsons(type):
    if type=="search":
        subcategories_array=Subcategory.objects.all()
        categories_array=Category.objects.all()
        types_good_array=TypeGood.objects.all()
        jsons_array=[]
        for i in range(len(subcategories_array)):
            jsons_array.append({
                "type":"subcategory",
                "name": subcategories_array[i].name,
                "father":subcategories_array[i].category.name
            })
        for i in range(len(categories_array)):
            jsons_array.append({
                "type": "category",
                "name": categories_array[i].name,
                "father": categories_array[i].type_good.name
            })
        for i in range(len(types_good_array)):
            jsons_array.append({
                "type": "type_good",
                "name": types_good_array[i].name
            })
        return jsons_array

    if type == "shop":
        shops=Shop.objects.all()
        jsons_array=[]
        n=len(shops)
        for i in range(n):
            name=shops[i].name
            if name=="Tienda anónima":
                name="<ul>"
                for user in UserCustomer.objects.filter(shop=shops[i].id):
                    name=name+"<li>"+str(user.first_name)+" "+str(user.last_name)+"</li>"
                name=name+"</ul>"
            goods="Sin productos ni servicios que se ofrezcan en este momento"
            arr_goods=Good.objects.filter(shop=shops[i], available=True).order_by('subcategory').distinct('subcategory')
            button=""
            if len(arr_goods)>0:
                goods="Se ofrecen:\n<ul>"
                for good in arr_goods:
                    goods=goods+"<li>"+str(good.subcategory.name)+"</li>"
                goods=goods+"</ul>"
                button='<a href="tienda/?id='+str(shops[i].id)+'" class="btn btn-primary" style="color: whitesmoke">Visitar tienda</a>'
            m=shops[i].locations.num_points
            while(m>0):
                m=m-1
                point=shops[i].locations.pop(0)
                geo_json={
                    "type": "Feature",
                    "properties": {
                        "name": name,
                        "goods":goods,
                        "products":offers_any_product(shops[i]),
                        "services":offers_any_service(shops[i]),
                        "button":button
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [point.x,point.y]
                    }
                }
                jsons_array.append(geo_json)
        return jsons_array

