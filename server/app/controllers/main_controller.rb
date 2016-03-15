MyApp.get "/" do
  erb :"home"
end

MyApp.get "/question/:tracker" do
  index = params[:tracker].to_i
  question = Question.all[index]
  @question = question.content

  erb :"question"
end

MyApp.get "/question/:tracker/answers" do
  index = params[:tracker].to_i
  question = Question.all[index]
  @answers = question.answers # returns collection
  erb :"answers"
end

MyApp.get "/question/:tracker/answers/:correct_answer" do
  index = params[:tracker].to_i
  question = Question.all[index]
  if params[:correct_answer].to_s == question.correct_answer[0].content
    erb :"success"
  else
    erb :"failure"
  end
end

MyApp.get "/questions" do
  @count = Question.count
  erb :"questions"
end

