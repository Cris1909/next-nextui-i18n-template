"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import { TranslationsProvider } from "./TranslationsProvider";

interface Props {
  children: React.ReactNode;
  locale: string;
  resources: any;
}

export const Providers: React.FC<Props> = ({ children, locale, resources }) => {
  return (
    <TranslationsProvider locale={locale} resources={resources}>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          {children}
        </NextThemesProvider>
      </NextUIProvider>
    </TranslationsProvider>
  );
};
