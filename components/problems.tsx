const Problems = () => {
  return (
    <div className="h-screen bg-[var(--primary)] text-white">
      <div className="flex flex-col items-center justify-center h-full text-center space-y-8 max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-semibold">
          Si tu negocio tiene estos problemas, estás perdiendo dinero cada día
        </h2>
        <ul className="text-2xl font-light text-gray-300 space-y-2">
          <li>
            ✗ No apareces cuando tus clientes{" "}
            <span className="font-bold text-slate-50">te buscan en Google</span>
          </li>
          <li>
            ✗ Tu web actual se ve{" "}
            <span className="font-bold text-slate-50">
              desactualizada o carga lento
            </span>
          </li>
          <li>
            ✗ No tienes web o la que tienes{" "}
            <span className="font-bold text-slate-50">no genera confianza</span>
          </li>
          <li>
            ✗ Tus competidores aparecen antes que tú{" "}
            <span className="font-bold text-slate-50">en Google Maps</span>
          </li>
        </ul>
        <p className="text-2xl font-semibold bg-green-300 rounded-tl-4xl rounded-br-2xl text-gray-900 px-4 py-4">
          Mientras tanto, tus competidores están captando a TUS clientes
          potenciales.
        </p>
      </div>
    </div>
  );
};

export default Problems;
