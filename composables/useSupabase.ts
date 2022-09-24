import { createClient } from "@supabase/supabase-js";

const useSupabase = () => {
  const config = useRuntimeConfig();
  const supabase = createClient(
    config.public.supabaseUrl,
    config.public.supabaseKey
  );

  return { supabase };
};

export default useSupabase;
