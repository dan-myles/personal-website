# Build the Go app
FROM golang:1.22 AS go-builder

WORKDIR /app
COPY . .

RUN go mod download
RUN CGO_ENABLED=0 GOOS=linux go build -o server ./cmd/main.go

# Build the Vite bundle
FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY --from=go-builder /app /app
WORKDIR /app/web

FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile
FROM base AS vite-builder
RUN pnpm run build

# Run the app
EXPOSE 8080
WORKDIR /app
CMD ["./server"]

