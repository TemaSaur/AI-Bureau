function Message({ children, bg, pos }) {
	return ''
}

export default function Dialogue() {
	return <div className="bg-white relative p-6 shadow-[-2px_-2px_5px_0] shadow-black/20 rounded-xl flex flex-col gap-5">
		<div className={`bg-[#E6E3FF] left-[7%] relative w-[93%] p-2 px-3 rounded-xl`}>Будут ли выплаты по 10000 рублей в августе 2020 на детей до 16 лет?</div>
		{/* <Message bg="#E6E3FF" pos="right">Будут ли выплаты по 10000 рублей в августе 2020 на детей до 16 лет?</Message> */}
		{/* <Message bg="#EAEAEA">Выплаты начнут поступать на счета начиная с 16 августа 2021 года. До этой даты денег никто не обещал: начало выплат зафиксировано в постановлении правительства...</Message> */}
		<div className="bg-[#EAEAEA] [10px] w-[93%] p-2 px-3 rounded-xl">Выплаты начнут поступать на счета начиная с 16 августа 2021 года. До этой даты денег никто не обещал: начало выплат зафиксировано в постановлении правительства...</div>
	</div>
}