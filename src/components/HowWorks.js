import Fancy from './Fancy'
import HowCard from './HowCard'

export default function HowWorks() {
	return (
        <div className="container py-16">
            <Fancy>
				<h1 className="text-4xl text-center mb-16 text-dark">Как это работает?</h1>
			</Fancy>
			<div className="cards grid grid-cols-3 gap-10">
				<HowCard number="01" title="Задайте свой вопрос">
					<p>Представьте что говорите с обычным юристом</p>
					<p>Расскажите, какую проблемы Вы хотите решить</p>
				</HowCard>
				<HowCard number="02" title="Алгоритм выберет Вам ассистента">
					<p>Алгоритм обработки естественного языка проанализирует Ваш запрос и направит его соответствующему виртуальному адвокату</p>
				</HowCard>
				<HowCard number="03" title="Получите ответ-рекомендацию">
					<p>Виртуальные адвокаты предоставит квалифицированный ответ, рекомендации и даже составлит юридические документы для Вашей проблемы</p>
				</HowCard>
				<span></span>
				<HowCard number="04" title="Продолжайте!">
					<p>Со временем ассистент будет понимать Вас лучше и будет предлагать более качественные и персонализированные ответы</p>
				</HowCard>
			</div>
        </div>
    )
}