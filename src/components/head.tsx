import Head from 'next/head'

export const HeadWTG: React.FC<{ title: string }> = ({ title }) => {
    return <Head>
        <title>{title}</title>
        <meta name="description" content="Wholetone Games official website" />
        <link rel="icon" href="favicon.ico" />
    </Head>
}