import React from "react";

export function Slider({ defaultValue = [0, 1000], max = 2000, step = 50 }) {
    return (
        <input
            type="range"
            min="0"
            max={max}
            step={step}
            defaultValue={defaultValue[1]}
            className="w-full accent-blue-500"
        />
    );
}