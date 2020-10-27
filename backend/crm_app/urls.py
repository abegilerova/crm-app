from django.urls import path, include
from .views import CustomerViewSet
from rest_framework.routers import DefaultRouter
from .views import current_user, UserList

router = DefaultRouter()
router.register(r'customers', CustomerViewSet)
urlpatterns = router.urls

urlpatterns = [
    path('current_user/', current_user),
    path('users/', UserList.as_view())
]