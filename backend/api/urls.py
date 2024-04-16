from django.urls import path
from . import views

urlpatterns = [
    path("notes/", view=views.NoteListCreate.as_view(), name="note-list"),
    path("notes/delete/<int:pk>",
         view=views.NoteDelete.as_view(), name="delete-note"),

]
