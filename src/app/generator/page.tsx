
"use client";

import { useState } from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import WorkoutForm from '@/components/WorkoutForm';
import RoutineDisplay from '@/components/RoutineDisplay';
import ExerciseLibrary from '@/components/ExerciseLibrary';
import type { GenerateWorkoutRoutineOutput } from '@/ai/flows/generate-workout-routine';

// Note: Metadata for this page can be added here if specific title/description is needed for /generator
// export const metadata: Metadata = {
//   title: 'Workout Generator - FitGenius',
//   description: 'Create your personalized workout plan.',
// };

export default function GeneratorPage() {
  const [routine, setRoutine] = useState<GenerateWorkoutRoutineOutput | null>(null);
  const [isLoadingRoutine, setIsLoadingRoutine] = useState<boolean>(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow container mx-auto p-4 sm:p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <WorkoutForm
              setRoutine={setRoutine}
              setIsLoadingRoutine={setIsLoadingRoutine}
            />
          </div>
          <div className="lg:col-span-2">
            <RoutineDisplay
              routine={routine}
              isLoading={isLoadingRoutine}
            />
          </div>
        </div>
        <div className="mt-12">
          <ExerciseLibrary />
        </div>
      </main>
      <footer className="py-6 text-center text-muted-foreground text-sm">
        <p>&copy; {new Date().getFullYear()} FitGenius. All rights reserved.</p>
      </footer>
    </div>
  );
}
