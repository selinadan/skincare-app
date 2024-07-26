import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
