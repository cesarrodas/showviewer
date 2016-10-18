import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import {TvApp} from './components/TvApp';

// load foundation
$(document).foundation();
// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
	<TvApp></TvApp>,
	document.getElementById('app')
);
