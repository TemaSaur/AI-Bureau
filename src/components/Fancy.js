import { Literata } from "next/font/google";


const literata = Literata({ subsets: ["latin", "cyrillic"] });

export default function RootLayout({ children }) {
	return <span className={literata.className}>{children}</span>
}
