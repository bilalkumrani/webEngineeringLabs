/*

why we need web services ?
 - we want to use some functionality in other application
 - because we want to use any resouce which is developed in any language there should be no 
    language  depedency so our applications can interact with each other.

 - we can develop scalable or distributed application
 - easy to maintain an application
 - it makes our application light weight and faster


 what is a web service? (API)
  - request to server -> response from server here server will return data not html page.
  - when we try to access any resource over the internet that is web service.
  - Resource are nothing, it's data
  - web service only return the data not a page.
  - over the internet exchange the data application to application interaction
  - there two want to present data.
  - XML & JSON

Types of web services(APIS).
 - SOAP -> came first
 - REST -> came after soap

 SOAP
 - has an official standard
 - it uses XML
 - convinient with javascript but not greater support
 - Uses http, smtp, ftp, protocol etc
 - performance wise bad
 - Calling by RPC method (remote procedure call)
 - Not readable response


 REST (More popular)
 - No official standard
 - Uses JSON and XML data etc
 - convinient with javascript
 - uses only http protocol
 - performance wise good
 - services calling by URL path
 - Readable response




 HTTP Methods
 operations:
 insert, delete, update, fetch -> (CRUD operation)

 Methods:
 - post -> to create -> it creates everytime new record on server
 - get -> to read
 - put -> to update -> if record is not created it will create and nextime it will overwrite that.
 - delete -> delete
 - patch -> only targeted element is effected in put all objects will be overwrite.

NOTE: we can also read with delete method or write with post method we can do these things, whatever method we use the code is there for that method is available it will do that, this is not good practice we have to follow the rules we have to read only with get method create with only post method update with update method and delete with delete method.


get:
- by url
- hyperlinks
- form tag
by default form tag is get but we make it post because if we use get method with form tag our data will be shown in the URL because it will go in query string, so we dont want this because often we send sensitive data and we don't want that data can ve seen in URL.
we cant send heavy data with query string and also cant send binary data like want to send any file so we have to go with post request.


Idemputent
- performing same operation everytime
- like get method it returns page everytime when we hit request
- post method is not idemputent request bcz it creates new record everytime 
- put method is not idemputent request
- delete is idemputent request
- patch is idemputent request



If server is not giving html page in response only giving data is called URI not URL
If server is giving html page in response is called URL
If server is giving data in response is URI (unified resource identifier)






















*/