from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from decimal import Decimal


PERCENTAGE_VALIDATOR = [MinValueValidator(0), MaxValueValidator(100)]
        
class Stock(models.Model):
    name = models.CharField("Name", max_length=240)
    percent = models.DecimalField("Percent",max_digits=3, decimal_places=0, default=Decimal(0), validators=PERCENTAGE_VALIDATOR)

    def __str__(self):
        return self.name
