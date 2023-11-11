from django.contrib.auth import authenticate, get_user_model
from djoser.serializers import \
    UserCreateSerializer as DjoserUserCreateSerializer
from djoser.serializers import UserSerializer
from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken

from .models import Fears, Ratings

User = get_user_model()


class TestSerializer(serializers.Serializer):
    param = serializers.CharField()


class FearsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fears
        fields = ('id', 'title', 'descr', 'src')


class RatingsSerializer(serializers.ModelSerializer):

    username = serializers.CharField(
        source="username.username", required=True)

    class Meta:
        model = Ratings
        fields = ('__all__')


class UserCreateSerializer(DjoserUserCreateSerializer):
    token = serializers.SerializerMethodField(method_name='get_token')

    class Meta(DjoserUserCreateSerializer.Meta):
        fields = ['id', 'username', 'token', 'password']

    def get_token(self, user):
        refresh = RefreshToken.for_user(user)
        return str(refresh.access_token)
