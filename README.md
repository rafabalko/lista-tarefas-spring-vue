# 📝 Lista de Tarefas — Full Stack (Spring Boot + Vue.js)

Este projeto é uma aplicação **Full Stack** desenvolvida com **Spring Boot 3** no backend e **Vue.js 3 (Vite)** no frontend.  
O objetivo é demonstrar a integração entre uma API REST e uma interface moderna utilizando Axios, boas práticas de organização e arquitetura MVC.

A aplicação permite:

- ✔ Criar tarefas
- ✔ Marcar como concluídas
- ✔ Editar o título com duplo clique
- ✔ Excluir tarefas
- ✔ Carregar dados iniciais automaticamente
- ✔ Ordenação automática (pendentes primeiro)

---

## 🚀 Tecnologias Utilizadas

### 🖥 Backend – Spring Boot
- Java 21
- Spring Boot 3.5
- Spring Web
- Spring Data JPA
- H2 Database (em memória)
- Lombok
- Maven
- Spring DevTools

### 🌐 Frontend – Vue.js
- Vue 3 + Composition API
- Vite
- Axios
- HTML5 + CSS (tema dark)

---

## 📁 Estrutura do Projeto
```
projeto-listatarefas_spring_vue_cors/
│
├── backend/
│ └── api/
│ ├── src/main/java/br/com/tarefas/api/
│ │ ├── controller/
│ │ ├── service/
│ │ ├── repository/
│ │ └── model/
│ ├── src/main/resources/application.properties
│ └── pom.xml
│
├── frontend/
│ └── app-tarefas/
│ ├── src/
│ ├── public/
│ ├── index.html
│ └── package.json
│
└── README.md
```
---

## ⚙️ Como Rodar o Projeto

### 🔹 1. Rodar o Backend (Spring Boot)

```bash

cd backend/api
mvn spring-boot:run
```
### O backend inicia em:
```
http://localhost:8088/api
```
## Endpoints Disponíveis:

| Método | Rota                   | Descrição                   |
| ------ | ---------------------- | --------------------------- |
| GET    | `/tarefas`             | Lista todas as tarefas      |
| POST   | `/tarefas`             | Cria nova tarefa            |
| PUT    | `/tarefas/{id}/status` | Atualiza status (concluída) |
| PATCH  | `/tarefas/{id}/titulo` | Atualiza título da tarefa   |
| DELETE | `/tarefas/{id}`        | Remove tarefa               |

### 🔹 2. Rodar o Frontend (Vue 3)
```bash

cd frontend/app-tarefas
npm install
npm run dev
```

### A aplicação abrirá em:
```
http://localhost:5173
```
## 🎨 Interface
```
- Tema escuro elegante
- Checkbox customizado
- Edição inline (duplo clique)
- Botão de apagar com hover
- Reatividade instantânea
- Layout moderno e minimalista
```

## 👨‍💻 Autor

Rafael Balko  
GitHub: https://github.com/rafabalko