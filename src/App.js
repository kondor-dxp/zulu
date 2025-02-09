import './App.css';
import Elements from './components/Elements';
import Footer from './components/Footer';
import Header from './components/Header';
import UseScript from './components/UseScript';

function App() {
  return (
    <>
      <Header></Header>
      <main className="main">

      </main>
      <Footer></Footer>
      <Elements></Elements>

      

      {/* Vendor JS Files */}
      <UseScript src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></UseScript>
      <UseScript src="assets/vendor/php-email-form/validate.js"></UseScript>
      <UseScript src="assets/vendor/aos/aos.js"></UseScript>
      <UseScript src="assets/vendor/glightbox/js/glightbox.min.js"></UseScript>
      <UseScript src="assets/vendor/waypoints/noframework.waypoints.js"></UseScript>
      <UseScript src="assets/vendor/purecounter/purecounter_vanilla.js"></UseScript>
      <UseScript src="assets/vendor/swiper/swiper-bundle.min.js"></UseScript>
      <UseScript src="assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"></UseScript>
      <UseScript src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></UseScript>

      {/* Main JS File */}
      <UseScript src="assets/js/main.js"></UseScript>
    </>
  );
}

export default App;
