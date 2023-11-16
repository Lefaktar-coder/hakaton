import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/score'>Score</Link>
					</li>
					<li>
						<Link to='/contact'>Contact</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
		</>
	)
}

export default Layout
