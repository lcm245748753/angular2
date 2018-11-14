FROM anapsix/alpine-java:8_server-jre_unlimited

ARG war

COPY ${war} /opt/app/app.war
ENV __JAVA_OPTIONS__ " \
    -Dserver.tomcat.basedir=/opt/app/ \
    -Dlogging.file=logs/app.log \
    -Dserver.tomcat.accesslog.enabled=true \
    -server.tomcat.accesslog.buffered=false \
"
WORKDIR /opt/app
VOLUME /opt/app/logs
ENTRYPOINT exec java $__JAVA_OPTIONS__ $JAVA_OPTIONS -jar app.war
