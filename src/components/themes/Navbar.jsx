export const Navbar = () => {
	return (
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
						<h1 className='welcome-text'>Bienvenue chez E-Fianara </h1>
					</li>
				</ul>
			</div>
		</nav>
	);
};
