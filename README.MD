# Integration Pipedrive with Bling

# Como começar

1. Clone o projeto para o seu computador 

    `git clone https://github.com/marcosmrs8/link_api_test.git`

2. Abra a pasta do projeto e faça o download de todas as dependências

    `yarn install` ou `npm install`

3. Preencha as variaves que estão de exemplo em  `.env.example` e coloque em um `.env`

    ```
    API_KEY_BLING = 
    BLING_BASE_URL_API = 
    API_TOKEN_PIPEDRIVE = 
    PIPEDRIVE_BASE_URL_API = 
    MONGODB_URL = 
    ```

4 Inicie a aplicação com `yarn start` ou `npm start`

Nesse momento as rotas já estão functionais!
# Rotas
## Post `v1/orders`
  - No **Post** ocorre a verificação de novos deals com status 'won' e logo em seguida o envio para o Bling e atualização do MongoDB
  Obs: Essa rota pode ser usada como webhook no Pipedrive.
 
## Get `v1/list`
  - No **Get** é retornada a collection inteira do MongoDB
  ```
[
    
	{
		"_id": "6224d13d9fe1dedfca44beed",
		"date": "2022-03-04",
		"total_value": 110,
		"oportunity": [
			{
				"id": 1,
				"value": 50,
				"name": "Roger"
			},
			{
				"id": 2,
				"value": 60,
				"name": "Rodrigo"
			}
		],
		"__v": 0
	},
	{
		"_id": "6224d1549fe1dedfca44bef4",
		"date": "2022-03-05",
		"total_value": 0,
		"oportunity": [
			{
				"id": 3,
				"value": 0,
				"name": "Mariana"
			}
		],
		"__v": 0
	}
]
```
## Get `v1/list/:date`
- No **Get** é retornada apenas a collection da data descrita em 'YYYY-MM-DD'
```
[
	{
		"_id": "6224d13d9fe1dedfca44beed",
		"date": "2022-03-04",
		"total_value": 110,
		"oportunity": [
			{
				"id": 1,
				"value": 50,
				"name": "Roger"
			},
			{
				"id": 2,
				"value": 60,
				"name": "Rodrigo"
			}
		],
		"__v": 0
	}
]
```
# Webhook
1. Installe o **ngrok** para expor onde seu servidor estiver rodando.
   ```
   npm install -g ngrok 
   ngrok http 5000    
   ```
    Escolha a url que irá parecer com o seguinte exemplo:

    `https://....ngrok.io -> http://localhost:5000`
2. No **Pipedrive** vá até 'Company settings' e no canto direito escolha 'Tools and apps' e finalmente 'Webhook'
3. Clique em 'Create new webhook' e preencha com seu ngrok/v1/orders e com os campos como a imagem
<img width="746" alt="pipedrive" src="https://user-images.githubusercontent.com/51254319/156938151-3e5a6dd9-1ae5-43d0-a935-e2e282005ec4.png">
4. Agora é só testar!
