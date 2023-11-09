from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import TestSerializer
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi

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


@swagger_auto_schema(operation_description="""Тестовый ендпоинт
                     для проверки АПИ""",
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
