import { Link } from 'react-router-dom'
import { SvgLogo } from '../ui/SvgLogo'
import { HomeInputMail } from './HomeInputMail'

export const HomeHeader = () => {
	return(
		<header className="home__header">
				<div className="home__header-gradient">
					<div className="home__top-bar">
						<SvgLogo />
						<Link className="ui__btn-small" to="/login">Iniciar sesión</Link>
					</div>

					<h1 className="home__title home__center">
						Películas y series ilimitadas y mucho más   .
					</h1>
					<p className="home__text home__center">
						Disfruta donde quieras. Cancela cuando quieras.
					</p>
					<p className="home__text home__center">
						¿Quieres ver Netflix ya? <br/> Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.
					</p>

					<HomeInputMail />
				</div>
			</header>
	)
}