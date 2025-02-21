import { CTA, FAQ, Feature, Hero, MarqueeLogos, Pricing, SocialProof, Testimonial } from '@/components/Home'

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <MarqueeLogos />
      <Feature />
      <Pricing />
      <Testimonial />
      <FAQ />
      <CTA />
    </>
  )
}
