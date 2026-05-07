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
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-cyan-accent text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Pricing</span>
        <h2 className="font-orbitron text-4xl font-bold text-white mb-6">Choose Your <span className="text-gradient">Plan</span></h2>
        <p className="text-gray-400 max-w-2xl">
          Simple, transparent pricing for every level of player. Upgrade your game today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex"
          >
            <Card 
              className={`p-8 flex flex-col gap-8 w-full transition-all duration-500 ${
                plan.recommended 
                ? "border-cyan-accent/40 shadow-[0_0_50px_rgba(0,245,212,0.1)] relative" 
                : "bg-card-bg/30"
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-cyan-accent rounded-full text-background text-[10px] font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(0,245,212,0.5)]">
                  Most Popular
                </div>
              )}

              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2 font-orbitron tracking-wide">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  <span className="text-sm text-gray-500 font-medium">/{plan.duration.split(" ")[1]}</span>
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
