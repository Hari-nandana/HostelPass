import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ebsupfiiubtgygmsrcsi.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVic3VwZmlpdWJ0Z3lnbXNyY3NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg2MjU4NzIsImV4cCI6MjA0NDIwMTg3Mn0.9_WnyQv9tcL3y_k42coQEriha883Gu_UisvTCaVTlW4'

export const supabase = createClient(supabaseUrl, supabaseAnonKey);




