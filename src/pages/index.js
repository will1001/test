import React, { Fragment } from "react";
import Head from "next/head";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import { interiorTheme } from "common/theme/interior";
import { DrawerProvider } from "common/contexts/DrawerContext";
import Navbar from "containers/Interior/Navbar";
import Banner from "containers/Interior/Banner";
import Feature from "containers/Interior/Feature";
import AboutUs from "containers/Interior/AboutUs";
import Project from "containers/Interior/Project";
import Team from "containers/Interior/Team";
import News from "containers/Interior/News";
import Testimonial from "containers/Interior/Testimonial";
import Gallery from "containers/Interior/Gallery";
import Gallery2 from "containers/FoodDelivery/Gallery";
import Footer from "containers/Interior/Footer";
import ResetCSS from "common/assets/css/style";
import {
  GlobalStyle,
  InteriorWrapper,
  ContentWrapper,
} from "containers/Interior/interior.style";

const Interior = () => {
  return (
    <ThemeProvider theme={interiorTheme}>
      <Fragment>
        <Head>
          <title>PT. Surya Chandra Engineering</title>
          <meta name="theme-color" content="#171717" />
          <meta name="description" content="PT. Surya Chandra Engineering" />
          <meta
            name="keywords"
            content="PT. Surya Chandra Engineering"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:500,600&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
            rel="stylesheet"
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />

        {/* Start writing your markup from here. */}
        <InteriorWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <ContentWrapper>
            <Banner />
            {/* <Feature /> */}
            <AboutUs />
            <Project />
            {/* <Team /> */}
            {/* <News /> */}
            {/* <Testimonial /> */}
            <Gallery2 />
            <div className="pt-[100px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3944.597797649671!2d115.27774141478382!3d-8.634553893795086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMzgnMDQuNCJTIDExNcKwMTYnNDcuOCJF!5e0!3m2!1sen!2sid!4v1678616261139!5m2!1sen!2sid"
                width="100%"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </ContentWrapper>
          <Footer />
        </InteriorWrapper>
        {/* End of markup section. */}
      </Fragment>
    </ThemeProvider>
  );
};
export default Interior;
