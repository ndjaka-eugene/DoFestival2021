import {Component, Inject, OnInit} from '@angular/core';
import {ProgramItemDescription} from '../program/program.page';
import {ActivatedRoute} from '@angular/router';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-program-detail',
  templateUrl: './program-detail.component.html',
  styleUrls: ['./program-detail.component.scss']
})
export class ProgramDetailComponent implements OnInit {
  currentObject: ProgramItemDescription;
  stylePositions = [[103, 103], [31, 31], [26, 52]];
  other = {
      title: 'Weitere Veranstaltungen',
      events: [
        {
          category: 'Begegnung',
          title: 'Demokratiekunstwerk',
          image: './assets/events/2021_10_08_Ulrike_Podhajsky.jpg'
        },
        {
          category: 'Begegnung',
          title: 'Was ist Männlichkeit heute?',
          image: './assets/events/2021_10_16_LukaTimm.jpg'
        },
        {
          category: 'Zuhören',
          title: 'Radikale Zärtlichkeit',
          image: './assets/events/Kurt_Radikale_Zärtlichkeit_Buchcover.jpg'
        },
      ]
  };

  items: ProgramItemDescription[] = [

    {
      place: 'Schauspiel Dortmund/Institut, Hilltropwall 15, 44137 Dortmund ',
      link: 'https://goo.gl/maps/GWNg4akPeB4jem1o8',
      routinkLing: '/program-detail/1',
      id: '1',
      date: new Date(2021, 10, 5, 20),
      stringDate: 'Di 5 Okt 2021',
      stringTime: '20:00',
      imgSrc: './assets/themenfotos/2021_10_12_.png',
      category: {
        title: 'Sehen',
        link: 'Schauspiel Dortmund: Institut',
        more: 'Diestag, 5 Okt 2021, 20:00 im'
      },
      details: {
        tel: '0231/50 27 222',
        email: 'telefonverkauf@theaterdo.de',
        dienstag: 'Samstag: 10.00 – 18.30 Uhr',
        title1: 'Anschrift',
        title2: 'Anmeldung',
        content1: [ 'Schauspiel Dortmund', 'Institut Hilltropwall 15', '44137 Dortmund'],
        content2: [ 'Die Anmeldungerfolgt über ', 'die Ticket-Hotline der Theaterkasse:', 'Tel.: 0231/50 27 222', 'Mail: telefonverkauf@theaterdo.de', 'Di bis Sa: 10.00 – 18.30 Uhr'],
      },
      title: 'Was bedeutet es, im Kuba des 21. Jahrhunderts Feministin zu sein?',
      content: `Welche Rolle nimmt der Feminismus in einem Land ein, in dem es nur eine legale Frauenorganisation gibt? Dr. Sigrid Y. Palacios Castillo moderiert und wird dieser und weiterer Fragen im Gespräch den Abend mit Sandra Abd’Allah-Alvarez Ramírez, einer dekolonialen, antirassistischen und abo-litionistischen kubanischen Afrofeministin nachgehen.`,
      contentDetail: [
        {
          text: 'Welche Rolle nimmt der Feminismus in einem Land ein, in dem es nur eine legale Frauenorganisation gibt? ',
        },
        {
          text: 'Dr. Sigrid Y. Palacios Castillo',
          class: 'category-link color-white',
          link: 'sigrid'
        },
        {
          text: ' moderiert und wird dieser und weiterer Fragen im Gespräch den Abend mit Sandra Abd’Allah-Alvarez Ramírez, einer dekolonialen, antirassistischen und abo-litionistischen kubanischen Afrofeministin nachgehen.'
        }
      ]
    },
    {
      place: 'Dortmunder U/Flux Flax, Leonie-Reygers-Terrasse 44137 Dortmund  ',
      link: 'https://www.google.de/maps/place/Dortmunder+U+Zentrum+f%C3%BCr+Kunst+und+Kreativit%C3%A4t/@51.5150033,7.4511446,17z/data=!4m12!1m6!3m5!1s0x47b919e8a09192e5:0xd1407c3198ff0b70!2sDortmunder+U+Zentrum+f%C3%BCr+Kunst+und+Kreativit%C3%A4t!8m2!3d51.515!4d7.4533333!3m4!1s0x47b919e8a09192e5:0xd1407c3198ff0b70!8m2!3d51.515!4d7.4533333',
      date: new Date(2021, 10, 8, 18, 30),
      routinkLing: '/program-detail/2',
      id: '2',
      stringDate: 'Fr 8 Okt 2021',
      imgSrc: './assets/program/Grup_foto3.JPG',
      category: {
        title: 'Begegnung',
        link: 'Dortmunder U: Flux Inn',
        more: 'Freitag, 8 Okt 2021, 18:30 im'
      },

      details: {
        tel: '0231/50 27 222',
        email: 'mail@nullpluseinsfestival.de ',
        dienstag: 'Samstag: 10.00 – 18.30 Uhr',
        other: {
          title: 'Weitere Veranstaltungen',
        }
      },
      title: 'Demokratiekunstwerk des Bildungswerk Vielfalt im Dortmunder U und Expert*innentalk zu der Frage: Welche Zukunftsfragen brauchen wir? ',
      content: `Das vom Bildungswerk Vielfalt gestaltete ‚Demokratiekunstwerk‘ bietet keine Antwort auf die Fragen: Wo findet Zukunft statt? Wer wird am Zukunftsprozess beteiligt? Wer gestaltet Zukunft? es soll eine Diskurs eröffnen. Roxanna-Lorraine Witt spricht mit Prof. Dr. Yüksel Ekinci, Cesaire Sielatchom und Ulrike Podhajsky über die Entstehung des Kunstwerks und die diskutiert über die Fragen. `,
      contentDetail: [
        {
          text: 'Das vom Bildungswerk Vielfalt gestaltete ‚Demokratiekunstwerk‘ bietet keine Antwort auf die Fragen: Wo findet Zukunft statt? Wer wird am Zukunftsprozess beteiligt? Wer gestaltet Zukunft? es soll eine Diskurs eröffnen. ',
        },
        {
          text: 'Roxanna-Lorraine Witt',
          link: 'roxanna',
          class: 'category-link color-white'
        },
        {
          text: ' spricht mit ',
        },
        {
          text: 'Dr. Yüksel Ekinci',
          link: 'ekinci',
          class: 'category-link color-white'
        },
        {
          text: ', '
        },
        {
          text: 'Cesaire Sielatchom',
          link: 'cesaire',
          class: 'category-link color-white'
        },
        {
          text: ' nd Ulrike Podhajsky über die Entstehung des Kunstwerks und die diskutiert über die Fragen.'
        }
      ],
      moreInformation: 'Aufgrund der begrenzten Teilnahmezahlen bitten wir um Anmeldung unter: mail@nullpluseinsfestival.de Stichwort: Demokratiekunstwerk'
    },
    {
      id: '10',
      place: 'Schauspiel Dortmund/Institut, Hilltropwall 15, 44137 Dortmund  ',
      link: 'https://goo.gl/maps/GWNg4akPeB4jem1o8',
      routinkLing: '/program-detail/10',
      date: new Date(2021, 10, 12, 20),
      stringDate: 'Di 12 Okt 2021',
      stringTime: '20:00',
      imgSrc: './assets/program/Expert_Musiker_2021_10_12_.jpg',
      category: {
        title: 'Sehen',
        link: 'Schauspiel Dortmund/Institut',
        more: 'Dienstag, 12 Okt 2021, 20:00 im'
      },
      details: {
        tel: '0231/50 27 222',
        email: 'telefonverkauf@theaterdo.de',
        dienstag: 'Samstag: 10.00 – 18.30 Uhr',
        title1: 'Die Anmeldung erfolgt über die Ticket-Hotline der Theaterkasse',
        content1: ['Tel.: 0231/50 27 222', 'telefonverkauf@theaterdo.de', 'Dienstag bis Samstag: 10.00 – 18.30 Uhr']
      },
      title: 'Von der Unsichtbarkeit und der Unterdrückung afrokolumbianischer Musik zum Kulturerbe Kolumbiens',
      content: `Mit der Marimba de Chonta ist das Instrument aus Kolumbien für die ursprüngliche Musik des Kontinents. Sie wurde verboten, verschwiegen und hat sich doch befreit und ist heute immaterielles Weltkulturerbe der UNESCO. Dr. Sigrid Y. Palacios Castillo und der Musiker Ferney L. Segura nehmen uns mit auf eine kulturhistorische und musikalische Reise.`,
      contentDetail: [
        {
          text: 'Mit der Marimba de Chonta ist das Instrument aus Kolumbien für die ursprüngliche Musik des Kontinents. Sie wurde verboten, verschwiegen und hat sich doch befreit und ist heute immaterielles Weltkulturerbe der UNESCO. '
        },
        {
          text: 'Dr. Sigrid Y. Palacios Castillo',
          link: 'sigrid'
        },
        {
          text: ' und der Musiker '
        },
        {
          text: 'Ferney L. Segura',
          link: 'segura'
        },
        {
          text: ' nehmen uns mit auf eine kulturhistorische und musikalische Reise.'
        }
      ],
    },
    {
      id: '11',
      place: 'BierCafé West, Veranstaltungssaal ',
      link: 'https://www.google.de/maps/place/BierCaf%C3%A9+West/@51.5113681,7.445349,17z/data=!4m12!1m6!3m5!1s0x47b9195cba48fc11:0x96290b6884c7970!2sBierCaf%C3%A9+West!8m2!3d51.5114418!4d7.4475298!3m4!1s0x47b9195cba48fc11:0x96290b6884c7970!8m2!3d51.5114418!4d7.4475298',
      routinkLing: '/program-detail/11',
      date: new Date(2021, 10, 16, 18),
      stringDate: 'Sa 16 Okt 2021',
      stringTime: '18:00',
      imgSrc: './assets/program/Expert_2021_10_16_LikaTimm.jpg',
      category: {
        title: 'Begegnung',
        link: 'BierCafé West, Veranstaltungssaal',
        more: 'Samstag, 16 Okt 2021, 18:00 im'
      },
      details: {
        tel: '0231/50 27 222',
        email: 'telefonverkauf@theaterdo.de',
        dienstag: 'Samstag: 10.00 – 18.30 Uhr',
        title1: 'Aufgrund der begrenzten Teilnahmezahlen bitten wir um Anmeldung unter:',
        content1: ['mail@nullpluseinsfestival.de', 'Stichwort: Männlichkeit ']
      },
      title: 'Was ist Männlichkeit heute? Ein Gespräch mit Malcolm Ohanwe, Mudjacka Mvunuku und Luka Timm',
      content: `In der Öffentlichkeit wird aktuell viel über stereotype Rollenbilder, fragile und toxische Männlichkeit gesprochen. Aber noch viel zu selten geschieht dies aus einer nicht westlichen Tradition und Perspektive oder der LGBTQ*_Community heraus. Das wollen wir mit unserem Moderator Glen Akama Eseme und den Talkgästen Malcom Ohanwe, Mudjacka Mvunuku und Luka Timm ändern. `,
      contentDetail: [
        {
          text: 'In der Öffentlichkeit wird aktuell viel über stereotype Rollenbilder, fragile und toxische Männlichkeit gesprochen. Aber noch viel zu selten geschieht dies aus einer nicht westlichen Tradition und Perspektive oder der LGBTQ*_Community heraus.Das wollen wir mit unserem Moderator '
        },
        {
          text: 'Glen Akama Eseme',
          link: 'eseme'
        },
        {
          text: ' und den Talkgästen '
        },
        {
          text: 'Malcom Ohanwe, Mudjacka Mvunuku',
          link: 'malcolm'
        },
        {
          text: ' und '
        },
        {
          text: 'Luka Timm ändern',
          link: 'luka'
        }
      ]
    },
    {
      place: 'Schauspiel Dortmund/Institut, Hilltropwall 15, 44137 Dortmund ',
      link: 'https://goo.gl/maps/GWNg4akPeB4jem1o8',
      date: new Date(2021, 10, 5, 20),
      id: '3',
      routinkLing: '/program-detail/3',
      stringDate: 'Di 19 Okt 2021',
      imgSrc: './assets/themenfotos/_DTF0739.jpg',
      category: {
        title: 'Zuhören',
        link: 'Schauspiel Dortmund: Institut'
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
      place: 'Schauspiel Dortmund/Institut, Hilltropwall 15, 44137 Dortmund ',
      link: 'https://goo.gl/maps/GWNg4akPeB4jem1o8',
      date: new Date(2021, 10, 5, 19),
      id: '4',
      routinkLing: '/program-detail/4',
      stringDate: 'Mo 22 Okt 2021',
      imgSrc: './assets/themenfotos/_DTF0739.jpg',
      category: {
        title: 'Zuhören',
        link: 'Literaturhaus Dortmund'
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
      place: 'Schauspiel Dortmund/Institut, Hilltropwall 15, 44137 Dortmund ',
      link: 'https://goo.gl/maps/GWNg4akPeB4jem1o8',
      date: new Date(2021, 10, 5, 19),
      id: '5',
      routinkLing: '/program-detail/5',
      stringDate: 'Fr 26 Okt 2021',
      imgSrc: './assets/themenfotos/_DTF0739.jpg',
      category: {
        title: 'Zuhören',
        link: 'Jazzclub Domici'
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
      place: 'Schauspiel Dortmund/Institut, Hilltropwall 15, 44137 Dortmund ',
      link: 'https://goo.gl/maps/GWNg4akPeB4jem1o8',
      date: new Date(2021, 10, 5, 14),
      id: '6',
      routinkLing: '/program-detail/6',
      stringDate: 'Mo 29 Okt 2021',
      imgSrc: './assets/themenfotos/_DTF0739.jpg',
      category: {
        title: 'Begegnung',
        link: 'Helmholtz Gymnasium: Aula'
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
      place: 'Schauspiel Dortmund/Institut, Hilltropwall 15, 44137 Dortmund ',
      link: 'https://goo.gl/maps/GWNg4akPeB4jem1o8',
      date: new Date(2021, 10, 5, 20),
      routinkLing: '/program-detail/7',
      id: '7',
      stringDate: 'Di 5 Okt 2021',
      imgSrc: './assets/themenfotos/_DTF0739.jpg',
      category: {
        title: 'Sehen',
        link: 'Schauspiel Dortmund/Institut'
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
      place: 'Schauspiel Dortmund/Institut, Hilltropwall 15, 44137 Dortmund ',
      link: 'https://goo.gl/maps/GWNg4akPeB4jem1o8',
      date: new Date(2021, 10, 5, 20),
      id: '8',
      routinkLing: '/program-detail/8',
      stringDate: 'Di 5 Okt 2021',
      imgSrc: './assets/themenfotos/_DTF0739.jpg',
      category: {
        title: 'Sehen',
        link: 'Schauspiel Dortmund/Institut'
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
      place: 'Schauspiel Dortmund/Institut, Hilltropwall 15, 44137 Dortmund ',
      link: 'https://goo.gl/maps/GWNg4akPeB4jem1o8',
      date: new Date(2021, 10, 5, 19),
      id: '9',
      routinkLing: '/program-detail/9',
      stringDate: 'Fr 3 Nov 2021',
      imgSrc: './assets/themenfotos/_DTF0739.jpg',
      category: {
        title: 'Sehen',
        link: 'Dortmunder U: Kino'
      },
      details: {
        tel: '0231/50 27 222',
        email: 'telefonverkauf@theaterdo.de',
        dienstag: 'Samstag: 10.00 – 18.30 Uhr'
      },
      title: 'Erfolgsgeschichten „Nordmarkt Tanten“',
      content: `Welche Rolle nimmt der Feminismus in einem Land ein, in dem es nur eine legale Frauenorganisation gibt? Dr. Sigrid Y. Palacios Castillo moderiert und wird dieser und weiterer Fragen im Gespräch den Abend mit Sandra Abd'Allah-Alvarez Ramírez, einer dekolonialen, antirassistischen und abolitionistischen kubanischen Afrofeministin nachgehen. `
    }
  ];

  get window(): Window { return this.document.defaultView; }

  constructor(private route: ActivatedRoute, @Inject(DOCUMENT) readonly document: Document) {
    this.currentObject = null;
  }

  public redirect(url: string, target = '_blank'): Promise<boolean> {

    return new Promise<boolean>( (resolve, reject) => {

      try { resolve(!!this.window.open(url, target)); }
      catch (e) { reject(e); }
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const data: {id?: string} = (params as any).params;
      if (data.id != null) {
        console.log(data);
        this.currentObject = this.items.find(e => e.id === data.id);
      }
    });
  }

}
