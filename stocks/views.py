from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.db.models import Avg 
from django.shortcuts import render
from .models import Stock
from .serializers import StockSerializer
from decimal import  Decimal
# Create your views here.
@api_view(['GET', 'POST'])
def stocks_list(request):
    if request.method == 'GET':
        data = Stock.objects.all()

        serializer = StockSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = StockSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PATCH'])
def equalize(request, **kwargs):
    avg_percent = Stock.objects.aggregate(Avg("percent", default=0))['percent__avg']
    if avg_percent is None :
        pass
    else:
        for obj in Stock.objects.all():
            obj.percent = Decimal(0); 
            obj.save()
        for obj in Stock.objects.all():
            obj.percent = avg_percent
            obj.save()
    return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['PUT', 'DELETE'])
def stocks_detail(request, pk):
    try:
        stock = Stock.objects.get(pk=pk)
    except Stock.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = StockSerializer(stock, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        stock.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)