import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from 'Components/common/MuiTheme';

import ProductModal from 'Components/Modal/ProductModal';
import ModalProvider from 'Components/Modal/ModalContext';
import RoutineContainer from 'Components/Routine/RoutineContainer';
import InventoryContainer from 'Components/Inventory/InventoryContainer';
import NavBar from 'Components/NavBar';

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline>
				<Router>
					<ModalProvider>
						<NavBar />
						<Routes>
							<Route
								path="/routine"
								element={<RoutineContainer />}
							/>
							<Route
								path="/inventory"
								element={<InventoryContainer />}
							/>
						</Routes>
						<ProductModal />
					</ModalProvider>
				</Router>
			</CssBaseline>
		</ThemeProvider>
	);
}
