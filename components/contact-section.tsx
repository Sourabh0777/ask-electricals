import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ContactSection() {
   return (
      <section className="py-16 bg-gray-50">
         <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
               <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                     Contact Us
                  </h2>
                  <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
                  <p className="text-lg text-gray-600">
                     Get in touch with our team for motor solutions and
                     technical support
                  </p>
               </div>

               <div className="grid lg:grid-cols-2 gap-12">
                  {/* Contact Information */}
                  <div className="space-y-8">
                     <Card className="border-0 shadow-lg">
                        <CardContent className="p-8">
                           <h3 className="text-2xl font-bold text-gray-900 mb-6">
                              ASK Electricals Pvt. Ltd.
                           </h3>

                           <div className="space-y-6">
                              <div className="flex items-start space-x-4">
                                 <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg
                                       className="w-6 h-6 text-blue-600"
                                       fill="none"
                                       stroke="currentColor"
                                       viewBox="0 0 24 24"
                                    >
                                       <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                       />
                                       <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                       />
                                    </svg>
                                 </div>
                                 <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">
                                       Address
                                    </h4>
                                    <p className="text-gray-600">
                                       411, Sector 8 Rd, Sector 8,
                                       <br />
                                       IMT Manesar, Gurugram,
                                       <br />
                                       Haryana - 122503, India
                                    </p>
                                 </div>
                              </div>

                              <div className="flex items-start space-x-4">
                                 <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg
                                       className="w-6 h-6 text-blue-600"
                                       fill="none"
                                       stroke="currentColor"
                                       viewBox="0 0 24 24"
                                    >
                                       <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                       />
                                    </svg>
                                 </div>
                                 <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">
                                       Phone
                                    </h4>
                                    <p className="text-gray-600">
                                       +91-9599902449
                                    </p>
                                 </div>
                              </div>

                              <div className="flex items-start space-x-4">
                                 <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg
                                       className="w-6 h-6 text-blue-600"
                                       fill="none"
                                       stroke="currentColor"
                                       viewBox="0 0 24 24"
                                    >
                                       <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                       />
                                    </svg>
                                 </div>
                                 <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">
                                       Email
                                    </h4>
                                    <p className="text-gray-600">
                                       anirudhkumar@askelectricals.com
                                    </p>
                                 </div>
                              </div>
                           </div>

                           <div className="mt-8 pt-6 border-t border-gray-200">
                              <h4 className="font-semibold text-gray-900 mb-4">
                                 Business Hours
                              </h4>
                              <div className="space-y-2 text-sm text-gray-600">
                                 <div className="flex justify-between">
                                    <span>Monday - Friday:</span>
                                    <span>9:00 AM - 6:00 PM</span>
                                 </div>
                                 <div className="flex justify-between">
                                    <span>Saturday:</span>
                                    <span>9:00 AM - 2:00 PM</span>
                                 </div>
                                 <div className="flex justify-between">
                                    <span>Sunday:</span>
                                    <span>Closed</span>
                                 </div>
                              </div>
                           </div>

                           <div className="mt-6">
                              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                                 Get Quote
                              </Button>
                           </div>
                        </CardContent>
                     </Card>
                  </div>

                  {/* Google Maps */}
                  <div className="space-y-6">
                     <Card className="border-0 shadow-lg overflow-hidden">
                        <CardContent className="p-0">
                           <div className="aspect-[5/3] w-full h-40">
                              <iframe
                                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.423063752123!2d76.88520527525552!3d28.3762872758055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3f001190ebe7%3A0x4266c5adbf28382c!2sASK%20Electricals%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1756014141363!5m2!1sen!2sin"
                                 width="100%"
                                 height="100%"
                                 style={{ border: 0 }}
                                 allowFullScreen
                                 loading="lazy"
                                 referrerPolicy="no-referrer-when-downgrade"
                                 title="ASK Electricals Location"
                              ></iframe>
                           </div>
                        </CardContent>
                     </Card>

                     <Card className="border-0 shadow-lg">
                        <CardContent className="p-6">
                           <h4 className="font-semibold text-gray-900 mb-4">
                              Quick Contact Form
                           </h4>
                           <form className="space-y-4">
                              <div className="grid md:grid-cols-2 gap-4">
                                 <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                 />
                                 <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                 />
                              </div>
                              <input
                                 type="text"
                                 placeholder="Subject"
                                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              />
                              <textarea
                                 placeholder="Your Message"
                                 rows={4}
                                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                              ></textarea>
                              <Button
                                 type="submit"
                                 className="w-full bg-blue-600 hover:bg-blue-700"
                              >
                                 Send Message
                              </Button>
                           </form>
                        </CardContent>
                     </Card>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
