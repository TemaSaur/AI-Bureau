import Fancy from './Fancy';

export default function Header() {
	return (
        <header className="py-12">
			<div className="container mx-auto flex items-center justify-between">
				<Fancy><span className="text-accent font-semibold text-2xl">
					ИИБюро
				</span></Fancy>
				<nav className='flex text-dark gap-10'>
					<a href="">Про нас</a>
                    <a href="">Тарифы</a>
                    <a href="">FAQ</a>
				</nav>

				<div className="cta flex gap-6 items-center">
					<span className="font-semibold text-dark">Войти</span>
					<button
						className="bg-accent hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
						Начать
					</button>
				</div>
			</div>
        </header>
    );
}