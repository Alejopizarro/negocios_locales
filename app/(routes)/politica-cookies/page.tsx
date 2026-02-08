import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies | Negocios Locales Online",
  description:
    "Política de cookies de Negocios Locales Online - Información sobre el uso de cookies en el sitio web.",
};

export default function PoliticaCookiesPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Política de Cookies
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. ¿QUÉ SON LAS COOKIES?
            </h2>
            <p>
              Una cookie es un fichero que se descarga en su ordenador al
              acceder a determinadas páginas web. Las cookies permiten a una
              página web, entre otras cosas, almacenar y recuperar información
              sobre los hábitos de navegación de un usuario o de su equipo y,
              dependiendo de la información que contengan y de la forma en que
              utilice su equipo, pueden utilizarse para reconocer al usuario.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. ¿QUÉ TIPOS DE COOKIES UTILIZA ESTE SITIO WEB?
            </h2>
            <p className="mb-4">
              Este sitio web utiliza los siguientes tipos de cookies:
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Cookies de análisis
                </h3>
                <p>
                  Son aquellas que, bien tratadas por nosotros o por terceros,
                  nos permiten cuantificar el número de usuarios y así realizar
                  la medición y análisis estadístico de la utilización que hacen
                  los usuarios del servicio ofertado. Para ello se analiza su
                  navegación en nuestra página web con el fin de mejorar la
                  oferta de productos o servicios que le ofrecemos.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Cookies de publicidad comportamental
                </h3>
                <p>
                  Son aquellas que permiten la gestión, de la forma más eficaz
                  posible, de los espacios publicitarios que, en su caso, el
                  editor haya incluido en una página web, aplicación o
                  plataforma desde la que presta el servicio solicitado. Estas
                  cookies almacenan información del comportamiento de los
                  usuarios obtenida a través de la observación continuada de sus
                  hábitos de navegación, lo que permite desarrollar un perfil
                  específico para mostrar publicidad en función del mismo.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. COOKIES UTILIZADAS EN ESTE SITIO WEB
            </h2>
            <p className="mb-6">
              A continuación se identifican las cookies que están siendo
              utilizadas en este portal así como su tipología y función:
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">
                      Cookie
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">
                      Nombre
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">
                      Propósito
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">
                      Proveedor
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">
                      Tipo
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">
                      Duración
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 border-b">Google Analytics</td>
                    <td className="px-4 py-3 border-b">_ga, _gid, _gat</td>
                    <td className="px-4 py-3 border-b">
                      Cookies de análisis para obtener información estadística
                      sobre la navegación de los usuarios
                    </td>
                    <td className="px-4 py-3 border-b">Google LLC</td>
                    <td className="px-4 py-3 border-b">Analítica</td>
                    <td className="px-4 py-3 border-b">
                      _ga: 2 años
                      <br />
                      _gid: 24 horas
                      <br />
                      _gat: 1 minuto
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-b">Facebook Pixel</td>
                    <td className="px-4 py-3 border-b">_fbp, fr</td>
                    <td className="px-4 py-3 border-b">
                      Cookies de publicidad para medir y optimizar campañas
                      publicitarias y mostrar anuncios relevantes
                    </td>
                    <td className="px-4 py-3 border-b">
                      Meta Platforms Ireland Limited
                    </td>
                    <td className="px-4 py-3 border-b">Publicidad</td>
                    <td className="px-4 py-3 border-b">
                      _fbp: 3 meses
                      <br />
                      fr: 3 meses
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Información adicional sobre las cookies de Google Analytics
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>
                    Google Analytics es un servicio de análisis web prestado por
                    Google, Inc., una compañía de Delaware cuya oficina
                    principal está en 1600 Amphitheatre Parkway, Mountain View
                    (California), CA 94043, Estados Unidos.
                  </li>
                  <li>
                    Google Analytics utiliza cookies para ayudar al sitio web a
                    analizar el uso que hacen los usuarios del sitio web.
                  </li>
                  <li>
                    La información que genera la cookie acerca de su uso del
                    sitio web será directamente transmitida y archivada por
                    Google en los servidores de Estados Unidos.
                  </li>
                  <li>
                    Puede obtener más información en:{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      https://policies.google.com/privacy
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Información adicional sobre las cookies de Facebook Pixel
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>
                    Facebook Pixel es una herramienta de análisis y publicidad
                    proporcionada por Meta Platforms Ireland Limited, 4 Grand
                    Canal Square, Grand Canal Harbour, Dublín 2, Irlanda.
                  </li>
                  <li>
                    Permite medir la eficacia de la publicidad comprendiendo las
                    acciones que las personas realizan en el sitio web.
                  </li>
                  <li>
                    Puede obtener más información en:{" "}
                    <a
                      href="https://www.facebook.com/privacy/explanation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      https://www.facebook.com/privacy/explanation
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. TRANSFERENCIAS INTERNACIONALES
            </h2>
            <p>
              Algunos de los terceros proveedores mencionados pueden realizar
              transferencias internacionales de datos a países fuera del Espacio
              Económico Europeo. En todos los casos, estas transferencias se
              realizan con las garantías adecuadas establecidas en el RGPD,
              incluyendo cláusulas contractuales tipo aprobadas por la Comisión
              Europea o mecanismos de certificación adecuados.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. REVOCACIÓN Y ELIMINACIÓN DE COOKIES
            </h2>
            <p className="mb-4">
              Usted puede permitir, bloquear o eliminar las cookies instaladas
              en su equipo mediante la configuración de las opciones del
              navegador instalado en su ordenador.
            </p>
            <p className="mb-6">
              A continuación puede acceder a la configuración de los navegadores
              web más frecuentes para aceptar, instalar o desactivar las
              cookies:
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Google Chrome
                </h3>
                <p className="text-sm mb-2">
                  Configuración &gt; Mostrar opciones avanzadas &gt; Privacidad
                  &gt; Configuración de contenido
                </p>
                <a
                  href="https://support.google.com/chrome/answer/95647?hl=es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  https://support.google.com/chrome/answer/95647?hl=es
                </a>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Microsoft Internet Explorer
                </h3>
                <p className="text-sm mb-2">
                  Herramientas &gt; Opciones de Internet &gt; Privacidad &gt;
                  Configuración
                </p>
                <a
                  href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  https://support.microsoft.com/es-es/help/17442
                </a>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Mozilla Firefox
                </h3>
                <p className="text-sm mb-2">
                  Herramientas &gt; Opciones &gt; Privacidad &gt; Historial &gt;
                  Configuración Personalizada
                </p>
                <a
                  href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies
                </a>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Apple Safari
                </h3>
                <p className="text-sm mb-2">Preferencias &gt; Seguridad</p>
                <a
                  href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  https://support.apple.com/es-es/guide/safari/sfri11471/mac
                </a>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Herramientas adicionales
              </h3>
              <p className="mb-4">
                Si desea dejar de ser rastreado por Google Analytics en todos
                los sitios web, puede hacerlo en:
              </p>
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://tools.google.com/dlpage/gaoptout
              </a>
              <p className="mt-4 mb-2">
                Si desea conocer más sobre el uso de cookies de Facebook y cómo
                controlarlas, puede visitar:
              </p>
              <a
                href="https://www.facebook.com/policies/cookies/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://www.facebook.com/policies/cookies/
              </a>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. COOKIES DE TERCEROS
            </h2>
            <p>
              Este sitio web utiliza servicios de terceros para recopilar
              información con fines estadísticos y de uso de la web. En
              particular, se utilizan cookies de Google Analytics y Facebook
              Pixel para recopilar esta información. No obstante, ninguno de
              estos servicios tendrá acceso a datos de carácter personal
              identificativos del usuario, solo a información anónima sobre su
              actividad en el sitio web.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. ACEPTACIÓN DE LA POLÍTICA DE COOKIES
            </h2>
            <p>
              Al acceder a este sitio web por primera vez, el usuario verá una
              ventana informativa donde se le informa sobre el uso de cookies y
              donde podrá consultar esta política de cookies. Si el usuario
              consiente el uso de cookies, continua navegando o hace clic en
              algún enlace se entenderá que ha consentido nuestra política de
              cookies y por tanto la instalación de las mismas en su equipo o
              dispositivo.
            </p>
            <p className="mt-4">
              Además de la utilización de nuestras cookies propias, permitimos a
              terceros establecer cookies y acceder a ellas en su ordenador. El
              consentimiento del uso de las cookies de esta empresa está ligado
              a la navegación por este sitio web.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. ACTUALIZACIÓN DE LA POLÍTICA DE COOKIES
            </h2>
            <p>
              El sitio web puede modificar esta Política de Cookies en función
              de exigencias legislativas, reglamentarias, o con la finalidad de
              adaptar dicha política a las instrucciones dictadas por la Agencia
              Española de Protección de Datos, por ello se aconseja a los
              usuarios que la visiten periódicamente.
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
