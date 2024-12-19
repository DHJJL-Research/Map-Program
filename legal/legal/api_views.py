import json
from django.http import JsonResponse
from customer.models import CustomerInfo

def getCustomerList(request):
    result = {
        'status': False,
        'message': "",
        'data': {}
    }
    if request.method == 'GET':
        resultData = CustomerInfo.objects.list_all_customer()
        
        result['status'] = True
        result['message'] = "Success"
        result['data'] = resultData
    else:
        result['message'] = "GET method not allowed"
    return JsonResponse(result)