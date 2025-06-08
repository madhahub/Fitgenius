import { z } from 'zod';

export const workoutFormSchema = z.object({
  fitnessLevel: z.enum(['Beginner', 'Intermediate', 'Advanced'], {
    required_error: 'Fitness level is required.',
  }),
  goals: z.string().min(10, { message: 'Goals must be at least 10 characters long.' }),
  availableEquipment: z.string().min(3, { message: 'Available equipment must be at least 3 characters long.' }),
  workoutDuration: z.coerce
    .number({ invalid_type_error: 'Duration must be a number.'})
    .min(10, { message: 'Workout duration must be at least 10 minutes.' })
    .max(180, { message: 'Workout duration cannot exceed 180 minutes.' }),
  workoutFrequency: z.coerce
    .number({ invalid_type_error: 'Frequency must be a number.'})
    .min(1, { message: 'Workout frequency must be at least 1 day per week.' })
    .max(7, { message: 'Workout frequency cannot exceed 7 days per week.' }),
});

export type WorkoutFormValues = z.infer<typeof workoutFormSchema>;
