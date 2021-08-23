from django.db import models


class Employee(models.Model):
    name = models.CharField(max_length=250)
    email = models.EmailField()
    phone = models.CharField(max_length=13)

    def __str__(self):
        return self.name