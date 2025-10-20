// =========================================
// JAVASCRIPT LOGIC
// =========================================

// --- 1. LOCALIZATION (i18n) - АКТИВИРОВАНО ---

const translations = {
    ru: {
        // Обновлено: Удалено "калькулятор"
        title: "JaluzeleComrat", metaDescription: "Современный прототип сайта для производителя жалюзи и рулонных штор: каталог, портфолио, быстрый заказ и адаптивный дизайн.",
        navCatalog: "Каталог", navPortfolio: "Портфолио", navAbout: "О компании", navContact: "Контакты",
        btnOrderMeasure: "Заказать замер", btnOrder: "Заказать", ctaFreeMeasure: "Бесплатный выезд замерщика",
        heroTitle: "Качественные жалюзи", heroSubtitle: "Создаем уют и комфорт в вашем доме <br> с помощью современных оконных решений", heroText: "Производим, монтируем и обслуживаем. Бесплатный выезд замерщика и быстрые сроки.",

        // Удалено: demoTitle, port1, port2, port3, calc*
        prodDayNight: "День-ночь", prodRoll: "Рулонные шторы", prodPlise: "Жалюзи Plise", prodNobles: "Шторы Nobles", prodRoman: "Римские шторы", prodMosquito: "Москитные сетки Plise",
        aboutTitle: "О компании", aboutText: "Собственное производство, монтаж, сервис. Быстрая логистика и точность размеров.", contactTitle: "Контакты", contactAddress: "Адрес: г. Комрат", contactPhone: "Тел: +373 00 000 000", footerTagline: "Производство жалюзи и штор в Молдове",
        modalTitle: "Заказать замер", formName: "Имя", formPhone: "Телефон", formSubmit: "Отправить",
        whatsappModalTitle: "Написать нам в WhatsApp",
        whatsappModalText: "Введите ваше сообщение, и мы перейдем в чат.",
        formMessage: "Сообщение",
        formSendMessage: "Начать чат",
        whatsappModalTextDefault: "Здравствуйте! Я пишу с сайта JaluzeleComrat и хотел бы узнать больше о ваших товарах и услугах.",
        whatsappPlaceholder: "Здравствуйте, я хотел бы узнать цену на...",

        // КЛЮЧИ ЯЗЫКА (ИСПРАВЛЕНО)
        "lang-ru": "Ru", "lang-en": "En", "lang-ro": "Ro",
        "lang-ru-full": "Русский", "lang-en-full": "English", "lang-ro-full": "Română",

        "catalogTitle": "Каталог товаров",

        // Ключи для секции Услуги
        "servicesTitle1": "Бесплатный замер", "servicesText1": "Наш специалист приедет к вам домой и произведет точные замеры окон совершенно бесплатно.",
        "servicesTitle2": "Дизайн-консультация", "servicesText2": "Поможем подобрать идеальные жалюзи под ваш интерьер и предпочтения.",
        "servicesTitle3": "Изготовление на заказ", "servicesText3": "Производим жалюзи точно по вашим размерам с использованием качественных материалов.",
        "servicesTitle4": "Профессиональная установка", "servicesText4": "Быстрая и качественная установка с гарантией на выполненные работы.",
        "servicesTitle5": "Гарантийное обслуживание", "servicesText5": "Предоставляем гарантию на все виды работ и материалы.",
        "servicesTitle6": "Послепродажная поддержка", "servicesText6": "Консультации по уходу и обслуживанию, ремонт при необходимости.",

        // Ключи для баннера
        "ctaBannerTitle": "Готовы преобразить ваш дом?", "ctaBannerText": "Закажите бесплатный замер уже сегодня!", "ctaBannerButton": "Заказать замер",

        "sliderTitle": "Наши лучшие работы",
        "experienceBadge": "5+<br>лет опыта",

        // Ключи для расширенной секции О компании
        "aboutCompanyName": "О компании JC - JALUZELE COMRAT",
        "aboutTextLong1": "Мы - ведущая компания в Комрате, специализирующаяся на производстве и установке качественных жалюзи день-ночь и плиссе. За годы работы мы завоевали доверие сотен клиентов благодаря высокому качеству продукции и профессиональному сервису.",
        "aboutTextLong2": "Наша команда состоит из опытных специалистов, которые знают все тонкости производства и установки оконных покрытий. Мы используем только качественные материалы и современное оборудование.",
        "heroSubtitleLarge": "Качественные жалюзи и рулонные шторы — под ваши размеры",
        "aboutHighQualityTitle": "Высокое качество", "aboutHighQualityText": "Используем только проверенные материалы от ведущих производителей.",
        "aboutFastTermsTitle": "Быстрые сроки", "aboutFastTermsText": "Изготовление и установка в течение 3-5 рабочих дней.",
        "aboutAffordablePricesTitle": "Доступные цены", "aboutAffordablePricesText": "Конкурентные цены без переплат и скрытых комиссий.",
        "aboutIndividualApproachTitle": "Индивидуальный подход", "aboutIndividualApproachText": "Учитываем все ваши пожелания и особенности интерьера.",

        // Ключи для секции Статистика
        "statsClientsNumber": "500+", "statsClientsLabel": "Довольных клиентов",
        "statsYearsNumber": "5+", "statsYearsLabel": "Лет на рынке",
        "statsOrdersNumber": "1000+", "statsOrdersLabel": "Выполненных заказов",
        "statsGuaranteeNumber": "100%", "statsGuaranteeLabel": "Гарантия качества",

        // Ключи для секции Интро
        "introTitle": "ЖАЛЮЗИ, КОТОРЫЕ ДЕЛАЮТ СВЕТ УДОБНЫМ ДЛЯ ВАС.",
        "introText": "Компания JaluzeleComrat успешно зарекомендовала себя на рынке Молдовы. Мы ориентированы на удовлетворение потребностей и желаний каждого клиента. Наша команда состоит из профессионалов с многолетним опытом работы в данной области, и на протяжении всего времени состав нашего коллектива остается практически неизменным. У нас представлен самый широкий ассортимент жалюзи, тканей и солнцезащитных систем в Молдове.",

        "footerCall": "Позвонить",
    },
    en: {
        // Обновлено
        title: "JaluzeleComrat", metaDescription: "Modern website prototype for a manufacturer of blinds and roller shutters: catalog, portfolio, quick order, and adaptive design.",
        navCatalog: "Catalog", navPortfolio: "Portfolio", navAbout: "About Us", navContact: "Contacts",
        btnOrderMeasure: "Order Measure", btnOrder: "Order", ctaFreeMeasure: "Free measurement visit",
        heroTitle: "Quality Blinds", heroSubtitle: "Create coziness and comfort in your home <br> with modern window solutions", heroText: "We manufacture, install, and service. Free measurement and fast turnaround times.",

        // Удалено: demoTitle, port1, port2, port3, calc*
        prodDayNight: "Day-Night", prodRoll: "Roller Blinds", prodPlise: "Plisse Blinds", prodNobles: "Nobles Curtains", prodRoman: "Roman Blinds", prodMosquito: "Plisse Mosquito Nets",
        aboutTitle: "About Company", aboutText: "Own production, installation, service. Fast logistics and size accuracy.", contactTitle: "Contacts", contactAddress: "Address: Comrat", contactPhone: "Tel: +373 00 000 000", footerTagline: "Production of blinds and curtains in Moldova",
        modalTitle: "Order Measurement", formName: "Name", formPhone: "Phone", formSubmit: "Send",
        whatsappModalTitle: "Message us on WhatsApp",
        whatsappModalText: "Enter your message, and we will proceed to the chat.",
        formMessage: "Message",
        formSendMessage: "Start Chat",
        whatsappModalTextDefault: "Hello! I am writing from the JaluzeleComrat website and would like to learn more about your products and services.",
        whatsappPlaceholder: "Hello, I would like to know the price for...",

        // КЛЮЧИ ЯЗЫКА (ИСПРАВЛЕНО)
        "lang-ru": "Ru", "lang-en": "En", "lang-ro": "Ro",
        "lang-ru-full": "Русский", "lang-en-full": "English", "lang-ro-full": "Română",

        "catalogTitle": "Product Catalog",

        // Ключи для секции Услуги
        "servicesTitle1": "Free Measurement", "servicesText1": "Our specialist will come to your home and take precise window measurements completely free of charge.",
        "servicesTitle2": "Design Consultation", "servicesText2": "We will help you choose the ideal blinds for your interior and preferences.",
        "servicesTitle3": "Custom Manufacturing", "servicesText3": "We produce blinds exactly to your size using quality materials.",
        "servicesTitle4": "Professional Installation", "servicesText4": "Fast and quality installation with a guarantee on the work performed.",
        "servicesTitle5": "Warranty Service", "servicesText5": "We provide a warranty for all types of work and materials.",
        "servicesTitle6": "After-sales Support", "servicesText6": "Consultation on care and maintenance, repair if necessary.",

        // Ключи для баннера
        "ctaBannerTitle": "Ready to transform your home?", "ctaBannerText": "Order a free measurement today!", "ctaBannerButton": "Order Measurement",

        "sliderTitle": "Our Best Works",
        "experienceBadge": "5+<br>years experience",

        // Ключи для расширенной секции О компании
        "aboutCompanyName": "About JC - JALUZELE COMRAT",
        "aboutTextLong1": "We are a leading company in Comrat, specializing in the production and installation of high-quality day-night and plisse blinds. Over the years, we have earned the trust of hundreds of clients thanks to the high quality of our products and professional service.",
        "aboutTextLong2": "Our team consists of experienced specialists who know all the nuances of manufacturing and installing window coverings. We use only quality materials and modern equipment.",
        "heroSubtitleLarge": "Quality blinds and roller shutters — customized to your sizes",
        "aboutHighQualityTitle": "High Quality", "aboutHighQualityText": "We use only tested materials from leading manufacturers.",
        "aboutFastTermsTitle": "Fast Turnaround", "aboutFastTermsText": "Manufacturing and installation within 3-5 working days.",
        "aboutAffordablePricesTitle": "Affordable Prices", "aboutAffordablePricesText": "Competitive prices without overpayments or hidden fees.",
        "aboutIndividualApproachTitle": "Individual Approach", "aboutIndividualApproachText": "We consider all your wishes and interior features.",

        // Ключи для секции Статистика
        "statsClientsNumber": "500+", "statsClientsLabel": "Satisfied Clients",
        "statsYearsNumber": "5+", "statsYearsLabel": "Years on the Market",
        "statsOrdersNumber": "1000+", "statsOrdersLabel": "Completed Orders",
        "statsGuaranteeNumber": "100%", "statsGuaranteeLabel": "Quality Guarantee",

        // Ключи для секции Интро
        "introTitle": "BLINDS THAT MAKE LIGHT CONVENIENT FOR YOU.",
        "introText": "JaluzeleComrat has successfully established itself in the Moldovan market. We are focused on meeting the needs and desires of every client. Our team consists of professionals with many years of experience in this field, and our team composition has remained virtually unchanged over time. We offer the widest range of blinds, fabrics, and sun protection systems in Moldova.",

        "footerCall": "Call Us",
    },
    ro: {
        // Обновлено
        title: "JaluzeleComrat", metaDescription: "Prototip modern de site pentru un producător de jaluzele și rulouri: catalog, portofoliu, comandă rapidă și design adaptiv.",
        navCatalog: "Catalog", navPortfolio: "Portofoliu", navAbout: "Despre Noi", navContact: "Contacte",
        btnOrderMeasure: "Comandă Măsurare", btnOrder: "Comandă", ctaFreeMeasure: "Măsurare gratuită la domiciliu",
        heroTitle: "Jaluzele de Calitate", heroSubtitle: "Creăm confort în casa dumneavoastră <br> cu soluții moderne pentru ferestre", heroText: "Producem, montăm și întreținem. Deplasare gratuită pentru măsurare și termene rapide.",

        // Удалено: demoTitle, port1, port2, port3, calc*
        prodDayNight: "Zi-Noapte", prodRoll: "Rulouri", prodPlise: "Jaluzele Plise", prodNobles: "Perdele Nobles", prodRoman: "Perdele Romane", prodMosquito: "Plase Plise Anti-insecte",
        aboutTitle: "Despre Companie", aboutText: "Producție proprie, montaj, service. Logistică rapidă și precizie a dimensiunilor.", contactTitle: "Contacte", contactAddress: "Adresa: Comrat", contactPhone: "Tel: +373 00 000 000", footerTagline: "Producerea jaluzelelor și perdelelor în Moldova",
        modalTitle: "Comandă Măsurare", formName: "Nume", formPhone: "Telefon", formSubmit: "Trimite",
        whatsappModalTitle: "Scrieți-ne pe WhatsApp",
        whatsappModalText: "Introduceți mesajul dvs. și vom trece la chat.",
        formMessage: "Mesaj",
        formSendMessage: "Începe Chatul",
        whatsappModalTextDefault: "Bună ziua! Vă scriu de pe site-ul JaluzeleComrat și aș dori să aflu mai multe despre produsele și serviciile dumneavoastră.",
        whatsappPlaceholder: "Bună ziua, aș dori să aflu prețul pentru...",

        // КЛЮЧИ ЯЗЫКА (ИСПРАВЛЕНО)
        "lang-ru": "Ru", "lang-en": "En", "lang-ro": "Ro",
        "lang-ru-full": "Русский", "lang-en-full": "English", "lang-ro-full": "Română",

        "catalogTitle": "Catalog de produse",

        // Ключи для секции Услуги
        "servicesTitle1": "Măsurare gratuită", "servicesText1": "Specialistul nostru va veni la domiciliul dumneavoastră și va efectua măsurători precise ale ferestrelor absolut gratuit.",
        "servicesTitle2": "Design Consultation", "servicesText2": "Vă vom ajuta să alegeți jaluzelele ideale pentru interiorul și preferințele dumneavoastră.",
        "servicesTitle3": "Producție la comandă", "servicesText3": "Producem jaluzele exact la dimensiunile dumneavoastră, utilizând materiale de calitate.",
        "servicesTitle4": "Instalare profesională", "servicesText4": "Instalare rapidă și de calitate cu garanție pentru lucrările efectuate.",
        "servicesTitle5": "Service în garanție", "servicesText5": "Oferim garanție pentru toate tipurile de lucrări și materiale.",
        "servicesTitle6": "Suport post-vânzare", "servicesText6": "Consultații privind îngrijirea și întreținerea, reparații la nevoie.",

        // Ключи для баннера
        "ctaBannerTitle": "Gata să vă transformați casa?", "ctaBannerText": "Comandați o măsurare gratuită astăzi!", "ctaBannerButton": "Comandă Măsurare",

        "sliderTitle": "Cele mai bune lucrări ale noastre",
        "experienceBadge": "5+<br>ani experiență",

        // Ключи для расширенной секции О компании
        "aboutCompanyName": "Despre JC - JALUZELE COMRAT",
        "aboutTextLong1": "Suntem o companie lider în Comrat, specializată în producția și instalarea de jaluzele zi-noapte și plise de înaltă calitate. De-a lungul anilor, am câștigat încrederea a sute de clienți datorită calității înalte a produselor noastre și serviciilor profesionale.",
        "aboutTextLong2": "Echipa noastră este formată din specialiști cu experiență care cunosc toate nuanțele de fabricare și instalare a acoperirilor de ferestre. Folosim doar materiale de calitate și echipamente moderne.",
        "heroSubtitleLarge": "Jaluzele și rulouri de calitate — personalizate la dimensiunile dumneavoastră",
        "aboutHighQualityTitle": "Calitate înaltă", "aboutHighQualityText": "Folosim doar materiale testate de la producători de top.",
        "aboutFastTermsTitle": "Termene rapide", "aboutFastTermsText": "Fabricare și instalare în termen de 3-5 zile lucrătoare.",
        "aboutAffordablePricesTitle": "Prețuri accesibile", "aboutAffordablePricesText": "Prețuri competitive fără plăți în exces sau comisioane ascunse.",
        "aboutIndividualApproachTitle": "Abordare individuală", "aboutIndividualApproachText": "Ținem cont de toate dorințele și particularitățile interiorului dumneavoastră.",

        // Ключи для секции Статистика
        "statsClientsNumber": "500+", "statsClientsLabel": "Clienți satisfăcuți",
        "statsYearsNumber": "5+", "statsYearsLabel": "Ani pe piață",
        "statsOrdersNumber": "1000+", "statsOrdersLabel": "Comenzi finalizate",
        "statsGuaranteeNumber": "100%", "statsGuaranteeLabel": "Garanție de calitate",

        // Ключи для секции Интро
        "introTitle": "JALUZELE CARE FAC LUMINA CONVENABILĂ PENTRU DUMNEAVOASTRĂ.",
        "introText": "Compania JaluzeleComrat s-a stabilit cu succes pe piața Moldovei. Suntem orientați spre satisfacerea nevoilor și dorințelor fiecărui client. Echipa noastră este formată din profesioniști сu experiență de mulți ani în acest domeniu, iar componența colectivului nostru a rămas practic neschimbată de-a lungul timpului. Oferim cea mai largă gamă de jaluzele, țesături și sisteme de protecție solară din Moldova.",

        "footerCall": "Sunați",
    }
};

let currentLang = localStorage.getItem('siteLang') || 'ru';
const langDisplay = document.getElementById('lang-display');
const langList = document.getElementById('lang-list');

function setLanguage(langCode) {
    if (!translations[langCode]) return;
    currentLang = langCode;
    localStorage.setItem('siteLang', langCode);
    document.documentElement.lang = langCode;

    // 1. Обновляем все элементы с data-i18n-key
    document.querySelectorAll('[data-i18n-key]').forEach(element => {
        const key = element.getAttribute('data-i18n-key');
        const translation = translations[langCode][key];

        if (translation !== undefined) {
            // Обновляем текст, title или content (для мета-тегов)
            if (element.tagName === 'META' && element.name === 'description') {
                element.setAttribute('content', translation);
            } else if (element.tagName === 'TITLE') {
                element.textContent = translation;
            } else if (key === 'heroSubtitle' || key === 'experienceBadge') {
                // heroSubtitle и experienceBadge содержат <br>, используем innerHTML
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        }
    });

    // 2. Обновляем все элементы с data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const translation = translations[langCode][key];
        if (translation !== undefined) {
            element.setAttribute('placeholder', translation);
        }
    });

    // 3. Обновляем отображение текущего языка (ИСПОЛЬЗУЕМ КОРОТКИЙ КЛЮЧ: lang-ru)
    if (langDisplay) {
        // Мы берем короткий ключ, соответствующий текущему языку
        langDisplay.textContent = translations[langCode]['lang-' + langCode];
    }

    // 4. Обновляем активную кнопку в списке
    document.querySelectorAll('.lang-button').forEach(button => {
        button.classList.remove('active');
        if (button.getAttribute('data-lang') === langCode) {
            button.classList.add('active');
        }
    });
}

// Устанавливаем язык при загрузке страницы
setLanguage(currentLang);

// Логика переключения языков
if (langDisplay && langList) {
    // 1. Открытие/закрытие списка при нажатии на текущий язык
    langDisplay.addEventListener('click', () => {
        langList.classList.toggle('open');
    });

    // 2. Закрытие списка при клике вне его
    document.addEventListener('click', (event) => {
        const isClickInside = langDisplay.contains(event.target) || langList.contains(event.target);
        if (!isClickInside && langList.classList.contains('open')) {
            langList.classList.remove('open');
        }
    });
}

// Обработка нажатий кнопок смены языка
document.querySelectorAll('.lang-button').forEach(button => {
    button.addEventListener('click', () => {
        const langCode = button.getAttribute('data-lang');
        if (langCode && langCode !== currentLang) {
            setLanguage(langCode);
            if (langList) {
                langList.classList.remove('open');
            }
        }
    });
});


// ===============================================================
// --- 2. THEME TOGGLE (DARK/LIGHT) с ЭФФЕКТОМ ЖАЛЮЗИ ---
// ===============================================================
(function(){
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    const toggleIcon = document.getElementById('toggle-icon');
    const blindsOverlay = document.getElementById('blinds-overlay');
    const localStorageKey = 'themePreference';

    // УЛУЧШЕННЫЕ ПАРАМЕТРЫ АНИМАЦИИ
    const transitionDuration = 1400; // Общая длительность анимации: 1.4 секунды
    const SLAT_COUNT = 30; // Количество полос
    const SLAT_DELAY_STEP = 0.02; // Шаг задержки для каждой полосы

    function createBlinds(newThemeColor) {
        if (!blindsOverlay) return;
        blindsOverlay.innerHTML = '';

        const slatHeight = 100 / SLAT_COUNT;
        const slats = [];

        for (let i = 0; i < SLAT_COUNT; i++) {
            const slat = document.createElement('div');
            slat.classList.add('blinds-slat');
            slat.style.height = `${slatHeight}%`;
            slat.style.transitionDelay = `${i * SLAT_DELAY_STEP}s`;
            if (newThemeColor) {
                slat.style.backgroundColor = newThemeColor;
            }
            blindsOverlay.appendChild(slat);
            slats.push(slat);
        }
        return slats;
    }

    function updateToggleIcon(isLightMode) {
        if (!toggleIcon) return;
        const lightIconSrc = toggleIcon.getAttribute('data-icon-light');
        const darkIconSrc = toggleIcon.getAttribute('data-icon-dark');
        toggleIcon.src = isLightMode ? darkIconSrc : lightIconSrc;
    }

    // 1. Устанавливаем начальную тему без анимации
    const currentTheme = localStorage.getItem(localStorageKey);
    let isLight = false;

    if (currentTheme === 'light') {
        body.classList.add('light-mode');
        isLight = true;
    }
    updateToggleIcon(isLight);
    createBlinds();

    // 2. Функция запуска анимации и смены темы
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            const nextIsLight = !body.classList.contains('light-mode');
            const nextThemeBgColor = nextIsLight ? '#f8f8f8' : '#111';

            const slats = createBlinds(nextThemeBgColor);

            blindsOverlay.classList.add('active');
            blindsOverlay.classList.add('closing');

            setTimeout(() => {
                isLight = body.classList.toggle('light-mode');
                updateToggleIcon(isLight);
                const newTheme = isLight ? 'light' : 'dark';
                localStorage.setItem(localStorageKey, newTheme);

                // Анимация открытия жалюзи
                slats.forEach((slat, index) => {
                    // Обратный порядок для эффекта закрытия снизу вверх
                    const reverseIndex = SLAT_COUNT - 1 - index;
                    slat.style.transitionDelay = `${reverseIndex * SLAT_DELAY_STEP}s`;
                });
                blindsOverlay.classList.remove('closing');
            }, transitionDuration * 0.4); // Задержка перед началом открытия (40% от общей длительности)

            setTimeout(() => {
                // Очистка оверлея после завершения анимации
                blindsOverlay.classList.remove('active');
                blindsOverlay.innerHTML = '';
            }, transitionDuration);
        });
    }
})();

// ===============================================================
// Mobile menu Logic
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('nav ul');

if (menuToggle && navList) {
    menuToggle.addEventListener('click', () => navList.classList.toggle('open'));
}

// Shrink menu & Bottom CTA logic on scroll (ПЛАВНАЯ ЛОГИКА)
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const bottomCta = document.querySelector('.bottom-cta');

    if (window.scrollY > 50) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }

    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (bottomCta) {
        if (scrollTop + clientHeight >= scrollHeight - 150) {
            bottomCta.classList.add('mini');
        } else {
            bottomCta.classList.remove('mini');
        }
    }
});


// ===============================================================
// --- WHATSAPP MODAL LOGIC (Popover) ---
// ===============================================================

const WHATSAPP_NUMBER = '37368123456'; // Номер телефона в формате страны

const whatsappPopover = document.getElementById('whatsappPopover');
const closeWhatsappPopover = document.getElementById('closeWhatsappPopover');
const whatsappTriggers = document.querySelectorAll('.whatsapp-popover-trigger');
const whatsappForm = document.getElementById('whatsappFormPopover');
const whatsappMessage = document.getElementById('whatsappMessagePopover');
const fixedBottomRight = document.querySelector('.fixed-bottom-right');

function openWhatsappPopoverFunc() {
    if (whatsappPopover) {
        whatsappPopover.classList.add('open');
        // Поднимаем языковой дропдаун, чтобы он не перекрывался попапом
        if (fixedBottomRight) {
            fixedBottomRight.classList.add('lang-above-popover');
        }
    }
}

function closeWhatsappPopoverFunc() {
    if (whatsappPopover) {
        whatsappPopover.classList.remove('open');
        // Опускаем языковой дропдаун на место
        if (fixedBottomRight) {
            fixedBottomRight.classList.remove('lang-above-popover');
        }
    }
}

whatsappTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        openWhatsappPopoverFunc();
    });
});

if (closeWhatsappPopover) {
    closeWhatsappPopover.addEventListener('click', closeWhatsappPopoverFunc);
}

// Обработка формы для перехода в WhatsApp
if (whatsappForm && whatsappMessage) {
    whatsappForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const messageText = whatsappMessage.value.trim() || whatsappMessage.getAttribute('placeholder') || "Здравствуйте! Я пишу с сайта JaluzeleComrat и хотел бы узнать больше о ваших товарах и услугах.";
        const message = encodeURIComponent(messageText);
        const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

        window.open(whatsappLink, '_blank');

        whatsappMessage.value = '';
        closeWhatsappPopoverFunc(); // Закрываем через корректную функцию
    });
}

// --- СЛАЙДЕР ПОРТФОЛИО ---
const slidesWrapper = document.getElementById('works-slider-wrapper');
const prevButton = document.getElementById('prev-slide');
const nextButton = document.getElementById('next-slide');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function updateSlider() {
    if (slidesWrapper && slides.length > 0) {
        // Убедитесь, что слайдер видим и имеет ширину
        const slideWidth = slides[0].clientWidth;
        slidesWrapper.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
    }
}

function nextSlide() {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Закольцовывание
    }
    updateSlider();
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slides.length - 1; // Закольцовывание
    }
    updateSlider();
}

if (prevButton) {
    prevButton.addEventListener('click', prevSlide);
}
if (nextButton) {
    nextButton.addEventListener('click', nextSlide);
}
if (slidesWrapper) {
    window.addEventListener('resize', updateSlider); // Адаптивность
    updateSlider(); // Инициализация
}