import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import RoutineContainer from 'Components/Routine/RoutineContainer';
import InventoryContainer from 'Components/Inventory/InventoryContainer';
import NavBar from 'Components/NavBar';

export default function App() {
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route path="/routine" element={<RoutineContainer />} />
				<Route path="/inventory" element={<InventoryContainer />} />
			</Routes>
		</Router>
	);
}
