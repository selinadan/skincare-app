import React from 'react';

import './App.css';

import RoutineContainer from 'Components/Routine/RoutineContainer';
import NavBar from 'Components/NavBar';

export default function App() {
	return (
		<div>
			<NavBar />
			<RoutineContainer />
		</div>
	);
}
