import { useState, useEffect, useRef } from 'react';

/**
 * @param {{ lang: string, options: { code: string, label: string, icon: string }[] }}
 */
export default function LangSelector({ lang, options }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef(null);

  const current = options.find(o => o.code === lang);

  const handleClickOutside = (e) => {
    if (toggleRef.current && !toggleRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (code) => {
    const [, , ...rest] = window.location.pathname.split('/');
    const path = rest.join('/');
    window.location.pathname = `/${code}/${path}`;
  };

  return (
    <div className="relative inline-block text-left" ref={toggleRef}>
      <button
        className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={current.icon} alt={current.label} className="w-5 h-5" />
        {current.label}
        <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.197l3.71-3.965a.75.75 0 011.08 1.04l-4.25 4.54a.75.75 0 01-1.08 0l-4.25-4.54a.75.75 0 01.02-1.06z" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-44 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
            {options.map(({ code, label, icon }) => (
              <li key={code}>
                <button
                  className="flex items-center w-full gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  onClick={() => handleChange(code)}
                >
                  <img src={icon} alt={`${label} flag`} className="w-5 h-5" />
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
