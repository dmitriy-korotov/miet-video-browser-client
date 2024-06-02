FROM node:lts as dependencies
WORKDIR /miet_video
COPY package.json ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /miet_video
COPY . .
COPY --from=dependencies /miet_video/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /miet_video
ENV NODE_ENV production

COPY --from=builder /miet_video/public ./public
COPY --from=builder /miet_video/package.json ./package.json
COPY --from=builder /miet_video/.next ./.next
COPY --from=builder /miet_video/node_modules ./node_modules

EXPOSE 3000
CMD ["yarn", "dev"]