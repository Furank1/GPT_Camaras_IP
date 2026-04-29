import { useAuth } from '../auth'

export default function MainMenu() {
  const { logout } = useAuth()

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand">VigilIA</div>
        <nav>
          <button onClick={() => logout()} className="btn-ghost">Cerrar sesión</button>
        </nav>
      </header>

      <div className="app-body">
        <aside className="side-menu">
          <ul>
            <li>Dashboard</li>
            <li>Cámaras</li>
            <li>Eventos</li>
            <li>Usuarios</li>
            <li>Configuración</li>
          </ul>
        </aside>

        <main className="content">
          <h2>Bienvenido al panel</h2>
          <p>Este es el esqueleto del menú principal. Aquí se integrarán las vistas de cámara y eventos.</p>
        </main>
      </div>
    </div>
  )
}
