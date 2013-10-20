require 'test_helper'

class ExampleControllerTest < ActionController::TestCase
  test "should get backbone_routing" do
    get :backbone_routing
    assert_response :success
  end

end
