import {InMemoryDbService} from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const values = [
      {
        id: 0,
        title: 'Calculus',
        author: 'Asaf Ventura',
        date: '2018-05-15',
        image: 'https://image.ibb.co/gTjbRT/calculus.png',
        content: '<p>Calculus (from Latin calculus, literally \'small pebble\', used for counting and calculations, as on an abacus), is the mathematical study of continuous change, in the same way that geometry is the study of shape and algebra is the study of generalizations of arithmetic operations.</p>\n' +
        '\n' +
        '<p>It has two major branches, differential calculus (concerning rates of change and slopes of curves), and integral calculus (concerning accumulation of quantities and the areas under and between curves). These two branches are related to each other by the fundamental theorem of calculus. Both branches make use of the fundamental notions of convergence of infinite sequences and infinite series to a well-defined limit.</p>\n',
        category: 'Science'
      },
      {
        id: 1,
        title: 'Bulbasaur',
        author: 'Asaf Ventura',
        date: '2000-09-14',
        image: 'https://image.ibb.co/mkSFqo/bulbasaur.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in aliquam orci, sit amet congue turpis. Aliquam commodo lorem quis accumsan maximus. Pellentesque ac bibendum quam. Maecenas imperdiet venenatis nisi quis placerat. Donec porta congue nisl sed tincidunt. Nulla blandit auctor fringilla. Cras ut lacinia justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin laoreet elementum felis id cursus. Pellentesque est nunc, fringilla consequat pharetra vel, vulputate ultrices nisl. Pellentesque eu tortor non quam condimentum lobortis in ac ante. Donec sit amet ex odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer vel tempus elit, non pharetra felis.',
        category: 'TV Shows'
      },
      {
        id: 2,
        title: 'Fourier Analysis',
        author: 'Asaf Ventura',
        date: '2014-01-01',
        image: 'https://image.ibb.co/kD27Y8/fourier.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in aliquam orci, sit amet congue turpis. Aliquam commodo lorem quis accumsan maximus. Pellentesque ac bibendum quam. Maecenas imperdiet venenatis nisi quis placerat. Donec porta congue nisl sed tincidunt. Nulla blandit auctor fringilla. Cras ut lacinia justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin laoreet elementum felis id cursus. Pellentesque est nunc, fringilla consequat pharetra vel, vulputate ultrices nisl. Pellentesque eu tortor non quam condimentum lobortis in ac ante. Donec sit amet ex odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer vel tempus elit, non pharetra felis.',
        category: 'Science'
      },
      {
        id: 3,
        title: 'CSS',
        author: 'Asaf Ventura',
        date: '2010-12-20',
        image: 'https://image.ibb.co/eHKX0o/css.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in aliquam orci, sit amet congue turpis. Aliquam commodo lorem quis accumsan maximus. Pellentesque ac bibendum quam. Maecenas imperdiet venenatis nisi quis placerat. Donec porta congue nisl sed tincidunt. Nulla blandit auctor fringilla. Cras ut lacinia justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin laoreet elementum felis id cursus. Pellentesque est nunc, fringilla consequat pharetra vel, vulputate ultrices nisl. Pellentesque eu tortor non quam condimentum lobortis in ac ante. Donec sit amet ex odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer vel tempus elit, non pharetra felis.',
        category: 'Science'
      },
      {
        id: 4,
        title: 'PHP',
        author: 'Asaf Ventura',
        date: '2012-02-08',
        image: 'https://image.ibb.co/eLJaLo/php.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in aliquam orci, sit amet congue turpis. Aliquam commodo lorem quis accumsan maximus. Pellentesque ac bibendum quam. Maecenas imperdiet venenatis nisi quis placerat. Donec porta congue nisl sed tincidunt. Nulla blandit auctor fringilla. Cras ut lacinia justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin laoreet elementum felis id cursus. Pellentesque est nunc, fringilla consequat pharetra vel, vulputate ultrices nisl. Pellentesque eu tortor non quam condimentum lobortis in ac ante. Donec sit amet ex odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer vel tempus elit, non pharetra felis.',
        category: 'Computers'
      },
      {
        id: 5,
        title: 'DDoS Attack',
        author: 'Asaf Ventura',
        date: '1999-11-09',
        image: 'https://image.ibb.co/kVAxGT/ddos.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in aliquam orci, sit amet congue turpis. Aliquam commodo lorem quis accumsan maximus. Pellentesque ac bibendum quam. Maecenas imperdiet venenatis nisi quis placerat. Donec porta congue nisl sed tincidunt. Nulla blandit auctor fringilla. Cras ut lacinia justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin laoreet elementum felis id cursus. Pellentesque est nunc, fringilla consequat pharetra vel, vulputate ultrices nisl. Pellentesque eu tortor non quam condimentum lobortis in ac ante. Donec sit amet ex odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer vel tempus elit, non pharetra felis.',
        category: 'Computers'
      },
      {
        id: 6,
        title: 'Évariste Galois',
        author: 'Asaf Ventura',
        date: '1811-10-25',
        image: 'https://image.ibb.co/cGRBD8/galois.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in aliquam orci, sit amet congue turpis. Aliquam commodo lorem quis accumsan maximus. Pellentesque ac bibendum quam. Maecenas imperdiet venenatis nisi quis placerat. Donec porta congue nisl sed tincidunt. Nulla blandit auctor fringilla. Cras ut lacinia justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin laoreet elementum felis id cursus. Pellentesque est nunc, fringilla consequat pharetra vel, vulputate ultrices nisl. Pellentesque eu tortor non quam condimentum lobortis in ac ante. Donec sit amet ex odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer vel tempus elit, non pharetra felis.',
        category: 'Science'
      },
      {
        id: 7,
        title: 'The Big Bang Theory',
        author: 'Asaf Ventura',
        date: '2009-10-01',
        image: 'https://image.ibb.co/mDkMay/bigbang.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in aliquam orci, sit amet congue turpis. Aliquam commodo lorem quis accumsan maximus. Pellentesque ac bibendum quam. Maecenas imperdiet venenatis nisi quis placerat. Donec porta congue nisl sed tincidunt. Nulla blandit auctor fringilla. Cras ut lacinia justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin laoreet elementum felis id cursus. Pellentesque est nunc, fringilla consequat pharetra vel, vulputate ultrices nisl. Pellentesque eu tortor non quam condimentum lobortis in ac ante. Donec sit amet ex odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer vel tempus elit, non pharetra felis.',
        category: 'TV Shows'
      }
    ];

    return {values};
  }
}


