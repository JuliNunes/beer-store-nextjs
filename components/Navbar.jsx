import Link from 'next/link';

import styles from '@/assets/styles/Navbar.module.css';

export default function Navbar() {
	return (
		<>
			<ul className={styles.nav}>
				<li>Generic Beer</li>
				<li>
					<Link href='/'>HOME</Link>
				</li>
				<li>
					<Link href='/beers'>ALL CATEGORIES</Link>
				</li>
				<li>
					<Link href='/beers/larger'>LARGER</Link>
				</li>
				<li>
					<Link href='/beers/ale'>ALE</Link>
				</li>
			</ul>
		</>
	);
}
