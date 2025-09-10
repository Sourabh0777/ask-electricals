export function Footer() {
  const footerSections = [
   //  {
   //    title: "About ASK Electricals",
   //    links: ["History & Milestones", "Advisors", "Careers", "Events", "Press & News", "Certifications", "Careers"],
   //  },
    {
      title: "Products",
      links: ["Fan Cooler Motors", "Air Conditioner Motors", "Chimney Motors", "Custom Motor Solutions", "LED"],
    },
   //  {
   //    title: "Downloads",
   //    links: ["Price Lists", "Technical Manuals", "Catalogues", "Certificates", "Sign Up for Newsletter"],
   //  },
   //  {
   //    title: "Support",
   //    links: ["Customer Care", "Warranties", "Service Centers", "Feedback"],
   //  },
  ];

  return (
    <footer className="bg-white border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo Section */}
          <div className="lg:col-span-1">
            <div className="text-primary font-bold text-xl mb-4">Ask Elctricals</div>
            <p className="text-sm text-muted-foreground">Empowering your dreams with innovative electrical solutions.</p>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Ask Elctricals Electricals Pvt. Ltd. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
