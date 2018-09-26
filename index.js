'use strict'

const glob = require('glob')
const fs = require('fs')
const mergejson = require('mergejson')
const jsYaml = require('js-yaml')
const EventEmitter = require('events')

class YamlMerger extends EventEmitter {
  merge (sources) {
    const files = [].concat.apply([], sources.map(g => glob.sync(g, {nodir: true})))

    this.emit('files', files)

    let jsonConfigs = []
    for (var i = 0; i < files.length; i++) {
      jsonConfigs.unshift(jsYaml.safeLoad(fs.readFileSync(files[i], 'utf8')))
    }

    const combineResult = mergejson(jsonConfigs)

    return jsYaml.safeDump(combineResult)
  }
};

module.exports = new YamlMerger()
