import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../auth'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [loading, setLoading] = useState(false)
  const auth = useAuth()
  const navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const res = await auth.login({ email, password })
    setLoading(false)
    if (res.ok) navigate('/app')
    else alert('Credenciales inválidas')
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 md:p-12 overflow-x-hidden">
      <main className="relative z-10 w-full max-w-[1440px] flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-32">
        <div className="w-full md:w-1/2 flex flex-col space-y-8">
          <div className="space-y-2">
            <div className="inline-block px-3 py-1 bg-primary text-on-primary font-bold rounded-md text-sm">VigillA</div>
            <p className="text-on-surface-variant text-sm font-medium">Sistema de monitoreo inteligente</p>
          </div>

          <h1 className="font-headline text-4xl lg:text-5xl font-extrabold tracking-tight text-on-surface">
            Detección en tiempo real <span className="text-primary-fixed-dim">con IA</span>
          </h1>

          <div className="space-y-6">
            <p className="text-on-surface-variant leading-relaxed max-w-md">
              Monitorea tus cámaras IP desde un solo panel. Detección automática con YOLOv8 y alertas instantáneas.
            </p>
            <ul className="space-y-4 text-on-surface-variant">
              <li className="flex items-center space-x-2">Streaming multi-cámara vía RTSP</li>
              <li className="flex items-center space-x-2">Alertas en tiempo real con WebSockets</li>
              <li className="flex items-center space-x-2">Registro y consulta de eventos detectados</li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-[460px]">
          <div className="bg-[#1a2027] p-10 rounded-2xl shadow-2xl border border-white/5">
            <div className="mb-8">
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-3">Iniciar sesión</h2>
              <p className="text-sm text-on-surface-variant">Ingresa tus credenciales para acceder al panel</p>
            </div>

            <form className="space-y-6" onSubmit={submit}>
              <div className="space-y-2">
                <label className="text-xs font-medium text-on-surface-variant">Correo electrónico</label>
                <input
                  className="w-full bg-[#0e141a] border border-white/5 rounded-lg py-3 px-4 text-on-surface focus:ring-1 focus:ring-primary/50 outline-none transition-all"
                  placeholder="operador@vigilia.cl"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-on-surface-variant">Contraseña</label>
                <input
                  className="w-full bg-[#0e141a] border border-white/5 rounded-lg py-3 px-4 text-on-surface focus:ring-1 focus:ring-primary/50 outline-none transition-all"
                  placeholder="********"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center cursor-pointer space-x-2">
                  <input className="w-4 h-4 rounded bg-surface-container-highest border-none text-primary focus:ring-0 focus:ring-offset-0" type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
                  <span className="text-on-surface-variant">Mantener sesión iniciada</span>
                </label>
                <a className="text-primary hover:underline" href="#">¿Olvidaste tu contraseña?</a>
              </div>

              <button className="w-full py-4 rounded-lg emerald-gradient text-on-primary font-bold transition-all active:scale-[0.98]" type="submit" disabled={loading}>
                {loading ? 'Ingresando...' : 'Ingresar al panel'}
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-on-surface-variant">¿No tienes cuenta? <a className="text-primary hover:underline" href="#">Solicita acceso</a></p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
