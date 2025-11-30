import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://cfjocqrbvvteozlpzulp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmam9jcXJidnZ0ZW96bHB6dWxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyNDM4OTgsImV4cCI6MjA3OTgxOTg5OH0.AD7V4AESTR28lqPwkwohJomuXgfTCjPqDFtwJURLRDc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
