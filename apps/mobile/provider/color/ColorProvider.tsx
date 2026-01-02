'use client';
import { MOBILE_DEFAULT_THEME } from '@acme/constants';
import type { ColorTheme } from '@acme/types';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ColorContext } from './ColorContext';

export const ColorProvider = ({ children }: { children: React.ReactNode }) => {
  const [colors, setColors] = useState<ColorTheme>(MOBILE_DEFAULT_THEME);
  // Load saved theme on mount
  useEffect(() => {
    loadTheme();
  }, []);
  // Save theme when changed
  useEffect(() => {
    saveTheme(colors);
  }, [colors]);
  const loadTheme = async () => {
    try {
      const savedTheme = await AsyncStorage.getItem('app-theme');
      if (savedTheme) {
        setColors(JSON.parse(savedTheme));
      }
    } catch (error) {
      console.log('Error loading theme:', error);
    }
  };
  const saveTheme = async (theme: ColorTheme) => {
    try {
      await AsyncStorage.setItem('app-theme', JSON.stringify(theme));
    } catch (error) {
      console.log('Error saving theme:', error);
    }
  };
  return (
    <ColorContext.Provider value={{ colors, setColors }}>
      {children}
    </ColorContext.Provider>
  );
};
