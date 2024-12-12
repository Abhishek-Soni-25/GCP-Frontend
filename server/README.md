# Backend-app

## Project setup
```
npm install
```

### Set up the .env 
```
Add the .env file in the server directory.
Add the following variables according to your credentials:
    PORT , DB_NAME , DB_USER , DB_PASSWORD , DB_HOST
```

### Run the migrations
```
node migrations/migrate.js
```

### Compiles and hot-reloads for development
```
npm run start
```


### Key Endpoints
1. **Request a Security Key**
   - **URL**: `/api/request-key/`
   - **Method**: `POST`
   - **Description**: Allows users to submit a request for a security key by providing their details (Employee ID, Name, Email, Phone, and Description).
2. **Approve a Security Key**
   - **URL**: `/api/approve-key/<employee_id>/`
   - **Method**: `POST` / `GET`
   - **Description**: Enables administrators to approve a security key request and generate a unique security key for the user. Users can also fetch the approved key via a `GET` request.
3. **Validate a Security Key**
   - **URL**: `/api/validate-key/<employee_id>/`
   - **Method**: `GET`
   - **Description**: Validates the security key for a specific Employee ID, ensuring it matches the one issued by the system.
