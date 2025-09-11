import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="text-6xl font-bold text-foreground">
                <img src="/logo_ASK.png" alt="ASK Electricals Logo" className="h-50 w-80" />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                </div>
              </div>
              <div className="text-sm font-medium">
                <div className="text-primary">Leading manufacturer of motors</div>
                <div className="text-foreground">Since 2025</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">Empowering Your Dreams</h1>
            <p className="text-lg text-muted-foreground max-w-md">Discover innovative electrical solutions that transform your living spaces with style and functionality.</p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Explore Products
            </Button>
          </div>
        </div>

        {/* Right Content - Product Image */}
        <div className="relative">
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <img src="/factory.png" alt="Ask Electricals Electrical Products" className="w-full h-auto rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
