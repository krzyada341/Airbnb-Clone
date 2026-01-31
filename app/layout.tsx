import { Nunito } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/navbar/Navbar'
import ToasterProvider from './providers/ToasterProvider'
import RentModal from './components/modals/RentModal'
import LoginModal from './components/modals/LoginModal'
import RegisterModal from './components/modals/RegisterModal'
import SearchModal from './components/modals/SearchModal'
import getCurrentUser from './actions/getCurrentUser'

export const metadata: Metadata = {
	title: 'Airbnb',
	description: 'Airbnb clone',
}

const font = Nunito({
	subsets: ['latin'],
})

export const dynamic = 'force-dynamic'

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const currentUser = await getCurrentUser()
	return (
		<html lang="en">
			<body className={font.className}>
				<ToasterProvider />
				<SearchModal />
				<RentModal />
				<LoginModal />
				<RegisterModal />
				<Navbar currentUser={currentUser} />
				<div className="pb-20 pt-28">{children}</div>
			</body>
		</html>
	)
}
