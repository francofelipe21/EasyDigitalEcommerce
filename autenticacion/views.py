from django.contrib import messages
from django.shortcuts import redirect, render, HttpResponse
from django.contrib.auth import login as django_login, logout as django_logout, authenticate as django_authenticate
#importing as such so that it doesn't create a confusion with our methods and django's default methods
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from django.utils import timezone
from django.views import View
from django.contrib.gis import forms as geoforms
from autenticacion.auxiliary_functions import extractDataFromRequest, save_data
from appCentral.views import arrive_home
from .models import Shop, TypeUser, UserCustomer
from .forms import AuthenticationForm, RegistrationForm
from django.contrib import messages

class Autenticacion(View):
    def get(self, request):
        return render(request, "registro.html", {"form": RegistrationForm})

    def post(self, request):
        if self.request.headers.get('x-requested-with') == 'XMLHttpRequest':
            return JsonResponse({"valid":len(UserCustomer.objects.filter(email=self.request.POST["email"])) == 0})
        else:
            dict = extractDataFromRequest(request)
            save_data(dict)
            django_login(request, django_authenticate(email=request.POST["email"], password=request.POST["password1"]))
            messages.success(request, '¡Bienvendio '+dict["first_name"]+' '+dict["last_name"]+'!')
            return redirect('home')
            #return arrive_home(request,{"first_name" : dict["first_name"], "last_name" : dict["last_name"], "welcome" : True})
        #and form.is_valid()
        #valid_data=dict["valid_number"]
        #if valid_data and request.POST["password1"] == request.POST["password2"]:

        #    django_login(request, django_authenticate(email=request.POST["email"], password=request.POST["password1"]))
        #    return redirect('home')  # user is redirected to dashboard
        #else:
        #    request.POST._mutable = True
        #    if not valid_data:
        #        form.add_error("phonenumber","Número de contacto inválido")
        #    form.add_error("type_user","Vuelva a colocar su información por favor")
        #    form.add_error("personal_location","Vuelva a colocar su información por favor")
        #    request.POST["type_user"]=None
        #    request.POST["personal_location"]=None
        #    for msg in form.error_messages:
        #        messages.error(request, form.error_messages[msg])
        #    return render(request, "registro.html", {"form": form})

class LoginForm(AuthenticationForm):
    def __init__(self, *args, **kwargs):
        super(LoginForm, self).__init__(*args, **kwargs)
        self.fields["email"].label="Correo electrónico"
        self.fields["email"].widget.attrs['placeholder'] = 'correo@electronico.com'
        self.fields["password"].label="Contraseña"
        self.fields['password'].widget.attrs['placeholder'] = 'Contraseña'


def login(request):
    if request.method == 'POST':
        form = AuthenticationForm(data = request.POST)
        if form.is_valid():
            email = request.POST['email']
            password = request.POST['password']
            user = django_authenticate(email=email, password=password)
            if user is not None:
                if user.is_active:
                    django_login(request,user)
                    messages.success(request, '¡Bienvendio ' + user.first_name + ' ' + user.last_name + '!')
                    return redirect('home')
                    #return render(request, "appCentral/home.html",{"first_name":user.first_name,"last_name":user.last_name,"welcome":True}) #user is redirected to dashboard
                    #return arrive_home(request, {"first_name":user.first_name,"last_name":user.last_name,"welcome":True})
            else:
                messages.error(request, 'Error en el correo y/o contraseña')
                return redirect('iniciar_sesion')
    else:
        form = LoginForm()
    return render(request,'login.html',{'form':form,})

def register(request):
    if request.method == 'POST':
        form = RegistrationForm(data = request.POST)
        if form.is_valid():
            user = form.save()
            u = django_authenticate(email = request.POST['email'], password = request.POST['password'])
            django_login(request,u)
            return redirect('home')
    else:
        form = RegistrationForm()
    return render(request,'register.html',{'form':form,})

def logout(request):
    django_logout(request)
    return redirect('/')

def leaflet_map_personal_location(request):
    return render(request,'leaflet_map_personal_location.html')

def leaflet_map_trade_locations(request):
    return render(request,'leaflet_map_trade_locations.html')

##
# @login_required(login_url ="/")
# def dashboard(request):
#     return render(request, 'dashboard.html',{})#