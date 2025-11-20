# TradeBlade Landing Page

Тестове завдання: зверстати промо-лендинг **TradeBlade** за макетом з Figma.

## 🧩 Опис

Односторінковий лендинг з хедером, hero-блоком та адаптивним меню.  
Користувач може залишити e-mail для старту безкоштовного періоду.  
Верстка орієнтована на **desktop 1440px** та **mobile 375px** (mobile-first адаптація).

---

## 🛠 Використані технології

- **HTML5** – семантична розмітка
- **CSS3** – адаптивна верстка, анімації
- **Vanilla JavaScript** – мобільне меню (burger)
- **modern-normalize** – нормалізація стилів
- **Google Fonts** (Inter) – типографіка

---

## 📁 Структура проєкту

```text
.
├── index.html          # Основна сторінка
├── style.css           # Глобальні стилі
├── mobile-menu.js      # Логіка мобільного меню (burger)
└── img/                # Графіка (лого, hero-картинки тощо)


```

🎨 Реалізований функціонал

1. Адаптивна верстка

Desktop-версія (макет 1440px)

Mobile-версія (~375px)

Гнучкі блоки через flex, max-width, медіа-запити @media (max-width: 768px)

Окремі стилі для мобільної hero-секції та меню

2. Хедер та навігація

Логотип (іконка + текст)

Горизонтальне меню з пунктами:

ЦИФРЫ, СДЕЛКИ ОНЛАЙН, О КОМПАНИИ, КАК НАЧАТЬ, ТАРИФЫ, ОТЗЫВЫ, FAQ

Кнопки ВХОД та РЕГИСТРАЦИЯ у правій частині

Хедер закріплений зверху (position: sticky)

3. Мобільне меню (burger)

На mobile меню ховається, з’являється кнопка-burger

При кліку:

додається клас open до списку .nav_list

додається клас active до кнопки .burger

додається клас menu-open до body (для показу нижніх кнопок)

Меню відкривається на всю висоту екрана, пункти розташовані вертикально

При кліку на пункт меню воно автоматично закривається

. Hero-секція

Великий заголовок:

МОМЕНТАЛЬНО КОПИРУЙ СДЕЛКИ ПРОФИ ТРЕЙДЕРОВ

Підзаголовок з описом продукту

Форма:

поле ВАШ E-MAIL

кнопка НАЧАТЬ

текст «5 дней бесплатного пользования»

Фіолетова картка праворуч (зображення) з анімацією «плавання»:

.hero_image {
position: absolute;
top: 159px;
right: -82px;
animation: float 3s ease-in-out infinite;
}

@keyframes float {
0% { transform: translate(20px, 0); }
50% { transform: translate(20px, -8px); }
100% { transform: translate(20px, 0); }
}

✅ Відповідність вимогам тестового завдання

Адаптивна верстка:

реалізовано десктоп та мобільну версію

Анімація елементів:

плавна анімація hero-картки (@keyframes float)

hover-ефекти для кнопок і посилань меню

Використання бібліотек:

modern-normalize для базового ресету стилів

Google Fonts

Чистий HTML/CSS/JS:

Легко перенести в будь-який фреймворк (React/Vue/Next) при потребі

# TradeBlade Landing Page

Test assignment: build a promotional landing page for **TradeBlade** based on a Figma design.

## 🧩 Overview

A single-page responsive landing with a header, hero section, and mobile navigation.  
Users can submit their e-mail to start a free trial.  
The layout is optimized for **desktop (1440px)** and **mobile (375px)** screens.

---

## 🛠 Tech Stack

- **HTML5** — semantic structure
- **CSS3** — responsive layout, animations
- **Vanilla JavaScript** — mobile burger menu
- **modern-normalize** — style reset
- **Google Fonts (Inter)** — typography

---

## 📁 Project Structure

```text
.
├── index.html          # Main page
├── style.css           # Global styles
├── mobile-menu.js      # Burger menu logic
└── img/                # Logos and hero images
```

🎨 Implemented Features

1. Responsive Layout

Fully adapted for desktop and mobile

Flexible blocks using flex, max-width, and media queries

Separate mobile styling for hero and header menu

2. Header & Navigation

Logo (icon + text)

Horizontal navigation:
ЦИФРЫ, СДЕЛКИ ОНЛАЙН, О КОМПАНИИ, КАК НАЧАТЬ, ТАРИФЫ, ОТЗЫВЫ, FAQ

Buttons Вход / Регистрация

Sticky header (position: sticky)

3. Mobile Burger Menu

Desktop menu hidden on screens <768px

Burger button opens a full-screen navigation panel

Closing on:

burger click

menu item click

Additional action buttons appear at the bottom when menu is open

4. Hero Section

Large uppercase headline:

МОМЕНТАЛЬНО КОПИРУЙ СДЕЛКИ ПРОФИ ТРЕЙДЕРОВ

Subtitle with product description

Email form with “Start” CTA

Decorative “5 days free trial” text

Right-side floating card animation:

✅ Requirements Coverage

✔ Fully responsive layout (desktop + mobile)
✔ Animated elements (hero floating card, hover states)
✔ Used external libraries:
— modern-normalize
— Google Fonts
✔ Clean HTML / CSS / JS codebase
✔ Layout closely matches the provided Figma design

🔮 Possible Improvements

Add e-mail validation and backend integration

Add scroll animations (AOS / GSAP)

Implement additional Figma sections: “Statistics”, “Online Deals”, “Pricing”, “Reviews”, “FAQ”
