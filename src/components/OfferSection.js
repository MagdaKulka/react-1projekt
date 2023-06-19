function OfferSection() {
	const offers = [
		{ name: 'usługa1', isNew: true },
		{ name: 'usługa2' },
		{ name: 'usługa3' },
		{ name: 'usługa4' },
		{ name: 'usługa5' },
		{ name: 'usługa6' },
	];
	return (
		<section id='2' className='offer-section'>
			<div className='container'>
				<h2 className='offers-title'>Czym zajmuje się nasza firma</h2>
				<div className='box-container'>
					{offers.map((offer) => (
						<div className='box' key={offer.name}>
							{offer.isNew && <div className='new-offer'></div>}
							<h2>{offer.name}</h2>
							{offer.isNew && <p>Nowość</p>}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default OfferSection;
