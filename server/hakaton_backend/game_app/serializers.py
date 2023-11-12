from rest_framework import serializers
from .models import Fears


class TestSerializer(serializers.Serializer):
    param = serializers.CharField()


class FearsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fears
        fields = ('id', 'title', 'descr', 'src')
