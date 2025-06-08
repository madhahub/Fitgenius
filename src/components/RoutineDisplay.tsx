
"use client";

import type React from 'react';
import ReactMarkdown from 'react-markdown';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { ClipboardList, Sparkles } from 'lucide-react';
import type { GenerateWorkoutRoutineOutput, DailyWorkout, Exercise } from '@/ai/flows/generate-workout-routine';

interface RoutineDisplayProps {
  routine: GenerateWorkoutRoutineOutput | null;
  isLoading: boolean;
}

const RoutineDisplay: React.FC<RoutineDisplayProps> = ({ routine, isLoading }) => {
  if (isLoading) {
    return (
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-xl flex items-center">
            <ClipboardList className="mr-2 h-6 w-6 text-primary" />
            Your Workout Routine
          </CardTitle>
          <CardDescription>Generating your personalized plan...</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-8 w-1/2" />
          <Skeleton className="h-16 w-full" />
        </CardContent>
      </Card>
    );
  }

  if (!routine || !routine.workoutPlan || routine.workoutPlan.length === 0) {
    return (
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-xl flex items-center">
             <ClipboardList className="mr-2 h-6 w-6 text-primary" />
            Your Workout Routine
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center text-center text-muted-foreground py-10">
            <Sparkles className="h-12 w-12 mb-4 text-primary/70" />
            <p className="text-lg font-medium">
              Your generated workout routine will appear here.
            </p>
            <p>Fill out the form to get started and let FitGenius craft your plan!</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const markdownComponents = {
    h1: ({node, ...props}: any) => <h1 className="text-2xl font-bold my-4 text-foreground" {...props} />,
    h2: ({node, ...props}: any) => <h2 className="text-xl font-semibold my-3 text-foreground" {...props} />,
    h3: ({node, ...props}: any) => <h3 className="text-lg font-semibold my-2 text-foreground" {...props} />,
    ul: ({node, ...props}: any) => <ul className="list-disc pl-5 space-y-1 text-foreground" {...props} />,
    ol: ({node, ...props}: any) => <ol className="list-decimal pl-5 space-y-1 text-foreground" {...props} />,
    li: ({node, ...props}: any) => <li className="pb-1 text-foreground" {...props} />,
    p: ({node, ...props}: any) => <p className="mb-2 text-foreground" {...props} />,
    strong: ({node, ...props}: any) => <strong className="font-bold text-foreground" {...props} />,
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-xl flex items-center">
           <ClipboardList className="mr-2 h-6 w-6 text-primary" />
          Your Personalized Workout Routine
        </CardTitle>
        <CardDescription>Here is your AI-generated fitness plan.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {routine.introduction && (
          <div className="prose dark:prose-invert max-w-none p-4 bg-muted/50 rounded-md">
            <ReactMarkdown components={markdownComponents}>{routine.introduction}</ReactMarkdown>
          </div>
        )}

        {routine.workoutPlan.map((day: DailyWorkout, dayIndex: number) => (
          <div key={dayIndex} className="p-4 border border-border rounded-lg shadow-sm bg-card">
            <h2 className="text-xl font-semibold mb-3 text-primary">{day.dayTitle}</h2>
            
            {day.notes && (
              <div className="prose dark:prose-invert max-w-none mb-4 text-sm text-muted-foreground">
                <ReactMarkdown components={markdownComponents}>{day.notes}</ReactMarkdown>
              </div>
            )}

            {day.exercises && day.exercises.length > 0 ? (
              <div className="space-y-3">
                <div className="grid grid-cols-5 gap-x-4 gap-y-2 items-center py-2 px-3 bg-muted/70 rounded-t-md">
                  <div className="col-span-2 font-medium text-sm text-foreground">Exercise</div>
                  <div className="col-span-3 font-medium text-sm text-foreground">Sets & Reps / Details</div>
                </div>
                {day.exercises.map((exercise: Exercise, exIndex: number) => (
                  <div 
                    key={exIndex} 
                    className={`grid grid-cols-5 gap-x-4 gap-y-1 items-start py-2 px-3 ${exIndex % 2 === 0 ? 'bg-background' : 'bg-card'} ${exIndex === day.exercises.length -1 ? 'rounded-b-md': ''}`}
                  >
                    <p className="col-span-2 font-semibold text-foreground text-sm break-words">{exercise.name}</p>
                    <p className="col-span-3 text-muted-foreground text-sm break-words">{exercise.details}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-sm">No exercises listed for this day.</p>
            )}
          </div>
        ))}

        {routine.conclusion && (
          <div className="prose dark:prose-invert max-w-none mt-6 p-4 bg-muted/50 rounded-md">
            <ReactMarkdown components={markdownComponents}>{routine.conclusion}</ReactMarkdown>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RoutineDisplay;
