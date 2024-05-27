import Fancy from './Fancy';

export default function HowCard({ children, number, title }) {
	return <div className="card p-6 text-[14px]">
		<div className="top flex gap-4 mx-2 mb-4 items-center">
			<Fancy><span className="text-accent text-3xl">{number}</span></Fancy>
			<p className="text-dark">{title}</p>
		</div>
		<div className="text-dark/80">
			{children}
		</div>
	</div>
}