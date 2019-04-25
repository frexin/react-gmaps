import React from 'react';
import App from './App';

import {mount} from 'enzyme';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';

import MarkerItem from './components/MarkerItem'
import MarkerForm from './components/MarkerForm'

it('renders without crashing', () => {
  shallow(<App/>);
});

describe('Marker Item', () => {
  const marker = {"name": "Test Item", "address": "test addr", "lat": "55.8304", "lng": "49.066", "id": 1};
  const emptyFunc = jest.fn();

  const markerItem = <MarkerItem {...marker} deleteCallback={emptyFunc} openCallback={emptyFunc} />;
  const markerItemComponent = mount(markerItem);

  const output = shallow(markerItem);

  it('render correctly MarkerItem component', () => {
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('component renders correct title', () => {
    expect(markerItemComponent.find('h4 > a').text()).toEqual(marker.name);
    expect(markerItemComponent.find('.addrName').text()).toEqual(marker.address);


    expect(markerItemComponent.find('.lng').text()).toEqual(marker.lng);
    expect(markerItemComponent.find('.lat').text()).toEqual(marker.lat);
  });

  it('component is able to fire event on item click', () => {
    markerItemComponent.find('.btn-danger').first().simulate('click');
    expect(emptyFunc).toHaveBeenCalledWith(1);

    markerItemComponent.find('.btn-primary').first().simulate('click');
    expect(emptyFunc).toHaveBeenCalled();
  })
});

describe('Marker Form', () => {
  const callback = jest.fn();
  let marker = {"name": "Test Item", "address": "test addr", "lat": "55.8304", "lng": "49.066", "id": "1"};

  const markerForm = <MarkerForm formData={marker} saveCallback={callback} />;
  const markerFormComponent = mount(markerForm);

  const output = shallow(markerForm);

  it('render correctly MarkerItem component', () => {
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('component renders correct values', () => {
    expect(markerFormComponent.find('#title').instance().value).toEqual(marker.name);
    expect(markerFormComponent.find('#addressName').instance().value).toEqual(marker.address);
    expect(markerFormComponent.find('#latitude').instance().value).toEqual(marker.lat);
    expect(markerFormComponent.find('#longitude').instance().value).toEqual(marker.lng);
  });

  it('component should submit form', () => {
    marker.lat = parseFloat(marker.lat);
    marker.lng = parseFloat(marker.lng);

    markerFormComponent.find('form').first().simulate('submit');
    expect(callback).toHaveBeenCalledWith(marker);
  })
});
