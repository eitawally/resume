// Variável para armazenar as traduções carregadas
let resumeTranslations = {};

// Função para aplicar as traduções ao currículo
async function applyResumeLanguage(lang) {
    // Se as traduções ainda não foram carregadas, tenta carregá-las
    if (Object.keys(resumeTranslations).length === 0) {
        try {
            const response = await fetch('resume-translations.json');
            resumeTranslations = await response.json();
        } catch (error) {
            console.error('Erro ao carregar as traduções do currículo:', error);
            return; // Sai da função se não conseguir carregar
        }
    }

    // Aplica as traduções aos elementos HTML
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (resumeTranslations[lang] && resumeTranslations[lang][key]) {
            if (key === 'resumeTitle') { // Caso especial para o título da página
                document.title = resumeTranslations[lang][key];
            } else {
                element.innerHTML = resumeTranslations[lang][key];
            }
        }
    });

    // Define o atributo lang do HTML
    document.documentElement.lang = lang;
}

// Ao carregar a página, verifica o parâmetro 'lang' na URL
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'en'; // Pega o idioma da URL ou define 'en' como padrão
    applyResumeLanguage(lang);
});
