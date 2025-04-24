
import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen px-4 py-6">
      <Head>
        <title>FIGA</title>
      </Head>

      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-accent">FIGA</h1>
        <button className="text-white text-xl">🛒</button>
      </header>

      <p className="text-sm text-white mb-4">
        Esto es la forma de conectar contigo las pasiones de un estudiante emprendedor encontrando su camino en la vida. Hecho con cariño para ustedes :)
      </p>

      <div className="flex justify-center gap-4 mb-6">
        <button className="bg-accent text-primary px-4 py-2 rounded font-bold">Ver Catálogo</button>
        <button className="bg-white text-primary px-4 py-2 rounded font-bold">Swipe</button>
      </div>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Impresiones 3D</h2>
        <div className="flex gap-4 overflow-x-scroll pb-2">
          <div className="min-w-[140px] h-[160px] bg-white text-primary p-2 rounded">Producto 1</div>
          <div className="min-w-[140px] h-[160px] bg-white text-primary p-2 rounded">Producto 2</div>
          <div className="min-w-[140px] h-[160px] bg-white text-primary p-2 rounded">Producto 3</div>
        </div>
      </section>
    </div>
  )
}
