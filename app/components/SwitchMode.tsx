'use client';
import React, { useState, useEffect, useCallback } from "react";
import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import {MoonIcon} from "./icons/MoonIcon";
import {SunIcon} from "./icons/SunIcon";
 
// Memorize the icons
const MemoSunIcon = React.memo(SunIcon);
const MemoMoonIcon = React.memo(MoonIcon);

const SwitchMode = () => {
  const [isMounted, setIsMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div>
      <Switch
        defaultSelected
        size="lg"
        color="primary"
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <MoonIcon className={className} />
          ) : (
            <SunIcon className={className} />
          )
        }
        isSelected={theme === 'dark'}
        onValueChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      />
      Dark mode
    </div>
  );
}

export default SwitchMode;


