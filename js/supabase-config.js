// ============================================================================
// Configuração do Supabase para o mysets
//
// A chave abaixo é a "publishable/anon key": ela é PÚBLICA por design e pode
// ficar no código do navegador. A segurança dos dados vem das políticas de
// Row Level Security (RLS) criadas por supabase/schema.sql — cada usuário só
// enxerga e altera as próprias linhas.
//
// NUNCA coloque aqui a chave "service_role" / "secret" do Supabase.
// ============================================================================
window.MYSETS_SUPABASE_CONFIG = {
  url: "https://rnfvaabdwgqelszfxpvy.supabase.co",
  anonKey: "sb_publishable_kKhNhNK963ikEoORIkw4HQ_gqTN0t5g",
};
