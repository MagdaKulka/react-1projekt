import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import EmployeeSection from './components/EmployeeSection';
import Footer from './components/Footer';
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
