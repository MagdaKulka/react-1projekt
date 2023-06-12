import React from 'react';

function Employee(props) {
	return (
		<div className={`employee ${props.employeeClass}`}>
			<div className={`circle${props.circleNumber}`}></div>
			<div className='empinfo'>
				<p className='fullname'>{props.fullName}</p>
				<p className='description'>{props.description}</p>
			</div>
		</div>
	);
}

function Section() {
	return (
		<section id='1'>
			<div className='container'>
				<h2 className='emp-title'>Nasi Specjaliści</h2>
				<Employee
					employeeClass=''
					circleNumber='1'
					fullName='Imię i Nazwisko'
					description='-Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolore quia dignissimos nobis ipsa laudantium, praesentium optio dolorem adipisci eos excepturi iste in autem enim doloribus assumenda voluptates sunt quo! Ad ratione ea, ab tenetur cum quia inventore. Expedita consectetur dolore temporibus suscipit at assumenda autem, modi eos, tenetur earum illum quo voluptate? Voluptatum, fuga mollitia. Est quia pariatur non?'
				/>
				<Employee
					employeeClass='employee2'
					circleNumber='2'
					fullName='Imię i Nazwisko'
					description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia obcaecati debitis, omnis nesciunt veritatis minima, enim delectus doloribus eum sequi voluptatibus, excepturi minus magnam repellendus fugit. Necessitatibus magnam rerum eum?*5lorumkjkjnc/slknc/lknalksdn/alsna/lkskna/sa/lksdnal/s Ipsa quo ratione velit ea excepturi quis rerum? Voluptatibus itaque suscipit ratione! Animi officia'
				/>
			</div>
		</section>
	);
}

export default Section;
