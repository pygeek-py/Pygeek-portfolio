from django.shortcuts import render
from .models import work
from django.core.mail import send_mail
from django.conf import settings
# Create your views here.
def home(request):
    if request.method == "POST":
        name = request.POST['message-name']
        email = request.POST['message-email']
        message = request.POST['message']
        
        #send an email
        send_mail('Message from: ' + name,
            message,
            email,
            ['pygeekpg2010@gmail.com'],
            fail_silently=False,
            )
        
        
        
    return render(request, ('base/home.html'), {})
    
def pageone(request):
    return render(request, ('base/pageone.html'), {})

def pagetwo(request):
    return render(request, ('base/pagetwo.html'), {})
    
def pagethree(request):
    return render(request, ('base/pagethree.html'), {})

def pagefour(request):
    return render(request, ('base/pagefour.html'), {})
    
def pagefive(request):
    return render(request, ('base/pagefive.html'), {})

def pagesix(request):
    return render(request, ('base/pagesix.html'), {})
    
def pageseven(request):
    return render(request, ('base/pageseven.html'), {})

def pageeight(request):
    return render(request, ('base/pageeight.html'), {})

def pagenine(request):
    return render(request, ('base/pagenine.html'), {})
    
def pageten(request):
    return render(request, ('base/pageten.html'), {})