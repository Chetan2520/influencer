import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import ContactUs from './page/Contact';
import InfluencerServices from './page/Service';
import CreativeSpark from './page/About';
import Bucket from './page/Bucket';
import Catherine from './page/Catherine';
import ComedyPage from './page/Comedy';

// --- Placeholder components for demonstration ---
const ProductPage = ({ type }) => (
  <div className="text-center py-20">
    <h1 className="text-4xl font-bold">Product: {type}</h1>
    <p>This is a placeholder page for {type}.</p>
  </div>
);

const JoinPage = ({ type }) => (
  <div className="text-center py-20">
    <h1 className="text-4xl font-bold">Join as {type}</h1>
    <p>This is a placeholder page for joining as an {type}.</p>
  </div>
);


const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow ">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/services" element={<InfluencerServices />} />
          <Route path="/about" element={<CreativeSpark />} />
          <Route path="/contact" element={<ContactUs />} />

          {/* Routes for the "Product" dropdown */}
          <Route path="/bucket" element={<Bucket />} />
          <Route path="/catherine" element={<Catherine type="Catherine" />} />
          <Route path="/comedy" element={<ComedyPage type="Comedy" />} />

          {/* <Route path="/join/influencer" element={<JoinPage type="Influencer" />} />
          <Route path="/join/brand" element={<JoinPage type="Brand" />} /> */}

          {/* Optional: Add a 404 Not Found page */}
          <Route path="*" element={
            <div className="text-center py-20">
              <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
            </div>
          } />
        </Routes>
      </main>

      {/* Footer is also outside of Routes to persist on every page */}
      <Footer />
    </div>
  );
};

export default App;
