import React from 'react';
import ReactDom from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';

import IconExample from './lib/icon/icon.example';
import ButtonExample from './lib/button.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import {Layout, Header, Content, Aside, Footer} from './lib/layout/layout';

import './example.scss';



const logo = require('./logo.png');
ReactDom.render((
  <Router>
    <Layout className="site-page">
      <Header>
        <div className="site-page-logo">
          <img src={logo.default} width={60} alt=""/>
          YUI
        </div>
      </Header>
      <Layout>
        <Aside className="site-page-aside">
          <h2>组件</h2>
          <ul>
            <li>
              <NavLink to="/icon">Icon</NavLink>
            </li>
            <li>
              <NavLink to="/button">Button</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">对话框</NavLink>
            </li>
            <li>
              <NavLink to="/layout">layout布局</NavLink>
            </li>
          </ul>
        </Aside>
        <Content className="site-page-content">
          <Route path="/icon" component={IconExample}/>
          <Route path="/button" component={ButtonExample}/>
          <Route path="/dialog" component={DialogExample}/>
          <Route path="/layout" component={LayoutExample}/>
        </Content>
        <Footer className="site-page-footer">
          &copy; 邵志远
        </Footer>
      </Layout>
    </Layout>

  </Router>
), document.querySelector('#root'));
