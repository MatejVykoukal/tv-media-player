import { useEffect } from 'react';

export default function Home() {
	if (window) {
		window.addEventListener('keypress', () => {
			alert('hello');
		});
	}

	return (
		<div>
			<p>Press arrows to navigate between items.</p>
			<p>Press enter to activate items.</p>
			<nav>
				<button>Alert me!</button>
				<button>Chabge background</button>
			</nav>
		</div>
	);
}
