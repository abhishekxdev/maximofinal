import HeroSection from '@/components/hero-section'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowRight, Target, Shield, Users, Zap } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'

// Dynamically import components that use client-side features with proper error handling
const AppleCardsCarousel = dynamic(
  () => import('@/components/ui/apple-cards-carousel').then((mod) => ({ default: mod.AppleCardsCarousel })), 
  { 
    ssr: false,
    loading: () => <div className="h-48 sm:h-64 md:h-80 lg:h-96 animate-pulse bg-gray-200 rounded-lg"></div>
  }
)

const WhyChooseUsBento = dynamic(
  () => import('@/components/why-choose-us-bento').then((mod) => ({ default: mod.WhyChooseUsBento })), 
  { 
    ssr: false,
    loading: () => <div className="h-48 sm:h-64 md:h-80 lg:h-96 animate-pulse bg-gray-200 rounded-lg"></div>
  }
)

const IndustriesBentoGrid = dynamic(
  () => import('@/components/industries-bento-grid').then((mod) => ({ default: mod.IndustriesBentoGrid })),
  {
    ssr: false,
    loading: () => <div className="h-96 bg-muted/50 rounded-lg animate-pulse" />
  }
)

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Services Overview with Apple Cards Carousel */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 section-bg">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 space-y-4 sm:space-y-6">
            <Badge variant="outline" className="mb-2 sm:mb-4">Our Services</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight tracking-tight mb-4 sm:mb-6 bg-gradient-to-r from-purple-900 to-indigo-600 bg-clip-text text-transparent">
              Comprehensive Business Solutions
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From data collection and processing to tele sales and customer support, we provide end-to-end business solutions to drive your growth and efficiency.
            </p>
          </div>
          
          <AppleCardsCarousel
            items={[
              {
                id: 1,
                title: "Data Collection",
                description: "Comprehensive data gathering services from multiple sources to build robust datasets for your AI and machine learning projects.",
                features: ["Multi-source Collection", "Quality Validation", "Structured Formatting"],
                image: "/datacollection.jpeg"
              },
              {
                id: 2,
                title: "Data Entry",
                description: "Accurate and efficient manual data entry services to digitize and organize your business information.",
                features: ["Manual Entry", "Double Verification", "Error Checking"],
                image: "/dataentry.jpeg"
              },
              {
                id: 3,
                title: "Data Annotation",
                description: "Precise labeling and annotation services for images, videos, text, and audio to train your AI models.",
                features: ["Image & Video", "Text & Audio", "Quality Assurance"],
                image: "/textan.jpeg"
              },
              {
                id: 4,
                title: "Data Cleansing",
                description: "Thorough data cleaning and validation services to ensure high-quality, accurate datasets.",
                features: ["Duplicate Removal", "Format Standardization", "Validation Checks"],
                image: "/datacleaning.jpeg"
              },
              {
                id: 5,
                title: "Data Processing",
                description: "Advanced data processing and transformation services to prepare your data for analysis and AI applications.",
                features: ["ETL Processing", "Data Transformation", "Performance Optimization"],
                image: "/dataprocessing.jpeg"
              },
              {
                id: 6,
                title: "Tele Sales",
                description: "Professional telemarketing and sales support services to drive your business growth and customer acquisition.",
                features: ["Lead Generation", "Sales Conversion", "Customer Outreach"],
                image: "/telesales.jpeg"
              },
              {
                id: 7,
                title: "Customer Support",
                description: "24/7 customer service solutions to enhance customer experience and satisfaction across all channels.",
                features: ["Multi-channel Support", "Technical Assistance", "Live Chat Services"],
                image: "/team.jpeg"
              },
              {
                id: 8,
                title: "Surveillance Monitoring",
                description: "Advanced surveillance and security monitoring services for enhanced safety and threat detection.",
                features: ["Real-time Monitoring", "Threat Detection", "Incident Response"],
                image: "/survilleance.jpeg"
              }
            ]}
          />
        </div>
      </section>

      {/* Other Industries Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 section-bg">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 space-y-4 sm:space-y-6">
            <Badge variant="outline" className="mb-2 sm:mb-4">Other Industries</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight tracking-tight mb-4 sm:mb-6 bg-gradient-to-r from-purple-900 to-indigo-600 bg-clip-text text-transparent">
              Industries We Also Serve
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We empower a wide range of industries with specialized data annotation and business process services tailored to unique requirements.
            </p>
          </div>
          <IndustriesBentoGrid />
          <div className="flex justify-center mt-8">
            <Button asChild size="lg" variant="outline" className="rounded-full border-gray-300 text-gray-900 hover:bg-gray-100 shadow-md min-h-[48px]">
              <Link href="/industries">View All Industries</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us with Bento Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 section-bg">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 space-y-4 sm:space-y-6">
            <Badge variant="outline" className="mb-2 sm:mb-4">Why Choose Maximo</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight tracking-tight mb-4 sm:mb-6 bg-gradient-to-r from-purple-900 to-indigo-600 bg-clip-text text-transparent">
              Built for Precision and Scale
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our expertise and commitment to quality make us the preferred partner for AI data preparation.
            </p>
          </div>
          
          <WhyChooseUsBento />
        </div>
      </section>

      {/* CTA Section - Mobile Responsive */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 section-bg">
        <div className="container mx-auto px-4 sm:px-6 flex justify-center">
          <div className="w-full max-w-2xl rounded-2xl sm:rounded-3xl shadow-xl border border-gray-200 bg-white/90 p-6 sm:p-8 md:p-12 text-center flex flex-col items-center space-y-6 sm:space-y-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight tracking-tight mb-4 sm:mb-6 bg-gradient-to-r from-purple-900 to-indigo-600 bg-clip-text text-transparent">
              Ready to Transform Your AI Projects?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Join leading companies who trust Maximo Solutions for their data annotation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full">
              <Button asChild size="lg" variant="default" className="text-sm sm:text-base md:text-lg px-6 sm:px-8 w-full sm:w-auto rounded-full shadow-md min-h-[48px]">
                <Link href="/contact">Get Started Today</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-sm sm:text-base md:text-lg px-6 sm:px-8 w-full sm:w-auto rounded-full border-gray-300 text-gray-900 hover:bg-gray-100 shadow-md min-h-[48px]">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}