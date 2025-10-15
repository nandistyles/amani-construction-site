# Poor-to-Great Forge (MVP scaffold)

This repository contains a scaffold for the "Poor-to-Great Forge" webapp MVP.

Structure:
- server/: Express + Socket.io server with simple in-memory store and workspace APIs.
- client/: Minimal React client (CRA-like) using Tailwind CDN for quick UI.

Notes:
- Intended for Replit deployment. Replace in-memory store with Replit DB or Postgres for persistence.
- Yjs and y-websocket should be integrated later for CRDT-based real-time collaboration.
- AI stubs and PDF export are left as next steps.

Run locally (Windows PowerShell):
1. Install root deps: npm install
2. Install client deps (if you replace with CRA): cd client && npm install react react-dom socket.io-client
3. Start server: npm run server

Tests:
- Run `npm test` to execute Jest tests for utilities.
