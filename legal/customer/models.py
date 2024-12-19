from django.db import models
from django.db import connection
from utils import dictfetchall

class CustomerInfoManager(models.Manager):
    def list_all_customer(self):
        query = f"CALL GetCustomerList()"
        with connection.cursor() as cursor:
            cursor.execute(query)            
            return dictfetchall(cursor) 

class CustomerInfo(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=150)
    phone = models.CharField(max_length=20)
    email = models.CharField(max_length=100)
    company_name = models.CharField(max_length=150)

    objects = CustomerInfoManager()

    def __str__(self):
        return self.empName