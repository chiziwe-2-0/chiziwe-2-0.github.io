
const { default: generate } = require('@babel/generator')
const http = require('http')

const URL = 'http://kodaktor.ru/j/_ast/7f7e0'

http.get(URL, (r, b = '') => r
.on('data', d => b += d.toString())
.on('end', () => {
const ast = JSON.parse(b)
const { code } = generate(ast)
console.log(code)
})
)
e