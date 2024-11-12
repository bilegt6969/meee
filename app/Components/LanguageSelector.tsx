'use client'

import { useRouter } from 'next/navigation'

export default function LanguageSelector() {
  const router = useRouter()

  const setLanguage = (lang: string) => {
    document.cookie = `language=${lang};path=/`
    router.refresh()
  }

  return (
    <div>
      <button onClick={() => setLanguage('MNG')}>MNG</button>
      <button onClick={() => setLanguage('ENG')}>ENG</button>
    </div>
  )
} 