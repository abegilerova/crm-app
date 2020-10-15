from django.urls import path, include
from .views import CustomerViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'customer', CustomerViewSet)
urlpatterns = router.urls