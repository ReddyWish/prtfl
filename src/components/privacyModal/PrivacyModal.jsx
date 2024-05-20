"use client";
import React from "react";
import styles from "./style.module.scss";

function PrivacyModal({ closeModal }) {
  return (
    <div className={styles.container}>
      <div className={styles.close} onClick={closeModal} />
      <div className={styles.modalWrapper}>
        <div className={styles.modal}>
          <div className={styles.content}>
            <div className="privacy-policy">
              <h1>POLÍTICA DE PRIVACIDAD</h1>

              <p>
                <strong>Responsable del tratamiento de datos:</strong> Ilya
                Shuvatov
                <br />
                <strong>Correo electrónico:</strong> ilya.shuvatov1@gmail.com
                <br />
                <strong>Teléfono:</strong> +34 674897945
              </p>

              <p>
                Ilya Shuvatov, en aplicación de la normativa vigente en materia
                de protección de datos de carácter personal, informa que los
                datos personales que se recogen a través de los formularios del
                sitio web: www.heyimilya.com, se incluyen en los ficheros
                automatizados específicos de usuarios de los servicios de Ilya
                Shuvatov.
              </p>
              <p>
                La recogida y tratamiento automatizado de los datos de carácter
                personal tienen como finalidad el mantenimiento de la relación
                comercial y el desempeño de tareas de información, formación,
                asesoramiento y otras actividades propias de Ilya Shuvatov.
              </p>
              <p>
                Estos datos únicamente serán cedidos a administraciones públicas
                y entidades colaboradoras con el único objetivo de dar
                cumplimiento a la finalidad anteriormente expuesta.
              </p>
              <p>
                Ilya Shuvatov adopta las medidas proporcionales conforme a la
                actividad y a la tipología de los activos a proteger, para
                garantizar la seguridad, integridad y confidencialidad de los
                datos conforme a lo dispuesto en el Reglamento (UE) 2016/679 del
                Parlamento Europeo y del Consejo, de 27 de abril de 2016,
                relativo a la protección de las personas físicas en lo que
                respecta al tratamiento de datos personales y a la libre
                circulación de los mismos.
              </p>
              <p>
                El usuario podrá en cualquier momento ejercitar los derechos de
                acceso, oposición, rectificación y cancelación reconocidos en el
                citado Reglamento (UE). El ejercicio de estos derechos puede
                realizarlo el propio usuario a través de email a:
                ilya.shuvatov1@gmail.com
              </p>
              <ul>
                <li>Nombre, apellidos y fotocopia del DNI, NIE o pasaporte.</li>
                <li>
                  Petición en la que se concreta la solicitud y en su caso la
                  documentación pertinente.
                </li>
                <li>Correo electrónico a efecto de notificaciones.</li>
                <li>Fecha, firma y sello del cliente si procede.</li>
              </ul>
              <p>
                El usuario manifiesta que todos los datos facilitados por él son
                ciertos y correctos, y se compromete a mantenerlos actualizados,
                comunicando los cambios a Ilya Shuvatov.
              </p>

              <h2>Finalidad del tratamiento de los datos personales</h2>
              <p>¿Con qué finalidad trataremos tus datos personales?</p>
              <p>
                Trataremos tus datos personales recabados a través del sitio
                web:www.heyimilya.com, con las siguientes finalidades:
              </p>
              <ul>
                <li>
                  En caso de contratación de los bienes y servicios ofertados a
                  través de www.heyimilya.com, para mantener la relación
                  contractual, así como la gestión, administración, información,
                  prestación y mejora del servicio.
                </li>
                <li>
                  Envío de información solicitada a través de los formularios
                  dispuestos en www.heyimilya.com
                </li>
                <li>
                  Remitir boletines (newsletters), así como comunicaciones
                  comerciales de promociones y/o publicidad de www.heyimilya.com
                  y del sector.
                </li>
              </ul>
              <p>
                Te recordamos que puedes oponerte al envío de comunicaciones
                comerciales por cualquier vía y en cualquier momento, remitiendo
                un correo electrónico a la dirección indicada anteriormente. Los
                campos de dichos registros son de cumplimentación obligatoria,
                siendo imposible realizar las finalidades expresadas si no se
                aportan esos datos.
              </p>
              <p>
                ¿Por cuánto tiempo se conservan los datos personales recabados?
              </p>
              <p>
                Los datos personales proporcionados se conservarán mientras se
                mantenga la relación comercial o no solicites su supresión y
                durante el plazo por el cuál pudieran derivarse
                responsabilidades legales por los servicios prestados.
              </p>

              <h2>Legitimación</h2>
              <p>
                El tratamiento de tus datos se realiza con las siguientes bases
                jurídicas que legitiman el mismo:
              </p>
              <ul>
                <li>
                  La solicitud de información y/o la contratación de los
                  servicios de Ilya Shuvatov, cuyos términos y condiciones se
                  pondrán a tu disposición en todo caso, de forma previa a una
                  eventual contratación.
                </li>
                <li>
                  El consentimiento libre, específico, informado e inequívoco,
                  en tanto que te informamos poniendo a tu disposición la
                  presente política de privacidad, que tras la lectura de la
                  misma, en caso de estar conforme, puedes aceptar mediante una
                  declaración o una clara acción afirmativa, como el marcado de
                  una casilla dispuesta al efecto.
                </li>
              </ul>
              <p>
                En caso de que no nos facilites tus datos o lo hagas de forma
                errónea o incompleta, no podremos atender tu solicitud,
                resultando del todo imposible proporcionarte la información
                solicitada o llevar a cabo la contratación de los servicios.
              </p>

              <h2>Destinatarios</h2>
              <p>
                Los datos no se comunicarán a ningún tercero ajeno al equipo de
                Ilya Shuvatov, salvo obligación legal.
              </p>
              <p>
                Como encargada de tratamiento, Ilya Shuvatov se presenta como
                responsable de todo tratamiento, habiéndose comprometido al
                cumplimiento de las disposiciones normativas, de aplicación en
                materia de protección de datos, en el momento de su
                contratación.
              </p>

              <h2>Datos recopilados por usuarios de los servicios</h2>
              <p>
                En los casos en que el usuario incluya ficheros con datos de
                carácter personal, en servicios de compartición ajenos a mi
                (Google Drive, Yandex.Disk, etc) o enviados a servicios y
                cuentas de correo no alojadas en www.heyimilya.com, Ilya
                Shuvatov no se hace responsable del incumplimiento por parte del
                usuario del RGPD.
              </p>

              <h2>Retención de datos en conformidad a la LSSI</h2>
              <p>
                Ilya Shuvatov informa de que, como prestadora de servicio de
                alojamiento de datos y en virtud de lo establecido en la Ley
                34/2002 de 11 de julio de Servicios de la Sociedad de la
                Información y de Comercio Electrónico (LSSI), retiene por un
                periodo máximo de 12 meses la información imprescindible para
                identificar el origen de los datos alojados y el momento en que
                se inició la prestación del servicio. La retención de estos
                datos no afecta al secreto de las comunicaciones y solo podrán
                ser utilizados en el marco de una investigación criminal o para
                la salvaguardia de la seguridad pública, poniéndose a
                disposición de los jueces y/o tribunales o del Ministerio que
                así los requiera.
              </p>
              <p>
                La comunicación de datos a las Fuerzas y Cuerpos del Estado se
                hará en virtud a lo dispuesto en la normativa sobre protección
                de datos personales.
              </p>

              <h2>Derechos propiedad intelectual</h2>
              <p>
                Ilya Shuvatov es titular de todos los derechos de autor,
                propiedad intelectual, industrial, "know how" y cuantos otros
                derechos guardan relación con los contenidos del sitio web
                www.heyimilya.com y los servicios ofertados en el mismo, así
                como de los programas necesarios para su implementación y la
                información relacionada.
              </p>
              <p>
                No se permite la reproducción, publicación y/o uso no
                estrictamente privado de los contenidos, totales o parciales,
                del sitio web www.heyimilya.com sin el consentimiento previo y
                por escrito.
              </p>

              <h2>Propiedad intelectual del software</h2>
              <p>
                El usuario debe respetar los programas de terceros puestos a su
                disposición por Ilya Shuvatov, aun siendo gratuitos y/o de
                disposición pública.
              </p>
              <p>
                Ilya Shuvatov dispone de los derechos de explotación y propiedad
                intelectual necesarios del software.
              </p>
              <p>
                El usuario no adquiere derecho alguno o licencia por el servicio
                contratado, sobre el software necesario para la prestación del
                servicio, ni tampoco sobre la información técnica de seguimiento
                del servicio, excepción hecha de los derechos y licencias
                necesarios para el cumplimiento de los servicios contratados y
                únicamente durante la duración de los mismos.
              </p>
              <p>
                Para toda actuación que exceda del cumplimiento del contrato, el
                usuario necesitará autorización por escrito por parte de Ilya
                Shuvatov, quedando prohibido al usuario acceder, modificar,
                visualizar la configuración, estructura y ficheros de los
                servidores propiedad de Ilya Shuvatov, asumiendo la
                responsabilidad civil y penal derivada de cualquier incidencia
                que se pudiera producir en los servidores y sistemas de
                seguridad como consecuencia directa de una actuación negligente
                o maliciosa por su parte.
              </p>

              <h2>Propiedad intelectual de los contenidos alojados</h2>
              <p>
                Se prohíbe el uso contrario a la legislación sobre propiedad
                intelectual de los servicios prestados por Ilya Shuvatov y, en
                particular de:
              </p>
              <ul>
                <li>
                  La utilización que resulte contraria a las leyes españolas o
                  que infrinja los derechos de terceros.
                </li>
                <li>
                  La publicación o la transmisión de cualquier contenido que, a
                  juicio de Ilya Shuvatov y su equipo, resulte violento,
                  obsceno, abusivo, ilegal, racial, xenófobo, difamatorio o que
                  atente contra la libertad política, religiosa, ideológica y
                  sexual de las personas.
                </li>
                <li>
                  Los cracks, números de serie de programas o cualquier otro
                  contenido que vulnere derechos de la propiedad intelectual de
                  terceros.
                </li>
                <li>
                  La recogida y/o utilización de datos personales de otros
                  usuarios sin su consentimiento expreso o contraviniendo lo
                  dispuesto en Reglamento (UE) 2016/679 del Parlamento Europeo y
                  del Consejo, de 27 de abril de 2016, relativo a la protección
                  de las personas físicas en lo que respecta al tratamiento de
                  datos personales y a la libre circulación de los mismos.
                </li>
                <li>
                  La utilización del servidor de correo del dominio y de las
                  direcciones de correo electrónico para el envío de correo
                  masivo no deseado.
                </li>
              </ul>
              <p>
                El usuario tiene toda la responsabilidad sobre comentarios
                publicados, la información transmitida y almacenada, los enlaces
                de hipertexto, las reivindicaciones de terceros y las acciones
                legales en referencia a propiedad intelectual, derechos de
                terceros y protección de menores.
              </p>
              <p>
                El usuario es responsable respecto a las leyes y reglamentos en
                vigor y las reglas que tienen que ver con el funcionamiento del
                servicio online, comercio electrónico, derechos de autor,
                mantenimiento del orden público, así como principios universales
                de uso de Internet.
              </p>
              <p>
                El usuario indemnizará a Ilya Shuvatov y su equipo por los
                gastos que generara la imputación en alguna causa cuya
                responsabilidad fuera atribuible al usuario, incluidos
                honorarios y gastos de defensa jurídica, incluso en el caso de
                una decisión judicial no definitiva.
              </p>

              <h2>Protección de la información alojada</h2>
              <p>
                Ilya Shuvatov realiza copias de seguridad de los contenidos
                alojados en sus servidores, sin embargo no se responsabiliza de
                la pérdida o el borrado accidental de los datos por parte de los
                usuarios. De igual manera, no garantiza la reposición total de
                los datos borrados por los usuarios, ya que los citados datos
                podrían haber sido suprimidos y/o modificados durante el periodo
                del tiempo transcurrido desde la última copia de seguridad.
              </p>
              <p>
                Los servicios ofertados no contemplan el mantenimiento de
                contenidos de los usuarios en los activos informáticos de Ilya
                Shuvatov por lo que no incluyen la reposición de los contenidos
                conservados en las copias de seguridad realizadas por Ilya
                Shuvatov, independientemente del motivo de su pérdida; por ello,
                si fuera necesaria una recuperación por parte del usuario, se
                determinará una tarifa acorde a la complejidad y volumen de la
                recuperación, siempre previa aceptación del usuario.
              </p>
              <p>
                La reposición de datos borrados no está incluida en el precio de
                ninguno de los servicios ofrecidos por Ilya Shuvatov, ya que su
                actividad no está relacionada con el alojamiento de datos.
              </p>

              <h2>Comunicaciones comerciales</h2>
              <p>
                En aplicación de la LSSI, Ilya Shuvatov no enviará
                comunicaciones publicitarias o promocionales por correo
                electrónico u otro medio de comunicación electrónica equivalente
                que previamente no hubieran sido solicitadas o expresamente
                autorizadas por los destinatarios de las mismas.
              </p>
              <p>
                En el caso de usuarios con los que exista una relación
                contractual previa, Ilya Shuvatov sí está autorizada al envío de
                comunicaciones comerciales referentes a productos o servicios
                que sean similares a los que inicialmente fueron objeto de
                contratación con el cliente.
              </p>
              <p>
                En todo caso, el usuario, tras acreditar su identidad, podrá
                solicitar que no se le haga llegar más información comercial a
                través de los canales de Atención al Cliente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyModal;
