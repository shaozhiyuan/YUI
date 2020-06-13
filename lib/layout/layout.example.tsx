import React from 'react';
import Layout from './layout';
import Content from './content';
import Footer from './footer';
import Header from './header';


export default function () {
  return (
    <div>
      <Layout className="hi">
        <Header>header</Header>
        <Content>content</Content>
        <Footer>footer</Footer>
      </Layout>
    </div>
  )
};