import React from 'react'
import { useTranslations } from 'next-intl'

function page() {
  const t = useTranslations("IndexPage");
  return (
    <div className='m-5 text-5xl'>
      {t('title')}
    </div>
  )
}

export default page
