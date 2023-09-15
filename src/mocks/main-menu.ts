import { TMenu } from '../types';

export const MAIN_MENU: Record<number, TMenu> = {
  1: {
    title: '🚀  Servicios',
    answer: [
      {
        type: 'text',
        content: '*Desarrollo web*  👨🏻‍💻\n\n'
          + '¡Haz realidad tus sueños en línea! Transformo tus visiones en poderosas herramientas digitales '
          + 'Desde sitios web impresionantes hasta sistemas de gestión eficientes, bajo la capa de la última '
          + 'tecnología web.'
      },
      {
        type: 'text',
        content: '*Diseño UI / UX*  🎨\n\n'
          + 'Cautiva a tu audiencia desde el primer vistazo. Mi enfoque en la estética y la funcionalidad '
          + 'asegura que tus usuarios se enamoren de tu plataforma. Convierte visitantes en seguidores leales '
          + 'y aumenta tus conversiones con un diseño UI / UX excepcional.'
      },
      {
        type: 'text',
        content: '*Mantenimiento Web*  👷🏼\n\n'
          + 'La tranquilidad de un sitio web sin interrupciones. No te preocupes por problemas técnicos ni '
          + 'actualizaciones tediosas. Deja que yo me encargue del mantenimiento para que tú puedas centrarte '
          + 'en lo que mejor haces: hacer crecer tu negocio.'
      }
    ],
    options: [2, 3, 4, 5, 6],
  },
  2: {
    title: '👤  Sobre mí',
    answer: [
      {
        type: 'text',
        content: 'Hola, soy Miguel  👋🏻\nAnalista programador computacional y Desarrollador Full Stack. '
          + 'flexible a casi cualquier tecnología, fanático por el diseño y generar productos con niveles de calidad '
          + 'elevados en poco tiempo. Fomento la productividad a mis pares y a los que deseen trabajar de manera colaborativa.'
      }
    ],
    options: [1, 3, 4, 5, 6],
  },
  3: {
    title: '📚  Experiencia',
    answer: [
      {
        type: 'text',
        content: 'Me especializo en:\n'
          + '• Desarrollo frontend y backend  👨🏻‍💻\n'
          + '• Mantenimiento y mejora de productos desarrollados a medida  📈\n'
          + '• Análisis y modelado de soluciones a gran escala  🚀'
      },
      {
        type: 'text',
        content: 'Mi stack de trabajo 🛠️ abarca:\n'
          + '• HTML5\n• CSS3\n• JavaScript\n• Node.js\n• Express\n• React.js\n• Next.js\n• MongoDB\n'
          + '• MySQL\n• Python\n• TypeScript\n• Git\n• Docker\n• Figma\n• Photoshop\n• SQL Oracle\n• Redis\n'
          + '• Angular'
      }
    ],
    options: [1, 2, 4, 5, 6],
  },
  4: {
    title: '📁  Proyectos',
    answer: [
      {
        type: 'text',
        content: 'Te invito a explorar algunos de mis proyectos'
      },
      {
        type: 'image',
        content: {
          url: 'https://raw.githubusercontent.com/MHP24/whatsapp-bot/dev/public/img/abstract-mh.jpg',
          caption: '*Abstract MH*\n'
            + 'Experimenta una experiencia minimalista y abstracta con este increíble Tema de Visual Studio Code (Colores Pasteles).\n'
            + '\n\n*Repositorio GitHub*\nhttps://github.com/MHP24/vsc-abstract-theme'
            + '\n\n*Adquiérelo en*\nhttps://marketplace.visualstudio.com/items?itemName=MiguelHP.Abstract-MH'
        }
      },
      {
        type: 'image',
        content: {
          url: 'https://raw.githubusercontent.com/MHP24/whatsapp-bot/dev/public/img/fcode.jpg',
          caption: 'Portal web interactivo para ejercitar lógica de programación (Soporte para JavaScript, TypeScript y Python)'
            + '\n\n*Repositorio GitHub*\nhttps://github.com/MHP24/f-code'
        }
      },
      {
        type: 'image',
        content: {
          url: 'https://raw.githubusercontent.com/MHP24/whatsapp-bot/dev/public/img/dmiguelo.jpg',
          caption: 'Lleva tu servidor de Discord al siguiente nivel con DMiguelo un bot de entretenimiento y música'
            + '\n\n*Repositorio GitHub*\nhttps://github.com/MHP24/discord-bot'
            + '\n\n*Adquiérelo en*'
            + '\nhttps://discord.com/oauth2/authorize?client_id=1121947695930691674&permissions=0&scope=bot%20applications.commands'
        }
      }
    ],
    options: [1, 2, 3, 5, 6]
  },
  5: {
    title: '📲  Contacto',
    answer: [],
    options: [],
    redirect: {
      origin: 'contact',
      destination: 'contact'
    }
  },
  6: {
    title: '🔳  Salir',
    answer: [],
    options: [],
    redirect: {
      origin: 'exit',
      destination: 'exit'
    }
  }
};