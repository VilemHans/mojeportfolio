# Osobní webové portfolio – Vilém
**Obor:** Elektrotechnika  
**Škola:** SPŠ, SOŠ a SOU Hradební, Hradec Králové  

Moderní responzivní osobní webové portfolio vytvořené v čistém HTML5, moderním CSS3 a JavaScriptu.

---

## 📋 Splnění technických požadavků

| Požadavek | Stav | Realizace v kódu |
| :--- | :---: | :--- |
| **Responzivní design** | ✅ Splněno | Plně přizpůsobeno pro monitory, tablety i mobilní telefony (`@media (max-width: 992px)`, `@media (max-width: 768px)`, flexbox a CSS grid). |
| **Moderní a přehledný vzhled** | ✅ Splněno | Moderní High-Tech Bento Grid architektura s tématikou elektrotechniky, přehledná navigační lišta, plynulý scroll. |
| **Interaktivní prvky** | ✅ Splněno | **1.** Přepínač tmavého a světlého režimu (Dark/Light mode) s pamětí v `localStorage`.<br>**2.** Interaktivní animované plátno s elektrickými uzly (Canvas).<br>**3.** Filtrování projektů v reálném čase (Všechny / Elektrotechnika / Software).<br>**4.** Kopírování e-mailu do schránky s bublinovou nápovědou.<br>**5.** Interaktivní kontaktní formulář s okamžitou validací. |
| **Neindexování ve vyhledávačích (noindex)** | ✅ Splněno | `<meta name="robots" content="noindex, nofollow">` v hlavičce `index.html` + soubor `robots.txt` blokující procházení roboty. |
| **Základní bezpečnostní pravidla** | ✅ Splněno | Externí odkazy mají `rel="noopener noreferrer"`, ochrana proti XSS (použití `textContent`), validační atributy formuláře (`maxlength`, `autocomplete`), bezpečnostní hlavičky `X-Content-Type-Options: nosniff`. |
| **Zdrojový kód na GitHubu** | ✅ Připraveno | Připravená struktura pro nahrání do vlastního GitHub repozitáře (viz návod níže). |
| **Veřejný odkaz bez přihlášení** | ✅ Připraveno | Návod na spuštění přes **GitHub Pages** (100% zdarma, veřejné pro kohokoliv bez nutnosti přihlášení). |

---

## 🚀 Jak nahrát kód na GitHub a získat veřejný odkaz (GitHub Pages)

### Krok 1: Vytvoření repozitáře na GitHubu
1. Přihlas se na svůj účet na [github.com](https://github.com).
2. Vpravo nahoře klikni na zelené tlačítko **New** (nebo ikonu `+` -> *New repository*).
3. Pojmenuj repozitář (např. `muj-web` nebo `portfolio`).
4. Ponech nastavení na **Public** (veřejné).
5. Klikni na **Create repository**.

### Krok 2: Nahrání souborů
1. Na stránce nového repozitáře klikni na odkaz **uploading an existing file**.
2. Přetáhni myší všechny soubory z této složky (`index.html`, `style.css`, `script.js`, `robots.txt`, `README.md`).
3. Dole klikni na zelené tlačítko **Commit changes**.

### Krok 3: Zapnutí veřejného odkazu (GitHub Pages)
1. V repozitáři přejdi do záložky **Settings** (Ozubené kolečko nahoře).
2. V levém menu klikni na **Pages**.
3. V sekci *Build and deployment* -> *Branch* vyber větev **main** (nebo *master*) a složku **/ (root)**.
4. Klikni na **Save**.
5. Během cca 1 minuty se nahoře objeví tvůj funkční veřejný odkaz:  
   `https://<tve-uzivatelske-jmeno>.github.io/<nazev-repozitare>/`
   *(Tento odkaz funguje pro kohokoliv na internetu bez nutnosti přihlášení!)*

---

## 📂 Struktura souborů
```
├── index.html        # Hlavní HTML struktura (6 sekcí, meta tagy, noindex)
├── style.css         # Bento Grid design, tmavý/světlý režim, responzivita
├── script.js         # Interaktivita, canvas částic, filtrace projektů, validace
├── robots.txt        # Pokyn pro neindexování roboty vyhledávačů
└── README.md         # Dokumentace a technická zpráva k projektu
```

