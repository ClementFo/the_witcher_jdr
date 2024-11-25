import '../../styles/Header.css';
import logo from '../../assets/the-witcher-jdr.jpg';
import Menu from '../../components/Menu';

function Header() {
	return <div className='header'>
		<div className='head'>
			<img src={logo} alt='The witcher jdr' className='logo' />
			<h1 className='title'>Aide pour le jdr the witcher</h1>
		</div>
		<Menu></Menu>
	</div>
}

export default Header