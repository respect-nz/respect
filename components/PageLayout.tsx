import Header from './Header'
import Footer from './Footer'

type Props = {
    children: JSX.Element
}

const PageLayout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Header />
            <main className="prose">{children}</main>
            <Footer />
        </>
    )
}

export default PageLayout
