import {useState} from 'react'

export const FAQ = ({title, text1, text2}) => {
	const [view, setView] = useState(false)

	const handleClick = () => {
		(!view) ? setView(true) : setView(false)
	}

	return(
		<>
			<div className="home__seciton-question">
					<button
						onClick={handleClick}
					>
						<span>
							{title}
						</span>
						<box-icon name='plus'></box-icon>
					</button>

					<div 
					className={`home__section-question-answer ${
						(!view) ? "answer-close" : "answer-open" 
					}`}>
						<p>
							{text1}
							<br/>
							<br/>
							{text2}
						</p>
					</div>
				</div>
		</>
	)
}