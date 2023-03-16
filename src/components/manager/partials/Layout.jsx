import Header from '@components/manager/partials/Header';
import Footer from '@components/manager/partials/Footer';
function Layout({ children }) {

    return (
        <>
            <Header />
            <div className="container-fluid">
                {/* <!--documents--> */}
                <div className="row row-offcanvas row-offcanvas-left">
                    <div className="col-xs-6 col-sm-3 sidebar-offcanvas" role="navigation">
                        <ul className="list-group panel">
                            <li className="list-group-item"><i className="glyphicon glyphicon-align-justify"></i> <b>SIDE PANEL</b></li>
                            <li className="list-group-item"><input type="text" className="form-control search-query" placeholder="Search Something" /></li>
                            <li className="list-group-item"><a href="index.html"><i className="glyphicon glyphicon-home"></i>Dashboard </a></li>
                            <li className="list-group-item"><a href="icons.html"><i className="glyphicon glyphicon-certificate"></i>Icons </a></li>
                            <li className="list-group-item"><a href="list.html"><i className="glyphicon glyphicon-th-list"></i>Tables and List </a></li>
                            <li className="list-group-item"><a href="forms.html"><i className="glyphicon glyphicon-list-alt"></i>Forms</a></li>
                            <li className="list-group-item"><a href="alerts.html"><i className="glyphicon glyphicon-bell"></i>Alerts</a></li>
                            <li className="list-group-item"><a href="timeline.html" ><i className="glyphicon glyphicon-indent-left"></i>Timeline</a></li>
                            <li className="list-group-item"><a href="calendars.html" ><i className="glyphicon glyphicon-calendar"></i>Calendars</a></li>
                            <li className="list-group-item"><a href="typography.html" ><i className="glyphicon glyphicon-font"></i>Typography</a></li>
                            <li className="list-group-item"><a href="footers.html" ><i className="glyphicon glyphicon-minus"></i>Footers</a></li>
                            <li className="list-group-item"><a href="panels.html" ><i className="glyphicon glyphicon-list-alt"></i>Panels</a></li>
                            <li className="list-group-item"><a href="navs.html" ><i className="glyphicon glyphicon-th-list"></i>Navs</a></li>
                            <li className="list-group-item"><a href="colors.html" ><i className="glyphicon glyphicon-tint"></i>Colors</a></li>
                            <li className="list-group-item"><a href="flex.html" ><i className="glyphicon glyphicon-th"></i>Flex</a></li>
                            <li className="list-group-item"><a href="login.html" ><i className="glyphicon glyphicon-lock"></i>Login</a></li>
                            <li>
                                <a href="#demo3" className="list-group-item " data-toggle="collapse">Item 3  <span className="glyphicon glyphicon-chevron-right"></span></a>
                                <div className="collapse" id="demo3">
                                    <a href="#SubMenu1" className="list-group-item" data-toggle="collapse">Subitem 1  <span className="glyphicon glyphicon-chevron-right"></span></a>
                                    <div className="collapse list-group-submenu" id="SubMenu1">
                                        <a href="#" className="list-group-item">Subitem 1 a</a>
                                        <a href="#" className="list-group-item">Subitem 2 b</a>
                                        <a href="#SubSubMenu1" className="list-group-item" data-toggle="collapse">Subitem 3 c <span className="glyphicon glyphicon-chevron-right"></span></a>
                                        <div className="collapse list-group-submenu list-group-submenu-1" id="SubSubMenu1">
                                            <a href="#" className="list-group-item">Sub sub item 1</a>
                                            <a href="#" className="list-group-item">Sub sub item 2</a>
                                        </div>
                                        <a href="#" className="list-group-item">Subitem 4 d</a>
                                    </div>
                                    <a href="javascript:;" className="list-group-item">Subitem 2</a>
                                    <a href="javascript:;" className="list-group-item">Subitem 3</a>
                                </div>
                            </li>
                            <li>
                                <a href="#demo4" className="list-group-item " data-toggle="collapse">Item 4  <span className="glyphicon glyphicon-chevron-right"></span></a>
                                <li className="collapse" id="demo4">
                                    <a href="" className="list-group-item">Subitem 1</a>
                                    <a href="" className="list-group-item">Subitem 2</a>
                                    <a href="" className="list-group-item">Subitem 3</a>
                                </li>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-9 content">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">
                                    <a href="javascript:void(0);" className="toggle-sidebar">
                                        <span className="fa fa-angle-double-left" data-toggle="offcanvas" title="Maximize Panel">
                                        </span>
                                    </a> Panel Title</h3>
                            </div>
                            <div className="panel-body">{children}</div>
                        </div>
                    </div>
                </div>
            </div>
            < Footer />
        </>
    );
}

export default Layout;
