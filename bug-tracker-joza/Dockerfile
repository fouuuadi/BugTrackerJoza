FROM maven:3.8.4-openjdk-17 AS MAVEN_BUILD
COPY pom.xml /build/
COPY . /build/

WORKDIR /build/
RUN mvn clean install -Dmaven.test.skip=true

FROM openjdk:17-oracle
WORKDIR /app
COPY --from=MAVEN_BUILD /build/target/bugtracker-api.jar /app/bugtracker-api.jar
EXPOSE 8083
ENTRYPOINT [  "java",                                                                       \
              "-jar",                                                                       \
              "/app/bugtracker-api.jar"                                                             \
           ]
