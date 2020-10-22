from django.db import models

from django.db import models
from django.utils import timezone

class Customer(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=255)
    email_address = models.CharField(max_length=255)
    date_of_birth = models.DateField()
    ssn = models.CharField(max_length=255)
    address = models.CharField(max_length=255)

