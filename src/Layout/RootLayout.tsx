import { Outlet } from "react-router-dom";
import AsideBar from "../Components/AsideBar/Asidebar";
import { useState } from "react";
import "./rootLayout.css";
import Header from "../Components/Header/Header";

import { store } from "../Store/Store";
import { Provider } from "react-redux";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { FaBars } from "react-icons/fa";

const RootLayout = () => {
  const queryClient = new QueryClient();

  const [isOpen, setIsOpen] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <div
          className={`layout ${
            isOpen ? "sidebar-open" : "sidebar-closed"
          }`}
        >
          <AsideBar />

          <main className="main-content">
            <button
              className="bars"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <FaBars />
            </button>

            <Header />

            <div className="page-content">
              <Outlet />
            </div>
          </main>
        </div>
      </Provider>
    </QueryClientProvider>
  );
};

export default RootLayout;