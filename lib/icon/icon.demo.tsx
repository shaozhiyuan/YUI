import React from 'react';
import IconExample from './icon.example';
import Demo from '../../demo';

const IconDemo: React.FunctionComponent = () => {
  const code = require('!!raw-loader!./icon.example.tsx').default;
  console.log(code);
  return (
    <Demo code={code}>
      <IconExample/>
    </Demo>
  );
};

export default IconDemo;