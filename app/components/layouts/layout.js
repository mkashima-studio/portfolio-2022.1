import Navigationbar from '../app/components/modules/elements/navBar'

export default function Layout({ children }) {
    return (
        <>
        <Navigationbar /><main>{children}</main>
        </>
        )
    }
