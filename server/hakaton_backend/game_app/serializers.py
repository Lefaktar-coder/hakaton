from django.contrib.auth import get_user_model
from djoser.serializers import \
    UserCreateSerializer as DjoserUserCreateSerializer
from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
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
    rating = serializers.SerializerMethodField(method_name='get_rating')

    class Meta(DjoserUserCreateSerializer.Meta):
        fields = ['id', 'username', 'token', 'password', 'rating']

    def get_token(self, user):
        refresh = RefreshToken.for_user(user)
        return str(refresh.access_token)

    def get_rating(self, user):
        return 0


class TokenObtainSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        data['token'] = data.pop('access')
        data["username"] = str(self.user)
        rating = Ratings.objects.filter(username=self.user)
        if rating.exists():
            data["rating"] = str(rating.values('rating')[0]['rating'])
        else:
            data["rating"] = 0
        return data


class CutomObtainPairView(TokenObtainPairView):
    serializer_class = TokenObtainSerializer
