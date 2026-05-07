"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { Check, Info } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$14.99",
    duration: "Per Month",
    features: ["Access to 1 Game", "Standard ESP", "Basic Recoil Control", "24/7 Discord Support", "Daily Updates"],
    recommended: false,
  },
  {
    name: "Premium",
    price: "$29.99",
    duration: "Per Month",
    features: ["Access to 3 Games", "Advanced Aimbot", "Stream Proof ESP", "Priority Support", "Private Bypass", "Cloud Settings"],
    recommended: true,
  },
  {
    name: "Elite",
    price: "$49.99",
    duration: "Per Month",
    features: ["All Games Access", "Full Feature Set", "External Injection", "Dedicated Account Manager", "Custom Script Support", "Beta Access"],
    recommended: false,
  },
];

export default function Pricing() {
  return (
    <SectionWrapper id="pricing">
      <div className="flex flex-col items-center text-center mb-16 px-4">
        <span className="text-cyan-accent text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Pricing</span>
        <h2 className="font-orbitron text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">Choose Your <span className="text-gradient">Plan</span></h2>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl">
          Simple, transparent pricing for every level of player. Upgrade your game today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 max-w-6xl mx-auto items-stretch pt-12">
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`flex ${plan.recommended ? "z-20 scale-100 md:scale-105" : "z-10"}`}
          >
            <Card 
              overflowVisible={plan.recommended}
              className={`p-6 sm:p-8 flex flex-col gap-8 w-full transition-all duration-500 ${
                plan.recommended 
                ? "border-cyan-accent/50 shadow-[0_0_50px_rgba(0,245,212,0.15)] bg-card-bg/40" 
                : "bg-card-bg/20 border-white/5"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-cyan-accent rounded-full text-background text-[11px] font-bold uppercase tracking-[0.15em] shadow-[0_0_30px_rgba(0,245,212,0.6)] whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <div className="text-center">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 font-orbitron tracking-wide">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl md:text-4xl font-black text-white">{plan.price}</span>
                  <span className="text-xs md:text-sm text-gray-500 font-medium">/{plan.duration.split(" ")[1]}</span>
                </div>
              </div>

              <div className="space-y-4 flex-grow">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-cyan-accent/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-cyan-accent" />
                    </div>
                    <span className="text-sm text-gray-400 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-white/5 space-y-4">
                <Button 
                  variant={plan.recommended ? "primary" : "secondary"} 
                  className="w-full"
                >
                  Get Started
                </Button>
                <div className="flex items-center justify-center gap-2 text-[10px] text-gray-500 font-bold uppercase tracking-widest cursor-help hover:text-gray-400 transition-colors">
                  <Info className="w-3 h-3" />
                  View Plan Details
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
