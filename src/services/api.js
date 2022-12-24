export function loadLists() {
  return [
    { 
      title: 'Tarefas', 
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Estudar módulo 01 de NodeJS',
          labels: ['#6a5241'],
          user: 'https://play-lh.googleusercontent.com/wxV-OSUpdXBGN0sYl_dr4qB9ZzHGb6bbupSx0x9mz8Bp85pRqCYKqXH1CnyadmDIf9k'
        },
        {
          id: 2,
          content: 'Criar vídeo para o Youtube ensinando a recriar a interface do Pipefy',
          labels: ['#6a5241'],
          user: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1485665415623x323958275606855740%2FAA_icon.png?w=&h=&auto=compress&dpr=1&fit=max'
        },
        {
          id: 3,
          content: 'Estudar módulo 03 de React Native',
          labels: ['#6a5241'],
          user: 'https://www.outsystems.com/Forge_BL/rest/ComponentThumbnail/GetURL_ComponentThumbnail?ProjectImageId=27104'
        },
        {
          id: 4,
          content: 'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',
          labels: ['#6a5241'],
          user: 'https://adorable-avatars.broken.services/myseed'
        },
        {
          id: 5,
          content: 'Gravar testes e deploy ReactJS',
          labels: ['#6a5241'],
          user: 'https://uploads.commoninja.com/searchengine/wordpress/adorable-avatars.png'
        },
      ]
    },
    { 
      title: 'A Fazer', 
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Recriando clone do Pipefy',
          labels: ['#e71837'],
          user: 'https://uploads.commoninja.com/searchengine/wordpress/adorable-avatars.png'
        }
      ]
    },
    { 
      title: 'Fazendo', 
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Gravar sobre Geolocalização e mapas com React Native',
          labels: ['#ffff00'],
          user: 'https://uploads.commoninja.com/searchengine/wordpress/adorable-avatars.png'
        },
        {
          id: 8,
          content: 'Gravar testes e deploy ReactJS',
          labels: ['#ffff00'],
          user: 'https://uploads.commoninja.com/searchengine/wordpress/adorable-avatars.png'
        },
        {
          id: 9,
          content: 'Ajustes na biblioteca unform',
          labels: ['#ffff00'],
        }
      ]
    },
    { 
      title: 'Concluído', 
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Gravar aula sobre deploy e CI com React Native',
          labels: ['#00ff00'],
        },
        {
          id: 12,
          content: 'Gravar testes e deploy ReactJS',
          labels: ['#00ff00'],
        },
        {
          id: 13,
          content: 'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
          labels: ['#00ff00'],
        }
      ]
    },
  ];
}