import type { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from './supabaseTypes';

/**
 * Demo build: Supabase is permanently disabled. All stores fall back to mock
 * data and localStorage. The live-mode code paths are kept for type-checking
 * but are never reached at runtime — see yachtworx_v2.0 for the live build.
 */
export const isDemoMode: boolean = true;

export const supabase: SupabaseClient<Database> | null = null;
