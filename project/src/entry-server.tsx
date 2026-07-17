import { renderToString } from 'react-dom/server';
import { createElement } from 'react';
import App from './App';

export function render() {
  return renderToString(createElement(App));
}
