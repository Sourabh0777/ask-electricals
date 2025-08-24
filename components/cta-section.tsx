import { Button } from "@/components/ui/button";

export function CTASection() {
   return (
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-orange-500">
         <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
               <div className="space-y-4">
                  <h2 className="text-4xl lg:text-5xl font-bold text-white">
                     Empowering Your Dreams
                  </h2>
                  <p className="text-xl text-white/90">
                     Discover our complete range of electrical solutions
                     designed to enhance your lifestyle.
                  </p>
               </div>

               <div className="flex justify-center">
                  <img
                     src="/futuristic-electrical-worker.png"
                     alt="Ask Electricals Mascot"
                     className="h-48 w-auto"
                  />
               </div>

               <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-gray-100"
               >
                  View All Products
               </Button>
            </div>
         </div>
      </section>
   );
}
