var variables={
  "version": "8.2.0-feature-sortingCycleInitiatorSourceId-coded.1",
  "name": "@ch-post-app-cs/coding-sorting-stream-api",
  "description": "Coding Sorting Stream API",
  "scripts": {
    "start": "apikana start src dist",
    "stop": "apikana stop",
    "prepublishOnly": "npm test",
    "create-sample": "apikana create-sample",
    "validate-samples": "apikana validate-samples",
    "test": "eslint src --ext .ts && apikana validate-samples",
    "lint": "eslint src --ext .ts",
    "lint-fix": "eslint src --ext .ts --fix"
  },
  "author": "gfellerle",
  "license": "Apache-2.0",
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^4.13.0",
    "@typescript-eslint/parser": "^4.13.0",
    "apikana": "0.9.34",
    "apikana-defaults": "0.0.90",
    "eslint": "^7.17.0",
    "eslint-config-prettier": "^7.1.0",
    "eslint-plugin-prettier": "^3.3.1",
    "prettier": "^2.2.1",
    "typescript": "^4.1.3"
  },
  "customConfig": {
    "type": "stream-api",
    "domain": "post.ch",
    "author": "Team Erkennen Codieren Pakete",
    "namespace": "app.cs.coding.sorting",
    "shortName": "coding-sorting",
    "projectName": "coding-sorting-stream-api",
    "title": "Coding Sorting Stream API",
    "plugins": [
      "maven",
      "dotnet",
      "readme"
    ],
    "javaPackage": "ch.post.app.cs.coding.sorting.v1",
    "mavenGroupId": "ch.post.app.cs.coding",
    "dotnetNamespace": "Ch.Post.App.Cs.Coding.Sorting.V1",
    "dotnetPackageId": "Ch.Post.App.Cs.Coding.Sorting.StreamApi",
    "mqs": "MQTT",
    "avro": {
      "enumAsString": true
    }
  },
  "_": [
    "start",
    "src",
    "dist"
  ]
}