# Coffee Delivery

Projeto realizado como desafio complementar do Módulo 2 do curso Ignite, ministrado pelo Diego Fernandes [@Rocketseat](https://www.rocketseat.com.br/).
Esse projeto tem como objeto testar o conhecimento adquirido durante o módulo. O qual, foram tratados assuntos como:
> Estados  
> Context API  
> LocalStorage  
> Imutabilidade do estado  
> Lista e chaves no ReactJS  
> Propriedades  
> Componentização  
> React Hook useReducer

## O que é o projeto?
A aplicação consiste em um carrinho de compras de uma cafeteria fictícia, a qual deverá ter:
> Listagem de produtos disponíveis para compra  
> Adicionar uma quantidade específica de itens no carrinho  
> Aumentar ou remover a quantidade de itens no carrinho  
> Formulário para o usuário preencher o seu endereço  
> Exibir o total de itens no carrinho do Header  
> Exibir o valor total da soma de itens no carrinho multiplicado pelo valor  

## Design
Como de costume, o design foi disponibilizado pela própria Rocketseat.
Novamente criado pela excelentíssima Millena Kupsinskü Martins [@millenakmartins](https://www.linkedin.com/in/millenakmartins).

## Quais as tecnologias utilizadas?
O projeto é em ReactJS, criado com o Vite e escrito em TypeScript.
Os estilos foram criados utilizando a biblioteca [Styled Components](https://www.npmjs.com/package/styled-components).

### Demais bibliotecas
[Axios](https://www.npmjs.com/package/axios)  
[ESLint](https://www.npmjs.com/package/eslint)  
[Immer](https://www.npmjs.com/package/immer)  
[Phosphor Icons](https://www.npmjs.com/package/phosphor-react)  
[React Hook Form](https://www.npmjs.com/package/react-hook-form)  
[React Imput Mask](https://www.npmjs.com/package/react-input-mask)  
[Urql](https://www.npmjs.com/package/urql)  
[Zod](https://www.npmjs.com/package/zod)  


### APIs públicas
[ViaCEP](https://viacep.com.br)  
[Free Geocoding API](https://geocode.maps.co)  

## Problemáticas e Considerações
- Como bom inquieto que sou, não consegui fazer apenas o que foi proposto, quis ir alguns níveis acima para testar alguns conhecimentos que estavam armazenados no meu baú. Acabei criando um App utilizando a estrutura Jamstack.
- Como já era de conhecimento, acabei utilizando o CMS disponiblizado pela Hygraph - [GraphCMS](https://app.hygraph.com/). Devo dizer que a experiência foi a melhor possível, o serviço é bem documentado, fácil uso e implementação.
- Não queria deixar a página de sucesso no Checkout com dados estáticos, então achei uma forma de calcular, de modo fictício, porém usando localizações reais, o tempo estimado para a entrega do café. Com certeza tem algum serviço que possibilita um cálculo real, mas para esse caso, está suficiente um cálculo utilizando Movimento Retilíneo Uniforme. P.S.: boa sorte ao cliente que receber um café em que o entregador faz uma curva na mesma velocidade em que anda nas retas.
- Fica aqui de registro que, quem sabe, em algum futuro eu aplique algumas atualizações de performance e acessibilidade, esses foram dois fatores que pesam bastante no uso de uma aplicação e que não foram trabalhadas.
