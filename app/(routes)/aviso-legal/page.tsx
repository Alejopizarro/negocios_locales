import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal | Negocios Locales Online",
  description:
    "Aviso legal de Negocios Locales Online - Información legal sobre el sitio web y condiciones de uso.",
};

export default function AvisoLegalPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Aviso Legal</h1>

        <div className="prose prose-lg max-w-none text-gray-700">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. DATOS IDENTIFICATIVOS
            </h2>
            <p>
              En cumplimiento con el deber de información dispuesto en la Ley
              34/2002 de Servicios de la Sociedad de la Información y el
              Comercio Electrónico (LSSI-CE) de 11 de julio, se facilitan a
              continuación los siguientes datos de información general de este
              sitio web:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg my-6">
              <p className="font-semibold mb-2">Titular del sitio web:</p>
              <ul className="list-none space-y-1">
                <li>
                  <strong>Nombre:</strong> Alejo Gabriel Pizarro
                </li>
                <li>
                  <strong>Nombre comercial:</strong> Negocios Locales Online
                </li>
                <li>
                  <strong>NIF:</strong> Y9763707Z
                </li>
                <li>
                  <strong>Domicilio:</strong> Barrio Alto 45, 29370 Benaoján,
                  Málaga, España
                </li>
                <li>
                  <strong>Teléfono:</strong> 622 920 681
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:info@negocioslocales.online"
                    className="text-blue-600 hover:underline"
                  >
                    info@negocioslocales.online
                  </a>
                </li>
                <li>
                  <strong>Sitio web:</strong>{" "}
                  <a
                    href="https://negocioslocales.online"
                    className="text-blue-600 hover:underline"
                  >
                    https://negocioslocales.online
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. OBJETO
            </h2>
            <p>
              El prestador, responsable del sitio web, pone a disposición de los
              usuarios el presente documento con el que pretende dar
              cumplimiento a las obligaciones dispuestas en la Ley 34/2002, de
              Servicios de la Sociedad de la Información y del Comercio
              Electrónico (LSSI-CE), así como informar a todos los usuarios del
              sitio web respecto a cuáles son las condiciones de uso del sitio
              web.
            </p>
            <p className="mt-4">
              Toda persona que acceda a este sitio web asume el papel de
              usuario, comprometiéndose a la observancia y cumplimiento riguroso
              de las disposiciones aquí dispuestas, así como a cualquier otra
              disposición legal que fuera de aplicación.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. CONDICIONES DE ACCESO Y UTILIZACIÓN DEL SITIO WEB
            </h2>
            <p>
              El sitio web y sus servicios son de acceso libre y gratuito. No
              obstante, el prestador condiciona la utilización de algunos de los
              servicios ofrecidos en su web a la previa cumplimentación del
              correspondiente formulario.
            </p>
            <p className="mt-4">
              El usuario garantiza la autenticidad y actualidad de todos
              aquellos datos que comunique al prestador y será el único
              responsable de las manifestaciones falsas o inexactas que realice.
            </p>
            <p className="mt-4">
              El usuario se compromete expresamente a hacer un uso adecuado de
              los contenidos y servicios del prestador y a no emplearlos para,
              entre otros:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                Difundir contenidos delictivos, violentos, pornográficos,
                racistas, xenófobos, ofensivos, de apología del terrorismo o, en
                general, contrarios a la ley o al orden público.
              </li>
              <li>
                Introducir en la red virus informáticos o realizar actuaciones
                susceptibles de alterar, estropear, interrumpir o generar
                errores o daños en los documentos electrónicos, datos o sistemas
                físicos y lógicos del prestador o de terceras personas.
              </li>
              <li>
                Intentar acceder a las cuentas de correo electrónico de otros
                usuarios o a áreas restringidas de los sistemas informáticos del
                prestador o de terceros y, en su caso, extraer información.
              </li>
              <li>
                Vulnerar los derechos de propiedad intelectual o industrial, así
                como violar la confidencialidad de la información del prestador
                o de terceros.
              </li>
              <li>Suplantar la identidad de cualquier otro usuario.</li>
              <li>
                Reproducir, copiar, distribuir, poner a disposición de, o
                cualquier otra forma de comunicación pública, transformar o
                modificar los contenidos, a menos que se cuente con la
                autorización del titular de los correspondientes derechos o ello
                resulte legalmente permitido.
              </li>
              <li>
                Recabar datos con finalidad publicitaria y de remitir publicidad
                de cualquier clase y comunicaciones con fines de venta u otras
                de naturaleza comercial sin que medie su previa solicitud o
                consentimiento.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. CONTENIDOS
            </h2>
            <p>
              Los contenidos incorporados en este sitio web han sido elaborados
              e incluidos por el prestador con la finalidad de informar sobre
              los servicios que presta, utilizando para ello fuentes
              consideradas fiables. No obstante, el prestador no puede
              garantizar la ausencia de errores o inexactitudes.
            </p>
            <p className="mt-4">
              El prestador se reserva el derecho de modificar el contenido del
              sitio web sin previo aviso y sin ningún tipo de limitación.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. PROPIEDAD INTELECTUAL E INDUSTRIAL
            </h2>
            <p>
              Todos los contenidos del sitio web (textos, imágenes, marcas,
              gráficos, logotipos, botones, archivos de software, combinaciones
              de colores, así como la estructura, selección, ordenación y
              presentación de sus contenidos) se encuentran protegidos por las
              leyes sobre Propiedad Intelectual e Industrial, quedando prohibida
              su reproducción, distribución, comunicación pública y
              transformación, salvo para uso personal y privado.
            </p>
            <p className="mt-4">
              El prestador no concede ninguna licencia o autorización de uso de
              ninguna clase sobre sus derechos de propiedad intelectual e
              industrial o sobre cualquier otra propiedad o derecho relacionado
              con el sitio web, los servicios o los contenidos del mismo.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. ENLACES (LINKS)
            </h2>
            <p>
              En el caso de que en el sitio web se dispusiesen enlaces o
              hipervínculos hacia otros sitios de Internet, el prestador no
              ejercerá ningún tipo de control sobre dichos sitios y contenidos.
              En ningún caso el prestador asumirá responsabilidad alguna por los
              contenidos de algún enlace perteneciente a un sitio web ajeno, ni
              garantizará la disponibilidad técnica, calidad, fiabilidad,
              exactitud, amplitud, veracidad, validez y constitucionalidad de
              cualquier material o información contenida en ninguno de dichos
              hipervínculos u otros sitios de Internet.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD
            </h2>
            <p>
              El prestador no se hace responsable, en ningún caso, de los daños
              y perjuicios de cualquier naturaleza que pudieran ocasionar, a
              título enunciativo: errores u omisiones en los contenidos, falta
              de disponibilidad del sitio web o la transmisión de virus o
              programas maliciosos o lesivos en los contenidos, a pesar de haber
              adoptado todas las medidas tecnológicas necesarias para evitarlo.
            </p>
            <p className="mt-4">
              El prestador podrá suspender temporalmente, y sin previo aviso, la
              accesibilidad del sitio web con motivo de operaciones de
              mantenimiento, reparación, actualización o mejora.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. LEGISLACIÓN APLICABLE Y JURISDICCIÓN
            </h2>
            <p>
              La relación entre el prestador y el usuario se regirá por la
              normativa española vigente y cualquier controversia se someterá a
              los Juzgados y Tribunales de la ciudad de Málaga.
            </p>
          </section>

          <div className="bg-blue-50 p-6 rounded-lg mt-12">
            <p className="text-sm text-gray-600">
              <strong>Última actualización:</strong> Febrero 2025
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong>Contacto para cuestiones legales:</strong>
              <br />
              Email:{" "}
              <a
                href="mailto:info@negocioslocales.online"
                className="text-blue-600 hover:underline"
              >
                info@negocioslocales.online
              </a>
              <br />
              Teléfono: 622 920 681
              <br />
              Dirección: Barrio Alto 45, 29370 Benaoján, Málaga, España
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
