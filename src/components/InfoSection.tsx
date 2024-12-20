"use client";
import { Ref, forwardRef, useState, ReactNode, useMemo } from "react";
import { Collections } from "@/interfaces/collections.model";
import SpecsSection from "./SpecsSection";
import TechnicalDataSection from "./TechnicalDataSection";
import resources from "@/../resources/resources2.json";
import InstructionsSection from "./InstructionsSection";
import DescriptionBanner from "./DescriptionBanner";
const buttonGroup = [
  "description",
  "specs",
  "instructions",
  "technical data",
  "benefits",
];
interface InfoSectionProps {
  props?: ReactNode;
  collection: Collections;
}
export const InfoSection = forwardRef(
  ({ collection, ...props }: InfoSectionProps, ref: Ref<HTMLDivElement>) => {
    const [activeButton, setActiveButton] = useState("description");

    const renderActiveButton = useMemo(() => {
      switch (activeButton) {
        case "description":
          return <DescriptionBanner collection={collection} />;
        case "specs":
          return <SpecsSection collection={collection} />;
        case "technical data":
          const resource = resources.filter((resource) =>
            resource.name.toLowerCase().includes(collection.name.toLowerCase())
          );
          return <TechnicalDataSection resources={resource} />;
        case "intructions":
          return <InstructionsSection />;
        default:
          return <DescriptionBanner collection={collection} />;
      }
    }, [activeButton, collection]);

    return (
      <div ref={ref}>
        <div className="flex justify-center gap-5">
          {buttonGroup.map((Button, index) => (
            <button
              key={index}
              className="link-dark my-20 capitalize"
              onClick={() => setActiveButton(Button)}
            >
              {Button}
            </button>
          ))}
        </div>
        {renderActiveButton}
      </div>
    );
  }
);
InfoSection.displayName = "InfoSection";
