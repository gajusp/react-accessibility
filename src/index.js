import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from 'components/Home';

/**
 * Courtesy - Kiara Contreras (https://www.linkedin.com/learning/react-accessibility)
 *
 * Keyboard Focus - ref="this.subscriptionMessage" & tabIndex="0". E.g. - Footer.js component
 * Skip page content (Skip Links, ) - E.g. - Navigation.js component
 * Keyboard access - E.g. - Navigation.js component
 *
 *
 * Lighthouse testing (Chrome dev tool) - categories - Accessibility - Generate report
 *
 *
 * MAC - VoiceOver
 * Windows - NVDA
 *
 * Reference :
 *
 * https://www.w3.org/WAI/tips/developing/
 * https://webaim.org/techniques/keyboard/
 */

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
