from django.db import models

# Create your models here.
class work(models.Model):
    name = models.CharField(max_length=500)
    email = models.EmailField()
    message = models.TextField(max_length=1000000)
    
    def __str__(self):
        return self.name - self.email