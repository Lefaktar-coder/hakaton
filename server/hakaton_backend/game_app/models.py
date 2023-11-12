from django.db import models


class Fears(models.Model):
    title = models.CharField(max_length=200)
    descr = models.TextField()
    src = models.ImageField('Картинка',
                            upload_to='fears/',)
