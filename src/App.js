import React, { Component } from 'react';

import Header from './components/Header';
import Post from './components/Post';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: 'Anderson',
        avatar: 'https://avatars3.githubusercontent.com/u/11430858?s=460&v=4',
        time: 'menos de 1 minuto',
        body:
          'O React (às vezes denominado React.js ou ReactJS) é uma biblioteca JavaScript de código aberto para criar interfaces de usuário. É mantido pelo Facebook, Instagram e uma comunidade de desenvolvedores individuais e outras empresas. De acordo com o serviço de análise de JavaScript Libscore, o React está sendo usado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros.[1] O React, sozinho, é destinado principalmente ao desenvolvimento de interfaces de páginas web.Em 2015, o Facebook anunciou o módulo React Native, que em conjunto com o React, possibilita o desenvolvimento de aplicativos para Android e iOS utilizando componentes de interface de usuário nativos de ambas plataformas, sem precisar recorrer ao HTML.[2]',
      },
      {
        id: 2,
        name: 'Robert Downey Jr.',
        avatar:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Robert_Downey_Jr._Expo_2011_%28cropped%29.jpg/200px-Robert_Downey_Jr._Expo_2011_%28cropped%29.jpg',
        time: 'há 3 horas',
        body:
          'É um ator, cantor, compositor e pianista[3] americano. Estreou como ator em 1970 aos 5 anos, no filme Pound, dirigido por seu pai, Robert Downey, Sr., e desde então tem atuado constantemente em trabalhos para televisão, cinema e ópera. Durante os anos 80, ele participou de diversos filmes associado a Brat Pack.Less than Zero(br: Abaixo de Zero) foi um filme particularmente notável, não apenas porque foi a primeira atuação de Downey aclamada pela crítica, mas também porque impulsionou o já existente problema com drogas do ator.Após este filme, Downey passou a atuar em filmes de maior escala, como Air America, Soapdish e Natural Born Killers(Assassinos por Natureza).Ele interpretou Charlie Chaplin em 1992 no filme Chaplin, pelo qual foi indicado ao Oscar de melhor ator.Porém, foi como o bilionário Tony Stark / Homem de Ferro que ganhou maior notoriedade, interpretando - o no Universo Cinematográfico Marvel. Foi o ator mais bem pago do mundo durante três anos seguidos(2013, 2014, 2015), com ganhos de $50, $75, e $80 milhões de dólares, respectivamente.',
      },
      {
        id: 3,
        name: 'Tom Holland',
        avatar:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/250px-Tom_Holland_by_Gage_Skidmore.jpg',
        time: 'há mais de 1 dia',
        body:
          'Ator e dançarino britânico. É mais conhecido por interpretar Peter Parker / Homem-Aranha no Universo Cinematográfico Marvel, até agora aparecendo ou estrelando cinco filmes: Capitão América: Guerra Civil (2016), Spider-Man: Homecoming (2017), Avengers: Infinity War (2018), Avengers: Endgame (2019), e o próximo Spider-Man: Far From Home (2019). Holland apareceu anteriormente no palco no papel de Billy Elliot, The Musical no West End de Londres em 2008. Seus outros grandes filmes incluem O Impossível(2012), No Coração do Mar(2015) e A Cidade Perdida de Z(2016).Ele também está definido para voz Walter Beckett em Spies in Disguise(2019) e Jip em The Voyage of Doctor Dolittle(2020).Tom Holland também assinou contrato para estrelar The Devil All the Time e Onward(ambos em 2020), e como Nathan Drake em Uncharted.Em 2017, Tom recebeu o prêmio BAFTA Rising Star ',
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <div>
        <Header />
        <div className="post-container">
          {posts && posts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </div>
    );
  }
}
