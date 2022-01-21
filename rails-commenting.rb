# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) The class BlogPost get its inherits from the applicationcontroller
class BlogPostsController < ApplicationController
  def index
    # ---2) @post is getting assigned to the BlogPost.all, therefore when you "view" @post you will see all the blog post.
    @posts = BlogPost.all
  end

  def show
    # ---3) at this @post gets assigned a single blog post with via id params
    @post = BlogPost.find(params[:id])
  end

  # ---4) def is the start of making a method the "new" the name of that method
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)@post gets to BlogPost.create and takes in blog_post_params as a arugment.  Seems to be that this is the start of creating a new post
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6)we are calling our def "edit" and will be used as method to edit our blog post
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)@post is assigned to blog via id and it is being updated in the database with the .update method.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) redirect_to is going to "redirect" the user to the blog post path and it is getting pased the arugment of @post.  It seems to be seving as a catch all to the destroy method if something didn't work properly.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) private add restriction to the params/method that you do not want you user to have access to.  Everything under private will have those restrictions. 
  private
  def blog_post_params
    # ---10)It is my understanding that .require is requireing that the blog post contain the two permited keys.
    params.require(:blog_post).permit(:title, :content)
  end
end
