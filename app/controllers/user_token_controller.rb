class UserTokenController < Knock::AuthTokenController
  skip_before_action :verify_authenticity_token
  before_action :authenticate, except: :invalidate

   def invalidate
    puts "User Token 'invalidate'" 

    render :json => '{status: "success"}'
   end

end
