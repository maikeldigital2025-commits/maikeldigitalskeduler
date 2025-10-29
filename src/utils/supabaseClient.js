// supabaseClient.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://lgyqhhzoznenxtxzdate.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4enh2bHJlcWRxamdzam53dml1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE3MjczMjgsImV4cCI6MjA3NzMwMzMyOH0.HeXvGkpC6aUX2Zgot5HKNc2sW9fl8GCR6mu8kw94BvY'; // replace with your anon key

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/**
 * Utility function to get the current session
 */
export async function getSession() {
  const { data: { session }, error } = await supabase.auth.getSession();
  if (error) throw error;
  return session;
}

/**
 * Utility function to listen to auth state changes
 * @param {function} callback - function(event, session)
 */
export function onAuthStateChange(callback) {
  return supabase.auth.onAuthStateChange(callback);
}

/**
 * Sign in with Google OAuth
 */
export async function signInWithGoogle(redirectTo = window.location.origin) {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo }
  });
  if (error) throw error;
}

/**
 * Sign out
 */
export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}
// Placeholder for src/utils/supabaseClient.js
