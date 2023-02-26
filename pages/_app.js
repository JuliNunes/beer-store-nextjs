import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '@/assets/styles/globals.css';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}
