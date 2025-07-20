const Cases = () => {
  return (
    <div className="h-screen bg-[var(--primary)] text-white">
      <div className=" flex flex-col items-center justify-center text-center h-full space-y-8 max-w-4xl mx-auto px-4">
        <div className="space-y-4">
          <h2 className="text-4xl font-semibold">
            Resultados reales de nuestros clientes
          </h2>
          <p className="text-xl font-light text-gray-300 italic">
            &quot;En una semana transformaron completamente mi presencia
            online&quot;
          </p>
        </div>
        <ul className="text-2xl font-light text-gray-300 space-y-4">
          <li>
            ✅ Diseño completamente renovado - de web anticuada a{" "}
            <span className="font-bold text-slate-50">imagen profesional</span>
          </li>
          <li>
            ✅ 100% en todos los indicadores de Google -{" "}
            <span className="font-bold text-slate-50">
              velocidad y rendimiento
            </span>{" "}
            perfectos
          </li>
          <li>
            {" "}
            ✅ Cumplimiento legal completo -{" "}
            <span className="font-bold text-slate-50">
              políticas de privacidad y cookies
            </span>{" "}
            actualizadas
          </li>
          <li>
            ✅ Más visibilidad en Google -{" "}
            <span className="font-bold text-slate-50">
              posicionamiento mejorado
            </span>{" "}
            desde el primer día
          </li>
        </ul>
        <div className="space-y-4">
          <p className="text-xl font-semibold bg-green-300 rounded-tl-4xl rounded-br-2xl text-gray-900 px-4 py-4 italic">
            &quot;Ahora mis clientes me encuentran fácilmente y la web transmite
            la profesionalidad de mi negocio&quot;
          </p>
          <p className="text-gray-300 font-light italic">
            Seguros Fuengirola - página web con diseño moderno y carga
            optimizada para captación de leads.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cases;
