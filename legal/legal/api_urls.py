from django.urls import path
from . import api_views

urlpatterns = [
    path('customer/list', api_views.getCustomerList, name='get_customer_list')
]