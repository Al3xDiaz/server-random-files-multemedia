# server-random-files-multemedia
## run server with docker cli

```bash
docker run -it --rm -v `pwd`:/app/public/media -p 80:3000 ghcr.io/al3xdiaz/server-random-files-multemedia:latest
```

## run server with docker compose

```yaml
# ./docker-compose.yml
version: '3.7'
services:
  server:
    image: 'ghcr.io/al3xdiaz/server-random-files-multemedia:latest'
    ports:
      - '80:3000'
    volumes:
      - '$PWD:/app/public/media'
    restart: unless-stopped
```

```bash
docker-compose up -d
```
