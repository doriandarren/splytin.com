//import React from 'react';
import { useTranslations } from '../../i18n/utils';


/**
 * @param {{ lang: string, options: { code: string, label: string }[] }}
 */
export default function LangSelector({ lang, options }) {

  const t = useTranslations(lang);

  const handleChange = (e) => {
    e.preventDefault();
    const newLang = e.target.value;
    const path = window.location.pathname.split('/').slice(2).join('/');
    window.location.pathname = `/${newLang}/${path}`;
  };

  return (
    <select
      className="border rounded px-4 py-2 text-sm text-black bg-white dark:bg-gray-800 dark:text-white"
      onChange={handleChange}
      defaultValue={lang}
    >
      {options.map((opt) => (
        <option key={opt.code} value={opt.code}>{opt.label}</option>
      ))}
    </select>
  );
}
