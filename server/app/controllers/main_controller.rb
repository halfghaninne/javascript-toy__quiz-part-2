MyApp.get "/" do
  erb :"home"
end

MyApp.get "/question/:tracker" do
  index = params[:tracker].to_i
  question = Question.all[index]
  @question = question.content
  @answers = question.answers # returns collection

  erb :"question"
end

MyApp.get "/question/:tracker/:answer" do
  index = params[:tracker].to_i
  question = Question.all[index]
  if params[:answer].to_s == question.correct_answer[0].content
    erb :"success"
  else
    erb :"failure"
  end
end

MyApp.get "/questions" do
  @count = Question.count
  erb :"questions"
end

