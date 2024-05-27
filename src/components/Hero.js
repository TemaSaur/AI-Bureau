import Fancy from './Fancy';
import Dialogue from './Dialogue';

export default function Hero() {
	return <div className="relative overflow-hidden">
        <div className="container mx-auto relative">
            <div className="heading mt-8 mb-16 text-center relative z-10">
                <Fancy>
                    <h1 className="text-7xl text-dark">Правовая помощь в один клик!</h1>
                </Fancy>
            </div>
            <div className="zones grid grid-cols-[35%_auto] gap-20 relative z-10 mb-24">
                <div className="text-dark">
                    <p className="mb-4">Получить юридическую консультацию теперь так же просто, как заказать продукты с доставкой</p>
                    <p className="mb-16">Квалифицированная правовая поддержка доступна 24/7 прямо из вашего смартфон</p>
                    <div className="cta flex gap-10 items-center">
                        <button className="bg-accent hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-xl">
                            Начать
                        </button>
                        <a href="/" className="font-semibold">Как это работает?</a>
                    </div>
                </div>
                <div className="dialogue my-20">
                    <Dialogue />
                </div>
            </div>
        </div>
        <div className="absolute bottom-0 ml-[30%] min-w-[1800px]">
            <img src="/blobs.png" alt="" />
        </div>
    </div>
}