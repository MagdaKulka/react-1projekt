import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Nav from './components/nav';
import Section1 from './components/section1';
import Section2 from './components/section2';

function App() {
	return (
		<div>
			<Nav></Nav>
			<Header></Header>
			<Section1></Section1>
			<Section2></Section2>
			<Footer></Footer>
		</div>
	);
}

export default App;
