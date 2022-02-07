import React from 'react';
import 'styles/navigation.css';
import logo from 'assets/images/logo-wordmark-color.svg';

class Navigation extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
    };

    this.timeOutId = null;

    // this.toggleContainer = React.createRef();
  }

  onClickHandler = () => {
    this.setState((currentState) => ({ isOpen: !currentState.isOpen }));
  };

  onFocusHandler = () => {
    clearTimeout(this.timeOutId);
  };

  onBlurHandler = () => {
    this.timeOutId = setTimeout(() => {
      this.setState({
        isOpen: false,
      });
    });
  };

  render() {
    return (
      <div className='nav__container'>
        <a href='/'>
          <img src={logo} alt='logo' className='logo' />
        </a>
        <nav>
          {/* Keyboard access */}
          <div
            // ref={this.toggleContainer}
            onFocus={this.onFocusHandler}
            onBlur={this.onBlurHandler}
          >
            <button onClick={this.onClickHandler} className='dropdown__button'>
              Browse
              <i className='arrow down'></i>
            </button>
            {this.state.isOpen && (
              <ul className='dropdown__options'>
                <li>
                  <a href='/oil-lovers-club'>Oil Lover's Club</a>
                </li>
                <li>
                  <a href='/shop'>Shop</a>
                </li>
                <li>
                  <a href='/blog'>Blog</a>
                </li>
              </ul>
            )}
          </div>

          {/* Skip page content */}
          {/* <a href='#learn_more' className='skip-link'>
            Go to Learn More
          </a>
          <a href='#products' className='skip-link'>
            Go to Products
          </a> */}

          <a href='/'>Home</a>
          <a href='/about'>About</a>
          <a href='/tours-events'>Tours & Events</a>
          <a href='/contact'>Contact</a>
        </nav>
      </div>
    );
  }
}

export default Navigation;
