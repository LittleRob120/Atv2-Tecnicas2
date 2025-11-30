# atvii-atlantis

Aplicação de console em TypeScript para gestão de clientes, documentos e endereços, organizada em módulos com processos, menus e impressões via terminal.

## Tecnologias

- TypeScript
- Node.js
- Execução via terminal (stdin/stdout)

## Estrutura do Projeto

- Ponto de entrada:
  - `src/app/app.ts`
- I/O:
  - `src/io/entrada.ts` (leitura de terminal)
- Domínio:
  - `src/dominio/armazem.ts` (armazenamento em memória)
- Modelos:
  - `src/modelos/cliente.ts`
  - `src/modelos/documento.ts`
  - `src/modelos/endereco.ts`
  - `src/modelos/telefone.ts`
- Enumerações:
  - `src/enumeracoes/TipoDocumento.ts`
- Interfaces:
  - `src/interfaces/impressor.ts`
  - `src/interfaces/menu.ts`
  - `src/interfaces/prototipo.ts`
- Abstrações:
  - `src/ts/abstracoes/processo.ts`
- Menus:
  - `src/menus/menuPricipal.ts`
  - `src/menus/menuTipoCadastroCliente.ts`
  - `src/menus/menuTipoDocumento.ts`
  - `src/menus/menuTipoListagemClientes.ts`
- Impressores:
  - `src/impressores/impressorCliente.ts`
  - `src/impressores/impressorDocumento.ts`
  - `src/impressores/impressorDocumentos.ts`
  - `src/impressores/impressorEndereco.ts`
- Processos:
  - `src/processos/principal.ts`
  - `src/processos/tipoCadastroCliente.ts`
  - `src/processos/tipoListagemClientes.ts`
  - `src/processos/cadastroClienteTitular.ts`
  - `src/processos/cadastroClienteDependente.ts`
  - `src/processos/cadastroEnderecoTitular.ts`
  - `src/processos/cadastrarDocumentosCliente.ts`
  - `src/processos/cadastroRg.ts`
  - `src/processos/listagemTitulares.ts`
  - `src/processos/listagemDependentesDeTitular.ts`
  - `src/processos/listagemTitularDeDependente.ts`
  - `src/processos/atualizarCliente.ts`
  - `src/processos/removerCliente.ts`

## Pré-requisitos

- Node.js (LTS recomendado)
- npm

## Instalação

1. Clone o repositório.
2. Entre na pasta `atvii-atlantis`.
3. Instale as dependências:
   ```
   npm install
   ```

## Execução

- Compilar e executar:
  ```
  npm run build && npm start
  ```
- Executar diretamente (modo desenvolvimento, se disponível):
  ```
  npm start
  ```

## Funcionalidades

- Cadastro de clientes: titulares e dependentes.
- Cadastro e associação de documentos (RG e outros).
- Cadastro de endereços.
- Listagem de titulares e dependentes.
- Atualização e remoção de clientes.
- Navegação por menus no terminal.

## Fluxo

- `app.ts` inicia o processo principal.
- `processos/principal.ts` orquestra menus e ações.
- Entrada de dados via `io/entrada.ts`.
- Impressão de dados via impressores em `src/impressores`.

## Desenvolvimento

- Código fonte em `src/`.
- Lógica de negócio concentrada em `src/processos/`.
- Menus apenas direcionam o fluxo.

## Testes (sugestão)

- Usar Vitest ou Jest.
- Criar pasta `tests/`.
- Adicionar scripts no `package.json`:
  - `"test": "vitest"` ou `"test": "jest"`

## Convenções

- Separação por camadas: modelos, processos, menus, impressores.
- Enumeradores em `src/enumeracoes`.
- Evitar lógica de negócio em menus; manter em processos.
