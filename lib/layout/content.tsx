import React from 'react';
import {scopedClassMaker} from '../helpers/classes';


interface Props extends React.HTMLAttributes<HTMLElement> {
}

const sc = scopedClassMaker('yui-layout');
const Content: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props;
  return (
    <div className={sc('content', {extra: className}) } {...rest}>x</div>
  );
};

export default Content;