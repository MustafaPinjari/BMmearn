/**
 * Hourly contribution updater
 * Repo: BMmearn
 * Author: Mustafa Pinjari
 */

const fs = require("fs")

const FILE = "contrib.json"

// Current timestamp
const now = new Date()
const entry = {
  timestamp: now.toISOString(),
  hour: now.getUTCHours(),
  note: "Hourly activity update"
}

// Load existing data
let data = []
if (fs.existsSync(FILE)) {
  data = JSON.parse(fs.readFileSync(FILE, "utf8"))
}

// Push new entry
data.push(entry)

// Keep file size sane (last 500 entries)
data = data.slice(-500)

// Write back
fs.writeFileSync(FILE, JSON.stringify(data, null, 2))
