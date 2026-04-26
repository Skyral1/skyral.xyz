FROM nginx:alpine

# Copie la config nginx personnalisée
COPY nginx.conf /etc/nginx/nginx.conf

# Copie tous tes fichiers HTML/CSS/JS dans nginx
COPY public/ /usr/share/nginx/html/

EXPOSE 80