export default function ProductsList(props) {
	return (
		<>
			<div>
				<Image src={props.img} width='300px' height='300px' />
				<h5>{props.name}</h5>
				<p>{props.description}</p>
			</div>
		</>
	);
}
