// pages/index.js

{/* <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" /> */}


import Layout from "../components/Layout";
import Works from "../components/Works";
import CertifiedSection from "../components/CertifiedSection";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import GalleryPage from "../pages/gallery";
// import  '../hooks/live_dashboard_copy'; 







const Index = () => <Layout>
    <Header />
    <Services id="service"/>
    <CertifiedSection />
    <Works  />

    <GalleryPage />
   
    <Contact id="contact"/>
    <Footer />
</Layout>;

export default Index;