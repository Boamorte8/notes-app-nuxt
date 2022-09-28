const useDB = () => {
  const { user } = useAuth();
  const { supabase } = useSupabase();

  const saveNote = async (title: string, note: string) => {
    const { error } = await supabase
      .from("notes_nuxt")
      .insert({ title, note, user_id: user.value.id });
    if (error) throw error;
  };

  const getNotes = async () => {
    const { data, error } = await supabase
      .from("notes_nuxt")
      .select()
      .eq("user_id", user.value.id);
    if (error) throw error;
    return data;
  };

  return { getNotes, saveNote };
};

export default useDB;
