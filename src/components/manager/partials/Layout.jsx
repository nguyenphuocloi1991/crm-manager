import Header from '@components/manager/partials/Header';
import Sidenav from '@components/manager/partials/Sidenav';
import Footer from '@components/manager/partials/Footer';

function Layout({ children }) {

    return (
        <>
            <Sidenav />
            <main className="main-content border-radius-lg ">
                <Header />
                <div className="container-fluid py-4">
                    {children}
                    <Footer/>
                </div>
            </main>
            
            {/* <!--   Core JS Files   --> */}
            {/* <script src="/js/ln.js" ></script> */}

            {/* <script src="/js/core/popper.min.js" ></script>
            <script src="/js/core/bootstrap.min.js" ></script> */}
            {/* <script src="/js/plugins/perfect-scrollbar.min.js" ></script>
            <script src="/js/plugins/smooth-scrollbar.min.js" ></script> */}
            {/* <script src="/js/main.js" ></script> */}
            {/* <script async defer src="https://buttons.github.io/buttons.js"></script> */}
        </>
    );
}

export default Layout;
