import React from 'react';
function Nav() {
	return (
		<div>
			<nav className='menu-container'>
				<div className='container menu-box'>
					<div className='logo'>Moja firma</div>
					<ul className='menu'>
						<li>
							<a href='#1'>O nas</a>
						</li>
						<li>
							<a href='#2'>Oferta</a>
						</li>
						<li>
							<a className='disable' href=''>
								Kontakt
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Nav;
