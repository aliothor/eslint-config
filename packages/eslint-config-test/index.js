import { readFile } from 'node:fs/promises'

function mkNewDir() {
  return new Promise((resolve, reject) => {
    reject(new Error('test'))
  })
}
