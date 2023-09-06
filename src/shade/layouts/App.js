import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import Switcher from "../Switcher/Switcher";
import RightSidebar from "../RightSidebar/RightSidebar";
import { Outlet } from "react-router-dom";
import TabToTop from "../TabToTop/TabToTop";
import { Provider } from "react-redux";
import Store from "../../redux/store/store"
export default function App() {
  //The created store
  document.querySelector("body").classList.add("ltr", "main-body", "app", "sidebar-mini");
  document.querySelector("body").classList.remove("error-page1", "bg-primary");
  const responsiveSidebarclose = () => {
    //leftsidemenu
    if (window.innerWidth < 992){
    document.querySelector(".app").classList.remove("sidenav-toggled");
  }
    //rightsidebar
    document.querySelector(".sidebar-right").classList.remove("sidebar-open");
    //swichermainright
    document.querySelector(".demo_changer").classList.remove("active");
    document.querySelector(".demo_changer").style.right = "-270px";
  };
  function Sidebargone(gone) {
    if (gone.matches) { // If media query matches
      document.querySelector("body").classList.add("sidebar-gone");
    } else {
      document.querySelector("body").classList.remove("sidebar-gone");
      document.querySelector("body").classList.remove("sidenav-toggled");
    }
  }

  var gone = window.matchMedia("(max-width: 1024px)")
  Sidebargone(gone) // Call listener function at run time
  gone.addListener(Sidebargone)
  return (
    <React.Fragment>

        <Provider store={Store}>
          <div className="horizontalMenucontainer">
            <TabToTop />
            <div className="page">
              <div className="open">
                <Header />
                <Sidebar />
              </div>
              <div className="main-content app-content"  onClick={() => {
                      responsiveSidebarclose();
                    }}>
                <div className="side-app">
                  <div
                    className="main-container container-fluid"
                   
                  >
                    <Outlet />
                  </div>
                </div>
              </div>
              <RightSidebar/>
              <Switcher />
              <Footer />
            </div>
          </div>
        </Provider>
    </React.Fragment>
  );
}
