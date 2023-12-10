# StarWars Info

Sistema para obter informações sobre o universo de Star Wars!

## Requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina antes de começar:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Como Rodar

1. Clone este repositório para a sua máquina local:

    ```bash
    git clone https://github.com/amurbanos/star-w-api
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd star-w-api
    ```

3. crie o arquivo .env a partir de .end.sample(modifique se necessário)

    ```bash
    cp .env.sample .env
    ```

4. Execute o seguinte comando para iniciar o sistema usando Docker Compose:

    ```bash
    docker compose up
    ```

   Isso iniciará os contêineres necessários e configurará o ambiente.

5. Aguarde até que todos os serviços estejam prontos. Uma vez concluído, você verá mensagens indicando que o sistema está em execução.

6. Acesse a página inicial seu navegador:

    ```bash
    http://localhost:3000
    ```

   Substitua `3000` pela porta que você configurou no arquivo `.env` se for diferente.

## Parando o Sistema

Para parar o sistema e remover os contêineres, você pode executar:

```bash
docker compose down
```

## Testando 

Para rodar os testes execute:

```bash
docker exec -it star-w-api-app-1 npm test
```
Substituindo(se necessário) "star-w-api-app-1" pelo nome do container em execução

![Captura de tela de 2023-12-10 10-52-37](https://github.com/amurbanos/star-w-api/assets/14782811/4a6cc141-c4f3-4c10-9078-29ff4c1445ae)



