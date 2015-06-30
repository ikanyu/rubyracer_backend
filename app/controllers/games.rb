
#1 display a list of all statuses
get '/games' do
end

#2 return an HTML form for creating a new status
get '/games/new' do
end

#3 create a new game (with players)
post '/games' do
  @game = Game.new
  @game.players.new(name: params["player1"])
  @game.players.new(name: params["player2"])
  if @game.save
    redirect to "/games/#{@game.id}"
  else
    redirect to '/'
  end
end

#4 display a specific status
get '/games/:id' do
  @players = Game.find(params[:id]).players
  erb :"game/game_on"
end

#5 return an HTML form for editing a status
get '/games/:id/edit' do
  @winner = params[:winner]
  byebug
  # @comment = Comment.find(params[:id])
  # erb :"comment/edit_comment"
end

#6 update a specific status
put '/games/:id' do
  Comment.find(params[:id]).update_attributes(params[:comment])
  redirect to '/statuses'
end

#5 return an HTML form for deleting a status
get '/games/:id/delete' do
  @comment = Comment.find(params[:id])
  erb :"comment/delete_comment"
end

#7 delete a specific status
delete '/games/:id' do
  Comment.find(params[:id]).destroy
  redirect to '/statuses'
end

