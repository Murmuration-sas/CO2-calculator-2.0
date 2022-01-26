import { iframeResize } from 'iframe-resizer'

const script =
  document.getElementById('mon-impact-transport') ||
  document.getElementById('ecolab-transport')

const domain = script.dataset.domain
const search = script.dataset.search
const source = window.location.href.toString()

const src = `${domain || 'https://monimpacttransport.fr'}/${search}${
  search && search.includes('?') ? '&' : '?'
}source=${source}&iframe=1`

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

script.parentNode.insertBefore(iframe, script)
