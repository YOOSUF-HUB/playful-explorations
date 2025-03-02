
import React from "react";
import { Package, ShippingBag, Warehouse, Factory, BarChart, Tag, List, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header/Navigation */}
      <header className="w-full bg-[#222222] text-white py-4 px-6 md:px-12">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-r from-[#F2FCE2] to-[#FDE1D3] flex items-center justify-center">
              <Package className="h-5 w-5 text-[#222222]" />
            </div>
            <h1 className="text-xl font-bold">TextileHub</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#features" className="hover:text-[#FDE1D3] transition-colors">Features</a>
            <a href="#solutions" className="hover:text-[#FDE1D3] transition-colors">Solutions</a>
            <a href="#testimonials" className="hover:text-[#FDE1D3] transition-colors">Testimonials</a>
            <a href="#pricing" className="hover:text-[#FDE1D3] transition-colors">Pricing</a>
          </nav>
          <Button className="bg-[#F2FCE2] text-[#222222] hover:bg-[#FDE1D3]">Get Started</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#222222] to-[#403E43] text-white py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Streamline Your Textile & Garment Operations
              </h1>
              <p className="text-lg text-gray-300">
                Manage inventory, production, and supply chain processes with our comprehensive management system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#F2FCE2] text-[#222222] hover:bg-[#FDE1D3]">
                  Request Demo
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-64 h-64 bg-[#FDE1D3]/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#F2FCE2]/20 rounded-full blur-3xl"></div>
                <div className="w-full h-80 bg-[#222222] rounded-lg border border-gray-700 p-6 relative z-10">
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="text-lg font-medium">Inventory Dashboard</h3>
                    <Tag className="h-5 w-5 text-[#FDE1D3]" />
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-700 rounded-full w-full"></div>
                    <div className="h-4 bg-gray-700 rounded-full w-3/4"></div>
                    <div className="h-20 bg-gray-700/50 rounded-lg w-full"></div>
                    <div className="flex gap-2">
                      <div className="h-8 bg-[#F2FCE2] rounded-md w-24 flex items-center justify-center">
                        <span className="text-xs font-medium text-[#222222]">Production</span>
                      </div>
                      <div className="h-8 bg-[#FDE1D3] rounded-md w-24 flex items-center justify-center">
                        <span className="text-xs font-medium text-[#222222]">Inventory</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-[#F1F1F1]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#222222]">Powerful Features</h2>
            <p className="text-[#555555] mt-4 max-w-2xl mx-auto">
              Designed to enhance efficiency across your entire textile and garment operation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Warehouse className="h-6 w-6" />,
                title: "Inventory Management",
                description: "Track raw materials, work-in-progress items, and finished goods in real-time."
              },
              {
                icon: <Factory className="h-6 w-6" />,
                title: "Production Planning",
                description: "Schedule and monitor production cycles with intelligent forecasting."
              },
              {
                icon: <ShippingBag className="h-6 w-6" />,
                title: "Supply Chain Tracking",
                description: "Manage suppliers, shipments, and procurement in one unified platform."
              },
              {
                icon: <BarChart className="h-6 w-6" />,
                title: "Analytics & Reporting",
                description: "Gain insights with customizable dashboards and comprehensive reports."
              },
              {
                icon: <Tag className="h-6 w-6" />,
                title: "Quality Control",
                description: "Implement quality checks at every stage of production."
              },
              {
                icon: <List className="h-6 w-6" />,
                title: "Order Management",
                description: "Process customer orders, track fulfillment, and manage returns efficiently."
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-[#F2FCE2] rounded-lg flex items-center justify-center mb-4">
                  <div className="text-[#222222]">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-[#222222] mb-2">{feature.title}</h3>
                <p className="text-[#555555]">{feature.description}</p>
                <div className="mt-4 flex items-center text-[#403E43] font-medium">
                  <span>Learn more</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#222222] text-white py-16">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Textile Business?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Join hundreds of manufacturers, wholesalers, and retailers who have streamlined their operations with TextileHub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#F2FCE2] text-[#222222] hover:bg-[#FDE1D3]">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#333333] text-gray-300 py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold mb-4">TextileHub</h3>
              <div className="space-y-2">
                <p>About Us</p>
                <p>Careers</p>
                <p>Contact</p>
                <p>Blog</p>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Product</h3>
              <div className="space-y-2">
                <p>Features</p>
                <p>Pricing</p>
                <p>Integrations</p>
                <p>Updates</p>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Resources</h3>
              <div className="space-y-2">
                <p>Documentation</p>
                <p>Tutorials</p>
                <p>Webinars</p>
                <p>Help Center</p>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Legal</h3>
              <div className="space-y-2">
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Security</p>
                <p>Compliance</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p>© 2024 TextileHub. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                <span className="sr-only">Twitter</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                <span className="sr-only">GitHub</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
