import {Component, ViewEncapsulation} from '@angular/core';

export interface ProgramItemDescription {
  date: Date;
  id?: number | string;
  stringDate?: string;
  stringTime?: string;
  imgSrc: string;
  content: string;
  contentDetail?: {text?: string, class ?: string, link?: string}[];
  moreInformation?: string;
  title: string;
  time?: Date;
  place?: string;
  link?: string;
  routinkLing?: string;
  category?: {
    title: string;
    link: string;
    more?: string;
  };
  details?: {
    tel: string;
    email: string;
    dienstag: string
    title1?: string;
    title2?: string;
    content1?: any[];
    content2?: string[];
    other?: {
      title?: string;
      events?: { category: string, title: string, image: string }[]
    };
  };
}


@Component({
  templateUrl: 'program.page.html',
  styleUrls: ['program.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProgramPage {

  items: ProgramItemDescription[] = [

    {
      id: 1,
      place: 'Schauspiel Dortmund/Institut, Hilltropwall 15, 44137 Dortmund ',
      link: 'https://goo.gl/maps/GWNg4akPeB4jem1o8',
      routinkLing: '/program-detail/1',
      date: new Date(2021, 10, 5, 20),
      stringDate: 'Di 5 Okt 2021',
      stringTime: '20:00',
      imgSrc: './assets/themenfotos/2021_10_12_.png',
      category: {
        title: 'Sehen',
        link: '(Feminismus in Kuba)'
      },
      details: {
        tel: '0231/50 27 222',
        email: 'telefonverkauf@theaterdo.de',
        dienstag: 'Samstag: 10.00 – 18.30 Uhr'
      },
      title: 'Was bedeutet es, im Kuba des 21. Jahrhunderts Feministin zu sein?',
      content: `Welche Rolle nimmt der Feminismus in einem Land ein, in dem es nur eine legale Frauenorganisation gibt? Dr. Sigrid Y. Palacios Castillo moderiert und wird dieser und weiterer Fragen im Gespräch den Abend mit Sandra Abd'Allah-Alvarez Ramírez, einer dekolonialen, antirassistischen und abolitionistischen kubanischen Afrofeministin nachgehen. `
    },
    {
      id: 2,
      place: 'Dortmunder U/Flux Flax, Leonie-Reygers-Terrasse 44137 Dortmund',
      link: 'https://www.google.de/maps/place/Dortmunder+U+Zentrum+f%C3%BCr+Kunst+und+Kreativit%C3%A4t/@51.5150033,7.4511446,17z/data=!4m12!1m6!3m5!1s0x47b919e8a09192e5:0xd1407c3198ff0b70!2sDortmunder+U+Zentrum+f%C3%BCr+Kunst+und+Kreativit%C3%A4t!8m2!3d51.515!4d7.4533333!3m4!1s0x47b919e8a09192e5:0xd1407c3198ff0b70!8m2!3d51.515!4d7.4533333',
      date: new Date(2021, 10, 8, 18, 30),
      routinkLing: '/program-detail/2',
      stringDate: 'Fr 8 Okt 2021',
      imgSrc: './assets/program/Grup_foto3.JPG',
      category: {
        title: 'Begegnung',
        link: 'Demokratiekunstwerk'
      },

      details: {
        tel: '0231/50 27 222',
        email: 'mail@nullpluseinsfestival.de ',
        dienstag: 'Samstag: 10.00 – 18.30 Uhr'
      },
      title: 'Demokratiekunstwerk des Bildungswerk Vielfalt im Dortmunder U und Expert*innentalk zu der Frage: Welche Zukunftsfragen brauchen wir?',
      content: `Das vom Bildungswerk Vielfalt gestaltete ‚Demokratiekunstwerk‘ bietet keine Antwort auf die Fragen: Wo findet Zukunft statt? Wer wird am Zukunftsprozess beteiligt? Wer gestaltet Zukunft? es soll eine Diskurs eröffnen. Roxanna-Lorraine Witt spricht mit Prof. Dr. Yüksel Ekinci, Cesaire Sielatchom und Ulrike Podhajsky über die Entstehung des Kunstwerks und die diskutiert über die Fragen. `
    },
    {
      id: 10,
      place: 'Schauspiel Dortmund/Institut, Hilltropwall 15, 44137 Dortmund  ',
      link: 'https://goo.gl/maps/GWNg4akPeB4jem1o8',
      routinkLing: '/program-detail/10',
      date: new Date(2021, 10, 12, 20),
      stringDate: 'Di 12 Okt 2021',
      stringTime: '20:00',
      imgSrc: './assets/program/Expert_Musiker_2021_10_12_.jpg',
      category: {
        title: 'Sehen',
        link: 'Von der Unsichtbarkeit'
      },
      details: {
        tel: '0231/50 27 222',
        email: 'telefonverkauf@theaterdo.de',
        dienstag: 'Samstag: 10.00 – 18.30 Uhr'
      },
      title: 'Von der Unsichtbarkeit und der Unterdrückung afrokolumbianischer Musik zum Kulturerbe Kolumbiens',
      content: `Mit der Marimba de Chonta ist das Instrument aus Kolumbien für die ursprüngliche Musik des Kontinents. Sie wurde verboten, verschwiegen und hat sich doch befreit und ist heute immaterielles Weltkulturerbe der UNESCO. Dr. Sigrid Y. Palacios Castillo und der Musiker Ferney L. Segura nehmen uns mit auf eine kulturhistorische und musikalische Reise.`
    },
    {
      id: 11,
      place: 'BierCafé West, Veranstaltungssaal ',
      link: 'https://goo.gl/maps/GWNg4akPeB4jem1o8',
      routinkLing: '/program-detail/11',
      date: new Date(2021, 10, 16, 18),
      stringDate: 'Sa 16 Okt 2021',
      stringTime: '18:00',
      imgSrc: './assets/program/Expert_2021_10_16_LikaTimm.jpg',
      category: {
        title: 'Begegnung',
        link: 'Was ist Männlichkeit heute?'
      },
      details: {
        tel: '0231/50 27 222',
        email: 'telefonverkauf@theaterdo.de',
        dienstag: 'Samstag: 10.00 – 18.30 Uhr'
      },
      title: 'Was ist Männlichkeit heute? Ein Gespräch mit Malcolm Ohanwe, Mudjacka Mvunuku und Luka Timm',
      content: `Mit der Marimba de Chonta ist das Instrument aus Kolumbien für die ursprüngliche Musik des Kontinents. Sie wurde verboten, verschwiegen und hat sich doch befreit und ist heute immaterielles Weltkulturerbe der UNESCO. Dr. Sigrid Y. Palacios Castillo und der Musiker Ferney L. Segura nehmen uns mit auf eine kulturhistorische und musikalische Reise.`
    },
    {
      id: 3,

      place: 'Schauspiel Dortmund/Institut, Hilltropwall 15, 44137 Dortmund ',
      link: 'https://goo.gl/maps/GWNg4akPeB4jem1o8',
      date: new Date(2021, 10, 5, 20),
      routinkLing: '/program-detail/3',
      stringDate: 'Di 19 Okt 2021',
      imgSrc: './assets/program/Kurt_RadikaleZÑrtlichkeit.jpg',
      category: {
        title: 'Zuhören',
        link: 'Radikale Zärtlichkeit – Lesung'
      },
      details: {
        tel: '0231/50 27 222',
        email: 'telefonverkauf@theaterdo.de',
        dienstag: 'Samstag: 10.00 – 18.30 Uhr'
      },
      title: 'Radikale Zärtlichkeit – Lesung mit Şeyda Kurt',
      content: `Welche Rolle nimmt der Feminismus in einem Land ein, in dem es nur eine legale Frauenorganisation gibt? Dr. Sigrid Y. Palacios Castillo moderiert und wird dieser und weiterer Fragen im Gespräch den Abend mit Sandra Abd'Allah-Alvarez Ramírez, einer dekolonialen, antirassistischen und abolitionistischen kubanischen Afrofeministin nachgehen. `
    },
    {
      id: 4,
      place: 'Schauspiel Dortmund/Institut, Hilltropwall 15, 44137 Dortmund ',
      link: 'https://goo.gl/maps/GWNg4akPeB4jem1o8',
      date: new Date(2021, 10, 22, 19),
      routinkLing: '/program-detail/4',
      stringDate: 'Fr 22 Okt 2021',
      imgSrc: './assets/program/Buchcover.jpg',
      category: {
        title: 'Zuhören',
        link: 'Ministerium der Träume – Lesung '
      },
      details: {
        tel: '0231/50 27 222',
        email: 'telefonverkauf@theaterdo.de',
        dienstag: 'Samstag: 10.00 – 18.30 Uhr'
      },
      title: 'Ministerium der Träume – Lesung mit Hengameh Yaghoobifarah',
      content: `Welche Rolle nimmt der Feminismus in einem Land ein, in dem es nur eine legale Frauenorganisation gibt? Dr. Sigrid Y. Palacios Castillo moderiert und wird dieser und weiterer Fragen im Gespräch den Abend mit Sandra Abd'Allah-Alvarez Ramírez, einer dekolonialen, antirassistischen und abolitionistischen kubanischen Afrofeministin nachgehen. `
    },
    {
      id: 5,

      place: 'Schauspiel Dortmund/Institut, Hilltropwall 15, 44137 Dortmund ',
      link: 'https://goo.gl/maps/GWNg4akPeB4jem1o8',
      date: new Date(2021, 10, 5, 19),
      routinkLing: '/program-detail/5',
      stringDate: 'Di 26 Okt 2021',
      imgSrc: './assets/program/EXpert_2021_10_26_JordanneMalena mitUtku.JPG',
      category: {
        title: 'Zuhören',
        link: 'Abyssal Music – Konzert'
      },
      details: {
        tel: '0231/50 27 222',
        email: 'telefonverkauf@theaterdo.de',
        dienstag: 'Samstag: 10.00 – 18.30 Uhr'
      },
      title: 'Abyssal Music – Ein Dialog zwischen östlicher und brasilianischer Musik in der Mitte Europas',
      content: `Welche Rolle nimmt der Feminismus in einem Land ein, in dem es nur eine legale Frauenorganisation gibt? Dr. Sigrid Y. Palacios Castillo moderiert und wird dieser und weiterer Fragen im Gespräch den Abend mit Sandra Abd'Allah-Alvarez Ramírez, einer dekolonialen, antirassistischen und abolitionistischen kubanischen Afrofeministin nachgehen. `
    },
    {
      id: 6,

      place: 'Helmholtz Gymnasium/Aula  ',
      link: 'https://goo.gl/maps/GWNg4akPeB4jem1o8',
      date: new Date(2021, 10, 29, 14),
      routinkLing: '/program-detail/6',
      stringDate: 'Fr 29 Okt 2021',
      imgSrc: './assets/program/Hana.jpg',
      category: {
        title: 'Begegnung',
        link: 'Schülertalk „Nachhaltiger Fischfang“'
      },
      details: {
        tel: '0231/50 27 222',
        email: 'telefonverkauf@theaterdo.de',
        dienstag: 'Samstag: 10.00 – 18.30 Uhr'
      },
      title: 'Schülertalk zum Thema „Nachhaltiger Fischfang“',
      content: `Welche Rolle nimmt der Feminismus in einem Land ein, in dem es nur eine legale Frauenorganisation gibt? Dr. Sigrid Y. Palacios Castillo moderiert und wird dieser und weiterer Fragen im Gespräch den Abend mit Sandra Abd'Allah-Alvarez Ramírez, einer dekolonialen, antirassistischen und abolitionistischen kubanischen Afrofeministin nachgehen. `
    },
    {
      id: 7,

      place: 'Dortmunder U/Kino ',
      link: 'https://goo.gl/maps/GWNg4akPeB4jem1o8',
      date: new Date(2021, 11, 3, 19),
      routinkLing: '/program-detail/7',
      stringDate: 'Mi 3 nov 2021',
      stringTime: '19:00',
      imgSrc: './assets/program/BorisSiyam.jpg',
      category: {
        title: 'Sehen',
        link: 'Erfolgsgeschichten „Nordmarkt Tanten“'
      },
      details: {
        tel: '0231/50 27 222',
        email: 'telefonverkauf@theaterdo.de',
        dienstag: 'Samstag: 10.00 – 18.30 Uhr'
      },
      title: 'Erfolgsgeschichten „Nordmarkt Tanten“',
      content: `Welche Rolle nimmt der Feminismus in einem Land ein, in dem es nur eine legale Frauenorganisation gibt? Dr. Sigrid Y. Palacios Castillo moderiert und wird dieser und weiterer Fragen im Gespräch den Abend mit Sandra Abd'Allah-Alvarez Ramírez, einer dekolonialen, antirassistischen und abolitionistischen kubanischen Afrofeministin nachgehen. `
    },
  ];
}
