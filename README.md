# Unterlagen zur Vorlesung Webprogrammierung

* Vorlesungsmaterialien und Beispielcode
* Übgunsaufgaben
* Generelle Information

## Setup und Vorraussetzungen

* [IDE](https://code.visualstudio.com/)
* [Node](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-installer-to-install-nodejs-and-npm)
* NPM
* [Pexels - Website mit linzenfreien Bildern](https://www.pexels.com/de-de/)
* [MongoDB](https://account.mongodb.com/account/login)
* [Für MAC Nutzer brew als Paketverwaltung](https://brew.sh)


## Nützliche links
- Information zu den HTML Attributen und Elementen
  - [W3School](https://www.w3schools.com/html/default.asp)
  - [MDN](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML)
- [Google style guidelines](https://google.github.io/styleguide/htmlcssguide.html)
- Studenten Vorteile:
  - [GitHub Student Developer Package](https://education.github.com/pack#offers) mit verschieden Vorteilen wir z.B. $50 MongoDB Atlas Guthaben
  - [Microsoft Azure für Studenten mit $100 Gutschrift](https://azure.microsoft.com/de-de/free/students/)
 
## Vue.js

- [Vue.js Beispielprojekt Code](https://github.com/TEL22AT/first-vue-project) aus der Vorlesung
- [Vue.js framework website](https://vuejs.org/) mit [Beispielen und Erklärungen](https://vuejs.org/tutorial/#step-1) zu Vue.js

# Assignments

Abgabedatum für alle Assignments: 07.04.2025\
Gewichtung gesamt: 50% Klausur | 50% Assignments\
Gewichtung Assignments:
- Assignment 1: 4 Punkte
- Assignment 2: 8 Punkte
- Assignment 3: 8 Punkte


## Assignment 1 | HTML + CSS Basics

Erstellen Sie eine Website mit folgenden Pages:
- Welcome Page mit Bild und Beschreibung (z.B. Movie Blog)
  - Header Zeile mit Logo und Nav Bar (Klick auf Logo führt zurück zur Hauptseite)
  - Unterschiedliche HTML Sections (Link in Nav Bar)
  - Tabelle mit Content Auflistung und Link zu einer Detailseite (min. 3 Filme)
  - Kontaktformular (muss keine Funktion haben)
  - Footer mit Impressum
- Detail Page zu mindestens einem der Filme:
  - Überschrift, Story, Streamingdienst-Liste, Bild (mit Link zur Serie)
  - Fußzeile mit Link zurück die Hauptseite

Dabei sollen folgende Technologien eingesetzt werden:
- HTML nav und HTML section
- HTML table
- HTML input
- CSS Grid als Layout für die Pages
- CSS Definitionen in externes Style Sheet auslagern (.css Datei)


## Assignment 2 | Movie Blog Landing Page

Starte ein neues Quasar Projekt mit der Quasar CLI mit dem Titel “Movie Blog” und designe eine Landing Page für einen Movie Blog. Die Seite sollte eine Top Bar, ein Suchfeld und einen Footer im Layout enthalten. Der Seiteninhalt soll verschiedene Filme mit groben Informationen und einem entsprechenden Titelbild in einer oder mehreren Listen enthalten. Desweiteren soll das Durchschnittsrating des jeweiligen Films dargestellt werden. Beispiele für Listen sind z.B. “Top-Rangliste” oder “Trending Movies”. Die Daten zu diesen Filmen sollen aus der API kommen, die im Laufe der Vorlesung programmiert wird (zusammen mit Herrn Joschko). 

## Assignment 3 | Movie Detail Page & Authentication:  

Aufbauend auf dem letzten Assignment:  

Desgine eine “Movie Detail” Page im Quasar Movie Blog, auf der sowohl das Titelbild, als auch weitere Details (z.B. Beschreibung, Schauspieler, etc.) zum Film zu sehen sind. Diese sollte über eine Navigationsmöglichkeit über den VueRouter erreichbar sein. Des Weiteren soll es möglich sein, dem Film eine Sternebewertung zu geben und den Film auf die Watchlist hinzuzufügen (die Bewertungen sowieso die Favoriten Listen sollen wir den jeweiligen Nutzer über die RESTApi über das Backend in der Datenbank abgespeichert werden).  

Implementiere Authentifizierung für den Quasar Movie Blog und schreibe eine kleine “UserProfile” Page, die Informationen zum angemeldeten Benutzer darstellt sowie die Favoriten Filme in einer Tabelle, welche auch die Möglichkeit bietet die Filme aus der Liste zu entfernen sowie eine Notiz hinzuzufügen.
Es soll über eine Navigationsmöglichkeit mit dem VueRouter erreichbar sein soll (nur, wenn der Benutzer angemeldet ist). Es soll im Layout einen “Login” Knopf geben, über den sich ein Benutzer anmelden kann und der auch nur angezeigt werden soll, wenn der Benutzer noch nicht angemeldet ist. Es soll auch einen Logout Knopf geben, der nur angezeigt wird, wenn der Benutzer angemeldet ist.  
    
Grundlage für die Implementierung der Authentifizierung: https://github.com/auth0/auth0-vue  
Domain: dev-4yituajghfjc8wca.us.auth0.com  
Client-ID: t9wzEOtOAx3CyOLSQt8QU39cTrE2Gg1X

## Probeklausur
- [Klausur](https://github.com/TEL22AT/webprogrammierung/blob/main/Vorlesungsmaterial/Uebungsmaterial/ProbeKlausur.pdf)

