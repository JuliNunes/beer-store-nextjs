import Image from 'next/image';
import { useEffect, useState } from 'react';

import styles from '@/assets/styles/ProductList.module.css';

export default function Larger() {
	const [largers, setLargers] = useState([]);

	useEffect(() => {
		fetch('/api/largers')
			.then(response => response.json())
			.then(data => setLargers(data));
	}, []);

	return (
		<>
			<h1 className='page-title'>Larger Beer</h1>
			<div className={styles.list}>
				{largers.map(b => {
					return (
						<div className={styles.item}>
							<Image
								src={b.imgURL}
								width={200}
								height={250}
								alt='Imagem de cerveja'
							/>
							<h3>{b.name}</h3>
							<p>{b.description}</p>
						</div>
					);
				})}
			</div>
		</>
	);
}
