from rest_framework import serializers


class TestSerializer(serializers.Serializer):
    param = serializers.CharField()
