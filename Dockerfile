FROM oven/bun:1 as build

WORKDIR /app

# Copy package.json and other dependency files
COPY package.json bun.lockb* ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy all files
COPY . .

# Build the application
RUN bun run build

# Use a smaller image for production
FROM oven/bun:1-slim

WORKDIR /app

# Copy built application from build stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./

# Install only production dependencies
RUN bun install --production --frozen-lockfile

# Expose the port the app runs on
EXPOSE 3000

# Start the application using Bun to serve the static files
CMD ["bun", "run", "vite", "preview", "--host", "0.0.0.0", "--port", "3000"] 