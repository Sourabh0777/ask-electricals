import { Card, CardContent } from "@/components/ui/card"

const products = [
  {
    title: "FAN COOLER MOTORS",
    subtitle: "High-efficiency shaded pole and capacitor start motors",
    image: "/fan-cooler-motor.png",
    category: "fan-motors",
    features: ["Customized speed & torque options", "Designed for continuous operation", "Hot climate resistant"],
  },
  {
    title: "AIR CONDITIONER MOTORS",
    subtitle: "Indoor & outdoor unit motors for split & window ACs",
    image: "/ac-motor-unit.png",
    category: "ac-motors",
    features: ["Energy-efficient operation", "High starting torque", "Thermal protection"],
  },
  {
    title: "CHIMNEY MOTORS",
    subtitle: "Compact, low-noise motors for modern kitchen chimneys",
    image: "/kitchen-chimney-motor.png",
    category: "chimney-motors",
    features: ["High suction capacity", "Low noise operation", "Continuous safe operation"],
  },
  {
    title: "CUSTOM MOTOR SOLUTIONS",
    subtitle: "Tailored motor designs for specific applications",
    image: "/custom-motor-design.png",
    category: "custom",
    features: ["Client-specific designs", "Performance optimization", "Quality testing"],
  },
  {
    title: "MANUFACTURING FACILITY",
    subtitle: "State-of-the-art production capabilities",
    image: "/modern-motor-manufacturing-facility.png",
    category: "facility",
    features: ["Automated assembly lines", "Quality control labs", "Advanced testing equipment"],
  },
  {
    title: "QUALITY ASSURANCE",
    subtitle: "Stringent testing and quality control processes",
    image: "/quality-testing-lab.png",
    category: "quality",
    features: ["Automated test panels", "Statistical reporting", "Model-specific testing"],
  },
]

export function ProductGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Product Range</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized motor solutions for air movement technologies across HVAC and home appliance sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg"
              >
                <CardContent className="p-0">
                  <div className="aspect-[4/3] bg-gray-50 rounded-t-lg overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-bold text-xl text-gray-900">{product.title}</h3>
                      <p className="text-gray-600">{product.subtitle}</p>
                    </div>
                    <ul className="space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-500 flex items-center">
                          <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Target Industries</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900">HVAC Equipment Manufacturers</h4>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900">Home Appliance OEMs</h4>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900">Electrical & Electronics Distributors</h4>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900">Exporters of Cooling Equipment</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
