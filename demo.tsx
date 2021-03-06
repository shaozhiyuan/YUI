// @ts-nocheck
import React, {useState} from 'react';
import Highlight, {defaultProps} from 'prism-react-renderer';

interface Props {
  code: string;
}

const Demo: React.FunctionComponent<Props> = (props) => {
  const [codeVisible, setCodeVisible]= useState(false);
  const code = (
    <Highlight {...defaultProps} code={props.code} language="jsx">
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({line, key: i})}>
            {line.map((token, key) => (
              <span {...getTokenProps({token, key})} />
            ))}
          </div>
        ))}
      </pre>
      )}
    </Highlight>
  );
  return (
    <div>
      {props.children}
      <div>
        <button style={{marginBottom: 8}} onClick={() => setCodeVisible(!codeVisible)}>
          {codeVisible?'隐藏代码':'显示代码'}
        </button>
        {codeVisible && code}
      </div>
    </div>
  );
};

export default Demo;