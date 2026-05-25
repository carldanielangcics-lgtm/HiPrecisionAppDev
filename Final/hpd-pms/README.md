# Hi-Precision Diagnostics PMS (Front Desk)

React + Vite front-desk patient management system. Nurse and doctor roles have been removed; only **Front Desk** access remains.

## Run

```bash
cd hpd-pms
npm install
npm run dev
```

## Demo login

- Email: `frontdesk@hpd.com`
- Password: `hpd2026`

Requires Supabase Auth user with `profiles.role = 'frontdesk'`.

## Project structure

```
src/
  components/     layout, login, common, modals
  context/        AppContext (state + Supabase)
  data/           seed data, navigation
  lib/            Supabase client
  pages/          Dashboard, Patients, Queue, etc.
  styles/         global.css
  utils/          helpers (badges, normalizers)
```
