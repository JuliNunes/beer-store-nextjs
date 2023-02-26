import { largers } from '@/assets/data/largers';

export default function handler(req, res) {
	res.status(200).json(largers);
}
