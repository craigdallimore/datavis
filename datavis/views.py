import json

from django.shortcuts import render
from django.http      import HttpResponse

def index(request):

    return render(request, 'partial/index.jinja2')

def pies(request):

    response = [
      [1,2,3],
      [2,3,4],
      [5,6,7]
    ];

    return HttpResponse(json.dumps(response), content_type="application/json")

