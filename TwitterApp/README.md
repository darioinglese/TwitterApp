# Twitter Agregator

##1)Download the keycloak theme from https://github.com/darioinglese/keycloak-theme

##2)Launch Docker and execute the following scripts
docker run --name mysql -e MYSQL_DATABASE=twitterapp -e MYSQL_USER=root -e MYSQL_PASSWORD=root -e MYSQL_ROOT_PASSWORD=root  -p 3306:3306 mysql

docker run --name keycloak  -p 9990:9990 -p 38080:8080 -p 38443:8443 -v <THEME_DIRECTORY>:/opt/jboss/keycloak/themes/myTheme -e MYSQL_DATABASE=twitterapp -e MYSQL_USERNAME=root  -e MYSQL_USER=root -e MYSQL_PASSWORD=root --link mysql:mysql -e KEYCLOAK_USER=superadmin -e KEYCLOAK_PASSWORD=ChangeMe22!  jboss/keycloak-mysql

Remember to replace <THEME_DIRECTORY> with the downloaded theme path

##2) Go to localhost:38080 to enter keycloak administrative console

import keycloak config from this repository (TwitterApp/Resources/keycloak.json)

select the imported realm (Demo-Realm) and copy the rsa public key in the Keys tab.

Paste it in the application.properties field "keycloak.realmKey"

##3) Run the application

To run the project with embedded Tomcat by maven:

    mvn spring-boot:run
  
Then navigate to [http://localhost:8000](http://localhost:8000) to see the application in action.
