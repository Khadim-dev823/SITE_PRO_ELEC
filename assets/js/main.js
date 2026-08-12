    /* ==========================================================================
                SMIT - SEN MAINTENANCE INDUSTRIELLE & TERTIAIRE
            Scripts JS d'interactivité & Fix Menu Mobile Tactile
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

    // 1. Gestion du Bouton Menu Mobile (Hamburger Toggle)
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarContent');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    if (navbarToggler && navbarCollapse) {
        // Clic/Toucher sur le bouton trois traits
        navbarToggler.addEventListener('click', function () {
            navbarCollapse.classList.toggle('show');
        });

        // Fermer automatiquement le menu mobile au clic sur un lien
        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                navbarCollapse.classList.remove('show');
            });
        });
    }

    // 2. Bouton "Retour en haut" au défilement (Back to Top)
    const backToTopBtn = document.getElementById('backToTop');

    if (backToTopBtn) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 350) {
                backToTopBtn.classList.remove('d-none');
            } else {
                backToTopBtn.classList.add('d-none');
            }
        });
    }

    // 3. Redirection WhatsApp Directe avec Symboles Universels
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Récupération des valeurs saisies dans le formulaire
            const nom = document.getElementById('nom').value;
            const telephone = document.getElementById('telephone').value;
            const email = document.getElementById('email').value || 'Non renseigné';
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;

            // Numéro WhatsApp officiel de SMIT
            const numeroWhatsApp = "221775436242";

            // Message structuré avec symboles universels
            const messageBrut = "*DEMANDE DE DEVIS - SITE WEB SMIT*\n\n" +
                "• *Nom :* " + nom + "\n" +
                "• *Téléphone :* " + telephone + "\n" +
                "• *Email :* " + email + "\n" +
                "• *Prestation :* " + service + "\n\n" +
                "► *Détails du projet :*\n" + message;

            // Encodage complet et sécurisé
            const texteWhatsApp = encodeURIComponent(messageBrut);

            // Lien WhatsApp final
            const urlWhatsApp = "https://wa.me/" + numeroWhatsApp + "?text=" + texteWhatsApp;

            // Réinitialisation du formulaire
            contactForm.reset();

            // Ouverture instantanée dans un nouvel onglet
            window.open(urlWhatsApp, '_blank');
        });
    }

    // 4. Protection contre F12, Clic Droit et Raccourcis
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'F12' || e.keyCode === 123) {
            e.preventDefault();
            return false;
        }
        if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.keyCode === 73)) {
            e.preventDefault();
            return false;
        }
        if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j' || e.keyCode === 74)) {
            e.preventDefault();
            return false;
        }
        if (e.ctrlKey && (e.key === 'U' || e.key === 'u' || e.keyCode === 85)) {
            e.preventDefault();
            return false;
        }
    });
});