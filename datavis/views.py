import json

from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return render(request, 'index.html')


def data(request):

    response = {}
    response['result'] = 'failed'
    response['message'] = 'You messed up'

    return HttpResponse(json.dumps(response), content_type="application/json")
