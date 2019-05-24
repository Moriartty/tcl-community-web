#使用node 作为基础镜像
FROM node:8.11.2
#安装nginx
RUN apt-get clean && apt-get update
RUN apt-get install -y nginx
#指定工作目录
WORKDIR /app
#将当前目录下的左右文件移到/app目录下
COPY . /app/
#声明容器运行时提供的服务端口
EXPOSE 80
# 1.安装依赖
# 2.运行npm run build
# 3.将/dist目录下的所有文件拷贝到nginx的目录下
# 4.删除工作目录文件，尤其是node_modules以减少体积
# 由于镜像构建的每一步都会产生新层
# 为了减小镜像体积，尽量将一些同类操作，集中到一个步骤中

#RUN npm install -g cnpm --registry=https://registry.npm.taobao.org \
#&& cnpm install \
#&& cnpm run build \
#&& cp -r dist/* /var/www/html \
#&& rm -rf /app

RUN  npm install \
&& npm run build \
&& cp -r dist/* /var/www/html \
&& rm -rf /app

# 以前台方式启动nginx
CMD ["nginx","-g","daemon off;"]


