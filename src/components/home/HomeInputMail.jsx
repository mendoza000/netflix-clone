import { Link } from 'react-router-dom'

export const HomeInputMail = () => {
	return(
		<div className="home__inputmail">
			<input 
				type="text"
				placeholder="Email"
				className="ui__input-big"
				/>

			<Link 
				className="ui__btn-mid ui__btn-center" 
				to="/login">
				Comenzar >
			</Link>
		</div>
	)
}