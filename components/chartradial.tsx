"use client";

import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type CircularLoaderProps = {
  currentVal: number;
  totalVal: number;
  title?: string;
  description?: string;
  size?: "sm" | "md" | "lg" | "xl" | "xl2" | number; // number = pixels
  className?: string;
};

export function CircularLoader({
  currentVal,
  totalVal,
  title = "",
  description = "",
  size = "md",
  className = "",
}: CircularLoaderProps) {
  const percentage = totalVal > 0 ? (currentVal / totalVal) * 100 : 0;

  const sizeMap: Record<string, string> = {
    sm: "150px",
    md: "250px",
    lg: "350px",
    xl: "400px",
    xl2: "550px",
  };

  // Allow numeric size in px
  const resolvedSize =
    typeof size === "number" ? `${size}px` : sizeMap[size] || sizeMap["md"];

  return (
    <div
      className={`flex flex-col items-center ${className}`}
      style={{ maxWidth: resolvedSize }}
    >
      {title && <h2 className="font-semibold text-lg">{title}</h2>}
      {description && <p className="text-sm text-gray-500">{description}</p>}

      <CircularProgressbar
        value={percentage}
        text={`${currentVal}/${totalVal}`}
        styles={buildStyles({
          textSize: "14px",
          pathColor: "var(--chart-2)",
          textColor: "var(--foreground)",
          trailColor: "var(--muted)",
        })}
      />
    </div>
  );
}
