import React from 'react';
import ReactDom from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

import Icon from './lib/icon/icon';
import IconExample from './lib/icon/icon.example';
import ButtonExample from './lib/button.example';

ReactDom.render((
    <Router>
        <div>
            <header>
                <div className="logo">YUI</div>
            </header>
            <Icon name="left"/>
        </div>
        <div>
            <aside>
                <h2>组件</h2>
                <ul>
                    <li>
                        <Link to="/icon">Icon</Link>
                    </li>
                    <li>
                        <Link to="/button">Button</Link>
                    </li>
                </ul>
            </aside>
            <main>
                <Route path="/icon" component={IconExample}/>
                <Route path="/button" component={ButtonExample}/>
            </main>
        </div>
    </Router>
), document.querySelector('#root'));