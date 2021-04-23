import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

/* 

  Esse arquivo representa toda a customização que eu quero fazer dentro da aplicação por parte do html. 
  Uma vez que dentro do Next, não temos o index.html habitual.
  Ele é chamado, diferentemente do _app, uma unica vez e funciona para toda a aplicação.
  Não importa quantas rotas ou páginas do meu App eu navegue, o document continua o mesmo.

  Por isso é vantajoso colocarmos a fonte, por exemplo, dentro do document. Porque ela será aplicada a todo o site,
  e ao mesmo tempo terá que ser carregada uma única vez para a customização do html visualizado.

  Detalhe --> Foi utilizada uma classe para praticar a extensão de document para myDocument justamente porque a documentação do Next.js pede dessa maneira.
  

*/