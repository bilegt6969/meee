import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { LanguageAtom } from '@/app/atoms/languageAtom';
import { cookies } from 'next/headers';

interface MyAppProps {
  Component: React.ComponentType<any>;
  pageProps: any;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  const [Language, setLanguage] = useAtom(LanguageAtom);

  useEffect(() => {
    const fetchLanguage = async () => {
      const cookieStore = cookies();
      const currentLanguage = (await cookieStore).get("language")?.value ?? "ENG"; // Default to ENG
      setLanguage(currentLanguage);
    };
    fetchLanguage();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp; 