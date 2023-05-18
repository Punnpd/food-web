import { PropsWithChildren, ReactNode } from 'react'

// import { SideBar } from '../SideBar/SideBar'
// import { Header } from '../Header/Header'
// import { Footer } from '../Footer/Footer'
import { NavBar } from './NavBar'
import { Helmet } from '../Helmet'

interface LayoutProps extends PropsWithChildren {
	title: string
	header?: string
	content?: string
	index?: number
	renderNavbar?: () => ReactNode
	onBack?: () => void
}

export const Layout = ({
	children,
	title,
	header,
	content,
	index,
	renderNavbar,
	onBack
}: LayoutProps) => {
	return (
		<div className="min-h-screen bg-[#FFFFFF]">
			<Helmet title={title} content={content} />
			{renderNavbar ? 
				renderNavbar() : 
				<NavBar 
					index={index}
					onBack={onBack}
					navbarTitle={header}
				/>
			}
			<div className="flex flex-1 flex-col">
				{/* <Header title={header ?? title} /> */}
				<main className="flex-1 px-8 pb-8">{children}</main>
				{/* <Footer /> */}
			</div>
		</div>
	)
}
