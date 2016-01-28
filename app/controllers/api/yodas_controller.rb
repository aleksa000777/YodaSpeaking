class Api::YodasController < ApplicationController
  def index
    dbPhrases = Yoda.all
    render json: {phrases: dbPhrases}
  end

  def create
    newPhrase = Yoda.create(phrase_params)
    render json: newPhrase
  end

  private
  def phrase_params
    params.require(:phrases).permit(:input, :output, :name)
  end


end
