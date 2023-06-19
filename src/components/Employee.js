export default function Employee(props) {
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
