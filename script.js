// script.js
// This file provides simple internationalization (i18n) support for the
// landing page. It defines translation strings for English (en) and
// Romanian (ro) and updates the text content of elements by id based on
// the selected language. Placeholders for input fields are also updated.

const translations = {
  en: {
    nav_expertise: 'Expertise',
    nav_about: 'About',
    nav_testimonials: 'Testimonials',
    nav_contact: 'Contact',
    hero_title: 'Empowering Your IT Future',
    hero_subtitle: 'Trusted IT consulting and innovative solutions to drive your success.',
    cta_button: 'Get Started',
    features_title: 'Our Expertise',
    feature1_title: 'Cybersecurity',
    feature1_desc: 'Protect your data and infrastructure with comprehensive security assessments and solutions.',
    feature2_title: 'IT Infrastructure',
    feature2_desc: 'Design, deploy, and manage robust IT systems that scale with your business.',
    feature3_title: 'Digital Transformation',
    feature3_desc: 'Leverage cloud, automation, and modern tech to accelerate your digital journey.',
    about_title: 'About Us',
    about_summary: 'Havoc IT Consulting was founded by two senior technology consultants with over 13 years of combined professional experience in IT infrastructure, security and enterprise operations. Their expertise spans complex Linux and Windows environments, multi-tier support models, on-premise and cloud infrastructures, DevOps practices and large-scale system administration.',
    about_rom_title: 'Romanian Clients and Engagements',
    about_rom_text: '<li>Delivered infrastructure and operations initiatives for leading Romanian construction and infrastructure firms such as FCC Construction, Astaldi S.p.A. and Straco Group.</li><li>Modernized and supported IT capabilities for Maragro S.R.L., an agriculture-focused company.</li><li>Partnered with accounting and professional services firms nationwide and provided IT assistance to schools and municipal institutions.</li>',
    about_int_title: 'International Experience',
    about_int_text: '<li>Delivered enterprise programs for Swiss Life, Toll Collect, Evergreen, Carl Zeiss, Helvetia and Hugo Boss while engaged through global advisory organizations. Scope included ERP migrations from on-premises to cloud, application packaging and standardization, and DevOps services—including application and repository migrations to GitHub.</li><li>Supported large-scale infrastructure, security and operations initiatives for Wintershall, Novozymes and Thales.</li>',
    about_conclusion: 'Havoc IT Consulting builds on this individual experience to deliver structured, secure and forward-looking IT services, with a strong focus on automation and the integration of AI-driven technologies to support scalable and efficient business operations.',
    testimonials_title: 'What Our Clients Say',
    testimonial1: '"Havoc modernized our entire infrastructure. We went from legacy systems to a secure, cloud‑native environment without a hitch."',
    testimonial1_author: '- Enterprise Client',
    testimonial2: '"Their team unlocked new efficiencies and helped us automate our workflows. The ROI was immediate."',
    testimonial2_author: '- Mid‑Size Business',
    contact_title: 'Contact Us',
    contact_subtitle: 'Ready to grow? Fill out the form below and we\'ll get back to you soon.',
    contact_name: 'Your Name',
    contact_email: 'Your Email',
    contact_message: 'Your Message',
    contact_button: 'Send Message',
    footer_text: '© 2025 Havoc IT Consulting. All rights reserved.',
  },
  ro: {
    nav_expertise: 'Expertiză',
    nav_about: 'Despre',
    nav_testimonials: 'Testimoniale',
    nav_contact: 'Contact',
    hero_title: 'Modelăm viitorul tău IT',
    hero_subtitle: 'Consultanță IT de încredere și soluții inovatoare pentru succesul tău.',
    cta_button: 'Începe',
    features_title: 'Expertiza Noastră',
    feature1_title: 'Securitate cibernetică',
    feature1_desc: 'Protejează-ți datele și infrastructura cu evaluări și soluții de securitate complete.',
    feature2_title: 'Infrastructură IT',
    feature2_desc: 'Proiectăm, implementăm și gestionăm sisteme IT robuste care cresc odată cu afacerea ta.',
    feature3_title: 'Transformare digitală',
    feature3_desc: 'Valorifică cloud-ul, automatizarea și tehnologiile moderne pentru a accelera transformarea digitală.',
    about_title: 'Despre Noi',
    about_summary: 'Havoc IT Consulting a fost fondată de doi consultanți seniori în tehnologie, cu peste 13 ani de experiență profesională cumulată în infrastructură IT, securitate și operațiuni enterprise. Expertiza lor acoperă medii complexe Linux și Windows, modele de suport multi‑nivel, infrastructuri on-premise și cloud, practici DevOps și administrarea sistemelor la scară largă.',
    about_rom_title: 'Clienți și proiecte în România',
    about_rom_text: '<li>Proiecte de infrastructură și operațiuni pentru lideri locali din construcții și infrastructură precum FCC Construction, Astaldi S.p.A. și Straco Group.</li><li>Modernizare și suport IT pentru Maragro S.R.L., companie orientată spre sectorul agricol.</li><li>Colaborări cu firme de servicii profesionale și societăți de contabilitate la nivel național, plus sprijin pentru școli și autorități municipale.</li>',
    about_int_title: 'Experiență internațională',
    about_int_text: '<li>Programe enterprise livrate pentru Swiss Life, Toll Collect, Evergreen, Carl Zeiss, Helvetia și Hugo Boss, în cadrul unor organizații globale de consultanță. Aria de livrare a inclus migrări ERP din on-premises în cloud, application packaging și standardizare, precum și servicii DevOps — inclusiv migrări de aplicații și repo-uri către GitHub.</li><li>Contribuții la inițiative de infrastructură, securitate și operațiuni la scară largă pentru Wintershall, Novozymes și Thales.</li>',
    about_conclusion: 'Havoc IT Consulting valorifică această experiență individuală pentru a livra servicii IT structurate, sigure și orientate spre viitor, cu un accent puternic pe automatizare și integrarea tehnologiilor bazate pe inteligență artificială, în sprijinul unor operațiuni scalabile și eficiente.',
    testimonials_title: 'Ce spun clienții noștri',
    testimonial1: '"Havoc ne-a modernizat întreaga infrastructură. Am trecut de la sisteme vechi la un mediu cloud‑nativ securizat fără probleme."',
    testimonial1_author: '- Client Enterprise',
    testimonial2: '"Echipa lor a adus noi eficiențe și ne-a ajutat să automatizăm fluxurile de lucru. ROI-ul a fost imediat."',
    testimonial2_author: '- Afacere medie',
    contact_title: 'Contactează‑ne',
    contact_subtitle: 'Ești gata să crești? Completează formularul și te vom contacta în scurt timp.',
    contact_name: 'Numele tău',
    contact_email: 'Email-ul tău',
    contact_message: 'Mesajul tău',
    contact_button: 'Trimite Mesaj',
    footer_text: '© 2025 Havoc IT Consulting. Toate drepturile rezervate.',
  }
};

const htmlContentKeys = new Set(['about_rom_text', 'about_int_text']);

function setLanguage(lang) {
  const dict = translations[lang] || translations.en;
  // update text content for each key
  for (const key in dict) {
    const element = document.getElementById(key);
    if (element) {
      if (key.startsWith('contact_name') || key.startsWith('contact_email') || key.startsWith('contact_message')) {
        // update placeholder
        element.placeholder = dict[key];
      } else if (htmlContentKeys.has(key)) {
        element.innerHTML = dict[key];
      } else {
        element.textContent = dict[key];
      }
    }
  }
  // update active class on language selector
  document.getElementById('lang-en').classList.toggle('active', lang === 'en');
  document.getElementById('lang-ro').classList.toggle('active', lang === 'ro');
}

// set default language to English on load
document.addEventListener('DOMContentLoaded', () => {
  setLanguage('en');
  // attach click handlers
  document.getElementById('lang-en').addEventListener('click', (e) => {
    e.preventDefault();
    setLanguage('en');
  });
  document.getElementById('lang-ro').addEventListener('click', (e) => {
    e.preventDefault();
    setLanguage('ro');
  });
});
