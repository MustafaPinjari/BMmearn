const fs = require('fs')
const { execSync } = require('child_process')

// 1. Prepare stats
const date = new Date().toISOString().slice(0,10)
const minutes = Math.floor(Math.random()*60)  // Example activity

const data = {
  date,
  terminalMinutes: minutes
}

const path = './contrib.json'
fs.writeFileSync(path, JSON.stringify(data, null, 2))

// Git commit and push
execSync('git config user.name "github-actions[bot]"')
execSync('git config user.email "github-actions[bot]@users.noreply.github.com"')
execSync(`git add ${path}`)
execSync(`git commit -m "chore: update daily stats for ${date}"`)
execSync('git push')
