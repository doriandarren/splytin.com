import { useTranslations } from '../../i18n/utils';

/**
 * @param {{ lang: string, options: { code: string, label: string }[] }}
 */
export default function LangSelector({ lang, options }) {
  const t = useTranslations(lang);

  const handleChange = (e) => {
    const newLang = e.target.value;
    const [, , ...rest] = window.location.pathname.split('/');
    const path = rest.join('/');
    window.location.pathname = `/${newLang}/${path}`;
  };

  return (
    <select
      className="border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
      onChange={handleChange}
      defaultValue={lang}
    >
      {options.map((opt) => (
        <option key={opt.code} value={opt.code}>{opt.label}</option>
      ))}
    </select>
  );
}