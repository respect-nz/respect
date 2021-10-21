import Header from '../Header/Header'
import Footer from '../Footer/Footer'

type Props = {
    children: JSX.Element
}

const PageLayout: React.FC<Props> = ({ children }) => {
    return (
        <>
            {/* Style the nextjs wrapper so we get a full height  */}
            <Header />
            <main className="u-content-width rich-text">{children}</main>
            <Footer />
        </>
    )
}

export default PageLayout
