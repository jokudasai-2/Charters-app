import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/database';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing required environment variables for Supabase configuration');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  },
  realtime: {
    params: {
      eventsPerSecond: 10
    }
  }
});

// Create a function to handle channel creation and subscription
function createSystemChannel() {
  return supabase.channel('system')
    .subscribe((status) => {
      if (status === 'SUBSCRIBED') {
        console.debug('Connected to realtime');
      }
      if (status === 'CLOSED') {
        console.warn('Realtime connection closed');
        // Create a new channel instance after a delay
        setTimeout(createSystemChannel, 1000);
      }
      if (status === 'CHANNEL_ERROR') {
        console.warn('Realtime channel error');
        // Create a new channel instance after a delay
        setTimeout(createSystemChannel, 2000);
      }
    });
}

// Initialize the system channel
createSystemChannel();