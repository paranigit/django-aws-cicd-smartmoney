from django.db import models
import os
import uuid

# Create your models here.
class Account(models.Model):
    id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)
    account_id = models.CharField(max_length=25)
    account_name = models.CharField(max_length=200)
    hex_color = models.CharField(max_length=10)
    status = models.CharField(default='active', max_length=10)
    inserted_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.account_name + '-' + self.hex_color

    class Meta:
        verbose_name_plural = "Accounts"

class Lookup(models.Model):
    id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)
    lookup_key = models.CharField(max_length=25)
    lookup_value = models.CharField(max_length=200)
    status = models.CharField(default='active', max_length=10)

    def __str__(self):
        return self.lookup_key + '-' + self.lookup_value

    class Meta:
        verbose_name_plural = "Lookups"
