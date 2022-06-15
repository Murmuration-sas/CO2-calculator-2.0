import React from 'react'

import Share from 'components/layout/Share'

export default function ShareWrapper(props) {
  const { t } = ri18n.useTranslation()

  return (
    <Share
      small={props.small}
      messages={{
        mail: {
          simulator: {
            subject: t('shareWrapper.mail.simulator.subject'),
            body: t('shareWrapper.mail.simulator.body')
          },
          result: {
            subject: t('shareWrapper.mail.result.subject'),
            body: t('shareWrapper.mail.result.body')
          },
        },
        facebook: {
          simulator: {
            quote: t('shareWrapper.default.simulator')
          },
          result: {
            quote: t('shareWrapper.default.result')
          },
        },
        twitter: {
          simulator: {
            title: t('shareWrapper.default.simulator')
          },
          result: {
            title: t('shareWrapper.default.result')
          },
        },
        linkedin: {
          simulator: {
            source: 'Mon Impact Transport',
          },
          result: {
            source: `Mon Impact Transport`,
          },
        },
        whatsapp: {
          simulator: {
            title: t('shareWrapper.default.simulator')
          },
          result: {
            title: t('shareWrapper.default.result')
          },
        },
      }}
    />
  )
}
