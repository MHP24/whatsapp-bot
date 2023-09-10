import { TMenu } from '../types';

export const MAIN_MENU: Record<number, TMenu> = {
  1: {
    title: 'Servicios',
    answer: [
      {
        type: 'text',
        content: '*Desarrollo web*\n\
          ¡Haz realidad tus sueños en línea! Transformo tus visiones en poderosas herramientas digitales.\
          Desde sitios web impresionantes hasta sistemas de gestión eficientes, bajo la capa de la última \
          tecnología web.'
      },
      {
        type: 'text',
        content: '*Diseño UI / UX*\n\
          Cautiva a tu audiencia desde el primer vistazo. Mi enfoque en la estética y la funcionalidad\
          asegura que tus usuarios se enamoren de tu plataforma. Convierte visitantes en seguidores leales\
          y aumenta tus conversiones con un diseño UI / UX excepcional.'
      },
      {
        type: 'text',
        content: '*Mantenimiento Web*\n\
          La tranquilidad de un sitio web sin interrupciones.No te preocupes por problemas técnicos ni\
          actualizaciones tediosas.Deja que yo me encargue del mantenimiento para que tú puedas centrarte\
          en lo que mejor haces: hacer crecer tu negocio.'
      }
    ],
    options: [2, 3, 4, 5, 6],
  },
  2: {
    title: 'Sobre mi',
    answer: [
      {
        type: 'text',
        content: 'Hola, soy Miguel,\n Analista programador computacional y Desarrollador Full Stack.\
          flexible a casi cualquier tecnología, fanático por el diseño y generar productos con niveles de calidad\
          elevados en poco tiempo. Fomento la productividad a mis pares y a los que deseen trabajar de manera colaborativa.'
      }
    ],
    options: [1, 3, 4, 5, 6],
  },
  3: {
    title: 'Experiencia',
    answer: [
      {
        type: 'text',
        content: 'Me especializo en:\n \
          Desarrollo frontend y backend.\n\
          Mantenimiento y mejora de productos desarrollados a medida.\n\
          Análisis y modelado de soluciones a gran escala.'
      },
      {
        type: 'text',
        content: 'Mi Stack de trabajo abarca:\n \
          • HTML5\n • CSS3\n • JavaScript\n • Node.js\n • Express\n • React.js\n • Next.js\n • MongoDB\n\
          • MySQL\n • Python\n • TypeScript\n • Git\n • Docker\n • Figma\n • Photoshop\n • SQL Oracle\n • Redis\n \
          • Angular'
      }
    ],
    options: [1, 2, 4, 5, 6],
  },
  4: {
    title: 'Proyectos',
    answer: [],
    options: [1, 2, 3, 5, 6]
  },
  5: {
    title: 'Contacto',
    answer: [],
    options: [1, 2, 3, 4, 6],
    redirect: {
      origin: 'contact',
      destination: 'contact'
    }
  },
  6: {
    title: 'Salir',
    answer: [],
    options: [],
    redirect: {
      origin: 'exit',
      destination: 'contact'
    }
  }
};