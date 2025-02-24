import { ThemeToggle } from '../components/ThemeToggle';

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 right-0 p-4">
        <ThemeToggle />
      </header>
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Welcome to Business App</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Your business dashboard and analytics platform
        </p>
      </main>
    </div>
  );
}