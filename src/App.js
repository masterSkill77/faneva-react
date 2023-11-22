import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className='container-scroller'>
			<nav className='navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex align-items-top flex-row'>
				<div className='text-center navbar-brand-wrapper d-flex align-items-center justify-content-start'>
					<div className='me-3'>
						<button
							className='navbar-toggler navbar-toggler align-self-center'
							type='button'
							data-bs-toggle='minimize'>
							<span className='icon-menu'></span>
						</button>
					</div>
					<div>
						<a className='navbar-brand brand-logo' href='/'>
							<img src='/efianara.png' alt='logo' />
						</a>
						<a className='navbar-brand brand-logo-mini' href='/'>
							<img src='images/logo-mini.svg' alt='logo' />
						</a>
					</div>
				</div>
				<div className='navbar-menu-wrapper d-flex align-items-top'>
					<ul className='navbar-nav'>
						<li className='nav-item font-weight-semibold d-none d-lg-block ms-0'>
							<h1 className='welcome-text'>
								Good Morning,{' '}
								<span className='text-black fw-bold'>John Doe</span>
							</h1>
							<h3 className='welcome-sub-text'>
								Your performance summary this week{' '}
							</h3>
						</li>
					</ul>
				</div>
			</nav>

			<nav
				className='sidebar sidebar-offcanvas'
				style={{ marginTop: '100px' }}
				id='sidebar'>
				<ul className='nav'>
					{/* <li className='nav-item'>
						<a className='nav-link' href='/'>
							<i className='mdi mdi-grid-large menu-icon'></i>
							<span className='menu-title'>Dashboard</span>
						</a>
					</li> */}
					<li className='nav-item nav-category'>OFFRES</li>
					<li className='nav-item'>
						<a
							className='nav-link'
							data-bs-toggle='collapse'
							href='#ui-basic'
							aria-expanded='false'
							aria-controls='ui-basic'>
							<i className='menu-icon mdi mdi-floor-plan'></i>
							<span className='menu-title'>Mes offres</span>
							<i className='menu-arrow'></i>
						</a>
						<div className='collapse' id='ui-basic'>
							<ul className='nav flex-column sub-menu'>
								<li className='nav-item'>
									{' '}
									<a className='nav-link' href='pages/ui-features/buttons.html'>
										Création
									</a>
								</li>
								<li className='nav-item'>
									{' '}
									<a
										className='nav-link'
										href='pages/ui-features/dropdowns.html'>
										Liste
									</a>
								</li>
								<li className='nav-item'>
									{' '}
									<a
										className='nav-link'
										href='pages/ui-features/typography.html'>
										Réponse
									</a>
								</li>
							</ul>
						</div>
					</li>
					<li className='nav-item nav-category'>EDITEURS</li>
					<li className='nav-item'>
						<a
							className='nav-link'
							data-bs-toggle='collapse'
							href='#ui-editor'
							aria-expanded='false'
							aria-controls='ui-editor'>
							<i className='menu-icon mdi mdi-floor-plan'></i>
							<span className='menu-title'>Mes éditeurs</span>
							<i className='menu-arrow'></i>
						</a>
						<div className='collapse' id='ui-editor'>
							<ul className='nav flex-column sub-menu'>
								<li className='nav-item'>
									{' '}
									<a className='nav-link' href='pages/ui-features/buttons.html'>
										Création
									</a>
								</li>
								<li className='nav-item'>
									{' '}
									<a
										className='nav-link'
										href='pages/ui-features/dropdowns.html'>
										Liste
									</a>
								</li>
								<li className='nav-item'>
									{' '}
									<a
										className='nav-link'
										href='pages/ui-features/typography.html'>
										Réponse
									</a>
								</li>
							</ul>
						</div>
					</li>
					<li className='nav-item nav-category'>USER</li>
					<li className='nav-item'>
						<a
							className='nav-link'
							data-bs-toggle='collapse'
							href='#ui-editor'
							aria-expanded='false'
							aria-controls='ui-editor'>
							<i className='menu-icon mdi mdi-logout'></i>
							<span className='menu-title'>Déconnexion</span>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default App;
