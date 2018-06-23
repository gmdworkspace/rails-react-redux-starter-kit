import React from 'react';
import ReactDom from 'react-dom';
import Welcome from './components/welcome';

const welcomeContainer = document.getElementById('welcome');

ReactDom.render(<Welcome />, welcomeContainer);

