# Generated by Django 4.1 on 2023-11-11 08:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('game_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fears',
            name='src',
            field=models.ImageField(upload_to='fears/', verbose_name='Картинка'),
        ),
    ]
