"use client";

import type React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { MuscleGroup, Exercise } from '@/types';
import { Activity, Dumbbell, PersonStanding, Zap, ListChecks, Weight } from 'lucide-react';

const exerciseData: MuscleGroup[] = [
  {
    id: 'chest',
    name: 'Chest',
    icon: Activity,
    exercises: [
      { id: 'pushup', name: 'Push-ups', description: 'Bodyweight exercise targeting chest, shoulders, and triceps.' },
      { id: 'benchpress', name: 'Bench Press (Dumbbell/Barbell)', description: 'Compound movement for chest, shoulders, and triceps.' },
      { id: 'chestfly', name: 'Chest Flyes (Dumbbell)', description: 'Isolation exercise for the chest muscles.' },
    ],
  },
  {
    id: 'back',
    name: 'Back',
    icon: Activity,
    exercises: [
      { id: 'pullup', name: 'Pull-ups / Lat Pulldowns', description: 'Targets lats, biceps, and upper back.' },
      { id: 'rows', name: 'Rows (Dumbbell/Barbell/Machine)', description: 'Works mid-back, lats, and biceps.' },
      { id: 'deadlift', name: 'Deadlifts (Conventional/Romanian)', description: 'Full body exercise, emphasizing back and hamstrings.' },
    ],
  },
  {
    id: 'legs',
    name: 'Legs',
    icon: PersonStanding,
    exercises: [
      { id: 'squat', name: 'Squats (Bodyweight/Goblet/Barbell)', description: 'Compound movement for quads, glutes, and hamstrings.' },
      { id: 'lunge', name: 'Lunges (Bodyweight/Dumbbell)', description: 'Targets quads, glutes, and hamstrings unilaterally.' },
      { id: 'legpress', name: 'Leg Press', description: 'Machine exercise for overall leg development.' },
    ],
  },
  {
    id: 'shoulders',
    name: 'Shoulders',
    icon: Weight, // Replaced Barbell with Weight
    exercises: [
      { id: 'overheadpress', name: 'Overhead Press (Dumbbell/Barbell)', description: 'Targets deltoids and triceps.' },
      { id: 'lateralraise', name: 'Lateral Raises (Dumbbell)', description: 'Isolates the medial deltoid.' },
      { id: 'frontraise', name: 'Front Raises (Dumbbell)', description: 'Isolates the anterior deltoid.' },
    ],
  },
  {
    id: 'arms',
    name: 'Arms',
    icon: Dumbbell,
    exercises: [
      { id: 'bicepcurl', name: 'Bicep Curls (Dumbbell/Barbell)', description: 'Isolates the biceps.' },
      { id: 'tricepextension', name: 'Tricep Extensions (Dumbbell/Cable)', description: 'Targets the triceps.' },
      { id: 'tricepdip', name: 'Tricep Dips (Bodyweight/Assisted)', description: 'Compound exercise for triceps and chest.' },
    ],
  },
  {
    id: 'core',
    name: 'Core',
    icon: Zap,
    exercises: [
      { id: 'plank', name: 'Plank', description: 'Isometric exercise for core stability.' },
      { id: 'crunches', name: 'Crunches / Leg Raises', description: 'Targets abdominal muscles.' },
      { id: 'russian_twist', name: 'Russian Twists', description: 'Works obliques and overall core strength.' },
    ],
  },
];


const ExerciseLibrary: React.FC = () => {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-xl flex items-center">
          <ListChecks className="mr-2 h-6 w-6 text-primary" />
          Exercise Library
        </CardTitle>
        <CardDescription>Browse common exercises by muscle group. Use these as inspiration or to substitute exercises in your routine.</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {exerciseData.map((group) => (
            <AccordionItem value={group.id} key={group.id}>
              <AccordionTrigger className="text-lg font-medium hover:no-underline">
                <div className="flex items-center">
                  {group.icon && <group.icon className="mr-2 h-5 w-5 text-primary/80" />}
                  {group.name}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-3 pl-2">
                  {group.exercises.map((exercise) => (
                    <li key={exercise.id} className="border-l-2 border-primary/30 pl-4 py-1">
                      <p className="font-semibold text-primary">{exercise.name}</p>
                      {exercise.description && (
                        <p className="text-sm text-muted-foreground">{exercise.description}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default ExerciseLibrary;
