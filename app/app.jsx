import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import {TvRoutes} from './router/index';

// load foundation
$(document).foundation();
// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
	<TvRoutes></TvRoutes>,
	document.getElementById('app')
);
