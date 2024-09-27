import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import EnhancedAuraBackground from "@/components/bg/BAckground";

export default function TextHoverEffectDemo() {
  return (
    <div className="items-center bg-black justify-center">
        <EnhancedAuraBackground />
      <TextHoverEffect text="BSDK HO TUM" duration={450} />
    </div>
  );
}
