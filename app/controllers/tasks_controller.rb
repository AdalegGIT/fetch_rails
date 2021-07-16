class TasksController < ApplicationController
  def index
    @tasks = Task.all
    @task = Task.new
  end

  def create
    @task = Task.new
    @task.name = params[:task][:name]

    if @task.save
      case request.headers["ACCEPT"]
      when "application/json"
          render :json => @task
      when "text/html"
          render :inline => "<li> #{@task.name} </li>"
      else
        redirect_to tasks_url
      end
      
    end
  end

  def new
    @task = Task.new
  end
end


