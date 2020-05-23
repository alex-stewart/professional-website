FROM openjdk:13-jdk-alpine
VOLUME /resources
COPY target/professional-webpage.jar .
ENTRYPOINT java -jar professional-webpage.jar