import React, { Component } from 'react';
import './Sidebar.scss';

class Sidebar extends Component {
  // For managing focus
  firstLink = React.createRef();
  lastLink = React.createRef();

  componentDidMount() {
    this.firstLink.current.focus();
    document.body.setAttribute('data-scroll', 'false');
  }

  componentWillUnmount() {
    document.body.setAttribute('data-scroll', 'true');
  }

  trapFocus = (e, firstElement, lastElement, closeFunc) => {
    const esc = e.keyCode === 27;
    const tab = e.keyCode === 9;
    if (esc) { 
      closeFunc();
    } else if (tab && e.shiftKey && e.target === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (tab && !e.shiftKey && e.target === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  }

  render() {
    const {closeSidebar} = this.props;

    return (
      <div className="sidebar" id="sidebar">
        <nav className="mobileNavbar" role="navigation">
          <h2 className="mobileNavbar__title">Mobile Navigation Bar</h2>
          <ul 
            className="list mobileNavMenu"
            onKeyDown={(e) => this.trapFocus(e, this.firstLink.current, this.lastLink.current, closeSidebar)}
          >
            <li className="mobileNavMenu__item">
              <a href="#" className="mobileNavMenu__link" ref={this.firstLink}>Navbox</a>
            </li>
            <li className="mobileNavMenu__item">
              <a href="#" className="mobileNavMenu__link">NavStyle</a>
            </li>
            <li className="mobileNavMenu__item">
              <a href="#" className="mobileNavMenu__link">Shopping</a>
            </li>
            <li className="mobileNavMenu__item">
              <a href="#" className="mobileNavMenu__link">360 Editor</a>
            </li>
            <li className="mobileNavMenu__item">
              <a href="#" className="mobileNavMenu__link" ref={this.lastLink}>Dashboard</a>
            </li>
          </ul>
        </nav>
        <button className="button button_color_white sidebar__button">Get Started</button>
        <div 
          className="sidebarOverlay" 
          onClick={closeSidebar}
        />
      </div>
    );
  }
}

export default Sidebar;