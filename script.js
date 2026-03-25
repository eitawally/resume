let translations = {};

// Function to apply translations
async function applyLanguage(lang) {
    if (Object.keys(translations).length === 0) {
        try {
            const response = await fetch('translations.json');
            translations = await response.json();
        } catch (error) {
            console.error('Error loading translations:', error);
            return;
        }
    }
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

    // Update the dynamic resume link href
    const resumeLink = document.getElementById('resume-link');
    if (resumeLink) {
        resumeLink.href = `resume/resume.html?lang=${lang}`;
    }

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

// --- Dark Mode Logic ---
const themeToggleBtn = document.getElementById('theme-toggle');
const darkIcon = document.getElementById('theme-toggle-dark-icon');
const lightIcon = document.getElementById('theme-toggle-light-icon');

function updateThemeIcons() {
    if (document.documentElement.classList.contains('dark')) {
        darkIcon.classList.add('hidden');
        lightIcon.classList.remove('hidden');
    } else {
        lightIcon.classList.add('hidden');
        darkIcon.classList.remove('hidden');
    }
}

themeToggleBtn.addEventListener('click', function () {
    // Toggle dark mode class
    document.documentElement.classList.toggle('dark');

    // Update local storage
    if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('color-theme', 'dark');
    } else {
        localStorage.setItem('color-theme', 'light');
    }

    // Update icons
    updateThemeIcons();
});

// Apply default on page load
document.addEventListener('DOMContentLoaded', () => {
    applyLanguage('en');
    updateThemeIcons();
});
