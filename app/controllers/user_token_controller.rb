class UserTokenController < Knock::AuthTokenController
  skip_before_action :verify_authenticity_token
  # TODO: Following shouldn't be needed, front end must be building something wrong
  before_action :authenticate, except: :invalidate

   def invalidate
   end

end
© 2019 GitHub, Inc.