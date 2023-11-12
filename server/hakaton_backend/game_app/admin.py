from django.contrib import admin
from .models import Fears


class FearsAdmin(admin.ModelAdmin):
    list_display = ('id', 'src', 'descr', 'title')


admin.site.register(Fears, FearsAdmin)
