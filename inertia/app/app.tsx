/// <reference path="../../adonisrc.ts" />
/// <reference path="../../config/inertia.ts" />

import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

import { Providers } from '@/components/providers'
import { APP_NAME } from '@/lib/constants'
import '../css/app.css'

createInertiaApp({
  progress: { color: '#5468FF' },

  title: (title) => `${title} - ${APP_NAME}`,

  resolve: (name) => {
    return resolvePageComponent(`../pages/${name}.tsx`, import.meta.glob('../pages/**/*.tsx'))
  },

  setup({ el, App, props }) {
    createRoot(el).render(
      <Providers>
        <App {...props} />
      </Providers>
    )
  },
})
