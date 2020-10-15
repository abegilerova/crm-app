from django.db import models

from django.db import models
from django.utils import timezone

class Customer(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    phone_number = models.IntegerField()
    email_address = models.CharField(max_length=255)
    date_of_birth = models.DateField()
    ssn = models.IntegerField()
    address = models.CharField(max_length=255)

