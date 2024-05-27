import Fancy from './Fancy';

export default function Plans() {
	return <div className="relative py-16 colored-bg">
		<div className="container flex flex-col items-center">
			<Fancy>
				<h1 className="text-center mb-12 text-4xl text-light">Выберите подходящий тариф</h1>
			</Fancy>

			<div className="flex gap-12 items-center">
				<a href="" className="plan shadow-lg shadow-dark/20 min-w-[320px] rounded-xl bg-white text-dark flex pb-6 flex-col items-center hover:scale-[1.02] transition-transform">
					<div className="bg-transparent w-full dark flex flex-col items-center pt-6 pb-4 rounded-xl">
						<Fancy>
							<span className="text-2xl">Бесплатный</span>
						</Fancy>
						<p className="text-[.75rem] mb-5 text-dark/80">Базовый доступ к платформе</p>
						<Fancy>
							<div className="flex flex-col items-center">
								<p className="text-4xl">0 ₽</p>
								<span className="text-[18px]">/мес</span>
							</div>
						</Fancy>
						<p className="mt-4 text-[.75rem] select-none text-dark/70">&nbsp;</p>
					</div>

					<ul className="mt-6 text-sm">
						<li className="mb-2">
							<span className="select-none text-[#38CA05]">✓</span>
							<span className="ml-2">Онлайн-консультации</span>
						</li>
						<li className="mb-2">
							<span className="select-none text-[#38CA05]">✓</span>
							<span className="ml-2">Юридические статьи</span>
						</li>
						<li className="mb-2">
								<span className="select-none text-[#38CA05]">✓</span>
								<span className="ml-2">Обзор типовых документов</span>
							</li>
					</ul>
				</a>

				<a href="" className="plan shadow-lg shadow-dark/20 min-w-[320px] rounded-xl bg-white text-dark flex pb-6 flex-col items-center mt-2 hover:scale-[1.02] transition-transform">
					<div className="bg-[#E5CFFF] w-full dark flex flex-col items-center pt-[40px] pb-4 px-10 rounded-tl-xl rounded-tr-xl">
						<Fancy>
							<span className="text-2xl">Премиум</span>
						</Fancy>
						<p className="text-[.75rem] mb-5 text-dark/770">Расширенный пакет услуг для любых целей</p>
						<Fancy>
							<div className="flex flex-col items-center">
								<p className="text-4xl">349 ₽</p>
								<span className="text-[18px]">/мес</span>
							</div>
						</Fancy>
						<p className="mt-4 text-[12px] select-none text-dark/70">при оплате за год</p>
					</div>

					<ul className="mt-6 px-6 text-sm">
						<li className="mb-2">
							<span className="select-none text-[#38CA05]">✓</span>
							<span className="ml-2">Все возможности беслатного тарифа</span>
						</li>
						<li className="mb-2">
							<span className="select-none text-[#38CA05]">✓</span>
							<span className="ml-2">Составление документов на заказ</span>
						</li>
						<li className="mb-2">
							<span className="select-none text-[#38CA05]">✓</span>
							<span className="ml-2">Представление интересов в суде</span>
						</li>
						<li className="mb-2">
							<span className="select-none text-transparent">✓</span>
							<span className="ml-2">и многое другое</span>
						</li>
					</ul>
				</a>
			</div>
		</div>
	</div>
}