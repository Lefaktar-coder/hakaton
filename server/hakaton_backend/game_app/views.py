from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from rest_framework import permissions, status, viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Fears, Ratings
from .serializers import FearsSerializer, RatingsSerializer, TestSerializer

User = get_user_model()

response_schema_dict = {
    "200": openapi.Response(
        description="Ответ в формате JSON где `xxxx` переданное значение ",
        examples={
            "application/json": {
                "param": "xxxx",
            }
        }
    ),
    "400": openapi.Response(description="""Ошибки валидации
                            (параметр не передан,
                            параметр передан, но пустой)""",
                            examples={
                                "application/json": {
                                    "param": [
                                        "This field is required."
                                    ],
                                }
                            })
}
test_param = openapi.Parameter(
    'param', openapi.IN_QUERY,
    description='Оправка любого значения через '
    'параметр `param` возвращает переданное значение в ответе',
    type=openapi.TYPE_STRING)


@swagger_auto_schema(operation_description="""Тестовый ендпоинт для проверки АПИ""",
                     method='post',
                     manual_parameters=[test_param],
                     responses=response_schema_dict)
@api_view(['POST'])
def test_endpoint(request):
    if request.method == 'POST':
        serializer = TestSerializer(data=request.data)
        if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class FearsViewSet(viewsets.ModelViewSet):
    queryset = Fears.objects.all()
    serializer_class = FearsSerializer
    http_method_names = ['get',]
    permission_classes = (permissions.AllowAny,)


class RatingsViewSet(viewsets.ModelViewSet):
    queryset = Ratings.objects.all()
    serializer_class = RatingsSerializer
    http_method_names = ['get', 'post']

    def get_permissions(self):
        if self.action == 'list':
            permission_classes = [permissions.AllowAny]
        if self.action == 'create':
            permission_classes = [permissions.IsAuthenticated]
        return [permission() for permission in permission_classes]

    def create(self, request, *args, **kwargs):

        response_data_success = {
            'detail': 'success',
        }
        response_data_error = {
            "detail3": "Authentication credentials were not provided."
        }

        serializer = RatingsSerializer(data=request.data)
        if serializer.is_valid():
            user_request = request.data['username']
            rating = request.data['rating']
            user = get_object_or_404(User, username=user_request)
            check_user_in_ratings = Ratings.objects.filter(
                username=user).exists()

            if not check_user_in_ratings:
                if user == self.request.user:
                    Ratings.objects.create(
                        rating=rating, username=self.request.user)
                    return Response(response_data_success, status=status.HTTP_200_OK)
                return Response(response_data_error,
                                status=status.HTTP_400_BAD_REQUEST)
            else:
                if user == self.request.user:
                    Ratings.objects.filter(
                        username=self.request.user).update(rating=rating)
                    return Response(response_data_success, status=status.HTTP_200_OK)
                return Response(response_data_error,
                                status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
