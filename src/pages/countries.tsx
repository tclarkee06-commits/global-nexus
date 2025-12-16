import { TrendingUp, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';

export default function CountriesPage() {
  const regions = [
    {
      name: 'Europe',
      description: 'Access the world\'s largest single market with 27 EU member states and strategic partners.',
      image: 'https://media.gettyimages.com/id/2193281953/photo/mid-adult-white-politician-holding-digital-tablet-near-governmetnal-building-and-using.jpg?b=1&s=2048x2048&w=0&k=20&c=M63D3QyYy7Kg_QCDBkLTkskoVCqh7snjQHBOqr63sEw=',
      countries: [
        { name: 'Germany', capital: 'Berlin', population: '83M', gdp: '$4.3T' },
        { name: 'France', capital: 'Paris', population: '67M', gdp: '$3.0T' },
        { name: 'United Kingdom', capital: 'London', population: '67M', gdp: '$3.1T' },
        { name: 'Italy', capital: 'Rome', population: '60M', gdp: '$2.1T' },
        { name: 'Spain', capital: 'Madrid', population: '47M', gdp: '$1.4T' },
        { name: 'Netherlands', capital: 'Amsterdam', population: '17M', gdp: '$1.0T' },
        { name: 'Poland', capital: 'Warsaw', population: '38M', gdp: '$688B' },
        { name: 'Belgium', capital: 'Brussels', population: '11M', gdp: '$594B' },
        { name: 'Sweden', capital: 'Stockholm', population: '10M', gdp: '$593B' },
        { name: 'Austria', capital: 'Vienna', population: '9M', gdp: '$477B' },
        { name: 'Ireland', capital: 'Dublin', population: '5M', gdp: '$504B' },
        { name: 'Denmark', capital: 'Copenhagen', population: '6M', gdp: '$398B' },
      ],
      opportunities: [
        'EU Single Market access',
        'Advanced manufacturing hub',
        'Strong consumer purchasing power',
        'Innovation and technology leadership',
      ],
    },
    {
      name: 'BRICS',
      description: 'Tap into the world\'s fastest-growing economies representing 40% of global population.',
      image: 'https://media.gettyimages.com/id/2203245206/photo/brazil-russia-india-china-and-south-africa-flag-print-screen-to-pawn-chess-on-the-world-for.jpg?b=1&s=2048x2048&w=0&k=20&c=xx1OjrmmnFIYwWn6WkK4X097QRZjPXUxWyJ5uXDECIk=',
      countries: [
        { name: 'Brazil', capital: 'Brasília', population: '215M', gdp: '$2.1T' },
        { name: 'Russia', capital: 'Moscow', population: '144M', gdp: '$2.2T' },
        { name: 'India', capital: 'New Delhi', population: '1.4B', gdp: '$3.7T' },
        { name: 'China', capital: 'Beijing', population: '1.4B', gdp: '$17.9T' },
        { name: 'South Africa', capital: 'Pretoria', population: '60M', gdp: '$405B' },
        { name: 'UAE', capital: 'Abu Dhabi', population: '10M', gdp: '$507B' },
        { name: 'Egypt', capital: 'Cairo', population: '104M', gdp: '$476B' },
        { name: 'Ethiopia', capital: 'Addis Ababa', population: '120M', gdp: '$156B' },
        { name: 'Iran', capital: 'Tehran', population: '87M', gdp: '$388B' },
      ],
      opportunities: [
        'Rapidly expanding middle class',
        'Infrastructure development boom',
        'Manufacturing and production hubs',
        'Emerging consumer markets',
      ],
    },
    {
      name: 'APAC',
      description: 'Connect with the Asia-Pacific region, home to the world\'s most dynamic economies.',
      image: 'https://media.gettyimages.com/id/2222819309/photo/global-investor-coding-business-ai-tools-on-a-digital-tablet-showcasing-the-creation-of.jpg?b=1&s=2048x2048&w=0&k=20&c=aXjMU6DcJo33eGKGvQ8_SPosMxNAif6HKE5PKHjx4Mg=',
      countries: [
        { name: 'Japan', capital: 'Tokyo', population: '125M', gdp: '$4.9T' },
        { name: 'South Korea', capital: 'Seoul', population: '52M', gdp: '$1.7T' },
        { name: 'Australia', capital: 'Canberra', population: '26M', gdp: '$1.7T' },
        { name: 'Indonesia', capital: 'Jakarta', population: '275M', gdp: '$1.3T' },
        { name: 'Thailand', capital: 'Bangkok', population: '70M', gdp: '$512B' },
        { name: 'Singapore', capital: 'Singapore', population: '6M', gdp: '$497B' },
        { name: 'Malaysia', capital: 'Kuala Lumpur', population: '33M', gdp: '$407B' },
        { name: 'Philippines', capital: 'Manila', population: '113M', gdp: '$404B' },
        { name: 'Vietnam', capital: 'Hanoi', population: '98M', gdp: '$409B' },
        { name: 'New Zealand', capital: 'Wellington', population: '5M', gdp: '$249B' },
      ],
      opportunities: [
        'Technology and innovation centers',
        'Strategic trade corridors',
        'Growing digital economy',
        'Manufacturing excellence',
      ],
    },
    {
      name: 'Middle East',
      description: 'Enter strategic markets at the crossroads of Europe, Asia, and Africa.',
      image: 'https://media.gettyimages.com/id/2192933924/photo/middle-eastern-businessmen-in-traditional-dress-discussing-over-smartphone-at-coffee-break.jpg?b=1&s=2048x2048&w=0&k=20&c=pN590mBa7tDtf-qMzzD2FzkpaQGh28QtceX_l7ta0Rw=',
      countries: [
        { name: 'Saudi Arabia', capital: 'Riyadh', population: '35M', gdp: '$1.1T' },
        { name: 'UAE', capital: 'Abu Dhabi', population: '10M', gdp: '$507B' },
        { name: 'Israel', capital: 'Jerusalem', population: '9M', gdp: '$525B' },
        { name: 'Qatar', capital: 'Doha', population: '3M', gdp: '$237B' },
        { name: 'Kuwait', capital: 'Kuwait City', population: '4M', gdp: '$185B' },
        { name: 'Oman', capital: 'Muscat', population: '5M', gdp: '$108B' },
        { name: 'Bahrain', capital: 'Manama', population: '2M', gdp: '$44B' },
        { name: 'Jordan', capital: 'Amman', population: '11M', gdp: '$50B' },
        { name: 'Lebanon', capital: 'Beirut', population: '7M', gdp: '$18B' },
      ],
      opportunities: [
        'Energy and infrastructure projects',
        'Financial services hub',
        'Tourism and hospitality growth',
        'Technology adoption leaders',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Countries We Serve - Global Market Access"
        description="Expert market entry and expansion services across 50+ countries in Europe, Asia-Pacific, Americas, Middle East, and Africa. Navigate international markets with confidence."
        keywords="international markets, global expansion, market entry services, country-specific consulting, international trade partners"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1920')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
              Global Market Access
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Countries & Commerce
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Expand your business into strategic markets across Europe, BRICS, Asia-Pacific, and the Middle East
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Countries Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4</div>
              <div className="text-sm text-muted-foreground">Key Regions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">$50T+</div>
              <div className="text-sm text-muted-foreground">Combined GDP</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5B+</div>
              <div className="text-sm text-muted-foreground">Total Population</div>
            </div>
          </div>
        </div>
      </section>

      {/* Regions Section */}
      {regions.map((region, index) => (
        <section key={region.name} className={`py-20 ${index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}>
          <div className="container mx-auto px-4">
            <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center mb-12`}>
              {/* Image */}
              <div className="lg:w-1/2">
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={region.image}
                    alt={region.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h2 className="text-4xl font-bold text-white mb-2">{region.name}</h2>
                    <p className="text-white/90 text-lg">{region.description}</p>
                  </div>
                </div>
              </div>

              {/* Opportunities */}
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-primary" />
                    Key Opportunities
                  </h3>
                  <div className="grid gap-4">
                    {region.opportunities.map((opportunity) => (
                      <div key={opportunity} className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                        </div>
                        <p className="text-lg">{opportunity}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Countries Grid */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MapPin className="h-6 w-6 text-primary" />
                Featured Countries
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {region.countries.map((country) => (
                  <Card key={country.name} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-bold mb-3">{country.name}</h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex justify-between">
                          <span>Capital:</span>
                          <span className="font-medium text-foreground">{country.capital}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Population:</span>
                          <span className="font-medium text-foreground">{country.population}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>GDP:</span>
                          <span className="font-medium text-foreground">{country.gdp}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Expand Into New Markets?
            </h2>
            <p className="text-xl text-white/90">
              Let us help you navigate the complexities of international expansion and connect you with the right partners in your target markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-white/10 hover:bg-white/20 text-white border-white/30">
                <Link to="/resources">Download Market Guide</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
