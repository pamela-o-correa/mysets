# mysets — Seu treino no seu ritmo

Aplicativo web progressivo (PWA) de acompanhamento de treinos, fichas personalizadas, biblioteca de exercícios e evolução de carga, com suporte completo offline e sincronização opcional na nuvem via **Supabase**.

## Como executar localmente

1. Abra a pasta do projeto no VS Code.
2. Recomendado: instale a extensão **Live Server** (ou utilize qualquer servidor HTTP estático, como `npx serve .` ou `python -m http.server 8080`).
3. Acesse `http://localhost:5500` (ou a porta configurada).

> **Nota:** o Service Worker (modo offline / instalação como app PWA) exige contexto seguro (`https://` em produção ou `http://localhost` em desenvolvimento).

## Funcionalidades

- Navegação completa entre **Início**, **Minha ficha**, **Exercícios**, **Progresso** e **Meu perfil**.
- Alternância entre fichas A, B, C e criação/edição de fichas personalizadas (**A a F**), com reordenação rápida de exercícios (`↑` / `↓`), restauração de fichas padrão e sugestão automática do treino do dia da semana sincronizada com o calendário.
- Biblioteca com **58 exercícios nativos** divididos em 8 grupos musculares (**Pernas, Glúteos, Costas, Peito, Ombros, Braços, Abdômen e Cardio**), com busca e filtros combinados.
- Cadastro, edição e exclusão de exercícios personalizados com suporte a links de vídeo (`https://` para YouTube ou MP4).
- Modo de treino ativo com opção de **minimizar para barra flutuante**, navegação entre exercícios (anterior/próximo), sugestão automática da última carga e **observações/ajustes de aparelho** por exercício, marcação de séries e cronômetro de descanso com alerta sonoro e vibração.
- Finalização, histórico detalhado de sessões, calendário semanal/mensal de dias treinados e gráfico dinâmico de evolução de carga (`Chart.js` empacotado localmente em `vendor/chart.umd.js`).
- Exportação e importação validada de backup em JSON.
- Autenticação (login, cadastro, recuperação de senha e logout seguro) e sincronização bidirecional offline-first com **Supabase** (`vendor/supabase.js`).

## Como conectar ao Supabase e publicar em produção

1. Crie um projeto no [Supabase](https://supabase.com/).
2. No menu **SQL Editor** do Supabase, copie e execute o conteúdo de [`supabase/schema.sql`](./supabase/schema.sql) (cria as tabelas `profiles`, `custom_workouts`, `custom_exercises`, `workout_sessions` com validações e ativa as políticas **Row Level Security - RLS**).
3. Em *Authentication > URL Configuration* no painel do Supabase, configure:
   - **Site URL**: a URL final de produção do seu app (ex.: `https://mysets.seudominio.com`).
   - **Redirect URLs**: adicione a URL de produção para que os links de confirmação de e-mail e redefinição de senha redirecionem corretamente para o app.
4.As credenciais públicas (`url` e `anonKey` — chave pública projetada para uso no navegador com RLS ativo) ficam em [`js/supabase-config.js`](./js/supabase-config.js) ou podem ser configuradas diretamente em **Meu perfil > Conta e Nuvem**.
5. Para publicar (Vercel, Netlify, Cloudflare Pages ou GitHub Pages), basta servir a raiz do repositório como site estático (sem etapa de transpilação obrigatória).
