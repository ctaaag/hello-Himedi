#STEP 1. Build vue project

#노드설치
FROM node:16-alpine AS build
#워크디렉토리 설정
WORKDIR /app
#package.json 카피
COPY package.json package-lock.json ./
#package.json에 있는 파일들 설치
RUN npm ci
#node-modules 전부 카피
COPY . .
#expose
RUN npm run build

#빌드하기



# STEP2. CREATE NGINX SERVER

# nginx 설치하기
FROM nginx:1.23.3-alpine AS prod-stage
# dist 폴더 파일을 nginx html 경로에 copy하기 
COPY --from=build /app/dist /usr/share/nginx/html
# 80 포트로 export 하기
EXPOSE 81
# nginx 실행하기
CMD ["nginx", "-g", "daemon off;"]







# #STEP 1. Build vue project

# #노드설치
# FROM node:16-alpine AS build

# #워크디렉토리 설정
# WORKDIR /app

# #package.json 카피
# COPY package.json package-lock.json ./

# #package.json에 있는 파일들 설치
# RUN npm ci

# #node-modules 전부 카피
# COPY . .

# #expose
# EXPOSE 8080

# #빌드하기
# CMD [ "npm","run","serve" ]



#STEP2. CREATE NGINX SERVER
# FROM nginx:1.23.3-alpine AS prod-stage
# COPY --from=build /app/dist /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
# ENTRYPOINT [ "node", "index.html" ]