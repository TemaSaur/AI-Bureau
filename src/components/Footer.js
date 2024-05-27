import Fancy from './Fancy';

export default function Footer() {
	return <footer>
		<div className="container border-t-2 border-[#D9D9D9] text-dark py-4">
			<Fancy>
				<span className="font-semibold">ИИБюро</span>
			</Fancy>
			<div className="text-[12px] text-dark/70">
				<p className="pt-1">Юридическая помощь от ИИ</p>
				<p className="pt-1">&copy; 2024 ООО “ИИ БЮРО”</p>
			</div>
		</div>
	</footer>
}