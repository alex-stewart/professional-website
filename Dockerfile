FROM openjdk:13-jdk-alpine
VOLUME /resources
COPY target/professional-website.jar .
ENTRYPOINT java -jar professional-website.jar