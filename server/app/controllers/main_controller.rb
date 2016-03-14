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

# MyApp.get "/question/:tracker/answer" do

#   erb :"answer"
# end
