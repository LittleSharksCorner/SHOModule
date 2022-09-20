from django.shortcuts import render
from django.http import HttpResponse

from .form import *
import pandas as pd

# Create your views here.
def info(request):
    return render(request,'Force_HLG/details.html')

# View for pretest
def pretest(request):
    if request.method == "POST":
        form = pretestForm(request.POST)
        if form.is_valid():
            form = form.save(commit=False)
            form.user = request.user
            form.question = request.headers['question']
            form.timeStamp = request.headers['timeStamp']
            form.pageState = request.headers['pageState']
            form.save()
            return HttpResponse('There was a problem')
        else: 
            print(form.errors)


            
    else:
        form_list = [pretestForm() for i in range(10)]
        form_label_list = ['form'+str(i+1) for i in range(10)]
        forms = dict(zip(form_label_list,form_list))
        return render(request,'Force_HLG/pretest.html',{'forms':forms})


# # View for vectors
# def vectors(request):
#     if request.method == "POST":
#         usr = request.user
#         if request.headers['event'] == 'submission':
#             form = vectorForm(request.POST)
#             if form.is_valid():
#                 form = form.save(commit=False)
#                 form.user = request.user
#                 form.pageState = 'Question'
#                 form.event = 'submission'
#                 form.question = 'q1'
#                 form.timeStamp = request.headers['datetime']
#                 form.save()
#                 return HttpResponse('yay')
#         elif request.headers['event'] == 'page':
#             form = vectorLogForm(request.POST)
#             if form.is_valid():
#                 form.save()
#                 return HttpResponse('yay')
#         else:
#             form = vectorMouseForm(request.POST)
#             if form.is_valid():
#                 form.save()
#                 return HttpResponse('yay')
#             else:
#                 print(form.errors)
#     else:    
#         form = vectorForm()
#         log = vectorLogForm()
#         log2 = vectorLogForm()
#         mouse = vectorMouseForm()
#         context = {'form':form,'log':log,'log2':log2,'mouse':mouse,'user':request.user}
#         return render(request,'Force_HLG/vectors.html',{"context":context})

# View for forces
def energy(request):
    if request.method == 'POST':
        form = energyForm(request.POST)
        if form.is_valid():
            form = form.save(commit=False)
            form.user = request.user
            form.question = request.headers['question']
            form.timeStamp = request.headers['timeStamp']
            form.save()
            return HttpResponse('There was an error')
        else:
            print(form.errors)
    else:
        forms = {}
        forms['form1'] = energyForm()
        forms['form2'] = energyForm()
        forms['form3a'] = energyForm()
        forms['form3b'] = energyForm()
        forms['hintform3a'] = energyForm(initial={'choice':'NA'})
        forms['hintform3b'] = energyForm(initial={'choice':'NA'})
        forms['hintform4'] = energyForm(initial={'choice':'NA'})
        return render(request,'Force_HLG/energy.html',{'forms':forms})

# View for pretest
def posttest(request):
    if request.method == "POST":
        form = posttestForm(request.POST)
        if form.is_valid():
            form = form.save(commit=False)
            form.user = request.user
            form.question = request.headers['question']
            form.timeStamp = request.headers['timeStamp']
            form.pageState = request.headers['pageState']
            form.save()
            return HttpResponse('There was a problem')
        else: 
            print(form.errors)


            
    else:
        form_list = [posttestForm() for i in range(10)]
        form_label_list = ['form'+str(i+1) for i in range(10)]
        forms = dict(zip(form_label_list,form_list))
        return render(request,'Force_HLG/postTest.html',{'forms':forms})

def complete(request):
    return render(request,'Force_HLG/complete.html')
