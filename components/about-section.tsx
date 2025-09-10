import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About ASK Electricals</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                ASK Electricals Pvt. Ltd. is a dynamic and innovative motor manufacturing company, established in May 2025 with a vision to power the next generation of air
                movement technologies.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We specialize in the design, development, and production of highperformance electric motors tailored for air fan coolers, air conditioners, and kitchen chimneys.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to deliver reliable, energy-efficient, and durable motor solutions that meet the growing demands of OEMs and appliance manufacturers across India and
                beyond. <br />
                With a commitment to quality and innovation, ASK is poised to be a trusted partner in the HVAC and home appliance sectors.{" "}
              </p>
            </div>
            <div className="relative">
              <img
                src="/3.jpeg"
                alt="ASK Electricals Manufacturing Facility"
                className="rounded-lg shadow-lg w-full h-64 md:h-100 object-cover"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-l-4 border-l-red-600">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
                <p className="text-gray-700">To become a leading provider of advanced motor solutions that empower cooling and ventilation systems worldwide.</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-600">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Manufacture high-quality, energy-efficient air coolers and motors</li>
                  <li>• Promote sustainable and eco-friendly product designs</li>
                  <li>• Deliver exceptional value and service to our customers</li>
                  <li>• Continuously improve through innovation and technology</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Choose ASK Electricals?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 8.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">State-of-the-Art Manufacturing</h4>
                <p className="text-gray-600 text-sm">Equipped with latest machinery and quality testing labs</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Custom Motor Design</h4>
                <p className="text-gray-600 text-sm">Tailored to client specifications and performance needs</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Quality Assurance</h4>
                <p className="text-gray-600 text-sm">Stringent testing and quality control at every stage</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Sustainable & Energy-Efficient</h4>
                <p className="text-gray-600 text-sm">Eco-friendly motors that reduce power consumption</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Reliable After-Sales Support</h4>
                <p className="text-gray-600 text-sm">Dedicated team for technical support and servicing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
