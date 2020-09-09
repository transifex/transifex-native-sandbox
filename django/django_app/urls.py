from django.conf.urls import url

from .views import django_view


urlpatterns = [
    url(r'^$', django_view),
]
