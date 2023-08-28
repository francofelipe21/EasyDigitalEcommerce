from django import forms
from django.forms import ModelForm
from tienda.models import Good
from django.contrib.auth.forms import UserCreationForm
from django.forms import Select

class AnnadirBienForm(ModelForm):
    name = forms.CharField(label="Nombre del bien",widget=forms.TextInput(attrs={"class":"form-control", "maxlength":100}))
    price = forms.IntegerField(label="Precio",min_value=1, max_value=2147483647,widget=forms.NumberInput(attrs={"class":"form-control"}))
    description = forms.CharField(widget=forms.Textarea(attrs={"class":"form-control"}), label="Descripción", required=False)
    available=forms.ChoiceField(choices=[(True,'Sí'),(False,'Todavía no')], widget=forms.Select(attrs={"class":"form-control"}),label='¿El bien ya está disponible?')
    deliverable=forms.ChoiceField(choices=[(True,'Sí'),(False,'No')], widget=forms.Select(attrs={"class":"form-control"}),label='¿El bien se puede entregar a domicilio?')
    takeable=forms.ChoiceField(choices=[(True,'Sí'),(False,'No')], widget=forms.Select(attrs={"class":"form-control"}),label='¿El bien se puede retirar personalmente en la tienda?')
    allows_fraction=forms.ChoiceField(choices=[(True,'Sí'),(False,'No'),(False,'No aplica')],widget=forms.Select(attrs={"class":"form-control"}) , required=False,label='¿Podría vender una fracción del bien ofertado?')
    image = forms.FileField(label="Imagen", required=True, widget=forms.FileInput(attrs={"class":"form-control"}))
    class Meta:
        model=Good
        fields=["name", "description", "price", "available", "deliverable", "takeable", "allows_fraction","image","shop","subcategory","unit_measurement","date_joined"]