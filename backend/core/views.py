from .models import Employee
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from django.http import JsonResponse


def insert_view(request):
    name = request.GET.get("name")
    email = request.GET.get("email")
    phone = request.GET.get("phone")

    new_employee = Employee()
    new_employee.name = name
    new_employee.email = email
    new_employee.phone = phone
    new_employee.save()

    return HttpResponse("Success!")

def edit_view(request):
    target_id = request.GET.get("target_id")
    newname = request.GET.get("new_name")
    newmail = request.GET.get("new_mail")
    newphone = request.GET.get("new_phone")

    target = Employee(id=int(target_id), name=newname, email=newmail, phone=newphone)
    target.save()

    return HttpResponse("Updated!")

def delete_view(request):
    target_id = request.GET.get("target_id")

    target_e = get_object_or_404(Employee, id=int(target_id))
    target_e.delete()

    return HttpResponse("Deleted!")

def list_view(request):
    employees = Employee.objects.all()

    result = []
    for e in employees:
        result.append({
            "name": e.name,
            "email": e.email,
            "phone": e.phone,
            "id": e.id
        })
    
    return JsonResponse({
        "employees": result,
    })
