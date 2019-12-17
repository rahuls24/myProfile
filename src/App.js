import React, { Component } from 'react';
import Header from './components/Header';
import DisplayPic from './components/DisplayPic';
import Divider from '@material-ui/core/Divider';
import MyAbout from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <DisplayPic />
        <Divider />
        <MyAbout />
        <Divider />
        <Project />
        <Divider />
        <Contact />
        <Divider />
        <Footer />
      </div>
    );
  }
}
