import Icon from '../icon';
import React from 'react';
import {mount} from 'enzyme';

describe('Icon', () => {
    it('onClick', () => {
        const fn = jest.fn();
        const c = mount(<Icon name='wechat' onClick={fn}/>);
        c.find('svg').simulate('click');
        expect(fn).toBeCalled();
    });
});