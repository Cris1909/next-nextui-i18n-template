"use client";

import { LanguageChanger, ThemeSwitcher } from "@/components";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation(); // Client-side use example

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid gap-2">
        <h1>{t("test")}</h1>
        <LanguageChanger />
        <ThemeSwitcher />
      </div>
    </main>
  );
}
