import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import ProductModal from 'Components/Modal/ProductModal';
import ModalProvider from 'Components/Modal/ModalContext';
import RoutineContainer from 'Components/Routine/RoutineContainer';
import InventoryContainer from 'Components/Inventory/InventoryContainer';
import NavBar from 'Components/NavBar';

export default function App() {
	return (
		<Router>
			<NavBar />
			<ModalProvider>
				<Routes>
					<Route path="/routine" element={<RoutineContainer />} />
					<Route path="/inventory" element={<InventoryContainer />} />
				</Routes>
				<ProductModal />
			</ModalProvider>
		</Router>
	);
}
