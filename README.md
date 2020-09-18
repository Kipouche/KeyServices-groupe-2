Le site est directement déployé sur Heroku via le Git.
A chaque push sur la branche master, il y a un redéploiement.

## Accès BDD
```logins
host: 'eu-cdbr-west-03.cleardb.net'
user: 'b7e6b587ccc346'
password: '1ad3e5d4'
database: 'heroku_b4ace937aeaf004'
```

Il y a une limite de 10 connections sur la BDD, si vous rencontrez des erreurs sur le chargement de la page, cela signifie que la limite est atteinte.
Il vous suffit de redémarrer le serveur (CTRL+C en local) ou redémarrer le dyno sur Heroku (More -> Restart all dynos) pour continuer à profiter de votre expérience.

## Lancement
Installer les dépendences

```bash
npm install
```

Ensuite, lancer le serveur en local

```bash
npm run dev
```

## Test
Lancer le serveur en local, puis
```bash
npm test
```
Pour récupérer le résultat au format JUnit
```bash
mocha test --reporter mocha-junit-reporter
```
Ça créera un fichier test-results.xml à la racine du projet.

## Identifiants Keyservices
Admin 
```bash
admin@keyservices.fr
mdp: adminkeyservices
```
Agent
```bash
agent@keyservices.fr
mdp: agentkeyservices
```
Agent de terrain
```bash
agentterrain@keyservices.fr
mdp: agentterrainkeyservices
```
Membre
```bash
membre@keyservices.fr
mdp: membrekeyservices
```

## Identifiants Heroku
```bash
[https://id.heroku.com/login](https://id.heroku.com/login}
keyserviceshosting@gmail.com
mdp: Azerty123;
```

Allez sur [http://localhost:5000](http://localhost:5000) avec votre navigateur pour découvrir le site.

Pour accéder au site en version PROD: [https://f2i-dev18-km-jl-js-gg.herokuapp.com/](https://f2i-dev18-km-jl-js-gg.herokuapp.com/)
