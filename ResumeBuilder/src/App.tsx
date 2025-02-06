import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Grid, Briefcase, Code2, Download, FileEdit, Palette } from 'lucide-react';
import { useState, useEffect } from 'react';

type Page = 'home' | 'templates' | 'editor' | 'export';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto px-4">
          <div className="flex h-16 items-center justify-between bg-[#141414] rounded-full px-4 my-4 border border-white/[0.1]">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <Grid className="h-5 w-5 text-purple-500" />
              <span className="text-lg font-semibold text-white">ResumeBuilder</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Button 
                variant="ghost" 
                className={`text-white/70 hover:text-white ${currentPage === 'home' ? 'text-white' : ''}`}
                onClick={() => setCurrentPage('home')}
              >
                Home
              </Button>
              <Button 
                variant="ghost" 
                className={`text-white/70 hover:text-white ${currentPage === 'templates' ? 'text-white' : ''}`}
                onClick={() => setCurrentPage('templates')}
              >
                Templates
              </Button>
              <Button 
                variant="ghost" 
                className={`text-white/70 hover:text-white ${currentPage === 'editor' ? 'text-white' : ''}`}
                onClick={() => setCurrentPage('editor')}
              >
                Create
              </Button>
              <Button 
                variant="ghost" 
                className={`text-white/70 hover:text-white ${currentPage === 'export' ? 'text-white' : ''}`}
                onClick={() => setCurrentPage('export')}
              >
                Export
              </Button>
            </div>

            <Button
              size="lg"
              className="bg-[#7C3AED] hover:bg-[#7C3AED]/90 text-white rounded-full px-6"
              onClick={() => setCurrentPage('editor')}
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className={`pt-24 transition-all duration-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        {currentPage === 'home' && (
          <div className="container mx-auto px-6 py-24">
            {/* Hero Section */}
            <div className="text-center mb-24 relative">
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 blur-3xl" />
              </div>
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-blue-600 bg-clip-text text-transparent animate-gradient">
                Build Your Portfolio in Minutes!
              </h1>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                Choose a template, customize it, and share your work effortlessly.
              </p>
              <Button
                size="lg"
                onClick={() => setCurrentPage('editor')}
                className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
              >
                <span className="relative z-10">Start Building</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Briefcase className="h-8 w-8" />,
                  title: "Drag-and-Drop Sections",
                  description: "Easily organize your content with intuitive drag-and-drop functionality"
                },
                {
                  icon: <Palette className="h-8 w-8" />,
                  title: "Customizable Themes",
                  description: "Choose from beautiful themes and customize colors to match your style"
                },
                {
                  icon: <Code2 className="h-8 w-8" />,
                  title: "Instant HTML Export",
                  description: "Export your portfolio as clean HTML/CSS code ready for hosting"
                },
                {
                  icon: <FileEdit className="h-8 w-8" />,
                  title: "Mobile-Friendly Layouts",
                  description: "Your portfolio will look great on all devices, automatically"
                }
              ].map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        )}

        {currentPage === 'templates' && (
          <div className="container mx-auto px-6 py-12">
            <h2 className="text-3xl font-bold mb-8">Choose Your Template</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Template placeholders */}
              <div className="aspect-[3/4] rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 p-4 hover:border-primary/50 transition-colors cursor-pointer">
                <div className="h-full bg-card/50 rounded-md"></div>
              </div>
              <div className="aspect-[3/4] rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 p-4 hover:border-primary/50 transition-colors cursor-pointer">
                <div className="h-full bg-card/50 rounded-md"></div>
              </div>
              <div className="aspect-[3/4] rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 p-4 hover:border-primary/50 transition-colors cursor-pointer">
                <div className="h-full bg-card/50 rounded-md"></div>
              </div>
            </div>
          </div>
        )}

        {currentPage === 'editor' && <EditorPage />}

        {currentPage === 'export' && (
          <div className="container mx-auto px-6 py-12">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Export Your Portfolio</h2>
              <div className="space-y-4">
                <Button className="w-full py-6 text-lg justify-between">
                  Download as HTML/CSS
                  <Download className="h-5 w-5" />
                </Button>
                <Button className="w-full py-6 text-lg justify-between" variant="secondary">
                  Export as PDF
                  <FileEdit className="h-5 w-5" />
                </Button>
                <Button className="w-full py-6 text-lg justify-between" variant="outline">
                  Copy Share Link
                  <Code2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <div
      className="group p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-4 text-primary group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function EditorPage() {
  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-12 gap-6 h-[calc(100vh-5rem)]">
      {/* Left Sidebar */}
      <div className="col-span-3 border rounded-lg bg-card/50 backdrop-blur-sm">
        <ScrollArea className="h-full">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Customization</h2>
            {/* Add customization options here */}
          </div>
        </ScrollArea>
      </div>

      {/* Main Content */}
      <div className="col-span-6 border rounded-lg bg-card/50 backdrop-blur-sm p-4">
        <h2 className="text-lg font-semibold mb-4">Editor</h2>
        {/* Add editor components here */}
      </div>

      {/* Right Preview */}
      <div className="col-span-3 border rounded-lg bg-card/50 backdrop-blur-sm">
        <ScrollArea className="h-full">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Preview</h2>
            {/* Add preview content here */}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}

export default App;