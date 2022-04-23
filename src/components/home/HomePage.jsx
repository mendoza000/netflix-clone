import {useEffect, useRef} from 'react'
import {HomeHeader} from './HomeHeader'
import {HomeSections} from './HomeSections'
import {Line} from '../ui/Line'

export const HomePage = () => {
	
	return(
		<>
			<HomeHeader />
			<Line />
			<HomeSections />

		</>
	)
}