from django.db import models
from django.db.models import Sum
from django.core.exceptions import ValidationError
from django.core.validators import MaxValueValidator, MinValueValidator
from decimal import Decimal


PERCENTAGE_VALIDATOR = [MinValueValidator(0), MaxValueValidator(100)]
        
class Stock(models.Model):
    name = models.CharField("Name", max_length=240)
    percent = models.DecimalField("Percent",max_digits=3, decimal_places=0, default=Decimal(0), validators=PERCENTAGE_VALIDATOR)
    def clean(self):
        total_percent = Stock.objects.exclude(pk=self.pk).aggregate(Sum('percent'))['percent__sum'] or 0

        if total_percent + self.percent > 100:
            raise ValidationError("Total percentage exceeding 100%.")

    def save(self, *args, **kwargs):
        self.clean()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name
