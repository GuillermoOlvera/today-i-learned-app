import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fxspjpjxivkvqmuwyvtp.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4c3BqcGp4aXZrdnFtdXd5dnRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIyMzQ2MTMsImV4cCI6MTk5NzgxMDYxM30.PH6dGbTUFgcy6ZKfCZ-hOm0C2Ez9hF_PCirifTCIVoo';
export const supabase = createClient(supabaseUrl, supabaseKey)