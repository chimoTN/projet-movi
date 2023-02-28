FROM maven:3.8.7-eclipse-temurin-19-alpine as builder
RUN mkdir -p app/source
COPY . /app/source
WORKDIR /app/source
RUN mvn clean install -DskipTests

FROM openjdk:21-jdk-oracle
COPY --from=builder /app/source/target/*.jar app/app.jar
ENTRYPOINT ["java", "-jar","app/app.jar"]