import * as React from "react";
import { awards } from "@/lib/data";
import { Trophy } from "lucide-react";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";
import { motion } from "framer-motion";

export default function AwardsSection() {
  return (
    <section
      id="awards"
      className="py-12 bg-gradient-to-b from-background to-muted/10"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            🏆 Awards
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 gap-4">
          {awards.map((award, index) => (
            <div key={award.name}>
              <MotionWrapper delay={index * 0.1}>
                <GlassCard className="p-6 dark:border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
                  <div className="flex items-start mb-4">
                    <motion.div
                      whileHover={{ rotate: 20 }}
                      transition={{ type: "spring", stiffness: 500 }}
                      className="flex items-center justify-center bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full p-2 mr-3 mt-1 flex-shrink-0"
                    >
                      <Trophy className="h-5 w-5 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{award.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        🏢 {award.issuer}
                      </p>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {award.type}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </MotionWrapper>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
