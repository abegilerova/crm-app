from rest_framework import serializers
from .models import Customer



class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ['pk','first_name', 'last_name', 'phone_number', 'email_address','date_of_birth', 'ssn', 'address']
  
    