FROM oven/bun:distroless AS base
WORKDIR /usr/app
COPY package.json bun.lockb .
RUN bun install --frozen-lockfile --production

FROM base AS client
COPY client ./client
RUN cd client && bun run build

FROM base AS server
COPY server ./server
COPY --from=client /usr/app/client/dist ./server/bundle

USER bun
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "./server" ]
