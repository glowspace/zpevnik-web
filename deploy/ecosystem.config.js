module.exports = {
  apps: [
    {
      name: 'zpevnik',
      port: '3000',
      exec_mode: 'cluster',
      instances: process.env.N_INSTANCES || '1', // number of instances
      script: '.output_live/server/index.mjs'
    }
  ]
}
