// Funzione per caricare uno script
function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.defer = true;  // Garantisce che lo script venga eseguito dopo il caricamento della pagina
      script.onload = () => {
        console.log(`✅ Script caricato: ${src}`);
        resolve();
      };
      script.onerror = () => {
        console.error(`❌ Errore nel caricamento dello script: ${src}`);
        reject();
      };
      document.body.appendChild(script);
    });
  }

  // Funzione per caricare gli script in sequenza
  async function loadScriptsInOrder(scripts) {
    for (let script of scripts) {
      try {
        await loadScript(script)
      } catch (error) {
        console.error("Errore nel caricamento di uno degli script.", error)
      }
    }
  }

  // Avvia il caricamento degli script in ordine
  loadScriptsInOrder([
    "/assets/vendor/bootstrap/js/bootstrap.bundle.min.js",
    "/assets/vendor/php-email-form/validate.js",
    "/assets/vendor/aos/aos.js",
    "/assets/vendor/glightbox/js/glightbox.min.js",
    "/assets/vendor/waypoints/noframework.waypoints.js",
    "/assets/vendor/purecounter/purecounter_vanilla.js",
    "/assets/vendor/swiper/swiper-bundle.min.js",
    "/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js",
    "/assets/vendor/isotope-layout/isotope.pkgd.min.js",
    "/assets/js/main.js"
  ]);