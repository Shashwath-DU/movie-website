#  Full Stack Movie App (React + Spring Boot + MongoDb)

This is a full-stack movie application built using **React** for the frontend and 
**Spring Boot** for the backend. It allows users to browse movies, watch trailers via YouTube, and leave reviews.

---

##  Project Structure
root/
├── movies/ # Spring Boot Backend
│ ├── src/
│ ├── target/
│ ├── pom.xml
│ └── ...
├── node_modules/
├── public/
├── src/ # React Frontend
│ ├── api/
│ ├── components/
│ └── ...
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── ...


---

##  Tech Stack

###  Frontend (React)

- React.js + Vite
- React Router
- React Bootstrap & Bootstrap CSS
- ReactPlayer (for trailers)
- Axios
- FontAwesome + MUI

###  Backend (Spring Boot)

- Spring Boot
- REST APIs (Spring Web)
- MongoDB (Spring Data)
- CORS Config

---

## How to Run the Project

### Backend (Spring Boot)

1. Open the `/movies` folder in IntelliJ, Eclipse, or VS Code with Java.
2. Ensure MongoDB is running locally (default: `mongodb://localhost:27017`).
3. Update DB connection in `application.properties` if needed.
4. Run the application (`MoviesApplication.java`).

Backend runs at:  
`http://localhost:8080`

Available APIs:
GET /api/v1/movies
GET /api/v1/movies/{id}
POST /api/v1/reviews


---

npm install
npm run dev
Frontend runs at:
http://localhost:5173

Make sure the backend is running to avoid CORS/API issues.


Features:

 Carousel-style movie display

 Watch YouTube trailers in full screen

 Leave and view reviews per movie

 Fully responsive layout (mobile + desktop)



Future Enhancements:

 Authentication: Login/Register

 User-specific review history

 Star ratings + comments

 Search + Filter movies

