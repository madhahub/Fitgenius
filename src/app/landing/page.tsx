
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import { Sparkles, Dumbbell, TrendingUp, Zap, Target, Edit3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'FitGenius - Your Personal AI Fitness Coach',
  description: 'Generate personalized workout routines with FitGenius, your AI-powered fitness companion. Achieve your fitness goals with custom plans tailored to you.',
};

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary font-headline mb-6">
              Welcome to FitGenius
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto">
              Your Personal AI Fitness Coach. Generate tailored workout routines and smash your fitness goals!
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Link href="/">Get Started Now</Link>
            </Button>
            <div className="mt-12 md:mt-16">
              <Image
                src="https://placehold.co/1200x600.png"
                alt="Hero image showing fitness activity"
                width={1200}
                height={600}
                className="rounded-xl shadow-2xl mx-auto"
                data-ai-hint="fitness workout"
                priority
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary font-headline mb-12 md:mb-16">
              Why Choose FitGenius?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="items-center text-center">
                  <div className="p-4 bg-primary/10 rounded-full mb-4 inline-block">
                    <Sparkles className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-semibold text-primary">Truly Personal Routines</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-foreground/80">
                  <p>Our AI crafts workout plans based on your unique profile – fitness level, goals, equipment, and time.</p>
                </CardContent>
              </Card>
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="items-center text-center">
                  <div className="p-4 bg-primary/10 rounded-full mb-4 inline-block">
                    <Dumbbell className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-semibold text-primary">Comprehensive Exercise Library</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-foreground/80">
                  <p>Explore a wide range of exercises for all muscle groups, complete with descriptions to guide you.</p>
                </CardContent>
              </Card>
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="items-center text-center">
                   <div className="p-4 bg-primary/10 rounded-full mb-4 inline-block">
                    <Target className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-semibold text-primary">Goal-Oriented</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-foreground/80">
                  <p>Whether it's weight loss, muscle gain, or endurance, FitGenius aligns your plan with your specific fitness targets.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary font-headline mb-12 md:mb-16">
              Simple Steps to Your Dream Fitness
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="p-4 bg-accent/10 rounded-full mb-4 inline-block">
                  <Edit3 className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">1. Tell Us About You</h3>
                <p className="text-foreground/70">Fill a quick form detailing your fitness level, goals, and what equipment you have.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-4 bg-accent/10 rounded-full mb-4 inline-block">
                  <Zap className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">2. AI Generates Your Plan</h3>
                <p className="text-foreground/70">Our smart AI instantly crafts a personalized workout routine just for you.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-4 bg-accent/10 rounded-full mb-4 inline-block">
                  <TrendingUp className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">3. Start Working Out!</h3>
                <p className="text-foreground/70">Follow your custom plan and start seeing results. It's that easy!</p>
              </div>
            </div>
             <div className="text-center mt-12">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <Link href="/generator">Create My Plan Now</Link>
                </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-8 text-center text-muted-foreground text-sm border-t border-border">
        <p>&copy; {new Date().getFullYear()} FitGenius. AI-Powered Fitness. All rights reserved.</p>
      </footer>
    </div>
  );
}
