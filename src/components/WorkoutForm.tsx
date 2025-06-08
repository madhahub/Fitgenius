
"use client";

import type React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { workoutFormSchema, type WorkoutFormValues } from '@/lib/schemas';
import { generateWorkoutRoutine, type GenerateWorkoutRoutineOutput } from '@/ai/flows/generate-workout-routine';


interface WorkoutFormProps {
  setRoutine: (routine: GenerateWorkoutRoutineOutput | null) => void;
  setIsLoadingRoutine: (isLoading: boolean) => void;
}

const WorkoutForm: React.FC<WorkoutFormProps> = ({ setRoutine, setIsLoadingRoutine }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<WorkoutFormValues>({
    resolver: zodResolver(workoutFormSchema),
    defaultValues: {
      fitnessLevel: undefined,
      goals: '',
      availableEquipment: '',
      workoutDuration: 30,
      workoutFrequency: 3,
    },
  });

  const onSubmit = async (values: WorkoutFormValues) => {
    setIsSubmitting(true);
    setIsLoadingRoutine(true);
    setRoutine(null);

    try {
      const result: GenerateWorkoutRoutineOutput = await generateWorkoutRoutine(values);
      setRoutine(result);
      toast({
        title: 'Routine Generated!',
        description: 'Your personalized workout routine is ready.',
      });
    } catch (error) {
      console.error('Error generating workout routine:', error);
      setRoutine(null);
      let errorMessage = 'Failed to generate workout routine. Please try again.';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      toast({
        title: 'Error Generating Routine',
        description: errorMessage,
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
      setIsLoadingRoutine(false);
    }
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-xl">Create Your Workout Plan</CardTitle>
        <CardDescription>Fill in the details below to generate a personalized routine.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="fitnessLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fitness Level</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={String(field.value || "")}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your fitness level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Beginner">Beginner</SelectItem>
                      <SelectItem value="Intermediate">Intermediate</SelectItem>
                      <SelectItem value="Advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="goals"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fitness Goals</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., lose weight, build muscle, improve endurance"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Describe what you want to achieve.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="availableEquipment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Available Equipment</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., dumbbells, barbell, resistance bands, bodyweight only"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>List the equipment you have access to.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="workoutDuration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Workout Duration (minutes)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g., 30" {...field} onChange={e => field.onChange(parseInt(e.target.value,10) || 0)} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="workoutFrequency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Workout Frequency (days per week)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g., 3" {...field} onChange={e => field.onChange(parseInt(e.target.value,10) || 0)} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              disabled={isSubmitting || !form.formState.isValid} 
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                'Generate Routine'
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default WorkoutForm;
