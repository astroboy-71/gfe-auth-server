# State 1: Building the app
FROM node:20.3.0-alpine3.18 as builder

ARG NEXT_PUBLIC_DEFAULT_WEBSITE_URL
ARG NEXT_PUBLIC_TERMS_URL
ARG NEXT_PUBLIC_PRIVACY_URL

ENV NEXT_PUBLIC_DEFAULT_WEBSITE_URL=${NEXT_PUBLIC_DEFAULT_WEBSITE_URL}
ENV NEXT_PUBLIC_TERMS_URL=${NEXT_PUBLIC_TERMS_URL}
ENV NEXT_PUBLIC_PRIVACY_URL=${NEXT_PUBLIC_PRIVACY_URL}

WORKDIR /app

# Copy package.json
COPY package.json ./

RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# Copy the rest of the Next.js app source code
COPY . .

# Build the Next.js app
RUN pnpm build

# State 2: Serve the app
FROM node:20.3.0-alpine3.18 as runner

WORKDIR /app

# Copy the built app from the previous stage
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "./server.js"]
