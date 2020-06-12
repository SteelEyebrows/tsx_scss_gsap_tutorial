import React, { useState } from 'react';
import './App.scss';

import Pricing from './components/Pricing';
import Sidebar from './components/Sidebar';

function App() {
	const [ sidebarOpen, setSidebarOpen ] = useState(false);
	const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

	return (
		<div className="App">
			<svg
				version="1.1"
				viewBox="0 0 100 100"
				xmlns="http://www.w3.org/2000/svg"
				className="App__hamburger"
				onClick={toggleSidebar}
			>
				<g>
					<path d="m22.199 29.801h55.602c2.3008 0 4.1992-1.8984 4.1992-4.1992 0-2.3008-1.8984-4.1992-4.1992-4.1992l-55.602-0.003906c-2.3008 0-4.1992 1.8984-4.1992 4.1992 0 2.3008 1.8984 4.2031 4.1992 4.2031z" />
					<path d="m77.801 45.801h-55.602c-2.3008 0-4.1992 1.8984-4.1992 4.1992s1.8984 4.1992 4.1992 4.1992h55.602c2.3008 0 4.1992-1.8984 4.1992-4.1992s-1.8984-4.1992-4.1992-4.1992z" />
					<path d="m77.801 70.199h-55.602c-2.3008 0-4.1992 1.8984-4.1992 4.1992 0 2.3008 1.8984 4.1992 4.1992 4.1992h55.602c2.3008 0 4.1992-1.8984 4.1992-4.1992 0-2.2969-1.8984-4.1992-4.1992-4.1992z" />
				</g>
			</svg>
			<Sidebar open={sidebarOpen} />
			<header className="App__header">
				<h1 className="App__title">Typescript + scss + GSAP v3 </h1>
			</header>
			<div className="App__pricing">
				<Pricing />
			</div>
		</div>
	);
}

export default App;
