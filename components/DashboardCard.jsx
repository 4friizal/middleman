/* eslint-disable @next/next/no-img-element */
import { formatCurrency } from "../pages/inventory";

function DashboardCard(props) {
	console.log(props);
	return (
		<div className="w-auto h-auto bg-white rounded-[20px] shadow-md flex flex-row m-2 justify-center">
		<img className="py-3 w-[180px]" src={props.image ? "https://via.placeholder.com/150x192?text=no+image" : props.image} alt="image" />
			<div className="flex flex-col p-5 font-Poppins font-semibold text-lg">
				<h1 className="pb-5 text-black">{props.name}</h1>
				<p className="pb-5 text-black">{`${props.stock? props.stock : 0} ${props.unit}`}</p>
				<p className="pb-5 text-black">{formatCurrency(props.price)}</p>
				<button
					id="to-mycart"
					className="btn btn-primary text-white rounded-[20px]"
					onClick={(e) => props.handleSubmit(e, props.id)}
				>
					Add
				</button>
			</div>
		</div>
	);
}

export default DashboardCard;
