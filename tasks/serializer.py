from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        #fields = ('id', 'title', 'description', 'done') manera normal
        model = Task
        fields = '__all__' #con esto llamamos a todos los campos para serializar
