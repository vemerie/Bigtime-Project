// pages/index.js

{/* <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" /> */}


import Layout from "../components/Layout";
import Works from "../components/Works";
import CertifiedSection from "../components/CertifiedSection";



const Index = () => <Layout>
    <Works  />
    <CertifiedSection />
</Layout>;

export default Index;