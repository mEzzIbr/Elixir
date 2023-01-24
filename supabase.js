import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://ravxmhvonavobeegaauj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhdnhtaHZvbmF2b2JlZWdhYXVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ3MTk3MzUsImV4cCI6MTk4MDI5NTczNX0.eKKqEBDjYHtMNzqD8-dr8yT44BRSkl9F72RQnMGyEmY';

export const supabase = createClient(supabaseUrl, supabaseKey);