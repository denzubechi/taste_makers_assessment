'use client';

import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { HardwareSection } from '@/components/HardwareSection';

export default function Page() {
  const features = [
    {
      id: 0,
      number: '01',
      title: 'You bring models. We bring the compute.',
      description: 'Get complete AI factories integrating high-density power, liquid cooling, and NVIDIA GPUs into one system designed for peak AI performance.',
      ctaText: 'Learn more',
    },
    {
      id: 1,
      number: '02',
      title: 'Your supercomputer. Your rules.',
      description: 'Train foundation models and serve billions of tokens on dedicated, single-tenant infrastructure.',
      ctaText: 'Learn more',
    },
    {
      id: 2,
      number: '03',
      title: 'Experts and orchestration included.',
      description: 'Managed clusters and co-engineering from the team building infrastructure for the largest AI labs.',
      ctaText: 'Learn more',
    },
    {
      id: 3,
      number: '04',
      title: 'Orchestration, handled.',
      description: 'Complete orchestration and management of your AI infrastructure.',
      ctaText: 'Learn more',
    },
  ];

  const hardwareProducts = [
    {
      id: 1,
      name: 'NVIDIA VR200 NVL72',
      description: 'Peak performance per watt for the largest training runs',
      progressColor: '#e7e6d9',
      progressWidth: 100,
    },
    {
      id: 2,
      name: 'NVIDIA GB300 NVL72',
      description: 'Peak performance per watt for the largest training runs',
      progressColor: '#e7e6d9',
      progressWidth: 100,
    },
    {
      id: 3,
      name: 'NVIDIA HGX B300',
      description: 'Peak performance per watt for the largest training runs',
      progressColor: '#6236f4',
      progressWidth: 100,
    },
    {
      id: 4,
      name: 'NVIDIA HGX B200',
      description: 'Peak performance per watt for the largest training runs',
      progressColor: '#e7e6d9',
      progressWidth: 100,
    },
  ];

  return (
    <main className="w-full bg-[#0b0b0b]">
      <HeroSection
        eyebrow="Supercomputers for training and inference"
        title="The Superintelligence Cloud"
        primaryButtonText="Launch GPU instance"
        secondaryButtonText="Talk to our team"
        onPrimaryClick={() => console.log('Primary button clicked')}
        onSecondaryClick={() => console.log('Secondary button clicked')}
      />

      <FeaturesSection
        heading="Built for AI. Ready for superintelligence."
        features={features}
      />

      <HardwareSection
        heading="The engines of superintelligence"
        description="Give your team the computational precision to train foundation models and serve inference at global scale."
        products={hardwareProducts}
      />
    </main>
  );
}
