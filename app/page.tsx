'use client';

import { useState, useEffect } from 'react';
import './styles.css';

function HeroTitle() {
  const [pixelIndices, setPixelIndices] = useState<Set<number>>(new Set());
  const title = 'The Superintelligence Cloud';

  useEffect(() => {
    const titleText = title;
    const swappableIndices: number[] = [];

    for (let i = 0; i < titleText.length; i++) {
      if (/[a-zA-Z0-9]/.test(titleText[i])) {
        swappableIndices.push(i);
      }
    }

    if (swappableIndices.length === 0) return;

    const updatePixels = () => {
      const newSwapped = new Set<number>();
      const numToSwap = Math.floor(Math.random() * 3) + 1;

      for (let i = 0; i < numToSwap; i++) {
        const randomIndex =
          swappableIndices[Math.floor(Math.random() * swappableIndices.length)];
        newSwapped.add(randomIndex);
      }

      setPixelIndices(new Set(newSwapped));
    };

    updatePixels();
    const interval = setInterval(updatePixels, 700 + Math.random() * 500);

    return () => clearInterval(interval);
  }, []);

  const renderTitle = () => {
    return title.split('').map((char, idx) => (
      <span
        key={idx}
        className={pixelIndices.has(idx) ? 'hero-title-pixel' : ''}
      >
        {char}
      </span>
    ));
  };

  return (
    <h1 className="h1-large _heroTitle_m4xpb_78">
      <span className="sr-only">The Superintelligence Cloud</span>
      <span aria-hidden="true" className="hero-title-wrapper">
        {renderTitle()}
      </span>
    </h1>
  );
}

export default function Page() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [activeHardwareIndex, setActiveHardwareIndex] = useState(0);

  const features = [
    {
      number: '01',
      title: 'You bring models. We bring the compute.',
      content: 'Get complete AI factories integrating high-density power, liquid cooling, and NVIDIA GPUs into one system designed for peak AI performance.',
    },
    {
      number: '02',
      title: 'Your supercomputer. Your rules.',
      content: 'Accelerate every stage of your AI lifecycle. Train foundation models and serve billions of tokens.',
    },
    {
      number: '03',
      title: 'Orchestration, handled.',
      content: 'Run large-scale AI workloads without the operational burden. We manage your clusters so you can focus on innovation.',
    },
    {
      number: '04',
      title: 'Experts included.',
      content: 'Co-engineer your workloads with the very people building the infrastructure behind the world\'s most advanced models.',
    },
  ];

  const hardware = [
    {
      name: 'NVIDIA VR200 NVL72',
      description: 'Rack-scale systems optimized for agentic AI.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VR200-npL0KOD6QTfuJzVfXXHztdwM2Q60tr.jpg',
    },
    {
      name: 'NVIDIA GB300 NVL72',
      description: 'Rack-scale systems optimized for AI reasoning',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gb300-BiVsjg2IyjjQLXKiTUIHV0coIpZ0q8.png',
    },
    {
      name: 'NVIDIA HGX B300',
      description: 'Peak performance per watt for the largest training runs',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B300-a4YiZ4FpHvfGcjWzB0O5BNhdS3XgEJ.png',
    },
    {
      name: 'NVIDIA HGX B200',
      description: 'Versatile fine-tuning and inference',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b200-1wBj2Y5P8kZw5ntlLe9slo3KzAyACJ.png',
    },
  ];

  const handleFeatureClick = (index: number) => {
    const isExpanded = expandedIndex === index;
    const isLocked = index === 0;

    if (isExpanded && isLocked) {
      return;
    }

    if (!isExpanded) {
      setExpandedIndex(index);
    } else {
      setExpandedIndex(-1);
    }
  };

  const handleHardwareClick = (index: number) => {
    if (activeHardwareIndex !== index) {
      setActiveHardwareIndex(index);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-xl pb-xl _homeHero_m4xpb_1 module-comp" id="section-home-hero">
        <div aria-hidden="true">
          <div className="_backgroundAnimation_15jea_2 hero-bg">
            <div style={{width:'100%',height:'100%'}} className="_animationContainer_15jea_14 _fadeIn_15jea_37">
              <div style={{position:'relative',width:'var(--unicorn-width)',height:'var(--unicorn-height)', ['--unicorn-width' as any]:'100%', ['--unicorn-height' as any]:'100%'}}></div>
            </div>
          </div>
        </div>

        <p className="_eyebrow_m4xpb_37">Supercomputers for training and inference</p>

        <h1 className="h1-large _reducedMotionTitle_m4xpb_75">
          <span>The Superintelligence <br /> Cloud</span>
        </h1>

        <h1 className="h1-large _heroTitle_m4xpb_78">
          <span className="sr-only">The Superintelligence Cloud</span>
          <span aria-hidden="true">
            The <span className="no-wrap">Superintelligence</span>
            <br/>Cloud
          </span>
        </h1>

        <div className="container _titleContainer_m4xpb_58">
          <div className="buttonGroup _buttonGroup_m4xpb_63" data-align="center">
            <a href="/sign-up" className="button" aria-label="Launch GPU instance">Launch GPU instance</a>
            <a href="/talk-to-our-team" className="button button--secondary" aria-label="Talk to our team">Talk to our team</a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="pt-xl pb-xl module-comp">
        <div className="container">
          <div className="stack--md">

            <div className="dark-mode titleBlock">
              <div className="grid-x grid-margin-x">
                <div className="cell small-12 medium-7">
                  <div>
                    <h2 className="h2">Built for AI. Ready for superintelligence.</h2>
                    <div className="content noContent"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid-x grid-margin-x">

              <div className="cell small-12 medium-7">
                <div className="accordion" id="features-accordion">

                  {features.map((feature, idx) => (
                    <div key={idx} className="accordionItem">
                      <div className="accordionItemNumberColumn">
                        <span className="h5" aria-hidden="true">{feature.number}</span>
                      </div>
                      <div className="accordionItemContentColumn">
                        <h3 className="accordionItemHeader">
                          <button 
                            type="button" 
                            className="accordionItemHeaderButton" 
                            aria-expanded={expandedIndex === idx ? 'true' : 'false'}
                            data-locked={idx === 0 ? 'true' : 'false'}
                            onClick={() => handleFeatureClick(idx)}
                          >
                            <span className="accordionItemTitle">{feature.title}</span>
                            <span className="accordionToggle" aria-hidden="true">{expandedIndex === idx ? '−' : '+'}</span>
                          </button>
                        </h3>
                        <div 
                          className={`accordionItemContent ${expandedIndex === idx ? 'accordionItemContentOpen' : ''}`}
                          role="region"
                          {...(expandedIndex !== idx && { inert: '' as any })}
                        >
                          <div className="accordionItemRich">
                            <div>{feature.content}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                </div>
              </div>

              <div className="cell small-12 medium-5">
                <div className="_animationContainer_1wr90_9" style={{position: 'relative', width: '100%', height: '100%', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%281%29-Uui1eTGqFzdW4ahxp69mNVbczaRmn7.png" alt="Lambda.ai Datacenter Architecture Blueprint" width="450" height="450" className="datacenter-blueprint-img"/>
                </div>
              </div>

            </div>

          </div>
        </div>
        <div className="sectionBorder"></div>
      </section>

      {/* Hardware Section */}
      <section className="hardwareSection">
        <div className="hardwareInner">

          <div className="hardwareTitleBlock">
            <div className="hardwareTitleLeft">
              <h2 className="hardwareHeading">The engines of<br/>superintelligence</h2>
            </div>
            <div className="hardwareTitleRight">
              <p className="hardwareSubtitle">Give your team the computational precision to train foundation models and serve inference at global scale.</p>
            </div>
          </div>

          <div className="hardwareAccordionItems" id="hardware-accordion-container">

            {hardware.map((item, idx) => (
              <button 
                key={idx}
                type="button" 
                className={`hardwareAccordionItem ${activeHardwareIndex === idx ? 'hardwareActive' : ''}`}
                aria-expanded={activeHardwareIndex === idx ? 'true' : 'false'}
                onClick={() => handleHardwareClick(idx)}
              >
                <div className="hardwareAccordionItemInner">
                  <div className={`hardwareAccordionImage ${activeHardwareIndex === idx ? 'hardwareActiveImage' : ''}`}>
                    <img src={item.image} alt={item.name} className="hardwareAccordionImg"/>
                  </div>
                  <div className={`hardwareAccordionTextContent ${activeHardwareIndex === idx ? 'hardwareActiveTextContent' : ''}`}>
                    <h3 className="hardwareAccordionItemTitle">{item.name}</h3>
                    <div className={`hardwareAccordionItemRichText ${activeHardwareIndex === idx ? 'hardwareActiveRichText' : ''}`}>{item.description}</div>
                  </div>
                </div>
                <div className={`hardwareAccordionItemIndicator ${activeHardwareIndex === idx ? 'hardwareActiveIndicator' : ''}`}></div>
              </button>
            ))}

          </div>
        </div>
      </section>
    </>
  );
}
