import { useEffect, useState } from 'react';

export default function Home() {
	const [showTestText, setShowTestText] = useState(false);

	useEffect(() => {
		window.addEventListener('keypress', () => {
			alert('hello');
			setShowTestText(true);
		});
	}, []);

	return (
		<div>
			<p>Press arrows to navigate between items.</p>
			<p>Press enter to activate items.</p>
			<nav>
				<button>Alert me!</button>
				<button>Chabge background</button>
			</nav>
			<main>
				{showTestText && (
					<span>
						Hello, if you can see me, your keypress events are working! Awesome.
					</span>
				)}
			</main>
		</div>
	);
}
