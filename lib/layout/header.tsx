import React from 'react';
import {scopedClassMaker} from '../helpers/classes';


interface Props extends React.HTMLAttributes<HTMLElement> {
}

const sc = scopedClassMaker('yui-layout');
const Header: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props;
  return (
    <div className={sc('header', {extra: className})} {...rest}>x</div>
  );
};
export default Header;