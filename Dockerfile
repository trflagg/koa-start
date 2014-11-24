FROM node:0.11.14-onbuild
RUN 'npm' 'install' 'nodemon' '-g'
RUN 'npm' 'install' 'bower' '-g'
RUN 'bower' '--allow-root' 'install'

ENV NODE_ENV production
EXPOSE 3000
