import { FC } from 'react'
import Head from 'next/head'

interface HelmetProps {
	title: string
	content?: string
}

export const Helmet: FC<HelmetProps> = ({ title, content }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={content ?? title} />
			<link rel="icon" href="/favicon.ico" />
		</Head>
	)
}