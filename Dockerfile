# Мультистейдж сборка для оптимизации размера образа

# ============================================
# Стадия 1: Сборка приложения (Builder)
# ============================================
FROM node:18-alpine AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем ВСЕ зависимости (production + devDependencies)
# DevDependencies необходимы для сборки проекта (Vite, TypeScript, @vitejs/plugin-react)
RUN npm ci && npm cache clean --force

# Копируем весь исходный код
COPY . .

# Собираем production build
# Vite создаст оптимизированную статику в папке dist/
RUN npm run build

# ============================================
# Стадия 2: Production образ с Nginx
# ============================================
FROM nginx:alpine

# Копируем кастомную конфигурацию Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Копируем собранное приложение из стадии builder
# Берем только готовую статику из dist/
COPY --from=builder /app/dist /usr/share/nginx/html

# Открываем порт 80
EXPOSE 80

# Запускаем Nginx в foreground режиме
CMD ["nginx", "-g", "daemon off;"]