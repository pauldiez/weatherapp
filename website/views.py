from django.shortcuts import render

def index(request):

    # set context variables
    page_context = {
        "title": "Weather App"
    }

    # return render page
    return render(request, 'index.html', page_context)
