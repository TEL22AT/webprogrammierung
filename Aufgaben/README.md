# Aufgaben 

## HTML und CSS Aufgaben

### Übung 1: Grundaufbau

- Erstellen Sie eine Webseite mit den Grundelementen (`<html>`, `<head>`, `<title>`, `<body>`).
- Fügen Sie folgende Elemente ein:
    - **Überschrift**
    - **Paragraph**
    - **Ein Bild**
    - **Paragraph mit anderer Schriftart**

### Übung 2: Top 3 Filmliste

- Erstellen Sie eine Top 3 Filmliste:
    - Rang, Titel, Bild und Streamingplattformen
    - Übersichtlich gestalten → Tabelle verwenden
    - Überschriften sollen sich vom Rest abheben → `<th>`
    - Streaming Plattform Liste sollte eine ungeordnete Liste sein
    - Verlinkung des Filmnamens mit der dazugehörigen Wikipedia-Seite
    - Beispiel: ![Beispiel Aufgabe 2](html-aufgabe-2.png)

### Übung 3: Kontaktformular

- Kontaktformular erstellen:
    - Namensfeld → Required
    - Email Adressfeld → Required
    - Textarea für eine Nachricht
    - Submit und Reset Button

### Übung 4: HTML und CSS Grundgerüst

- Erstelle ein HTML Dokument mit dem Grundgerüst.
- Der HTML Body soll folgende Elemente enthalten:
    1. Ein `<p>` Element mit der Klasse “loremipsum” und einem Text.
    2. Ein `<p>` Element ohne Klasse und einem anderen Text.
    3. Ein `<div>` Element mit der ID “dolorsitamet” und einem Text.
    4. Ein `<div>` Element mit der Klasse “loremipsum” und einem Text.
- Erstelle ein separates CSS Dokument im gleichen Ordner und lade es in der HTML Datei, um die Styles dort zu benutzen. Folgende Regeln sollen implementiert werden:
    - Der Text aller `<p>` Elemente soll blau sein.
    - Der Text aller `<p>` Elemente mit der Klasse “loremipsum” soll rot sein.
    - Der Text des Elements mit der ID “dolorsitamet” soll grün sein.

### Übung 5: CSS Layout und Styling
Erstelle ein HTML Dokument mit Grundgerüst. Der Body soll folgendes enthalten:
    ```html
    <div style="width: 40px; border: 3px solid green;">Dies ist ein Text, der viel zu lang für das div ist.</div>
    ```

1. Schaue dir die Seite im Browser an. Was kann man beobachten?

2. Ändere den CSS Code für das Element so, dass der Text keine automatischen Zeilenumbrüche mehr enthält. Was kann man beobachten?

3. Positioniere das Element mittels CSS relativ zur Größe des Browserfensters 30% nach rechts und 30% nach unten.

4. Füge dem Element einen Innenabstand von 30px hinzu und beobachte was sich ändert.

5. Füge dem Element ein Außenabstand von 30px hinzu und beobachte was sich ändert.

6. Ändere das Element so, dass es eine Scrollleiste bekommt und man durch den Text scrollen kann.


## JavaScript Aufgaben
### Übung: Zufällige Bewertung

- Schreibe eine Funktion, die einen Namen (String) als Parameter akzeptiert und eine zufällige Zahl zwischen 0 und 10 generiert. Je nachdem, ob diese Zahl gerade oder ungerade ist, soll die Funktion den Namen mit dem String " ist ein Depp." oder " ist ein Genie." verkettet und zurückgeben.
- Führe diese Funktion mehrfach hintereinander mit verschiedenen Namen als Argument aus.

#### Tipp für Übung: Zufällige Bewertung

- Zufallszahl zwischen 0 und 10 generieren: `Math.floor(Math.random() * 11);`
- Modulo-Operator für die Ermittlung von gerade/ungerade nutzen
- Beispiel:
    ```javascript
    function zufälligeBewertung(name) {
        const zahl = Math.floor(Math.random() * 11);
        if (zahl % 2 === 0) {
            return name + " ist ein Genie.";
        } else {
            return name + " ist ein Depp.";
        }
    }
    ```


### Fahrzeug und Auto Klassen

Schreibe eine Klasse `Fahrzeug`, die die Eigenschaften `Hersteller`, `Modell` und `Baujahr` und eine Methode zum Anzeigen der Fahrzeugdetails beinhaltet. Schreibe dann eine weitere Klasse `Auto`, die von der Klasse `Fahrzeug` erbt und zusätzlich die Eigenschaft `AnzahlTüren` besitzt. Ebenso muss für diese Klasse die Methode zum Anzeigen der Fahrzeugdetails überschrieben werden. Erstelle dann jeweils ein Objekt der beiden Klassen und lasse die Fahrzeugdetails in der Konsole ausgeben.

### Übung: Module in JavaScript

### Übung: Module in JavaScript

Lege zwei `.js` Dateien an und exportiere eine Variable und eine Funktion aus der einen Datei. Importiere sie in die andere Datei und rufe sie dort auf. Integriere die Datei, in der importiert wird, in eine einfache HTML Datei als script-Block. Rufe die HTML Seite im Browser auf und prüfe in der Konsole, ob die Ausgabe erfolgt ist.

#### Tipp:
- Verwende den HTML script tag mit `type="module"`
- Exportiere mit `export` und importiere mit `import`
- Beispiel:
    ```javascript
    // datei1.js
    export const variable = 'Hallo';
    export function meineFunktion() {
        console.log('Funktion aufgerufen');
    }
    // datei2.js
    import { variable, meineFunktion } from './datei1.js';
    console.log(variable);
    meineFunktion();
    ```
- HTML:
    ```html
    <script type="module" src="datei2.js"></script>
    ```


### Übung: Pokemon API

Erstelle eine Website, die die öffentliche API [PokeAPI](https://pokeapi.co/docs/v2#pokemon-section) konsumiert und eine Liste von Pokemon in Tabellenform darstellt. Dargestellt werden sollte der Name und z.B. die Moves eines Pokemon.

#### Tipps:
- Verwende `fetch` zur Ausführung von API Calls.


### Übung: Kanye REST

Erstelle eine Website, die zufällige Zitate von Kanye West generiert. Verwende dazu die API [Kanye REST](https://api.kanye.rest/). Bei jedem Zitat soll es die Möglichkeit geben, das Zitat per E-Mail an jemanden zu schicken.

#### Tipps:
- Verwende `fetch` zur Ausführung von API Calls.
- Implementiere eine Funktion zum Versenden von E-Mails.

## Vue.js Aufgaben

### Übung: Pokemon API mit Vue.js

Erstelle eine Vue.js Anwendung, die die öffentliche API [PokeAPI](https://pokeapi.co/docs/v2#pokemon-section) konsumiert und eine Liste von Pokemon in Tabellenform darstellt. Dargestellt werden sollte der Name und z.B. die Moves eines Pokemon.

#### Tipps:
- Verwende `fetch` zur Ausführung von API Calls.
- Nutze Vue.js Direktiven wie `v-for` und `v-bind` zur Darstellung der Daten.

### Übung: Kanye REST mit Vue.js

Erstelle eine Vue.js Anwendung, die zufällige Zitate von Kanye West generiert. Verwende dazu die API [Kanye REST](https://api.kanye.rest/). Bei jedem Zitat soll es die Möglichkeit geben, das Zitat per E-Mail an jemanden zu schicken.

#### Tipps:
- Verwende `fetch` zur Ausführung von API Calls.
- Implementiere eine Funktion zum Versenden von E-Mails.
- Nutze Vue.js Direktiven wie `v-on` zur Interaktion mit der Benutzeroberfläche.