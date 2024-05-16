'use client'
import React from 'react';
import styles from './style.module.scss';

function CookiesModal({ closeModal }) {

  return (
    <div className={styles.container}>
      <div className={styles.close} onClick={closeModal}/>
        <div className={styles.modalWrapper}>
         <div className={styles.modal}>
           <div className={styles.content}>
             <div className="cookie-policy">
               <h1>POLÍTICA DE COOKIES</h1>
               <p>
        <span className="intro">Ilya Shuvatov informo acerca del uso de las cookies en sus página web
        <a href="https://www.heyimilya.com/en">www.heyimilya.com</a></span>
               </p>

               <p>
                 Tu privacidad es importante. Utilizamos cookies propias para mejorar la experiencia de usuario y
                 obtener información estadística sobre tus hábitos de navegación. La ley afirma que podemos almacenar
                 cookies en tu dispositivo si son estrictamente necesarias para el funcionamiento de esta
                 página. <strong>Este sitio web utiliza únicamente cookies técnicas.</strong>
               </p>

               <h2>¿Qué son las cookies?</h2>
               <p>
                 Las cookies son archivos que se pueden descargar en tu equipo a través de las páginas web. Son
                 herramientas que tienen un papel esencial para la prestación de numerosos servicios de la sociedad de
                 la información. Entre otros, permiten a las páginas web almacenar y recuperar información sobre los
                 hábitos de navegación de los usuarios o de sus dispositivos y, dependiendo de la información obtenida,
                 se pueden utilizar para reconocer al usuario y mejorar el servicio ofrecido.
               </p>

               <h2>Tipos de cookies</h2>
               <p><strong>Según quien sea la entidad que gestione el dominio desde donde se envían las cookies y trate
                 los datos que se obtengan</strong></p>
               <ul>
                 <li><strong>Cookies propias:</strong> aquéllas que se envían al equipo terminal del usuario desde un
                   equipo o dominio gestionado por el propio editor y desde el que se presta el servicio solicitado por
                   el usuario.
                 </li>
                 <li><strong>Cookies de terceros:</strong> aquéllas que se envían al equipo terminal del usuario desde
                   un equipo o dominio que no es gestionado por el editor, sino por otra entidad que trata los datos
                   obtenidos a través de las cookies.
                 </li>
               </ul>

               <p>
                 En el caso de que las cookies sean instaladas desde un equipo o dominio gestionado por el propio editor
                 pero la información que se recoja mediante éstas sea gestionada por un tercero, no pueden ser
                 consideradas como cookies propias.
               </p>

               <p><strong>Existe una segunda clasificación según el plazo de tiempo que permanecen almacenadas en el
                 navegador del usuario</strong></p>
               <ul>
                 <li><strong>Cookies de sesión:</strong> diseñadas para recabar y almacenar datos mientras el usuario
                   accede a una página web. Se suelen emplear para almacenar información que solo interesa conservar
                   para la prestación del servicio solicitado por el usuario en una sola ocasión (p.e. una lista de
                   productos adquiridos).
                 </li>
                 <li><strong>Cookies persistentes:</strong> los datos siguen almacenados en el terminal y pueden ser
                   accedidos y tratados durante un periodo definido por el responsable de la cookie, y que puede ir de
                   unos minutos a varios años.
                 </li>
               </ul>

               <p><strong>Por último, existe otra clasificación según su finalidad</strong></p>
               <ul>
                 <li><strong>Cookies técnicas:</strong> permiten al usuario la navegación a través de una página web,
                   plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan
                   como, por ejemplo, controlar el tráfico y la comunicación de datos, identificar la sesión, acceder a
                   partes de acceso restringido, recordar los elementos que integran un pedido, realizar el proceso de
                   compra de un pedido, realizar la solicitud de inscripción o participación en un evento, utilizar
                   elementos de seguridad durante la navegación, almacenar contenidos para la difusión de vídeos o
                   sonido o compartir contenidos a través de redes sociales.
                 </li>
                 <li><strong>Cookies de personalización:</strong> permiten al usuario acceder al servicio con algunas
                   características de carácter general predefinidas en función de una serie de criterios en el terminal
                   del usuario como por ejemplo serian el idioma, el tipo de navegador a través del cual accede al
                   servicio, la configuración regional desde donde accede al servicio, etc.
                 </li>
                 <li><strong>Cookies de análisis:</strong> permiten al responsable de las mismas, el seguimiento y
                   análisis del comportamiento de los usuarios de los sitios web a los que están vinculadas. La
                   información recogida mediante este tipo de cookies se utiliza en la medición de la actividad de los
                   sitios web, aplicación o plataforma y para la elaboración de perfiles de navegación de los usuarios
                   de dichos sitios, aplicaciones y plataformas, con el fin de introducir mejoras en función del
                   análisis de los datos de uso que hacen los usuarios del servicio.
                 </li>
                 <li><strong>Cookies publicitarias:</strong> permiten la gestión, de la forma más eficaz posible, de los
                   espacios publicitarios.
                 </li>
                 <li><strong>Cookies de publicidad comportamental:</strong> almacenan información del comportamiento de
                   los usuarios obtenida a través de la observación continuada de sus hábitos de navegación, lo que
                   permite desarrollar un perfil específico para mostrar publicidad en función del mismo.
                 </li>
                 <li><strong>Cookies de redes sociales externas:</strong> se utilizan para que los visitantes puedan
                   interactuar con el contenido de diferentes plataformas sociales (facebook, youtube, twitter,
                   linkedIn, etc.) y que se generen únicamente para los usuarios de dichas redes sociales. Las
                   condiciones de utilización de estas cookies y la información recopilada se regula por la política de
                   privacidad de la plataforma social correspondiente.
                 </li>
               </ul>

               <h2>Desactivación y eliminación de cookies</h2>
               <p>
                 Existen las opciones de permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la
                 configuración de las opciones del navegador instalado en tu equipo. Al desactivar cookies, algunos de
                 los servicios disponibles podrían dejar de estar operativos. La forma de deshabilitar las cookies es
                 diferente para cada navegador, pero normalmente puede hacerse desde el menú Herramientas u Opciones.
                 También puedes consultar el menú de Ayuda del navegador donde puedes encontrar instrucciones.
               </p>

               <p>
                 Se puede consultar la información técnica de cómo gestionar las cookies según cada navegador en los
                 siguientes enlaces:
               </p>
               <ul>
                 <li><a href="http://windows.microsoft.com/es-es/windows-vista/Block-or-allow-cookies">Microsoft IE o
                   Edge</a></li>
                 <li><a
                   href="http://support.mozilla.org/es/kb/impedir-que-los-sitios-web-guarden-sus-preferencia">Firefox</a>
                 </li>
                 <li><a href="https://support.google.com/accounts/answer/61416?hl=es">Chrome</a></li>
                 <li><a
                   href="http://safari.helpmax.net/es/privacidad-y-seguridad/como-gestionar-las-cookies/">Safari</a>
                 </li>
                 <li><a href="http://help.opera.com/Linux/10.60/es-ES/cookies.html">Opera</a></li>
               </ul>

               <h2>Cookies utilizadas</h2>
               <p>A continuación se identifican las cookies que están siendo utilizadas en este portal así como su
                 tipología y función:</p>
               <ul>
                 <li><strong>SessionHeyimilya</strong>
                   <ul>
                     <li><strong>Duración:</strong> Al cerrar sesión</li>
                     <li><strong>Descripción:</strong> Utilizada para identificar a los visitantes de forma unitaria y
                       evitar spam.
                     </li>
                     <li><strong>Tipo:</strong> Propia</li>
                     <li><strong>Finalidad:</strong> Técnica</li>
                   </ul>
                 </li>
               </ul>

               <h2>Aceptación de la Política de cookies</h2>
               <p>
                 Se asume que aceptas el uso de cookies. No obstante, nuestra información sobre Política de cookies está
                 accesible en la parte inferior de cualquier página del portal con el objeto de que puedas consultarla
                 en cualquier momento.
               </p>
               <p>
                 Ante esta información es posible llevar a cabo las siguientes acciones:
               </p>
               <ul>
                 <li>Seguir navegando por el portal web con lo que se entenderá que aceptas la política de cookies.</li>
                 <li>Dejar de navegar si no estás de acuerdo con la política de cookies.</li>
                 <li>Modificar la configuración de tu navegador adaptándola a tus deseos.</li>
                 <li>Obtener más información sobre qué son las cookies, y conocer cómo nuestra política de cookies te
                   afecta contactándonos directamente.
                 </li>
               </ul>
             </div>
           </div>
         </div>
        </div>
    </div>
  );
}

export default CookiesModal;