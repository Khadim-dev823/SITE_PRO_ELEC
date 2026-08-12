    /* ==========================================================================
                    SMIT - SEN MAINTENANCE INDUSTRIELLE & TERTIAIRE
                Scripts JS d'interactivité & Redirection WhatsApp Directe
    ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

    // 1. Fermeture automatique du menu mobile au clic sur un lien
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (navbarCollapse) {
        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                        toggle: true
                    });
                }
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

            // Encodage complet pour l'URL web
            const texteWhatsApp = encodeURIComponent(messageBrut);

            // Lien WhatsApp final
            const urlWhatsApp = "https://wa.me/" + numeroWhatsApp + "?text=" + texteWhatsApp;

            // Réinitialisation du formulaire
            contactForm.reset();

            // Ouverture instantanée dans un nouvel onglet
            window.open(urlWhatsApp, '_blank');
        });
    }

    // ==========================================================================
    // PROTECTION CONTRE F12, CLIC DROIT ET INSPECTEUR D'ÉLÉMENT
    // ==========================================================================

    // 1. Bloquer le Clic Droit (Menu Contextuel)
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    // 2. Bloquer la touche F12 et les raccourcis clavier
    document.addEventListener('keydown', function (e) {
        // Bloquer F12
        if (e.key === 'F12' || e.keyCode === 123) {
            e.preventDefault();
            return false;
        }

        // Bloquer Ctrl + Shift + I (Inspecter)
        if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.keyCode === 73)) {
            e.preventDefault();
            return false;
        }

        // Bloquer Ctrl + Shift + J (Console)
        if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j' || e.keyCode === 74)) {
            e.preventDefault();
            return false;
        }

        // Bloquer Ctrl + U (Voir le code source HTML)
        if (e.ctrlKey && (e.key === 'U' || e.key === 'u' || e.keyCode === 85)) {
            e.preventDefault();
            return false;
        }
    });
});