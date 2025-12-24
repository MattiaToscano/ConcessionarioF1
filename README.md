# 🏎️ Concessionario Formula 1

Un'applicazione web completa per la gestione di un concessionario di auto da Formula 1, sviluppata con Laravel (PHP) come backend e React come frontend.

## 📋 Descrizione del Progetto

Questo progetto rappresenta un sistema di gestione completo per un concessionario specializzato in auto da Formula 1. L'applicazione permette di:

- **Gestire l'inventario** delle auto da corsa
- **Visualizzare dettagli tecnici** e storici di ogni vettura
- **Gestire clienti** e transazioni
- **Sistema di prenotazioni** e appuntamenti
- **Dashboard amministrativa** per la gestione del business
- **Galleria multimediale** con foto e video delle auto

## 🏗️ Architettura

### Backend (PHP - Laravel API)
- **Framework**: Laravel 11.x
- **Database**: MySQL/PostgreSQL
- **API**: RESTful API JSON
- **Autenticazione**: Laravel Sanctum (token-based)
- **File Storage**: Laravel Storage per immagini e documenti
- **CORS**: Configurato per comunicazione con React

### Frontend (React SPA)
- **Framework**: React 18.x
- **Routing**: React Router DOM
- **State Management**: Context API + useReducer
- **UI Library**: Tailwind CSS + Headless UI
- **HTTP Client**: Axios con interceptors per tokens
- **Sviluppo**: Vite per build veloce

## 🚀 Funzionalità Principali

### 🏎️ Gestione Auto
- Catalogo completo delle auto da Formula 1
- Schede tecniche dettagliate (motore, aerodinamica, peso, etc.)
- Storia e palmares di ogni vettura
- Prezzi e disponibilità
- Galleria fotografica

### 👥 Gestione Clienti
- Registrazione e profilazione clienti
- Storico acquisti e interesse
- Sistema di comunicazione
- Wishlist personalizzate

### 💼 Area Amministrativa
- Dashboard con statistiche vendite
- Gestione inventario
- Gestione ordini e transazioni
- Reports e analytics
- Gestione utenti e permessi

### 📅 Sistema Prenotazioni
- Prenotazione appuntamenti per visite
- Test drive programmati
- Calendario integrato
- Notifiche automatiche

## 🛠️ Installazione

### Prerequisiti
- PHP >= 8.2
- Composer
- Node.js >= 18.x
- MySQL/PostgreSQL
- Git

### Setup Backend (Laravel API)

```bash
# Clono il repository
git clone [repository-url]
cd ConcessionarioF1/backend

# Installo le dipendenze PHP
composer install

# Configuro l'ambiente
cp .env.example .env
php artisan key:generate

# Installo e configuro Sanctum
php artisan install:api
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"

# Configuro il database nel file .env
# Eseguo le migrazioni (include tabelle Sanctum)
php artisan migrate

# Seed del database con auto F1 di esempio
php artisan db:seed

# Avvio il server API
php artisan serve --host=localhost --port=8000
```

### 🔧 Cosa devo fare per il backend:

1. **Creo i modelli** per le auto F1 (Car, Brand, Engine)
2. **Scrivo le migration** per le tabelle del database
3. **Creo i controller** API (CarController, AuthController)
4. **Implemento Sanctum** per autenticazione token-based
5. **Configuro CORS** per comunicazione con React
6. **Scrivo i seeder** con dati auto F1 reali

### Setup Frontend (React)

```bash
# Dalla directory principale del progetto
cd frontend

# Installo dipendenze base (se non già installate)
npm install

# Installo dipendenze aggiuntive per il mio progetto
npm install axios react-router-dom @heroicons/react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Avvio il server di sviluppo
npm run dev
```

### 🎯 Cosa devo fare per il frontend:

1. **Configuro Tailwind** nel file `tailwind.config.js` con i colori F1
2. **Aggiorno** `src/index.css` con le direttive Tailwind
3. **Creo** la struttura cartelle in `src/`:
   - `components/common/` - Header, Footer, Loading
   - `components/home/` - Hero, CarCarousel, FeaturedCars  
   - `components/auth/` - Login, Register
   - `pages/` - Home, Cars, CarDetail, Auth
   - `services/` - api.js per chiamate backend
   - `context/` - AuthContext per stato globale

4. **Primo componente**: Header.jsx con navbar F1
5. **Secondo**: CarCarousel.jsx con carosello auto
6. **Terzo**: Login.jsx con form accesso
7. **Poi**: Homepage che combina tutto

## 📁 Struttura del Progetto

```
ConcessionarioF1/
├── backend/                # Laravel API Backend
│   ├── app/
│   │   ├── Http/Controllers/   # Controller API
│   │   ├── Models/            # Modelli Eloquent
│   │   └── Services/          # Logica di business
│   ├── database/
│   │   ├── migrations/        # Migrazioni database
│   │   └── seeders/          # Seeder per dati di test
│   ├── routes/
│   │   ├── api.php           # Route API
│   │   └── web.php           # Route web
│   └── storage/              # File storage
├── frontend/               # React Frontend Application
│   ├── src/
│   │   ├── components/       # Componenti React
│   │   │   ├── common/       # Componenti riusabili
│   │   │   ├── home/         # Componenti homepage
│   │   │   └── auth/         # Componenti autenticazione
│   │   ├── pages/           # Pagine principali
│   │   ├── services/        # Servizi API
│   │   ├── context/         # Context per stato globale
│   │   └── assets/          # Immagini, icone
│   ├── public/              # Asset statici
│   └── dist/                # Build di produzione
└── README.md               # Documentazione principale
```

## 🎯 Roadmap

### Fase 1 - Setup Base
- [x] Inizializzazione progetto Laravel
- [ ] Setup modelli e migrazioni base
- [ ] Creazione API endpoints principali
- [ ] Setup progetto React

### Fase 2 - Funzionalità Core
- [ ] Autenticazione utenti
- [ ] CRUD auto Formula 1
- [ ] Sistema di ricerca e filtri
- [ ] Interfaccia utente responsive

### Fase 3 - Funzionalità Avanzate
- [ ] Sistema prenotazioni
- [ ] Dashboard amministrativa
- [ ] Sistema di pagamenti
- [ ] Notifiche in tempo reale

### Fase 4 - Ottimizzazione
- [ ] Performance optimization
- [ ] Testing automatizzato
- [ ] Deploy production
- [ ] Monitoring e analytics

## 🤝 Contribuzione

1. Fork del progetto
2. Crea un branch per la feature (`git checkout -b feature/AmazingFeature`)
3. Commit delle modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Push del branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## 📝 Licenza

Questo progetto è sotto licenza MIT. Vedi il file `LICENSE` per i dettagli.

## 📞 Contatti

Per domande o supporto, contattaci a: [email@example.com]

---

*Sviluppato con ❤️ per gli appassionati di Formula 1*