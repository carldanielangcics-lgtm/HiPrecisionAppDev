import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://bzqndrqhxilexwisvyme.supabase.co/',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6cW5kcnFoeGlsZXh3aXN2eW1lIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTYzMzg3MiwiZXhwIjoyMDk1MjA5ODcyfQ.wAXHDUldK_cHDYq24rLxysrh21btTEWT6yhy4wpCU7U'
);
