from django.contrib import admin

from .models import Fears, Ratings


class FearsAdmin(admin.ModelAdmin):
    list_display = ('id', 'src', 'descr', 'title')


class RatingsAdmin(admin.ModelAdmin):
    list_display = ('username', 'rating')


admin.site.register(Fears, FearsAdmin)
admin.site.register(Ratings, RatingsAdmin)
