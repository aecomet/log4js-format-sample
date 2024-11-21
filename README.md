# log4js-format-sample

A sample app that formats logs to JSON.

Node.js v22.11.0

```sh
$ pnpm build

$ node dist/index.mjs
{"startTime":"2024-11-21T06:06:33.221Z","categoryName":"develop","data":["Entering cheese testing","yes","no",1,2,3],"level":{"level":5000,"levelStr":"TRACE","colour":"blue"},"context":{},"pid":69466}
{"startTime":"2024-11-21T06:06:33.225Z","categoryName":"develop","data":["Got cheese."],"level":{"level":10000,"levelStr":"DEBUG","colour":"cyan"},"context":{},"pid":69466}
{"startTime":"2024-11-21T06:06:33.225Z","categoryName":"develop","data":["Cheese is Comté."],"level":{"level":20000,"levelStr":"INFO","colour":"green"},"context":{},"pid":69466}
{"startTime":"2024-11-21T06:06:33.225Z","categoryName":"develop","data":["Cheese is quite smelly."],"level":{"level":30000,"levelStr":"WARN","colour":"yellow"},"context":{},"pid":69466}
{"startTime":"2024-11-21T06:06:33.225Z","categoryName":"develop","data":["Cheese is too ripe!"],"level":{"level":40000,"levelStr":"ERROR","colour":"red"},"context":{},"pid":69466}
{"startTime":"2024-11-21T06:06:33.225Z","categoryName":"develop","data":["Cheese was breeding ground for listeria."],"level":{"level":50000,"levelStr":"FATAL","colour":"magenta"},"context":{},"pid":69466}
```
