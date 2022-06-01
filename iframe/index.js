import { iframeResize } from 'iframe-resizer'

// const script =
//   document.getElementById('mon-impact-transport') ||
//   document.getElementById('datagir-teletravail') ||
//   document.getElementById('ecolab-transport')

const script = document.createElement('script')

const domain = script.dataset.domain
const search = script.dataset.search || ''
const source = window.location.href.toString()

const src = `${domain || 'https://dev.flockeo.com/app/co2-calculator/v2'}/${search}${
  search && search.includes('?') ? '&' : '?'
}iframe=1&source=${source}`

const iframe = document.createElement('iframe')

const iframeAttributes = {
  src,
  style: 'border: none; width: 100%; display: block; margin: 0 auto;',
  allowfullscreen: true,
  webkitallowfullscreen: true,
  mozallowfullscreen: true,
}
for (var key in iframeAttributes) {
  iframe.setAttribute(key, iframeAttributes[key])
}
iframeResize({}, iframe)

// script.parentNode.insertBefore(iframe, script)
document.body.appendChild(iframe)
document.body.appendChild(script)
