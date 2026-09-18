# Perseverance — Página de vendas

Página estática responsiva em HTML semântico, CSS e módulos JavaScript nativos, sem dependências de execução ou processo de compilação.

## Organização
- `dist/index.html`: conteúdo e seções, na sequência dos prints mobile.
- `dist/styles.css`: tokens visuais, componentes e adaptação mobile/desktop.
- `dist/app.js`: componente reutilizável de garantia, destinos comerciais e contador.
- `dist/config.js`: checkout, documentos legais e data real de encerramento.
- `dist/assets/`: arquivos originais fornecidos pelo cliente.

## Edição
Configure `checkoutUrl`, `privacyUrl`, `termsUrl` e `offerEndsAt` em `dist/config.js`. Use uma data ISO 8601 com fuso, se houver prazo real. Sem data fixa, o contador inicia em 0 dias, 01 hora, 38 minutos e 28 segundos por navegador e mantém o prazo ao recarregar usando armazenamento local. Ao terminar, permanece zerado. A duração é configurável em offerDurationSeconds. Os documentos legais ficam como texto até receberem URLs válidas. Todos os botões de CTA abrem diretamente o checkout Hotmart. O vídeo solicita reprodução automática sem som, sujeita às permissões do navegador. Os CTAs pulsam suavemente, respeitando a preferência de movimento reduzido.

## Prévia
Sirva `dist` com qualquer servidor HTTP estático. Não abra o HTML via `file://`, pois o navegador restringe módulos nessa origem.

## Decisões
Mantida a sequência, texto, cores e imagens das referências. No desktop, vídeo e chamada, capa e descrição, e marca e apresentação usam duas colunas. A marca d'água do provedor anterior não integra o conteúdo. Vimeo usa o player oficial, sujeito às permissões de incorporação do proprietário do vídeo. Não há rastreadores adicionais.

