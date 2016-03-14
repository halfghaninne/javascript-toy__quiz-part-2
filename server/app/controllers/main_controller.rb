MyApp.get "/" do
  erb :"home"
end

MyApp.get "/question/:tracker" do
  question = Question.all[:tracker]
  @question = question.content
  @answers = question.answers # returns collection

  erb :"question"
end

# MyApp.get "/question/:tracker/answer" do

#   erb :"answer"
# end
