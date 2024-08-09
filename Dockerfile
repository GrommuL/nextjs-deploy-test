# Используем официальный образ Node.js в качестве базового
FROM node:20

# Создаем рабочую директорию внутри контейнера
WORKDIR /var/www/frontend

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь исходный код приложения в контейнер
COPY . .

# Собираем приложение
RUN npm run build

# Открываем порт, на котором будет работать приложение
EXPOSE 3000

# Команда для запуска приложения
CMD ["npm", "start"]
