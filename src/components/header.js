import React from 'react';

function Header() {
	return (
		<header className='header'>
			<div className='shadow'>
				<div className='header-container container'>
					<h1>Nasza firma oferuje najwyższej jakości produkty.</h1>
					<p className='header-paragraf'>Nie wierz nam na słowo - sprawdź!</p>
					<a href='#Offers' className='offer-btn'>
						Oferta
					</a>
					<i className='fa-square-facebook'></i>
				</div>
			</div>
		</header>
	);
}

export default Header;
