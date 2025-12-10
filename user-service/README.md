## Running the Project with Docker

This project provides Docker and Docker Compose setup for building and running the Java-based user service.

### Project-Specific Docker Requirements
- **Java Version:** Uses Eclipse Temurin JDK 17 for building and JRE 17 for running the application (see `Dockerfile`).
- **Build Tool:** Maven Wrapper (`mvnw`) is used for building the project inside the container.

### Environment Variables
- No required environment variables are specified in the Docker or Compose files by default.
- If you need to set environment variables, you can create a `.env` file and uncomment the `env_file` line in `docker-compose.yaml`.

### Build and Run Instructions
1. **Build and start the service:**
   ```sh
   docker compose up --build
   ```
   This will build the application using the provided `Dockerfile` and start the `java-user_service` container.

2. **Accessing the service:**
   - The service is exposed on port **8080** by default (`ports: "8080:8080"` in `docker-compose.yaml`).
   - If your application uses a different port, update the `ports` section in `docker-compose.yaml` accordingly.

### Special Configuration
- The container runs as a non-root user (`appuser`) for improved security.
- JVM memory settings are managed via `JAVA_OPTS` (`-XX:MaxRAMPercentage=80.0`).
- If you add external services (e.g., a database), update `docker-compose.yaml` and uncomment the relevant sections.

### Ports
- **java-user_service:** Exposes port **8080**

---
_Refer to the Dockerfile and docker-compose.yaml for further customization as your project evolves._
