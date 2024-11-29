run:
# npm start
	expo run:ios --device 00008130-000C184A1011401C 
	

run-ios:
	npm install expo-dev-client
	expo prebuild
	expo run:ios

.PHONY: run