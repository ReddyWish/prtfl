'use client'
import React from 'react';
import styles from './style.module.scss';
import Image from "next/image";
import CloseIcon from "@/icons/CloseIcon";

function ConditionsModal({ closeModal }) {

  return (
    <div className={styles.container}>
      <div className={styles.close} onClick={closeModal}/>
        <div className={styles.modalWrapper}>
          <div className={styles.modal}>
              <div className={styles.content}>
                <div className="terms-conditions">
                  <h1>CONDICIONES GENERALES DE USO</h1>

                  <h2>Información general</h2>
                  <p>
                    Conforme al Art. 10 de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información
                    y
                    de comercio electrónico (LSSI-CE) y la Ley 56/2007, de 28 de diciembre, de Medidas de Impulso de la
                    Sociedad de la Información, se informa que la página de los presentes sitios web: <a
                    href="https://www.heyimilya.com/en">www.heyimilya.com</a>,
                    se ponen al servicio de los usuarios por el profesional autónomo cuyos datos identificativos son:
                  </p>
                  <p>
                    <strong>Responsable:</strong> Ilya Shuvatov<br/>
                    <strong>Correo electrónico:</strong> ilya.shuvatov1@gmail.com<br/>
                    <strong>Teléfono:</strong> +34 674897945
                  </p>

                  <h2>Condiciones generales de uso</h2>
                  <p>
                    El acceso y/o uso de este sitio web de Ilya Shuvatov atribuye la condición de usuario, que acepta,
                    desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas. Las citadas
                    Condiciones
                    serán de aplicación independientemente de las Condiciones Generales de Contratación que, en cada
                    caso,
                    resulten de obligado cumplimiento.
                  </p>
                  <p>
                    Ilya Shuvatov se reserva la facultad de modificar unilateralmente las condiciones y términos de uso
                    de
                    estos sitios web. Cualquier modificación de los mismos se informará convenientemente en la propia
                    web.
                    La entrada en vigor de las modificaciones de las condiciones de uso se producirá desde el momento de
                    su
                    publicación en este sitio web.
                  </p>
                  <p>
                    No se podrá alterar, cambiar, modificar, o adaptar este sitio web. No obstante, Ilya Shuvatov se
                    reserva la facultad de efectuar, en cualquier momento, cuantos cambios, actualizaciones y
                    modificaciones estime convenientes, pudiendo hacer uso de tal facultad en cualquier momento y sin
                    necesidad de previo aviso al usuario. Asimismo, Ilya Shuvatov se reserva el derecho a eliminar,
                    limitar, o impedir el acceso a esta web cuando surjan dificultades técnicas por hechos o
                    circunstancias
                    ajenos a Ilya Shuvatov que, a su criterio disminuyan o anulen los niveles de seguridad adoptados
                    para
                    el adecuado funcionamiento de este sitio web.
                  </p>
                  <p>
                    Está expresamente prohibido utilizar el sitio web de una forma que no esté prevista, alterar y
                    entorpecer su funcionamiento o realizar ningún tipo de abuso de sus funcionalidades y contenidos.
                    Tampoco se permite el acceso a información no autorizada ni la suplantación de identidades.
                  </p>

                  <h2>Información y contenido</h2>
                  <p>
                    La información contenida en el presente sitio web tiene por finalidad facilitar el conocimiento de
                    los
                    distintos productos y servicios ofrecidos por Ilya Shuvatov. Dicha información es la vigente a la
                    fecha
                    de la última actualización y ha de considerarse como meramente indicativa para el usuario.
                  </p>
                  <p>
                    Ilya Shuvatov no será responsable por daños, perjuicios, pérdidas, reclamaciones o gastos,
                    producidos
                    por: interferencias, interrupciones, fallos, omisiones, averías telefónicas, retrasos, bloqueos o
                    desconexiones en el funcionamiento del sistema electrónico, motivadas por deficiencias, sobrecargas
                    y
                    errores en las líneas y redes de telecomunicaciones, o por cualquier otra causa ajena a su control;
                    intromisiones ilegítimas mediante el uso de programas malignos de cualquier tipo y a través de
                    cualquier medio de comunicación, tales como virus informáticos o cualesquiera otros; uso indebido o
                    inadecuado del sitio web; errores de seguridad o navegación producidos por un mal funcionamiento del
                    navegador o por el uso de versiones no actualizadas del mismo.
                  </p>
                  <p>
                    Ilya Shuvatov no se responsabiliza en modo alguno de aquellos contenidos, actividades comerciales,
                    productos y servicios de terceros, que pudiesen visualizarse mediante enlaces electrónicos (links),
                    directa o indirectamente, a través de este sitio web. La presencia de links en el sitio web, salvo
                    manifestación expresa en contrario, tiene una finalidad meramente informativa y en ningún caso
                    supone
                    sugerencia, invitación o recomendación sobre los mismos. Estos enlaces no representan ningún tipo de
                    relación entre Ilya Shuvatov y los particulares o empresas titulares de los sitio webs a los que
                    puede
                    accederse mediante estos enlaces. Ilya Shuvatov se reserva el derecho de retirar de modo unilateral
                    y
                    en cualquier momento los links que aparecen en su sitio web.
                  </p>
                  <p>
                    Ilya Shuvatov no ha intervenido ni tiene vinculación con el contenido de los sitios web que pudieran
                    visualizarse en este sitio web mediante enlaces electrónicos (links) ajenos, los cuales son
                    responsabilidad exclusiva de los particulares o empresas titulares de los sitio webs a los que se
                    acceda en cada caso. Cualquier queja, consulta o reclamación relacionada con el contenido de dichos
                    sitio webs, o al tratamiento de datos personales que vaya a llevarse a cabo, deberá ser dirigido
                    directamente a los particulares o empresas titulares de dichos sitio webs.
                  </p>
                  <p>
                    Ilya Shuvatov no asume responsabilidad por el contenido de cualquier foro o debate en el
                    ciberespacio
                    (chat), boletines o cualquier tipo de transmisiones, que estén vinculadas a este sitio web y
                    cooperará,
                    si es requerida por orden judicial o por las autoridades pertinentes, en la identificación de las
                    personas responsables de aquellos contenidos que violen la ley.
                  </p>
                  <p>
                    Ilya Shuvatov no asume ninguna responsabilidad que pudiera derivarse de la transmisión de
                    información
                    entre usuarios. La responsabilidad de las manifestaciones difundidas en este sitio web es exclusiva
                    de
                    quienes las realizan. Queda prohibido cualquier tipo de transmisión de datos que los usuarios puedan
                    realizar a éste o mediante este sitio web u otros accesos controlados por Ilya Shuvatov, que
                    infrinjan
                    los derechos de propiedad de terceros y/o cuyo contenido sea ilegal, amenazante, difamatorio,
                    obsceno,
                    pornográfico, o la transmisión de cualquier otro material que constituya o incite una conducta que
                    pueda ser considerada un ilícito penal.
                  </p>
                  <p>
                    Ilya Shuvatov se reserva el derecho a impedir o prohibir el acceso a cualquier usuario de Internet
                    que
                    introduzca en este sitio web cualquier contenido contrario a las presentes condiciones generales de
                    uso, la legislación vigente, o inmoral, reservándose el derecho de ejercer las medidas legales que
                    estime oportunas para evitar este tipo de conductas.
                  </p>

                  <h2>Propiedad industrial e intelectual</h2>
                  <p>
                    Ilya Shuvatov es titular de todos los derechos de propiedad intelectual e industrial de su página
                    web,
                    así como de los elementos contenidos en la misma (a título meramente enunciativo, imágenes, sonido,
                    audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño,
                    selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y
                    uso,
                    etc.), o bien de sus licenciantes. Todos los derechos reservados.
                  </p>
                  <p>
                    En virtud de lo dispuesto en los artículos 8 y 32.1, párrafo segundo, de la Ley de Propiedad
                    Intelectual, quedan expresamente prohibidas la reproducción, la distribución y la comunicación
                    pública,
                    incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta
                    página
                    web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización
                    de
                    Ilya Shuvatov. El usuario se compromete a respetar los derechos de Propiedad Intelectual e
                    Industrial
                    titularidad de Ilya Shuvatov. El acceso a este sitio web no otorga al usuario derecho ni titularidad
                    alguna sobre los derechos de propiedad intelectual y/o industrial.
                  </p>
                  <p>
                    No obstante el usuario podrá visualizar los elementos del portal e incluso imprimirlos. Queda
                    prohibido, sin embargo, copiarlos y almacenarlos en el disco duro de su ordenador o en cualquier
                    otro
                    soporte físico incluso cuando sea para su uso personal y privado. El usuario deberá abstenerse de
                    suprimir, alterar, eludir o manipular cualquier dispositivo de protección o sistema de seguridad que
                    estuviera instalado en estos sitios web.
                  </p>
                  <p>
                    Todo uso o modificación de los elementos contenidos en la página web para cualquier otro fin
                    distinto
                    del autorizado en las Condiciones Generales será considerado una violación de las leyes
                    internacionales
                    del “copyright”, que protegen los derechos de autor.
                  </p>
                </div>
              </div>
          </div>
        </div>
    </div>
  );
}

export default ConditionsModal;