# Webpack demo

## Getting started

Stelle sicher, dass Du die richtige Node-Version nutzt:

```sh
# Du kannst den node version manager deiner Wahl nutzen.
$ nvm install
$ nvm use
```

## Installieren der dependencies

```sh
$ npm install
```

## Führe folgende Übungen aus

- [ ] Analysiere das `package.json` um zu sehen welche npm scripts das es gibt
- [ ] Beobachte die Unterschiede im generierten Bundle wenn du `npm run build` bzw. `npm run build:prod` ausführst
- [ ] Aktiviere den `style-loader` & `css-loader` in der Webpack-Konfiguration und importiere das CSS im `index.js`, damit die Styles verwendet werden
- [ ] Aktiviere den `babel-loader` in der Webpack-Konfiguration, sodass unser JavaScript zu einer älteren Version transpiliert wird (schau Dir das generierte JavaScript am Schluss an)
- [ ] Aktiviere Source-Maps, damit wir unsere originalen JavaScript-Dateien im Browser ansehen können (achte nach dem Aufstarten des Dev-Server, von welchen Dateien die `console.log()` ausgeführt werden)
- [ ] Versuche, einen anderen Transpiler als Babel einzusetzen (z.B. [esbuild-loader](https://github.com/esbuild-kit/esbuild-loader#-install))
