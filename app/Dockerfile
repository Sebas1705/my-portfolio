FROM node:18-alpine AS builder

WORKDIR /app

# Install pnpm and dependencies
RUN npm install -g pnpm@latest

# Copy package files first for better caching
COPY package.json pnpm-lock.yaml ./

# Copy source
COPY . ./

# Install and build
RUN pnpm install --frozen-lockfile
RUN pnpm run build

FROM nginx:stable-alpine AS runner

# Copy built site
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
