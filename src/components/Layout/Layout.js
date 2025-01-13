import React from 'react'
import Navbar from '../NavBar/Navbar'
import { Helmet } from "react-helmet"
function Layout({ children,title, description,keywords,author }) {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description}/>
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>
            <Navbar />
            <main>{children}</main>
        </div>
    )
}

Layout.defaultProps={
    title:"KidzGlam Corner - Shop",
    description:"A makeup items and kids toys  selling website",
    keywords:"toys, girls, makeup, brush, play",
    author:"Ayush Singla"
}
export default Layout
