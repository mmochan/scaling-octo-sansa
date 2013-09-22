require 'spec_helper'

describe "foos/index" do
  before(:each) do
    assign(:foos, [
      stub_model(Foo),
      stub_model(Foo)
    ])
  end

  it "renders a list of foos" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
  end
end
