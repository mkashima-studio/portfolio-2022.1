import Navbar from '../modules/navBar'

export default function Layout({children}) {
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
        </>
    )
}