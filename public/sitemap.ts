import xmlb from 'xmlbuilder2'
import lodash from 'lodash'

import candidates from '../src/data/candidats'

const root = xmlb.create({ version: '1.0', encoding: 'UTF-8' }).ele('urlset', {
  xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
})

const urls = [
  { loc: 'https://deputatvrn.ru', priority: '0.5' },
  { loc: 'https://deputatvrn.ru/area', priority: '0.5' },
  { loc: 'https://deputatvrn.ru/candidates', priority: '0.5' },
  { loc: 'https://deputatvrn.ru/parties', priority: '0.5' },
]

lodash.times(24, (number) => urls.push({ loc: `https://deputatvrn.ru/areas/${number + 1}`, priority: '0.5' }))
candidates.forEach((candidate) =>
  urls.push({ loc: `https://deputatvrn.ru/candidates/${candidate.alias}`, priority: '0.5' })
)

const sitemapObject = {
  url: urls,
}

root.ele(sitemapObject)

// convert the XML tree to string
const xml = root.end({ prettyPrint: true })
console.log(xml)
