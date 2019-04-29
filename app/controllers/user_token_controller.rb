class UserTokenController < Knock::AuthTokenController
  skip_before_action :verify_authenticity_token
  # TODO: Following shouldn't be needed, front end must be building something wrong
  before_action :authenticate, except: :invalidate

   def invalidate
    puts "User Token 'invalidate'" 
    # We really can't destroy/invalidate the token
    # but we could blacklist it.  ToDo: blacklist, check out redis
    # TODO: not working....
    render :json => '{status: "success"}'
   end

end
© 2019 GitHub, Inc.