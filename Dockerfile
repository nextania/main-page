FROM oven/bun:alpine AS base
WORKDIR /usr/app
COPY package.json bun.lockb .
RUN mkdir client && mkdir server
COPY client/package.json ./client
COPY server/package.json ./server
RUN bun install --frozen-lockfile

FROM base AS client
COPY client ./client
RUN cd client && bun run build

FROM base AS server
COPY server ./server
COPY --from=client /usr/app/client/dist ./server/bundle

USER bun
EXPOSE 3001/tcp
ENTRYPOINT [ "bun", "./server" ]
