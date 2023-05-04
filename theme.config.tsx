import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'

const config: DocsThemeConfig = {
  logo: (
      <>
        <img src={'https://www.worqhat.com/resources/WorqHat%20TM%20Logo.png'} width={130} height={130} alt={'WorqHat Logo'}></img>
      </>
  ),
  project: {
    link: 'https://github.com/WorqHat/WorqHat-API-Docs',
  },
  chat: {
    link: 'https://discord.com/invite/KHh9mguKBx',
  },
  docsRepositoryBase: 'https://github.com/WorqHat/WorqHat-API-Docs',
  footer: {
    text: '© 2023. Winlysis Pvt. Ltd., India All rights reserved.',
  },
}

export default config
