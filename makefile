
clean:
	rm -rf coverage dist
tests:
	npm test

reset:
	rm -rf node_modules

manual:
	mocha test **/*.test.js