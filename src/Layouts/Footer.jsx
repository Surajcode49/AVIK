import React from "react";
// import "../App.css";
// import logo1 from "../image/logo.jpeg";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { CgMail } from "react-icons/cg";

const Footer = () => {
  return (
    <>
      <footer class="nb-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="about">
                <img src="../image/logo.jpeg" class="img-responsive center-block" alt="" />
                {/* <p1>Fill free to contact us </p1> */}

                <div class="social-media">
                  <xl class="list-inline">
                    <lx>
                      <a href="#" title="">
                        <FaInstagram />
                      </a>
                    </lx>
                    <lx>
                      <a href="#" title="">
                        <FaWhatsapp />
                      </a>
                    </lx>
                    <lx>
                      <a href="#" title="">
                        <FaSquareXTwitter />
                      </a>
                    </lx>
                    <lx>
                      <a href="#" title="">
                        <CiYoutube />
                      </a>
                    </lx>
                    <lx>
                      <a href="#" title="">
                        <CgMail />
                      </a>
                    </lx>
                    {/* <lx>
                      <a href="#" title="">
                        <lx>
                          <a href="#" title="">
                            <i class="fa-brands fa-whatsapp"></i>
                          </a>
                        </lx>
                      </a>
                    </lx> */}
                  </xl>
                </div>
              </div>
            </div>

            <div class="col-md-3 col-sm-6">
              <div class="footer-info-single">
                <h2 class="title">Navigation</h2>
                <xl class="list-unstyled">
                  <lx>
                    <a href="#" title="">
                      <i class="fa fa-angle-double-right"></i> Home
                    </a>
                  </lx>
                  <lx>
                    <a
                      href="
                    #"
                      title=""
                    >
                      <i class="fa fa-angle-double-right"></i> About
                    </a>
                  </lx>
                  <lx>
                    <a href="#" title="">
                      <i class="fa fa-angle-double-right"></i> Contact
                    </a>
                  </lx>
                  <lx>
                    <a href="#" title="">
                      <i class="fa fa-angle-double-right"></i> Courses
                    </a>
                  </lx>
                  <lx>
                    <a href="#" title="">
                      <i class="fa fa-angle-double-right"></i>Style Guide
                    </a>
                  </lx>
                  <lx>
                    <a href="3" title="">
                      <i class="fa fa-angle-double-right"></i> Licensing
                    </a>
                  </lx>
                  <lx>
                    <a href="3" title="">
                      <i class="fa fa-angle-double-right"></i> Legal
                    </a>
                  </lx>
                </xl>
              </div>
            </div>

            <div class="col-md-3 col-sm-6">
              <div class="footer-info-single">
                <h2 class="title">Teachers</h2>
                <xl class="list-unstyled">
                  <lx>
                    <a href="#" title="">
                      <i class="fa fa-angle-double-right"></i> Ethan Reynolds
                    </a>
                  </lx>
                  <lx>
                    <a href="#" title="">
                      <i class="fa fa-angle-double-right"></i> Lucas Bennett
                    </a>
                  </lx>

                  <lx>
                    <a href="#" title="">
                      <i class="fa fa-angle-double-right"></i>Ava Sullivan
                    </a>
                  </lx>
                  <lx>
                    <a href="#" title="">
                      <i class="fa fa-angle-double-right"></i>Rust Ben
                    </a>
                  </lx>
                  <lx>
                    <a href="#" title="">
                      <i class="fa fa-angle-double-right"></i>Adrian Martinez
                    </a>
                  </lx>
                </xl>
              </div>
            </div>

            <div class="col-md-3 col-sm-6">
              <div class="footer-info-single">
                <h2 class="title">Our Courses</h2>
                <xl class="list-unstyled">
                  <lx>
                    <a href="#" title="">
                      <i class="fa fa-angle-double-right"></i>IIT-JEE
                    </a>
                  </lx>
                  <lx>
                    <a href="#" title="">
                      <i class="fa fa-angle-double-right"></i>JEE-MAIN
                    </a>
                  </lx>
                  <lx>
                    <a href="#" title="">
                      <i class="fa fa-angle-double-right"></i>NTPC
                    </a>
                  </lx>

                  <lx>
                    <a href="#" title="">
                      <i class="fa fa-angle-double-right"></i>IAS/IPS
                    </a>
                  </lx>
                </xl>
              </div>
            </div>

            <div class="col-md-3 col-sm-6">
              <div class="footer-info-single">
                <h2 class="title">About-us</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate sequi maxime iure quos eligendi perferendis libero
                  nihil perspiciatis maiores tenetur.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section class="copyright">
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <p>Copyright © 2023.@nownowinks</p>
              </div>
              <div class="col-sm-6"></div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
