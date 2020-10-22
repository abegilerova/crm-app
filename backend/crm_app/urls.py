from django.urls import path, include
from .views import CustomerViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'customers', CustomerViewSet)
urlpatterns = router.urls