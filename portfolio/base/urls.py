from django.urls import path  
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.home, name="home"),
    path('pageone/', views.pageone, name="pageone"),
    path('pagetwo/', views.pagetwo, name="pagetwo"),
    path('pagethree/', views.pagethree, name="pagethree"),
    path('pagefour/', views.pagefour, name="pagefour"),
    path('pagefive/', views.pagefive, name="pagefive"),
    path('pagesix/', views.pagesix, name="pagesix"),
    path('pageseven/', views.pageseven, name="pageseven"),
    path('pageeight/', views.pageeight, name="pageeight"),
    path('pagenine/', views.pagenine, name="pagenine"),
    path('pageten/', views.pageten, name="pageten"),
    
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
