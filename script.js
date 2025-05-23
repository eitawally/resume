// Object of translations
const translations = {
    en: {
        pageTitle: "Wallace Batista de Santana Filho - Personal Website",
        headerTitle: "Wallace Batista de Santana Filho",
        headerSubtitle: "Test Engineer | Software Quality Assurance",
        heroTitle: "Welcome to My Personal Page!",
        heroText: "I'm a dedicated Test Engineer with extensive experience in Quality Assurance. Here you'll find links to my resume and other professional profiles.",
        resumeLinksTitle: "My Resumes",
        resumeLinkEn: "View Resume (English)",
        resumeLinkPt: "View Resume (Portuguese)",
        otherLinksTitle: "Other Links",
        linkedinLink: "LinkedIn Profile",
        githubLink: "GitHub Profile",
        footerText: "&copy; 2025 Wallace Batista de Santana Filho. All rights reserved."
    },
    pt: {
        pageTitle: "Wallace Batista de Santana Filho - Site Pessoal",
        headerTitle: "Wallace Batista de Santana Filho",
        headerSubtitle: "Engenheiro de Testes | Qualidade de Software",
        heroTitle: "Bem-vindo à Minha Página Pessoal!",
        heroText: "Sou um Engenheiro de Testes dedicado com vasta experiência em Quality Assurance. Aqui você encontrará links para meu currículo e outros perfis profissionais.",
        resumeLinksTitle: "Meus Currículos",
        resumeLinkEn: "Ver Currículo (Inglês)",
        resumeLinkPt: "Ver Currículo (Português)",
        otherLinksTitle: "Outros Links",
        linkedinLink: "Perfil do LinkedIn",
        githubLink: "Perfil do GitHub",
        footerText: "&copy; 2025 Wallace Batista de Santana Filho. Todos os direitos reservados."
    }
};

// Function to apply translations
function applyLanguage(lang) {
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            // Special handling for page title
            if (key === 'pageTitle') {
                document.title = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });

    // Update the state of language buttons
    document.getElementById('lang-en').classList.remove('active');
    document.getElementById('lang-pt').classList.remove('active');
    document.getElementById(`lang-${lang}`).classList.add('active');

    // Set the HTML lang attribute
    document.documentElement.lang = lang;
}

// Event Listeners for language buttons
document.getElementById('lang-en').addEventListener('click', () => applyLanguage('en'));
document.getElementById('lang-pt').addEventListener('click', () => applyLanguage('pt'));

// Apply default language (English) on page load
document.addEventListener('DOMContentLoaded', () => {
    applyLanguage('en');
});
