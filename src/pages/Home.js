import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductContext from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import heroProduct from '../assets/tshirts/Untitled design (39).png';
import reviewVideoOne from '../assets/testimonials/WhatsApp Video 2026-05-02 at 17.46.11.mp4';
import reviewVideoTwo from '../assets/testimonials/WhatsApp Video 2026-05-02 at 17.47.40.mp4';
import reviewVideoThree from '../assets/testimonials/WhatsApp Video 2026-05-02 at 17.47.40 (1).mp4';
import reviewVideoFour from '../assets/testimonials/WhatsApp Video 2026-05-02 at 17.47.40 (2).mp4';

const Home = () => {
  const { products } = useContext(ProductContext);
  const featured = products.slice(0, 4);
  const [showIntro, setShowIntro] = useState(true);
  const reviewVideos = [reviewVideoOne, reviewVideoTwo, reviewVideoThree, reviewVideoFour];

  useEffect(() => {
    if (showIntro) {
      document.body.classList.add('modal-open');
    }

    return () => document.body.classList.remove('modal-open');
  }, [showIntro]);

  const handleIntroClose = () => {
    document.body.classList.remove('modal-open');
    setShowIntro(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="page-section">
      {showIntro && (
        <motion.div
          className="intro-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="void-intro-title"
        >
          <motion.div
            className="intro-modal"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <div className="intro-modal-copy">
              <span className="brand-pill">WHY CHOOSE VOID ACTIVEWEAR</span>
              <h2 id="void-intro-title">Built sharp. Moves harder. Priced honest.</h2>
              <p>
                VOID blends sleek gym-ready silhouettes with breathable performance fabric, so your fit looks premium before, during, and after training.
              </p>
              <div className="intro-style-row" aria-label="VOID Activewear highlights">
                <span>Minimal logo finish</span>
                <span>Workout-ready fabric</span>
                <span>Street-clean fit</span>
              </div>
              <button className="button-primary" type="button" onClick={handleIntroClose}>
                Enter VOID
              </button>
            </div>
            <div className="intro-showcase">
              <div className="intro-product-frame">
                <img src={heroProduct} alt="VOID black performance t-shirt" />
                <span className="intro-drop-label">VOID PERFORMANCE</span>
              </div>
              <div className="intro-benefit-grid">
                <article>
                  <span>01</span>
                  <h3>Quick-dry comfort</h3>
                  <p>Cool-touch materials built for sweat, stretch, and all-day movement.</p>
                </article>
                <article>
                  <span>02</span>
                  <h3>Precision fit</h3>
                  <p>Athletic cuts that frame cleanly without bulk or restriction.</p>
                </article>
                <article>
                  <span>03</span>
                  <h3>Original pricing</h3>
                  <p>Premium finish and performance details at authentic Indian prices.</p>
                </article>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="hero-section"
      >
        <div className="hero-copy">
          <motion.span
            className="brand-pill"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            PREMIUM ACTIVEWEAR
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Performance Engineered for Excellence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Experience the perfect blend of advanced fabrics, precision fit, and contemporary design. VOID Activewear is engineered for athletes who demand peak performance.
          </motion.p>
          <motion.div
            className="hero-cta-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link className="button-primary" to="/shop">
              Explore Collection
            </Link>
            <Link className="button-secondary" to="/shop">
              Browse All →
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.img
            src={heroProduct}
            alt="VOID Activewear"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>
      </motion.section>

      <motion.section
        className="page-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="section-title">Signature Collection</h2>
            <p className="section-subtitle">Handpicked essentials engineered with premium materials and precision fit.</p>
          </div>
          <Link className="button-secondary" to="/shop">
            View All →
          </Link>
        </motion.div>

        <motion.div
          className="grid-gap product-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {featured.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="page-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          Why Choose VOID
        </motion.h2>
        <motion.div
          className="grid-gap"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {[
            { title: 'Premium Materials', desc: 'Advanced breathable fabrics engineered for comfort and durability in every wear.' },
            { title: 'Perfect Fit', desc: 'Tailored silhouettes designed with precision to move naturally with your body.' },
            { title: 'Original Pricing', desc: 'Premium quality at authentic Indian prices. No markups, uncompromised quality.' },
            { title: 'Lifetime Warranty', desc: 'Stand behind our products with comprehensive coverage and customer support.' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -12, boxShadow: '0 24px 64px rgba(229, 231, 235, 0.1)' }}
              className="card"
              style={{ padding: '32px', textAlign: 'center' }}
            >
              <motion.div
                style={{
                  width: '56px',
                  height: '56px',
                  background: 'rgba(229, 231, 235, 0.1)',
                  borderRadius: '12px',
                  margin: '0 auto 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.8rem',
                }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {['🎯', '✨', '💚', '🛡️'][idx]}
              </motion.div>
              <h3 style={{ margin: '0 0 12px', fontSize: '1.2rem', fontWeight: 700, color: '#f3f4f6' }}>
                {item.title}
              </h3>
              <p style={{ margin: 0, color: '#9ca3af', lineHeight: 1.6 }}>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="page-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        style={{
          background: 'linear-gradient(135deg, rgba(229, 231, 235, 0.1), rgba(115, 115, 115, 0.08))',
          padding: '64px 40px',
          borderRadius: '28px',
          textAlign: 'center',
          border: '1px solid rgba(229, 231, 235, 0.18)',
        }}
      >
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ background: 'none', WebkitTextFillColor: 'unset', color: '#f3f4f6' }}
        >
          Ready to Experience Premium Performance?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{ color: '#d1d5db', fontSize: '1.05rem', maxWidth: '680px', margin: '16px auto 32px' }}
        >
          Join thousands of athletes and fitness enthusiasts who trust VOID for their activewear needs.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link className="button-primary" to="/shop">
            Shop Now
          </Link>
        </motion.div>
      </motion.section>

      <motion.section
        className="page-section testimonials-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="section-title">Customer Review Videos</h2>
            <p className="section-subtitle">Real VOID buyers sharing fit, feel, and product quality.</p>
          </div>
        </motion.div>

        <motion.div
          className="testimonial-video-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {reviewVideos.map((video, idx) => (
            <motion.article key={video} className="testimonial-video-card" variants={itemVariants}>
              <video src={video} controls preload="metadata" playsInline />
              <div>
                <span>Review {idx + 1}</span>
                <p>Verified customer experience</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Home;
