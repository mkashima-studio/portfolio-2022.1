import Navbar from '../modules/navBar'
import Footer from '../modules/footer'

export default function Layout({children}) {
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}