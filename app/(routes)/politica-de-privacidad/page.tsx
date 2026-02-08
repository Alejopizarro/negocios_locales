import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Negocios Locales Online",
  description:
    "Política de privacidad de Negocios Locales Online - Información sobre el tratamiento y protección de datos personales.",
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Política de Privacidad
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-lg mb-8">
            De conformidad con lo establecido en el Reglamento (UE) 2016/679,
            del Parlamento Europeo y del Consejo, de 27 de abril de 2016,
            relativo a la protección de las personas físicas en lo que respecta
            al tratamiento de datos personales y a la libre circulación de estos
            datos (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre, de
            Protección de Datos Personales y garantía de los derechos digitales
            (LOPDGDD), el prestador informa a los usuarios del sitio web sobre
            su política respecto del tratamiento y protección de los datos de
            carácter personal de los usuarios que puedan ser recabados durante
            la navegación a través del sitio web.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. RESPONSABLE DEL TRATAMIENTO
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-semibold mb-2">Identidad del responsable:</p>
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
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. FINALIDAD DEL TRATAMIENTO DE DATOS PERSONALES
            </h2>
            <p className="mb-4">
              Los datos personales que el usuario facilite a través del sitio
              web serán tratados de acuerdo con las siguientes finalidades:
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  a) Formulario de contacto
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Finalidad:</strong> Atender las consultas,
                    solicitudes o peticiones realizadas por el usuario a través
                    del formulario de contacto.
                  </li>
                  <li>
                    <strong>Base jurídica:</strong> Consentimiento del
                    interesado y ejecución de medidas precontractuales a
                    petición del interesado.
                  </li>
                  <li>
                    <strong>Destinatarios:</strong> Los datos no se cederán a
                    terceros, salvo obligación legal.
                  </li>
                  <li>
                    <strong>Plazo de conservación:</strong> Los datos se
                    conservarán mientras se mantenga la relación comercial o
                    durante el tiempo necesario para cumplir con las
                    obligaciones legales.
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  b) Gestión comercial y prestación de servicios
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Finalidad:</strong> Gestión de la relación
                    comercial, prestación de servicios de desarrollo web y
                    posicionamiento SEO, facturación y seguimiento de proyectos.
                  </li>
                  <li>
                    <strong>Base jurídica:</strong> Ejecución de un contrato en
                    el que el interesado es parte o aplicación de medidas
                    precontractuales.
                  </li>
                  <li>
                    <strong>Destinatarios:</strong> Los datos pueden almacenarse
                    en Google Sheets para la gestión interna. No se cederán a
                    terceros salvo obligación legal.
                  </li>
                  <li>
                    <strong>Plazo de conservación:</strong> Durante la vigencia
                    de la relación comercial y posteriormente durante el plazo
                    legalmente establecido (mínimo 6 años según normativa fiscal
                    y mercantil).
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  c) Envío de comunicaciones comerciales
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Finalidad:</strong> Envío de información comercial
                    sobre servicios, novedades y ofertas relacionadas con los
                    servicios de Negocios Locales Online.
                  </li>
                  <li>
                    <strong>Base jurídica:</strong> Consentimiento del
                    interesado.
                  </li>
                  <li>
                    <strong>Destinatarios:</strong> No se cederán a terceros.
                  </li>
                  <li>
                    <strong>Plazo de conservación:</strong> Hasta que el usuario
                    revoque su consentimiento.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. LEGITIMACIÓN PARA EL TRATAMIENTO
            </h2>
            <p>La base legal para el tratamiento de los datos personales es:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                El consentimiento del usuario otorgado mediante la aceptación de
                la presente política de privacidad.
              </li>
              <li>La ejecución de un contrato o medidas precontractuales.</li>
              <li>
                El cumplimiento de obligaciones legales aplicables al
                responsable del tratamiento.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. DESTINATARIOS DE LOS DATOS
            </h2>
            <p>
              Los datos personales proporcionados podrán ser conocidos y
              tratados por colaboradores del responsable como encargados del
              tratamiento, respetando en todo momento las obligaciones
              establecidas en el RGPD.
            </p>
            <p className="mt-4">Los datos podrán ser almacenados en:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                <strong>Google Sheets:</strong> Para la gestión administrativa y
                comercial de clientes y proyectos.
              </li>
              <li>
                <strong>Vercel:</strong> Como proveedor de hosting del sitio
                web.
              </li>
            </ul>
            <p className="mt-4">
              No se realizarán transferencias internacionales de datos, salvo
              las realizadas a través de proveedores que cuenten con las
              garantías adecuadas establecidas en el RGPD.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. DERECHOS DEL USUARIO
            </h2>
            <p>
              Cualquier persona tiene derecho a obtener confirmación sobre si
              estamos tratando datos personales que les conciernan, o no.
            </p>
            <p className="mt-4">Las personas interesadas tienen derecho a:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                <strong>Acceder</strong> a sus datos personales.
              </li>
              <li>
                <strong>Solicitar la rectificación</strong> de los datos
                inexactos.
              </li>
              <li>
                <strong>Solicitar su supresión</strong> cuando los datos ya no
                sean necesarios.
              </li>
              <li>
                <strong>Solicitar la limitación</strong> de su tratamiento.
              </li>
              <li>
                <strong>Oponerse</strong> al tratamiento.
              </li>
              <li>
                <strong>Solicitar la portabilidad</strong> de los datos.
              </li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                ¿Cómo ejercer tus derechos?
              </h3>
              <p className="mb-4">
                Los usuarios podrán ejercitar sus derechos mediante comunicación
                por escrito dirigida al responsable con la referencia
                &quot;Protección de Datos&quot;, especificando:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nombre, apellidos del usuario y copia del DNI.</li>
                <li>Petición en que se concreta la solicitud.</li>
                <li>Domicilio a efectos de notificaciones.</li>
                <li>Fecha y firma del solicitante.</li>
                <li>Documentos acreditativos de la petición que formula.</li>
              </ul>
              <p className="mt-4">
                Esta solicitud y todo documento adjunto podrá enviarse a:
              </p>
              <ul className="list-none mt-2 space-y-1">
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
                  <strong>Dirección postal:</strong> Barrio Alto 45, 29370
                  Benaoján, Málaga
                </li>
              </ul>
            </div>

            <p className="mt-6">
              Los usuarios también tienen derecho a presentar una reclamación
              ante la{" "}
              <a
                href="https://www.aepd.es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Agencia Española de Protección de Datos
              </a>{" "}
              si consideran que se ha vulnerado alguno de sus derechos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. MEDIDAS DE SEGURIDAD
            </h2>
            <p>
              El responsable del tratamiento ha adoptado las medidas técnicas y
              organizativas necesarias para garantizar la seguridad de los datos
              de carácter personal y evitar su alteración, pérdida, tratamiento
              o acceso no autorizado, habida cuenta del estado de la tecnología,
              la naturaleza de los datos almacenados y los riesgos a que están
              expuestos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. CARÁCTER OBLIGATORIO O FACULTATIVO DE LA INFORMACIÓN
            </h2>
            <p>
              Los usuarios, mediante la marcación de las casillas
              correspondientes y la entrada de datos en los campos marcados con
              un asterisco (*) en el formulario de contacto o presentados en
              formularios de descarga, aceptan expresamente y de forma libre e
              inequívoca que sus datos son necesarios para atender su petición
              por parte del prestador.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. ACTUALIZACIÓN DE DATOS
            </h2>
            <p>
              Es importante que, para que podamos mantener los datos personales
              actualizados, el usuario informe siempre que haya habido alguna
              modificación en ellos, en caso contrario, no respondemos de la
              veracidad de los mismos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. MODIFICACIÓN DE LA POLÍTICA DE PRIVACIDAD
            </h2>
            <p>
              El responsable se reserva el derecho a modificar su Política de
              Privacidad, de acuerdo a su criterio, o motivado por un cambio
              legislativo, jurisprudencial o en la práctica empresarial. Si se
              introdujera algún cambio en esta política, el nuevo texto será
              publicado en esta misma página web.
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
