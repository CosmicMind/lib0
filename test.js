
import { runTests } from './testing.js'
import * as logging from './logging.test.js'
import * as string from './string.test.js'
import * as encoding from './encoding.test.js'
import * as diff from './diff.test.js'
import * as testing from './testing.test.js'
import * as indexeddb from './indexeddb.test.js'
import * as prng from './prng.test.js'
import * as log from './logging.js'
import { isBrowser } from './environment.js'

if (isBrowser) {
  log.createVConsole(document.body)
}

runTests({ logging, string, encoding, diff, testing, indexeddb, prng })
