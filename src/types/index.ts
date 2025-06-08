import type { LucideIcon } from 'lucide-react';

export interface Exercise {
  id: string;
  name: string;
  description?: string;
  // Example: For general category icon, not individual exercises yet
  categoryIcon?: LucideIcon; 
}

export interface MuscleGroup {
  id: string;
  name: string;
  exercises: Exercise[];
  icon?: LucideIcon; // Icon for the muscle group
}
