# server-random-files-multemedia
## run server with docker cli

```bash
export FILES_MEDIA_PATH=/home/al3xdiaz/img
docker run -it --rm -v $FILES_MEDIA_PATH:/app/public/media -p 80:3000 ghcr.io/al3xdiaz/server-random-files-multemedia:latest
```

## run server with docker compose

```yaml
# ./docker-compose.yml
version: '3.7'
services:
  server:
    image: 'ghcr.io/leandro-matos/server-random-files-multemedia:latest'
    ports:
      - '80:3000'
    volumes:
      - '$FILES_MEDIA_PATH:/app/public/media'
    restart: unless-stopped
```

```bash
docker-compose up -d
```
