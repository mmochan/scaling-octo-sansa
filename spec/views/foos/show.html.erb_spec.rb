require 'spec_helper'

describe "foos/show" do
  before(:each) do
    @foo = assign(:foo, stub_model(Foo))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
  end
end
