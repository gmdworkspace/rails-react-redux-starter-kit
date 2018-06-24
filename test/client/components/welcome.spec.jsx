import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Welcome from 'client/javascripts/components/welcome/welcome';

describe('<Welcome />', () => {

  it('should render', () => {
    const component = shallow(<Welcome />);
    expect(component).to.have.length(1);
  });

});