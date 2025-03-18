# Vue 3 + TypeScript Login App

## Overview
This project is a Vue 3 + TypeScript login application following SOLID principles. It includes:
- Vue 3 with TypeScript for a robust frontend.
- Pinia for state management.
- Vue Router for navigation.
- VeeValidate for form validation.
- Jest for testing.
- Docker for containerization.
- Kubernetes with Helm charts for deployment.
- CI/CD pipeline using GitHub Actions.
- Hosted on Azure.

## Tech Stack
### Frontend
- **Vue 3**: Modern frontend framework.
- **TypeScript**: Statically typed JavaScript.
- **Pinia**: State management.
- **Vue Router**: Navigation.
- **TailwindCSS**: Styling.
- **VeeValidate**: Form validation.
- **Axios**: HTTP requests.

### Backend (Mocked for now)
- API calls to a placeholder authentication service.

### DevOps
- **Docker**: Containerization.
- **Kubernetes**: Deployment orchestration.
- **Helm**: Kubernetes package management.
- **Azure Kubernetes Service (AKS)**: Hosting.
- **GitHub Actions**: CI/CD pipeline.

## Setup Guide
### Prerequisites
Ensure you have installed:
- Node.js & npm
- Vue CLI
- Docker
- Kubernetes (kubectl & Helm)
- Azure CLI

### Step-by-Step Guide
#### 1. Create a Vue 3 Project
```sh
vue create vue-login-app
cd vue-login-app
npm install vue-router@4 pinia@2 vee-validate@4 tailwindcss@3 axios
```

#### 2. Setup Project Structure
Create directories:
```
/src
  /components
  /views
  /router
  /store
  /services
/tests
Dockerfile
helm/
```

#### 3. Implement Authentication
- Use **Pinia** for state management.
- Create `AuthService.ts` for API calls.
- Build a login form in `Login.vue`.

#### 4. Add Routing
Define routes in `router/index.ts`:
```ts
const routes = [
  { path: '/', component: Login },
  { path: '/dashboard', component: Dashboard }
];
```

#### 5. Testing with Jest
Install Jest:
```sh
npm install --save-dev jest vue-test-utils@next @vue/vue3-jest
```
Run tests:
```sh
npm run test
```

#### 6. Dockerize the App
Create a `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "run", "serve"]
EXPOSE 3000
```
Build & run:
```sh
docker build -t authflow-app .
docker run -p 3000:3000 authflow-app
```

#### 7. Deploy to Azure AKS
```sh
az login
az aks create --resource-group myResourceGroup --name myCluster --node-count 2 --generate-ssh-keys
kubectl apply -f helm/values.yaml
```

#### 8. Set Up CI/CD
Add a GitHub Actions workflow:
```yaml
name: CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install Dependencies
        run: npm install
      - name: Run Tests
        run: npm run test
      - name: Build & Deploy
        run: |
          docker build -t authflow-app .
          docker tag authflow-app myregistry.azurecr.io/authflow-app:latest
          docker push myregistry.azurecr.io/authflow-app:latest
```

### Conclusion
This project provides a scalable, production-ready Vue 3 login system with authentication, state management, testing, and CI/CD deployment to Azure AKS.

