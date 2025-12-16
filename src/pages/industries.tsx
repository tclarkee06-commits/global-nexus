import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Factory, Cpu, ShoppingBag, Heart, Truck, Package, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';

export default function IndustriesPage() {
  return (
    <div className="flex flex-col">
      <SEO 
        title="Industries We Serve - Global Business Solutions"
        description="Specialized consulting services for manufacturing, technology, consumer goods, healthcare, and logistics industries. Expert guidance for international expansion across 50+ countries."
        keywords="manufacturing consulting, technology exports, consumer goods distribution, healthcare logistics, international trade by industry"
      />
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=2000"
            alt="Industries we serve"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-gray-900/80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Industries We Serve
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Specialized shipping and logistics solutions for physical product industries
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Industry Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We bring sector-specific shipping and logistics knowledge to help your physical products reach global markets
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Manufacturing */}
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <Factory className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Manufacturing & Industrial</h3>
                <p className="text-muted-foreground mb-6">
                  Industrial equipment, machinery, automotive parts, and manufacturing operations requiring global shipping solutions.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Industrial equipment</li>
                  <li>• Heavy machinery</li>
                  <li>• Manufacturing components</li>
                  <li>• Industrial supplies</li>
                </ul>
                <Link to="/contact">
                  <Button variant="outline" className="w-full group">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Technology & Electronics */}
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <Cpu className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Technology & Electronics</h3>
                <p className="text-muted-foreground mb-6">
                  Hardware, semiconductors, and consumer electronics companies needing reliable international logistics.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Computer hardware</li>
                  <li>• Consumer electronics</li>
                  <li>• Semiconductors</li>
                  <li>• Tech accessories</li>
                </ul>
                <Link to="/contact">
                  <Button variant="outline" className="w-full group">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Retail & E-commerce */}
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <ShoppingBag className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Retail & E-commerce</h3>
                <p className="text-muted-foreground mb-6">
                  Physical product retailers, consumer goods, and e-commerce platforms with global distribution needs.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• E-commerce fulfillment</li>
                  <li>• Retail distribution</li>
                  <li>• Fashion & apparel</li>
                  <li>• Home goods</li>
                </ul>
                <Link to="/contact">
                  <Button variant="outline" className="w-full group">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Healthcare & Medical Devices */}
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Healthcare & Medical Devices</h3>
                <p className="text-muted-foreground mb-6">
                  Medical devices, equipment, and pharmaceutical products requiring specialized shipping and compliance.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Medical device shipping</li>
                  <li>• Pharmaceutical logistics</li>
                  <li>• Healthcare equipment</li>
                  <li>• Temperature-controlled transport</li>
                </ul>
                <Link to="/contact">
                  <Button variant="outline" className="w-full group">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Consumer Goods & FMCG */}
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <Package className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Consumer Goods & FMCG</h3>
                <p className="text-muted-foreground mb-6">
                  Fast-moving consumer goods, packaged products, and branded merchandise for global markets.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Food & beverage</li>
                  <li>• Personal care products</li>
                  <li>• Household goods</li>
                  <li>• Packaged consumer goods</li>
                </ul>
                <Link to="/contact">
                  <Button variant="outline" className="w-full group">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Automotive & Parts */}
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <Truck className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Automotive & Parts</h3>
                <p className="text-muted-foreground mb-6">
                  Automotive components, accessories, and aftermarket parts distribution worldwide.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Auto parts distribution</li>
                  <li>• Aftermarket accessories</li>
                  <li>• Vehicle components</li>
                  <li>• Automotive supplies</li>
                </ul>
                <Link to="/contact">
                  <Button variant="outline" className="w-full group">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Industry Expertise Matters */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">Why Shipping Expertise Matters</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Our deep understanding of international logistics and sector-specific shipping requirements ensures your products reach global markets safely and efficiently
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-5xl font-bold text-primary mb-3">10+</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Years in Shipping & Logistics</h3>
                <p className="text-muted-foreground">Specialized expertise</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-3">400+</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Distribution Partners</h3>
                <p className="text-muted-foreground">Global network</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-3">50+</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Countries Served</h3>
                <p className="text-muted-foreground">Global reach</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Shipping Solutions for Your Industry?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            We provide specialized logistics services for physical products across all industries. Contact us to discuss your specific shipping needs.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
