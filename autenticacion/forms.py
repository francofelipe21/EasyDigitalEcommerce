from django import forms
from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm
from django.forms import Select
from .models import UserCustomer

from django.contrib.gis import forms as geoforms

class RegistrationForm(ModelForm):
    first_name = forms.CharField(required=True, label="Nombre/s:", help_text="Puede colocar más de un nombre si lo desea", widget=forms.TextInput(attrs={"class":"form-control", 'maxlength':'50'}))
    last_name = forms.CharField(label="Apellido/s:", help_text="Puede colocar su primer apellido o segundo o ambos apellidos", widget=forms.TextInput(attrs={"class":"form-control", 'maxlength':'50'}))
    email = forms.EmailField(widget=forms.TextInput(
        attrs={'class': 'form-control','type':'text','name': 'email','placeholder':'ejemplo@correo.com', 'maxlength':'255'}),
        label="Correo electrónico:")
    prefijo_phonenumber=forms.ChoiceField(choices=[('+562','+562'),('+569','+569')],label='Código',help_text="Indique su código", widget = forms.Select(attrs={'class': 'form-control'}))
    phonenumber=forms.CharField(label="Número de contacto" , widget = forms.TextInput(attrs={'class': 'form-control', 'maxlength':'8'}))
    personal_location = forms.ChoiceField(
        widget=forms.RadioSelect(attrs={'id':'id_personal_location','onclick':'show_map_personal_location();'}),
        choices=[
            ('yes', 'Sí'),
            ('no', 'No'),
        ],
        label="¿Desea agregar su ubicación personal?"
    )
    type_user=forms.MultipleChoiceField(
        widget=forms.CheckboxSelectMultiple(attrs={'id':'t_u','onclick':'agregar_consultas();'}),
        choices=[
            ('client', 'Cliente'),
            ('provider', 'Proveedor de bienes y/o servicios'),
        ],
        label="Indique su/s tipo/s de usuario por favor"
    )
    password1 = forms.CharField(widget=forms.PasswordInput(
        attrs={'class':'form-control','type':'password', 'name':'password1'}),
        label="Contraseña:",help_text=["Su contraseña no puede asemejarse tanto a su otra información personal.",
                                      "Su contraseña debe contener al menos 8 caracteres.",
                                      "Su contraseña no puede ser una clave utilizada comúnmente.",
                                       "Su contraseña no puede ser completamente numérica."])
    password2 = forms.CharField(widget=forms.PasswordInput(
        attrs={'class':'form-control','type':'password', 'name': 'password2'}),
        label="Confirmación de contraseña:",help_text="Para verificar, introduzca la misma contraseña anterior.")

    '''added attributes so as to customise for styling, like bootstrap'''
    class Meta:
        model = UserCustomer
        fields = ['first_name', 'last_name', 'email', 'prefijo_phonenumber', 'phonenumber', 'personal_location', 'type_user', 'password1', 'password2']
        field_order = ['first_name', 'last_name', 'email', 'prefijo_phonenumber', 'phonenumber', 'personal_location', 'type_user', 'password1', 'password2']

    def clean(self):
        """
        Verifies that the values entered into the password fields match
        NOTE : errors here will appear in 'non_field_errors()'
        """
        cleaned_data = super(RegistrationForm, self).clean()
        if 'password1' in self.cleaned_data and 'password2' in self.cleaned_data:
            if self.cleaned_data['password1'] != self.cleaned_data['password2']:
                raise forms.ValidationError("Passwords don't match. Please try again!")
        return self.cleaned_data

    def save(self, commit=True):
        print(forms.GET)
        user = super(RegistrationForm,self).save(commit=False)
        user.set_password(self.cleaned_data['password1'])
        if commit:
            user.save()
        return user

#The save(commit=False) tells Django to save the new record, but dont commit it to the database yet

class AuthenticationForm(forms.Form): # Note: forms.Form NOT forms.ModelForm
    email = forms.EmailField(widget=forms.TextInput(
        attrs={'class': 'form-control','type':'text','name': 'email','placeholder':'Email'}),
        label='Email')
    password = forms.CharField(widget=forms.PasswordInput(
        attrs={'class':'form-control','type':'password', 'name': 'password','placeholder':'Password'}),
        label='Password')

    class Meta:
        fields = ['first_name','last_name','email', 'password']