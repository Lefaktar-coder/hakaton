from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Fears(models.Model):
    title = models.CharField(max_length=200)
    descr = models.TextField()
    src = models.ImageField('Картинка',
                            upload_to='fears/',)


class Ratings(models.Model):
    username = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='ratings',
        verbose_name='Пользователь'
    )
    rating = models.IntegerField()

    class Meta:
        verbose_name = 'Рейтинги'
        verbose_name_plural = 'Рейтинги'
        constraints = [
            models.UniqueConstraint(
                fields=['username'],
                name='unique_user'
            )
        ]
