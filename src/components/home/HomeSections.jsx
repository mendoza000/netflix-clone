import {useEffect, useRef} from 'react'
import {Line} from '../ui/Line'
import { HomeInputMail } from './HomeInputMail'
import {FAQ} from './FAQ'

export const HomeSections = () => {
	const icon = useRef()

	let switchIcon = () => {
		setTimeout(function() {
			icon.current.setAttribute('name', 'download');
			icon.current.setAttribute('animation', '')
		}, 0);

		setTimeout(function() {
			icon.current.setAttribute('name', 'loader');
			icon.current.setAttribute('animation', 'spin')
		}, 3000);

		setTimeout(function() {
			icon.current.setAttribute('name', 'check');
			icon.current.setAttribute('animation', 'tada')
		}, 6000);

		setTimeout(function() {
			switchIcon()
		}, 9000);
	}

	useEffect(() => {
		switchIcon()

		return () => {
			switchIcon = () => {}
		}
	}, [icon])

	return(
		<>
			<div className="home__section">
				<h3 className="home__section-title home__center">
					Disfruta en tu TV.
				</h3>
				<p className="home__center">
					Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más.
				</p>

				<img 
					src={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"} 
					alt="tumbnail"
					className="home__section-img"
					/>
			</div>
			<Line />

			<div className="home__section">
				<h3 className="home__section-title home__center">
					Descarga tus series para verlas offline.
				</h3>
				<p className="home__center">
					Guarda tu contenido favorito y tendrás siempre algo para ver.
				</p>

				<img 
					src={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"} 
					alt="tumbnail"
					className="home__section-img home__section-img-download"
					/>

				<div className="home__section-download">
					<img 
						src={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"}
						alt="download"
						/>
						<p>
							Stranger Things
							<br/> 
							<span>
								Descargando...
							</span>
						</p>
						<box-icon 
							name='download' 
							className="home__section-download-icon1"
							ref={icon}
							></box-icon>
				</div>
			</div>
			<Line />

			<div className="home__section">
				<h3 className="home__section-title home__center">
					Disfruta donde quieras.
				</h3>
				<p className="home__center">
					Películas y series ilimitadas en tu teléfono, tablet, computadora y TV sin costo extra.
				</p>

				<img 
					src={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"} 
					alt="tumbnail"
					className="home__section-img"
					/>
			</div>
			<Line />

			<div className="home__section">
				<h3 className="home__section-title home__center">
					Crea perfiles para niños.
				</h3>
				<p className="home__center">
					Los niños vivirán aventuras con sus personajes favoritos en un espacio diseñado exclusivamente para ellos, sin costo con tu membresía.
				</p>

				<img 
					src={"https://occ-0-5008-3934.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABeLa_an51Ptz6LMzNXnM9oDvlKl4yIJQKZJRJ9fVFPpPFK5toVuo-KytXEdqPI64KCph1OKms7nLxtCsXm_CARaR50wx.png?r=8ec"} 
					alt="tumbnail"
					className="home__section-img"
					/>
			</div>
			<Line />

			<div className="home__section">
				<h3 className="home__section-title home__center">
					Preguntas frecuentes.
				</h3>
				
				<FAQ 
					title={"¿Que es Netflix?"}
					text1={`Netflix es un servicio de streaming que ofrece una gran variedad de películas, series y documentales premiados en casi cualquier pantalla conectada a internet.`}
					text2={"Todo lo que quieras ver, sin límites ni comerciales, a un costo muy accesible. Siempre hay algo nuevo por descubrir, ¡y todas las semanas se agregan más películas y series!"}
				/>	
				<FAQ 
					title={"¿Cuanto cuesta Netflix?"}
					text1={`Disfruta Netflix en tu smartphone, tablet, smart TV, laptop o dispositivo de streaming, todo por una tarifa plana mensual. Planes desde USD7,99 hasta USD13,99 al mes. Sin costos adicionales ni contratos.`}
					text2={""}
				/>	
				<FAQ 
					title={"¿Donde puedo ver Netflix?"}
					text1={`Disfruta donde quieras, cuando quieras. Inicia sesión en tu cuenta de Netflix para ver contenido al instante a través de netflix.com desde tu computadora personal o en cualquier dispositivo con conexión a internet que cuente con la app de Netflix, como smart TV, smartphones, tablets, reproductores multimedia y consolas de juegos.`}
					text2={"Además, puedes descargar tus series favoritas con iOS, Android o la app para Windows 10. Con la función de descarga, puedes ver donde vayas y sin conexión a internet. Lleva Netflix contigo adonde sea."}
				/>
				<FAQ 
					title={"¿Como cancelo?"}
					text1={`Netflix es flexible. Sin contratos molestos ni compromisos. Cancela la membresía online con solo dos clics. No hay cargos por cancelación. Empieza y termina cuando quieras.`}
					text2={""}
				/>
				<FAQ 
					title={"¿Qué puedo ver en Netflix?"}
					text1={`Netflix tiene un amplio catálogo de películas, series, documentales, animes, originales premiados y más. Todo lo que quieras ver, cuando quieras.`}
					text2={""}
				/>
				<FAQ 
					title={"¿Es bueno Netflix para los niños?"}
					text1={`La experiencia de Netflix para niños está incluida en la membresía para que los padres tengan el control mientras los peques disfrutan series y películas familiares en su propio espacio.`}
					text2={"Los perfiles para niños incluyen controles parentales protegidos por PIN que te permiten restringir el contenido que pueden ver los niños en función de la clasificación por edad y bloquear determinados títulos que no quieras que los niños vean."}
				/>	
			</div>

			<p className="home__center ui__mb-2">
					¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.
				</p>
			<HomeInputMail />
			<div className="ui__mb-5"></div>
			<Line />

			<footer className="home__section-footer">
				<span>
					¿Preguntas? Llama al +1 (408) 469-4467 (USA)
				</span>

				<div className="home__section-footer-grid">
					<span>
						Preguntas frecuentes
					</span>
					<span>
						Centro de ayuda
					</span>
					<span>
						Cuenta
					</span>
					<span>
						Prensa
					</span>
					<span>
						Relacion con inversionistas
					</span>
					<span>
						Empleo
					</span>
					<span>
						Formas de ver
					</span>
					<span>
						Terminos de uso
					</span>
					<span>
						Privacidad
					</span>
					<span>
						Preferencias de cookies
					</span>
					<span>
						Informacion corporativa
					</span>
					<span>
						Contactanos
					</span>
					<span>
						Prueba de velocidad
					</span>
					<span>
						Avisos legales
					</span>
					<span>
						Solo en Netflix
					</span>
				</div>
			</footer>
		</>
	)
}