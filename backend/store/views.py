from django.http import JsonResponse

def home(request): 
    data = {
        'message':'Welcome to the E-Commerce store'
    }
    
    return JsonResponse(data)


# Create your views here.
