from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.get_products),
    path('categories/', views.get_categories),
    path('usersprofile/', views.get_user_profile),
    path('orders/', views.get_orders),
    path('products/<int:pk>/', views.get_product),
]
