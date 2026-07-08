                    JCI SBIKHA - PROJECT DOCUMENTATION

# JCI SBIKHA - PROJECT DOCUMENTATION

- **Version**: 1.0.0
- **Date**: 2026
- **Author**: JCI Sbikha Development Team

## Table of Contents

## 1. PROJECT OVERVIEW
## 2. KEY FEATURES
## 3. TECHNOLOGY STACK
## 4. PROJECT STRUCTURE
## 5. SETUP AND INSTALLATION
## 6. AVAILABLE SCRIPTS
## 7. INTERNATIONALIZATION (i18n)
## 8. THEMING
## 9. COMPONENT OVERVIEW
## 10. PAGES
## 11. CONTRIBUTING
## 12. LICENSE
## 13. CONTACT

## 1. PROJECT OVERVIEW

JCI Sbikha is a modern, responsive web platform designed for the Junior Chamber
International (JCI) chapter in Sbikha, Tunisia. This project serves as the
organization's digital hub, showcasing its mission, activities, and community
impact.

The website aims to empower young leaders (aged 18-40) by providing information
about leadership development, community projects, and opportunities for civic
engagement.

The application features a clean, "iOS 26 Liquid Glass" design aesthetic, with
full dark/light mode support and bilingual functionality (English/French).

## 2. KEY FEATURES

DYNAMIC & MODERN UI
- Built with React and a custom "Liquid Glass" design system
- Contemporary, iOS-inspired look and feel
- Smooth animations and transitions

FULLY RESPONSIVE
- Optimized for all devices
- Mobile-first approach
- Touch-friendly interactions

LIGHT & DARK THEME
- User-selectable theme preference
- System preference detection
- Smooth theme transitions

BILINGUAL SUPPORT
- Complete English and French translations
- User-controlled language toggle
- Centralized translation management

MODULAR ARCHITECTURE
- Well-structured React components
- Context providers for state management
- Maintainable and scalable codebase

RICH CONTENT PAGES
- Home: Dynamic landing page with hero, stats, projects, events, testimonials
- About: Organization history, mission, values, team
- Projects: Browsable grid with detailed modal views
- News & Events: Combined news and events listings
- Blog: Inspiring articles on leadership and community
- Gallery: Visual showcase of moments and activities
- Trainings: Leadership and skill development programs
- Join: Interactive membership application form
- Contact: Contact form and organization information
- Partners: Corporate, institutional, and community partners

USER EXPERIENCE
- Sticky header navigation
- Scroll-to-top functionality
- Loading skeletons
- Smooth page transitions
- Accessible components

## 3. TECHNOLOGY STACK

FRONTEND FRAMEWORK
- React 19.2.4

BUILD TOOL
- Create React App 5.0.1

STYLING
- CSS with custom properties
- CSS modules
- CSS animations

ICONS
- React Icons 5.6.0
- FontAwesome 7.2.0

ROUTING
- React Router DOM 7.14.0

HTTP CLIENT
- Axios 1.15.0

STATE MANAGEMENT
- React Context API

UI COMPONENTS
- React Bootstrap 2.10.10

CHARTS
- Chart.js 4.5.1
- Recharts 3.8.1

PWA SUPPORT
- Progressive Web App configuration
- Service worker support

DEPENDENCIES
@fortawesome/free-solid-svg-icons: ^7.2.0
@fortawesome/react-fontawesome: ^3.3.0
@testing-library/dom: ^10.4.1
@testing-library/jest-dom: ^6.9.1
@testing-library/react: ^16.3.2
@testing-library/user-event: ^13.5.0
axios: ^1.15.0
bootstrap: ^5.3.8
chart.js: ^4.5.1
express-session: ^1.19.0
framer-motion: ^12.38.0
passport: ^0.7.0
passport-google-oauth20: ^2.0.0
react: ^19.2.4
react-bootstrap: ^2.10.10
react-chartjs-2: ^5.3.1
react-dom: ^19.2.4
react-icons: ^5.6.0
react-router-dom: ^7.14.0
recharts: ^3.8.1
web-vitals: ^2.1.4
react-scripts: ^5.0.1

## 4. PROJECT STRUCTURE
jci-sbikha/
├── public/
│ ├── JCI_Logo.png
│ ├── manifest.json
│ └── robots.txt
├── src/
│ ├── components/
│ │ ├── Footer/
│ │ │ ├── Footer.css
│ │ │ └── Footer.jsx
│ │ ├── Header/
│ │ │ ├── Header.css
│ │ │ └── Header.jsx
│ │ ├── LegalPages/
│ │ │ ├── LegalPages.css
│ │ │ ├── PrivacyPolicy.jsx
│ │ │ └── TermsOfService.jsx
│ │ ├── Logo/
│ │ │ ├── Logo.css
│ │ │ └── Logo.jsx
│ │ └── ToggleButtons/
│ │ ├── ToggleButtons.css
│ │ └── ToggleButtons.jsx
│ ├── contexts/
│ │ ├── AppContext.jsx
│ │ ├── LanguageContext.jsx
│ │ ├── Languages.js
│ │ ├── LanguageComponents.js
│ │ ├── LanguagePages.js
│ │ ├── ScrollToTop.jsx
│ │ └── ThemeContext.jsx
│ ├── pages/
│ │ ├── About/
│ │ │ ├── About.css
│ │ │ └── About.jsx
│ │ ├── Contact/
│ │ │ ├── Contact.css
│ │ │ └── Contact.jsx
│ │ ├── Error/
│ │ │ ├── Error.css
│ │ │ └── Error.jsx
│ │ ├── Home/
│ │ │ ├── Home.css
│ │ │ └── Home.jsx
│ │ ├── News/
│ │ │ ├── NewsEvents.css
│ │ │ └── NewsEvents.jsx
│ │ ├── Partners/
│ │ │ ├── Partners.css
│ │ │ └── Partners.jsx
│ │ └── Projects/
│ │ ├── Projects.css
│ │ └── Projects.jsx
│ ├── Ressources/ (Note: Typo in original)
│ │ ├── Blog/
│ │ │ ├── Blog.css
│ │ │ └── Blog.jsx
│ │ ├── Gallery/
│ │ │ ├── Gallery.css
│ │ │ └── Gallery.jsx
│ │ ├── Join/
│ │ │ ├── Join.css
│ │ │ └── Join.jsx
│ │ └── Trainings/
│ │ ├── Trainings.css
│ │ └── Trainings.jsx
│ ├── styles/
│ │ ├── App.css
│ │ └── global.css
│ ├── App.jsx
│ ├── App.test.js
│ ├── index.css
│ ├── index.js
│ ├── reportWebVitals.js
│ └── setupTests.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md

## 5. SETUP AND INSTALLATION

PREREQUISITES
- Node.js (v16.14.0 or later)
- npm (v8.0.0 or later) or yarn

INSTALLATION STEPS

## 1. Clone the repository:
git clone https://github.com/[your-username]/jci-sbikha.git
cd jci-sbikha

## 2. Install dependencies:
Using npm:
npm install
Or using yarn:
yarn install

## 3. Start the development server:
Using npm:
npm start
Or using yarn:
yarn start


## 4. Open your browser and navigate to `http://localhost:3000`

The page will automatically reload if you make edits to the source files.

## 6. AVAILABLE SCRIPTS

npm start / yarn start
- Runs the app in development mode
- Opens http://localhost:3000
- Hot reload enabled

npm test / yarn test
- Launches the test runner in interactive watch mode
- Runs Jest tests

npm run build / yarn build
- Builds the app for production to the build folder
- Bundles React in production mode
- Optimizes the build for best performance
- Minifies and generates source maps

npm run eject / yarn eject
- ONE-WAY OPERATION
- Copies all configuration files (webpack, Babel, ESLint, etc.)
- Gives full control over the build process
- Cannot be undone

## 7. INTERNATIONALIZATION (i18n)

LANGUAGES SUPPORTED
- English (en) - Default
- French (fr)

HOW IT WORKS
- LanguageContext manages the current language state
- All translations are centralized in src/contexts/Languages.js
- Translations are organized by component (LanguageComponents.js) and page (LanguagePages.js)

USAGE EXAMPLES

In Components:
```javascript
import { getComponentTranslations } from '../../contexts/Languages';
const t = getComponentTranslations(language, 'footer');

In Pages:

import { getPageTranslations } from '../../contexts/Languages';
const t = getPageTranslations(language, 'home');

Translation Structure:

translations: {
  en: {
    componentName: {
      key: 'value'
    }
  },
  fr: {
    componentName: {
      key: 'valeur'
    }
  }
}

ADDING NEW TRANSLATIONS

Locate the correct key in LanguagePages.js or LanguageComponents.js

Add or modify the translation text

The change will be available immediately

SWITCHING LANGUAGES

Use the language toggle button in the header

Or use the LanguageContext programmatically:

const { toggleLanguage, setEnglish, setFrench } = useLanguage();


THEMING

THEMES

Light Theme - Clean, professional, white/off-white base

Dark Theme - Deep navy immersion, optimized for low-light

HOW IT WORKS

ThemeContext manages the theme state

CSS custom properties (variables) defined in global.css and App.css

Theme classes (light-theme, dark-theme) applied to <body>

System preference detection with fallback

CSS VARIABLES

:root {
  --bg-primary: #f8f9fc;
  --bg-secondary: #ffffff;
  --text-primary: #121245;
  --text-secondary: #2F9DB2;
  --jci-teal-blue: #4CC4D1;
  --jci-bright-cyan: #089DC3;
  /* ... and many more */
}

SWITCHING THEMES

Use the theme toggle button in the floating actions

System preference auto-detection

Or use the ThemeContext programmatically:
const { toggleTheme, setLightTheme, setDarkTheme } = useTheme();

DESIGN SYSTEM

iOS 26 Liquid Glass aesthetic

Refined color palette

Typography system

Spacing scale

Border-radius system

Shadow system

Transition system


COMPONENT OVERVIEW

HEADER COMPONENT
File: components/Header/Header.jsx

Sticky navigation bar

Logo with text

Desktop navigation links

Mobile hamburger menu

Responsive breakpoints

Theme-aware styling

FOOTER COMPONENT
File: components/Footer/Footer.jsx

Site-wide footer

Brand section with logo

Navigation links

Resources links

Contact information

Social media icons

Quality badge

LOGO COMPONENT
File: components/Logo/Logo.jsx

3D spinning JCI Shield logo

Hover effects

Theme-aware (light/dark logo)

Smooth continuous rotation

TOGGLE BUTTONS COMPONENT
File: components/ToggleButtons/ToggleButtons.jsx

Language toggle (EN/FR)

Theme toggle (Light/Dark)

Back to top button

Scroll progress indicator

Floating position

Tooltips on hover

LEGAL PAGES COMPONENTS
File: components/LegalPages/

PrivacyPolicy.jsx - Privacy Policy page

TermsOfService.jsx - Terms of Service page

Shared LegalPages.css styles

Sidebar navigation

Card-based content layout

Fully responsive

CONTEXT PROVIDERS

ThemeContext.jsx

Manages light/dark theme state

System preference detection

localStorage persistence

CSS class management

LanguageContext.jsx

Manages English/French language state

localStorage persistence

Translation lookup

Language switching functions

AppContext.jsx

Main application wrapper

Route management

Layout structure

Provider composition

ScrollToTop.jsx

Scrolls to top on route change

Uses useLocation and useEffect


PAGES

HOME PAGE
Path: /
Files: pages/Home/Home.jsx, pages/Home/Home.css
Features:

Hero section with animated title and stats

Statistics section (members, events, projects)

Mission section with visual

Projects showcase

Events preview

Testimonials

CTA section

Animated on scroll

ABOUT PAGE
Path: /about
Files: pages/About/About.jsx, pages/About/About.css
Features:

Organization history

Mission and vision

Core values

Timeline

Team members

Achievements

Interactive tabs

PROJECTS PAGE
Path: /projects
Files: pages/Projects/Projects.jsx, pages/Projects/Projects.css
Features:

Project categories filtering

Search functionality

Featured projects

Project grid with cards

Project detail modal

Impact statistics

CTA for involvement

NEWS & EVENTS PAGE
Path: /news
Files: pages/News/NewsEvents.jsx, pages/News/NewsEvents.css
Features:

News and events combined

Category filtering

Search functionality

Featured articles

Events with registration

Tabbed view (News/Events)

Newsletter signup

BLOG PAGE
Path: /blog
Files: Ressources/Blog/Blog.jsx, Ressources/Blog/Blog.css
Features:

Article grid with search

Category filtering

Featured articles

Article detail modal

Social sharing

Author information

Newsletter subscription

GALLERY PAGE
Path: /gallery
Files: Ressources/Gallery/Gallery.jsx, Ressources/Gallery/Gallery.css
Features:

Album filtering

Grid layout

Lightbox view

Image metadata

Stats and views

Download functionality

Share options

TRAININGS PAGE
Path: /trainings
Files: Ressources/Trainings/Trainings.jsx, Ressources/Trainings/Trainings.css
Features:

Training categories

Featured programs

Training grid

Detail modal with full info

Registration links

Skills and benefits

Instructor information

JOIN PAGE
Path: /join
Files: Ressources/Join/Join.jsx, Ressources/Join/Join.css
Features:

Membership application form

Benefits section

Testimonials

FAQ section

Form validation

Success feedback

Impact statistics

PARTNERS PAGE
Path: /partners
Files: pages/Partners/Partners.jsx, pages/Partners/Partners.css
Features:

Partner categories

Featured partners

Partner grid with cards

Detail modal

Benefits section

Testimonials

CTA for new partners

CONTACT PAGE
Path: /contact
Files: pages/Contact/Contact.jsx, pages/Contact/Contact.css
Features:

Contact form with validation

Contact information

Map placeholder

FAQ section

Social media links

Success feedback

CTA for joining

ERROR PAGE
Path: *
Files: pages/Error/Error.jsx, pages/Error/Error.css
Features:

Error code display

Error-specific messages

Automatic redirect

Navigation suggestions

Help section

Floating cards

Interactive UI


CONTRIBUTING

We welcome contributions to improve JCI Sbikha!

CONTRIBUTION PROCESS

Fork the Project
Create a copy of the repository under your own GitHub account.

Create your Feature Branch

git checkout -b feature/AmazingFeature

Commit your Changes

git commit -m 'Add some AmazingFeature'

Push to the Branch

git push origin feature/AmazingFeature

Open a Pull Request
Submit a pull request detailing your changes.

GUIDELINES

Ensure your code adheres to the existing style

Use meaningful commit messages

Test your changes thoroughly

Update documentation as needed

CODE STYLE

ESLint configuration included

Prettier recommended

Follow React best practices


LICENSE

This project is currently unlicensed.

For any use or distribution, please contact the JCI Sbikha team directly.


CONTACT

JCI SBIKHA

Email: contact@jcisbikha.tn

Website: https://jcisbikha.tn

Location: Sbikha, Tunisia

DEVELOPMENT TEAM

Lead Developer: RASLEN11

Email: rkalboussi15@gmail.com

Instagram: @raslen.11

SOCIAL MEDIA

Instagram: @jcisbikha

Facebook: /jcisbikha

LinkedIn: /company/jcisbikha

TikTok: @jcisbikha

END OF DOCUMENTATION