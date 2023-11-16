import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Layout from './pages/Layout'
import NoPage from './pages/NoPage'
import LeaderBoard from './pages/Score'

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Layout />}>
					<Route
						index
						element={<Home />}
					/>
					<Route
						path='score'
						element={<LeaderBoard />}
					/>
					<Route
						path='contact'
						element={<Contact />}
					/>
					<Route
						path='*'
						element={<NoPage />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
