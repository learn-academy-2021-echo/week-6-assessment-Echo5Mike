# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer:
  It is my understanding you would have to create a new column and name it the same as the foreign key that you want to pass it.

  Researched answer:
It is my understanding you would have to create a new column and name it the same as the foreign key that you want to pass it. You would also need to use the convention of has_many__?__.  Once you updated the model Cohort  you would also need to update the foreign key of the Student model.


2. Which RESTful routes must always be passed params? Why?

  Your answer:
  I believe that create and update are the the RESTful routes that need to be passed params.  This is either to create a new entry with values or update the existing values.

  Researched answer:
  I believe that create and update are the the RESTful routes that need to be passed params.  This is especially true when it come to create a new entry with values or update the existing values.  Params can be used in any Restful route to identify certain Id's or methods


3. Name three rails generator commands. What is created by each?

  Your answer:
  Rails g = will generate a all the folders and routes needed
  rails generate = will generate all the basic folders but you will need to make the routes and controler.

  Researched answer:
  Rails Generate Resources = will create all the folders and files that you will need to have an app running it will set up your view and controller along with your routes.
  Rails Generate Controller = will create your views and controller along with some css files.
  Rails Generate Model = is the creating of the model or the object.


4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    route: /students   
Index = will usually give you back a complete list of everything in the table.

action: "POST"   route: /students   
Create =  if you are posting somethings it means that you are adding something that is not their.

action: "GET"    route: /students/new 
New = if you are creating a new instance of this "student" then you will need to use the new controller method.

action: "GET"    route: /students/2  
Show = it seems that you are getting student with ide of 2.  You want to show that specific student.

action: "GET"    route: /students/2/edit    
Edit = if you wanted to get and edit done you would need the edit controller method

action: "PATCH"  route: /students/2     
Update = both patch and put will need the update controller method if you are "updating" a particular student.

action: "DELETE" route: /students/2      
Destroy = is the method used to delete a particular student.



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).
1. As a user I see a page with a summary of the website.
2. As a user i see a list of "chores" or things todo.
3. next to each todo item i can see the progress of each todo item.  not started, in progress or completed.
4. As a user I can add a new todo item to the list. 
5. As a user i can update my todo from not started to in progress
6. As a user I can update my todo from in progress to completed.
7. As a user I see all my completed todo's at the bottom of the list.
8. As a user I can see a completed task button where I can see all my completed tasks.
9. As a user I can sign in with a user name and password.
10. As a user I can share my profile with others.
Stretch challenge.  I can see others todo list and offer help.
