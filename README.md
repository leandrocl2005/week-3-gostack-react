## Setup React Project
- > create-react-app react 05-primeiro-projeto-react --template=typescript
- > cd 05-primeiro-projeto-react
- >

## Setup editor config
```
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
end_of_line = lf
```

## Setup eslint
- > yarn add eslint@6.8.0 -D
- > yarn eslint --init
  - To check syntax, find problems and enforce code style
  - Javascript modules (import/export)
  - None of these
  - Yes for typescript
  - Node
  - Use a popular style guide
  - Airbnb
  - JSON
  - No install with npm
- > yarn add @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint-plugin-import@^2.21.2 @typescript-eslint/parser@latest -D
- create .eslintignore with
```
/*.js
node_modules
dist
```
- eslintrc.json with
```json
{
    "env": {
        "es2020": true,
        "node": true
    },
    "extends": [
        "airbnb-base",
				"plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
	   	"import/extensions": [
	      "error",
	      "ignorePackages",
	      {
	        "ts": "never"
	      }
	    ]
	  },
	  "settings": {
	    "import/resolver": {
	      "typescript": {}
	    }
	  }
}
```

## Setup prettier
- > yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
- In eslintrc.json extends:
```
"prettier/@typescript-eslint",
"plugin:prettier/recommended"
```
- In eslintrc.json plugin:
```
"prettier"
```
- In eslintrc.json rules:
```
"prettier/prettier": "error"
```
- Create prettier.config.js with:
```js
module.exports = {
  singleQuote: true,
  trailingComma: 'all',
	arrowParens: 'avoid',
}
```
- Add in .eslintignore: /*.js

