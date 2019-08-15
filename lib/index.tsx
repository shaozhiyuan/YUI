import * as React from 'react';
import ReactDom from 'react-dom';
import Icon from './icon/icon';

const fn: React.MouseEventHandler<SVGAElement | SVGUseElement> = (e) => {
    console.log((e.target as HTMLDivElement));
};

ReactDom.render(<div>
    <Icon name="wechat" onClick={fn}/>
</div>, document.getElementById('root'));