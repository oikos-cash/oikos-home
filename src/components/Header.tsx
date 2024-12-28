import React, { useContext, useEffect } from "react";
import { LanguageContext, LanguageContextType } from "../core/LanguageProvider";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import Logo from "../assets/images/oikos-type.svg";
// import { isMobile } from 'react-device-detect';
import { Link, Image } from '@chakra-ui/react';
import { useMenu } from "../hooks/MenuContext";


const Header: React.FC = () => {
  const ctx = useContext<LanguageContextType>(LanguageContext);
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const { setIsMenuOpen } = useMenu(); // Access setIsMenuOpen from context


  useEffect(() => {
    const menuModal = document.getElementById("menu");
    if (menuModal) {
      menuModal.addEventListener("show.bs.modal", () => {
        console.log("Menu opened");
        setIsMenuOpen(true);
      });
      menuModal.addEventListener("hide.bs.modal", () => {
        console.log("Menu closed");
        setIsMenuOpen(false);
      });
    }

    return () => {
      if (menuModal) {
        menuModal.removeEventListener("show.bs.modal", () => setIsMenuOpen(true));
        menuModal.removeEventListener("hide.bs.modal", () => setIsMenuOpen(false));
      }
    };
  }, [setIsMenuOpen]);

  return (
    <header id="header">
      <nav className="navbar navbar-expand navbar-fixed-top" >
        <div className="container header">
          
        <Link href="/" >

          <Image
            src={Logo}
            alt="Oikos Cash"
            style={{ width: "150px", height: "50px" }}
          />
          </Link>
          {/* Remove mx-auto class and add justify-content-start to align items to the left */}
          <ul className="navbar-nav items justify-content-start " >
            <li className="nav-item">
              <Link className="nav-link"  target="_blank" href="https://github.com/oikos-cash" isExternal >
                  Github
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="https://oikoscash.medium.com/" target="_blank" isExternal>
                  Medium
              </Link>
            </li>        

            <li className="nav-item">
              <Link className="nav-link" href="https://discord.gg/xTahMDXbRC" target="_blank" isExternal>
                  Discord
              </Link>
            </li>                         
          </ul>

          <ul className="navbar-nav action">
            <li className="nav-item ml-2">
              <a
                className="btn ml-lg-auto btn-bordered-gold"
                onClick={() => open()}
              >
                <p style={{color:"#f8bd45"}}>
                <i className="fa-solid fa-wallet mr-md-2 green-bg"></i>
                {isConnected
                  ? `${address?.slice(0, 6)}...${address?.slice(-6)}`
                  : "Connect wallet"}
                </p>
              </a>
            </li>
          </ul>

          <ul className="navbar-nav toggle">
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="modal"
                data-bs-target="#menu"
              >
                <i className="fa-solid fa-bars m-0"></i>
              </a>
            </li>
          </ul>

        </div>
      </nav>
      {/* Mobile Modal */}
      <div id="menu" className="modal fade p-0">
        <div className="modal-dialog dialog-animated">
          <div className="modal-content h-100">
            <div
              className="modal-header"
              data-bs-dismiss="modal"
              style={{ color: "#fff" }}
            >
              Menu <i className="far fa-times-circle icon-close"></i>
            </div>
            <div className="menu modal-body">
              <div className="row w-100">
                <div className="items p-0 col-12 text-center">
                  <ul className="navbar-nav items mx-auto">
                    <li
                      className="nav-item"
                      data-bs-dismiss="modal"
                      style={{ fontSize: "20px", marginTop:"20px"}}
                    >
                      <a className="btn ml-lg-auto btn-bordered-white" href="https://github.com/oikos-cash" target="_blank">
                        Github
                      </a>
                    </li>

                    <li
                      className="nav-item"
                      data-bs-dismiss="modal"
                      style={{ fontSize: "20px", marginTop:"20px"}}
                    >
                      <a className="btn ml-lg-auto btn-bordered-white" href="https://oikoscash.medium.com/" target="_blank">
                        Medium
                      </a>
                    </li>

                    <li
                      className="nav-item"
                      data-bs-dismiss="modal"
                      style={{ fontSize: "20px", marginTop:"20px"}}
                    >
                      <a className="btn ml-lg-auto btn-bordered-white" href="https://discord.gg/xTahMDXbRC" target="_blank">
                        Discord
                      </a>
                    </li>

                    {/* Wallet Connect */}
                    <li
                      className="nav-item"
                      data-bs-dismiss="modal"
                      style={{ fontSize: "20px", marginTop:"20px"}}
                    >
                      <a
                        className="btn ml-lg-auto btn-bordered-white"
                        onClick={() => open}
                      >
                        <i className="fa-solid fa-wallet mr-md-2" ></i>
                        {isConnected
                          ? `${address?.slice(0, 6)}...${address?.slice(-6)}`
                          : "Connect Wallet"}
                      </a>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    
  );
};

export default Header;
