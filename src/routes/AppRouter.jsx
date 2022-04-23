import { 
    BrowserRouter,
    Routes,
    Route 
} from 'react-router-dom';
import {HomePage} from '../components/home/HomePage'

export const AppRouter = () => {
	return(
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomePage />} />
			</Routes>
		</BrowserRouter>
	)
}