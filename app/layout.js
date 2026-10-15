/** this is Rootlayout. this layout content avilable for all folder */

import Navigation from "../component/Navigation"
import "./globals.css";

export default function RootLayout({ children }){
  return (
    <html>
      <body>
        {/* <h1>this message coming from RootLayout...</h1> */}
        < Navigation />
        {children}
      </body>
    </html>
  )
}