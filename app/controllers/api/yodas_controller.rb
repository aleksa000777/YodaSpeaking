class Api::YodasController < ApplicationController
  def index
    dbPhrases = Yoda.all
    render json: {text: dbPhrases}
  end

  def create
    newPhrase = Yoda.create(phrase_params)
    render json: newPhrase
  end

  private
  def phrase_params
    params.require(:text).permit(:input, :output, :name)
  end


end
