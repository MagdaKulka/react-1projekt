import './App.css';
import Nav from './components/nav';
import Header from './components/header';
import EmployeeSection from './components/EmployeeSection';
import Footer from './components/footer';
import OfferSection from './components/OfferSection';

function App() {
	return (
		<div>
			<Nav></Nav>
			<Header></Header>
			<EmployeeSection></EmployeeSection>
			<OfferSection></OfferSection>
			<Footer></Footer>
		</div>
	);
}

export default App;
