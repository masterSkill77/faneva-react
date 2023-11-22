import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { Sidebar } from './components/themes/Sidebar';
import { Navbar } from './components/themes/Navbar';
import { AuthService } from './services/auth.service';
import { Login } from './pages/login';

function App() {
	const user = AuthService().isConnected();
	return (
		<div className='container-scroller'>
			{user && (
				<>
					<Navbar />
					<div className='container-fluid page-body-wrapper'>
						<Sidebar />
						<div className='main-panel'>
							<div className='content-wrapper'>
								<RouterProvider router={router} />
							</div>
						</div>
					</div>
				</>
			)}
			{!user && <Login />}
		</div>
	);
}

export default App;
