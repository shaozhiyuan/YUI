import * as renderer from 'react-test-renderer'
import Icon from '../icon';
import React from 'react';
import {mount} from 'enzyme';

describe('Icon', () => {
    it('他是个icon,svg', () => {
        const json = renderer.create(<Icon name="wechat"/>).toJSON();
        expect(json).toMatchSnapshot()
    });
    it('render successfully', () => {
        const json = renderer.create(<Icon name="wechat"/>).toJSON();
        expect(json).toMatchSnapshot()
    });
    it('onClick', () => {
        const fn = jest.fn();
        const c = mount(<Icon name='wechat' onClick={fn}/>);
        c.find('svg').simulate('click');
        expect(fn).toBeCalled();
    });
});