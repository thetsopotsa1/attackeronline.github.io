import('https://open.fpjs.io')
  .then(m=>m.load({apiKey:'sIr9k1LhQgendgYm1jcc',region:'eu',disableTls:true}))
  .then(fp=>fp.get())
  .then(r=>fetch('./loot?data='+encodeURIComponent(r.visitorId)));