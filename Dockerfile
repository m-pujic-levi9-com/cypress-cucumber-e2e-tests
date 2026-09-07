FROM cypress/browsers:node-24.20.0-chrome-152.0.7977.64-1-ff-155.0-edge-152.0.4191.53-1

RUN node --version
RUN npm --version

WORKDIR /app

# copy project and test files
COPY package.json package-lock.json cypress.config.js .cypress-cucumber-preprocessorrc.json ./
COPY cypress ./cypress

# avoid many lines of progress bars during install
# https://github.com/cypress-io/cypress/issues/1243
ENV CI=1

# install NPM dependencies and Cypress binary
RUN npm ci

# check if the binary was installed successfully
RUN npx cypress verify