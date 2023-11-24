import { AuthService } from '../../services/auth.service';

export const Sidebar = () => {
	const user = AuthService().isConnected();
	const logout = async () => {
		await AuthService()
			.logout()
			.then(() => (window.location.href = '/'));
	};
	return (
		<nav className='sidebar sidebar-offcanvas' id='sidebar'>
			<ul className='nav'>
				{user.user.role !== 777 && (
					<>
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
									{user.user.role === 755 && (
										<li className='nav-item'>
											{' '}
											<a className='nav-link' href='/offer/create'>
												Création
											</a>
										</li>
									)}
									<li className='nav-item'>
										{' '}
										<a className='nav-link' href='/offer/list'>
											Liste
										</a>
									</li>
									<li className='nav-item'>
										{' '}
										<a className='nav-link' href='/offer/candidate'>
											Réponse
										</a>
									</li>
								</ul>
							</div>
						</li>
					</>
				)}
				{user.user.role === 756 && (
					<>
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
										<a className='nav-link' href='/editors/create'>
											Création
										</a>
									</li>
									<li className='nav-item'>
										{' '}
										<a className='nav-link' href='/editors/list'>
											Liste
										</a>
									</li>
								</ul>
							</div>
						</li>
					</>
				)}
				{user.user.role === 777 && (
					<>
						<li className='nav-item nav-category'>ORGANISATION</li>
						<li className='nav-item'>
							<a
								className='nav-link'
								data-bs-toggle='collapse'
								href='#ui-organisation'
								aria-expanded='false'
								aria-controls='ui-organisation'>
								<i className='menu-icon mdi mdi-floor-plan'></i>
								<span className='menu-title'>Organisation</span>
								<i className='menu-arrow'></i>
							</a>
							<div className='collapse' id='ui-organisation'>
								<ul className='nav flex-column sub-menu'>
									<li className='nav-item'>
										{' '}
										<a className='nav-link' href='/organisation/processed'>
											Demande acceptée
										</a>
									</li>
									<li className='nav-item'>
										{' '}
										<a className='nav-link' href='/organisation/in-process'>
											Demande en attente
										</a>
									</li>
								</ul>
							</div>
						</li>
					</>
				)}
				<li className='nav-item nav-category'>UTILISATEUR</li>
				<li className='nav-item'>
					<a
						className='nav-link'
						data-bs-toggle='collapse'
						href='#ui-deconnexion'
						onClick={(e) => {
							e.preventDefault();
							logout();
						}}
						aria-expanded='false'
						aria-controls='ui-deconnexion'>
						<i className='menu-icon mdi mdi-logout'></i>
						<span className='menu-title'>Déconnexion</span>
					</a>
				</li>
			</ul>
		</nav>
	);
};
