import '../../styles/Header.css'
import logo from '../../assets/the-witcher-jdr.jpg';

function Header() {
	return <div className='header'>
		<img src={logo} alt='The witcher jdr' className='logo' />
		<h1 className='title'>Aide pour le jdr the witcher</h1>
	</div>
}

export default Header