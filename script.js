
const words = {
    ky: {
        home: 'Башкы бет',
        about: 'Өзүм жөнүндө',
        skills: 'Көндүмдөр',
        projects: 'Долбоорлор',
        contact: 'Байланыш',
        hello: 'Салам! Менин атым',
        intro: 'Мен веб-разработкага кызыгам жана өзүмдү өнүктүрүүгө умтулам. Frontend Developer курсун аяктадым. HTML, CSS, JavaScript, React жана Figma менен иштөөнүн негиздерин үйрөндүм. Алдыда дагы көп нерсени үйрөнүүгө максатым бар.',
        emailBtn: '✉ Электрондук почта',
        quote: '«Кичинекей кадамдар чоң ийгиликтерге алып келет»',
        profile: 'Frontend Developer курсу бүтүрүүчүсү',
        aboutTitle: 'Өзүм жөнүндө',
        aboutText: 'Мен Айбарчын Икрамова. Frontend Developer курсун ийгиликтүү аяктадым. Веб-сайттарды түзүү, дизайн жана жаңы технологияларды үйрөнүү мага кызык. Өз билимимди өркүндөтүп, жаңы нерселерди үйрөнүүнү уланткым келет.',
        courseLabel: 'Курс:',
        locationLabel: 'Жайгашкан жер:',
        goalLabel: 'Максат:',
        goal: 'Жаңы көндүмдөрдү үйрөнүү жана өнүгүү',
        skillsTitle: 'Көндүмдөр',
        basic: 'Негиздери',
        learning: 'Үйрөнүп жатам',
        design: 'Веб-дизайн',
        projectsTitle: 'Долбоорлор',
        dental: 'Стоматологиялык клиника тууралуу мен жасаган веб-сайт.',
        style: 'Кийимдер үчүн онлайн дүкөндүн окуу долбоору.',
        sky: 'Бөлмөлөр жана байланыш бөлүмдөрү бар мейманкана сайтынын долбоору.',
        skyLink: 'Сайтты көрүү ↗',
        projectNote: 'Долбоор шилтемелерин кийин өзүнчө кошсо болот.',
        contactTitle: 'Байланыш',
        city: 'Бишкек, Кыргызстан',
        rights: 'Бардык укуктар корголгон.'
    },

    ru: {
        home: 'Главная',
        about: 'Обо мне',
        skills: 'Навыки',
        projects: 'Проекты',
        contact: 'Контакты',
        hello: 'Привет! Меня зовут',
        intro: 'Я интересуюсь веб-разработкой и стремлюсь развиваться. Я окончила курс Frontend Developer и изучала основы HTML, CSS, JavaScript, React и Figma. Хочу продолжать учиться и получать новые навыки.',
        emailBtn: '✉ Электронная почта',
        quote: '«Маленькие шаги приводят к большим успехам»',
        profile: 'Выпускница курса Frontend Developer',
        aboutTitle: 'Обо мне',
        aboutText: 'Меня зовут Айбарчын Икрамова. Я успешно окончила курс Frontend-разработки. Мне интересны создание сайтов, дизайн и изучение новых технологий. Хочу совершенствовать знания и продолжать учиться.',
        courseLabel: 'Курс:',
        locationLabel: 'Местоположение:',
        goalLabel: 'Цель:',
        goal: 'Осваивать новые навыки и развиваться',
        skillsTitle: 'Навыки',
        basic: 'Основы',
        learning: 'Изучаю',
        design: 'Веб-дизайн',
        projectsTitle: 'Проекты',
        dental: 'Мой проект веб-сайта стоматологической клиники.',
        style: 'Учебный проект интернет-магазина одежды.',
        sky: 'Проект сайта отеля с разделами номеров и контактов.',
        skyLink: 'Открыть сайт ↗',
        projectNote: 'Отдельные ссылки проектов можно добавить позже.',
        contactTitle: 'Контакты',
        city: 'Бишкек, Кыргызстан',
        rights: 'Все права защищены.'
    },

    en: {
        home: 'Home',
        about: 'About me',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact',
        hello: 'Hello! My name is',
        intro: 'I am interested in web development and motivated to keep learning. I completed a Frontend Developer course and studied the basics of HTML, CSS, JavaScript, React, and Figma. I look forward to building my skills further.',
        emailBtn: '✉ Email me',
        quote: '“Small steps lead to big achievements.”',
        profile: 'Frontend Developer course graduate',
        aboutTitle: 'About me',
        aboutText: 'My name is Aibarchyn Ikramova. I completed a Frontend Development course. I am interested in building websites, design, and learning new technologies. I want to keep improving my knowledge and skills.',
        courseLabel: 'Course:',
        locationLabel: 'Location:',
        goalLabel: 'Goal:',
        goal: 'Keep learning and developing new skills',
        skillsTitle: 'Skills',
        basic: 'Basics',
        learning: 'Learning',
        design: 'Web design',
        projectsTitle: 'Projects',
        dental: 'A website project for a dental clinic.',
        style: 'A learning project for an online clothing store.',
        sky: 'A hotel website project with rooms and contact sections.',
        skyLink: 'View website ↗',
        projectNote: 'Individual project links can be added later.',
        contactTitle: 'Contact',
        city: 'Bishkek, Kyrgyzstan',
        rights: 'All rights reserved.'
    }
};

const lang = document.getElementById('lang');

function changeLanguage(language) {
    const translations = words[language];

    if (!translations) return;

    document.documentElement.lang = language;

    document.querySelectorAll('[data-i]').forEach(element => {
        const key = element.dataset.i;

        if (translations[key]) {
            element.textContent = translations[key];
        }
    });
}

lang.addEventListener('change', () => {
    changeLanguage(lang.value);
});
