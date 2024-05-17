import Head from "next/head"
export default function Header () {
     const title=process.env.NEXT_PUBLIC_TITLE;
    return(

        <Head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Alumni+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
            <title>{title}</title>
        </Head>

    )
    }
