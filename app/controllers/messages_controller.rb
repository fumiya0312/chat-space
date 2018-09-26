class MessagesController < ApplicationController
    before_action :set_group

  def index
    @message = Message.new
    @messages = @group.messages.includes(:user)
      respond_to do |format|
        format.html
        format.json{ @new_messages = @messages.where("id > ?", params[:id] )}
        # binding.pry

      #自動更新の
      end
  end

  def create
    @message = @group.messages.new(message_params)
    if @message.save
      respond_to do |format|
        format.html { redirect_to group_messages_path(@group), notice: 'メッセージが送信されました'}
        format.json
        #細かいアクションを行う
      end
    else
      @messages = @group.messages.includes(:user)
      redirect_to :index ,alert: 'メッセージを入力してください。'
    end
  end

  private
  def message_params
    params.require(:message).permit(:content, :image).merge(user_id: current_user.id)
  end

  def set_group
    @group = Group.find(params[:group_id])
  end
end
