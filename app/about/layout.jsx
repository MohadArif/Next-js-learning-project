
/** this is nested layout this layout content only avilable for about folder */
export default function AboutLayout({children}){
    return(
        <html>
            <body>
                <h1>this message coming form Aboutlayout...</h1>
                {children}
            </body>
        </html>
    )
}