'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronLeft, ChevronRight, Menu, X, Check } from 'lucide-react'
import Link from 'next/link'
import Background from '@/components/bg/BAckground'
import AuraBackground from '@/components/bg/BAckground'


export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const testimonials = [
    { name: "John Doe", role: "CEO, TechCorp", content: "Context framing revolutionized our approach to problem-solving." },
    { name: "Jane Smith", role: "Marketing Director, InnovateCo", content: "This tool has been a game-changer for our strategic planning." },
    { name: "Alex Johnson", role: "Product Manager, FutureTech", content: "I can't imagine tackling complex projects without context framing now." },
  ]

  const features = [
    { title: "Holistic Perspective", description: "Gain a comprehensive view of your challenges and opportunities." },
    { title: "Strategic Alignment", description: "Ensure all stakeholders are on the same page with clear context." },
    { title: "Enhanced Decision Making", description: "Make informed choices based on a well-defined contextual framework." },
    { title: "Improved Communication", description: "Articulate complex ideas more effectively across your organization." },
  ]

  const faqItems = [
    { question: "What is context framing?", answer: "Context framing is a technique used to structure and understand complex situations by defining their boundaries, key elements, and relationships." },
    { question: "How can context framing benefit my organization?", answer: "It can improve decision-making, align teams on goals, and provide a clearer understanding of challenges and opportunities." },
    { question: "Is context framing difficult to implement?", answer: "With the right tools and guidance, context framing can be easily integrated into your existing processes." },
  ]

  return (
    
      <div className="min-h-screen flex flex-col text-black">
        <AuraBackground />
        <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-primary">ContextFrame</Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</Link>
              <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Testimonials</Link>
              <Link href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</Link>
              <Link href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</Link>
            </nav>
            <Button className="hidden md:inline-flex bg-primary text-black hover:bg-primary/90"><Link href="/abc">Get Started</Link></Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(true)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </header>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween' }}
              className="fixed inset-y-0 right-0 w-full sm:w-80 bg-white shadow-lg z-50 p-4"
            >
              <div className="flex justify-end">
                <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <nav className="flex flex-col space-y-4 mt-8">
                <Link href="#features" className="text-lg hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Features</Link>
                <Link href="#testimonials" className="text-lg hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Testimonials</Link>
                <Link href="#pricing" className="text-lg hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
                <Link href="#faq" className="text-lg hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
                <Button className="mt-4 bg-primary text-black hover:bg-primary/90" onClick={() => setIsMenuOpen(false)}>Get Started</Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        <main>
          <section className="container mx-auto px-4 py-24 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Frame Your Context, <span className="text-primary">Shape Your Success</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl mb-8 text-gray-600"
            >
              Empower your decision-making with our innovative context framing tools.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button size="lg" className="mr-4 bg-primary text-blacck hover:bg-primary/90">Start Framing</Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">Learn More</Button>
            </motion.div>
          </section>

          <section id="features" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Why Choose ContextFrame?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-2 text-primary">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section id="testimonials" className="py-24">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
              <div className="relative max-w-3xl mx-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="bg-whit p-8 rounded-lg shadow-lg text-center"
                  >
                    <p className="text-lg mb-4 italic">"{testimonials[currentTestimonial].content}"</p>
                    <p className="font-semibold text-primary">{testimonials[currentTestimonial].name}</p>
                    <p className="text-sm text-gray-600">{testimonials[currentTestimonial].role}</p>
                  </motion.div>
                </AnimatePresence>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full"
                  onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full"
                  onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </section>

          <section id="pricing" className="py-24 ">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {['Basic', 'Pro', 'Enterprise'].map((plan, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="text-center h-full">
                      <CardContent className="p-6">
                        <h3 className="text-2xl font-bold mb-4 text-primary">{plan}</h3>
                        <p className="text-4xl font-bold mb-6">${(index + 1) * 19}<span className="text-lg font-normal text-gray-600">/mo</span></p>
                        <ul className="text-left mb-6">
                          {[...Array(3 + index)].map((_, i) => (
                            <li key={i} className="flex items-center mb-2">
                              <Check className="h-5 w-5 text-primary mr-2" />
                              <span className="text-gray-600">Feature {i + 1}</span>
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full bg-primary text-black hover:bg-primary/90">Choose {plan}</Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section id="faq" className="py-24">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="max-w-2xl mx-auto">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-600">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          <section className="bg-primary text-black py-24">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Approach?</h2>
              <p className="text-xl mb-8">Start framing your context and unlock new possibilities today.</p>
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">Get Started Now</Button>
            </div>
          </section>
        </main>

        <footer className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold mb-4 text-primary">Product</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-gray-600 hover:text-primary transition-colors">Features</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-primary transition-colors">Pricing</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-primary transition-colors">Use Cases</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-primary">Company</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-gray-600 hover:text-primary transition-colors">About Us</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-primary transition-colors">Careers</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-primary transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-primary">Resources</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-gray-600 hover:text-primary transition-colors">Blog</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-primary transition-colors">Documentation</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-primary transition-colors">Community</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-primary">Legal</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-gray-600 hover:text-primary transition-colors">Privacy Policy</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-primary transition-colors">Terms of Service</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-primary transition-colors">Cookie Policy</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 text-center text-gray-600">
              <p>&copy; {new Date().getFullYear()} ContextFrame. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
   
  )
}