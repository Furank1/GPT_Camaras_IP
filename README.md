# GPT Camaras IP

Base inicial del proyecto para captura y procesamiento de video desde cámara IP, con backend FastAPI, frontend React y base de datos PostgreSQL.

## Arranque local

1. Copia `.env.example` a `.env`.
2. Levanta los contenedores con `docker compose up --build`.
3. Abre el backend en `http://localhost:8000/docs`.
4. Abre el frontend en `http://localhost:5173`.

## Estructura

- `backend`: API FastAPI y futura lógica de video, detección y eventos.
- `frontend`: interfaz React creada con Vite.
- `db`: PostgreSQL para persistencia de eventos.