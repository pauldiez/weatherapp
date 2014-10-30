from django.shortcuts import render

#load index page where weather app will run from
def index(request):

    # set context variables
    page_context = {
        "title": "Weather App"
    }

    # return render page
    return render(request, 'index.html', page_context)
