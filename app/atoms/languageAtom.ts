import { atom } from 'jotai';
import Cookies from 'js-cookie';

const initialLanguage = Cookies.get("language") || "ENG"; // Read from cookies or default to ENG

export const LanguageAtom = atom(initialLanguage);

// Utility function to change language with loading state
export const changeLanguageWithLoading = async (
  setLanguage: (lang: string) => void,
  setLoading: (loading: boolean) => void,
  newLanguage: string
) => {
  setLoading(true);
  
  try {
    // Set cookie
    Cookies.set("language", newLanguage, { path: '/' }); // Use js-cookie to set the cookie
    // Update atom
    setLanguage(newLanguage);
    // Add a small delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500));
  } finally {
    setLoading(false);
  }
};