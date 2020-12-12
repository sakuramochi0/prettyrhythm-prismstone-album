container-build:
	docker build -t prettyrhythm-prismstone-album .

start:
	docker run --rm -it \
		-v $(CURDIR):/app \
		-w /app \
		-p 3000:3000  \
		--name prettyrhythm-prismstone-album \
		prettyrhythm-prismstone-album \
		yarn start

build:
	docker run --rm -it \
		-v $(CURDIR):/app \
		-w /app \
		-p 3000:3000  \
		--name prettyrhythm-prismstone-album \
		prettyrhythm-prismstone-album \
		yarn build

deploy:
	docker run --rm -it \
		-v $(CURDIR):/app \
		-w /app \
		-p 3000:3000  \
		--name prettyrhythm-prismstone-album \
		prettyrhythm-prismstone-album \
		yarn deploy
