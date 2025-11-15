import { routing } from "@/i18n/routing";
import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import React from "react";

export default function LocaleSwitcher({ showLabel = false }: { showLabel?: boolean }) {
  const locale = useLocale();

  return (
    <div className='flex items-center gap-2'>
      <LocaleSwitcherSelect currentLocale={locale}>
      </LocaleSwitcherSelect>
    </div>
  );
}