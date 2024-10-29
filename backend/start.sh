# backend/start.sh
npx knex migrate:latest --knexfile ./knexfile.ts
node dist/index.js
