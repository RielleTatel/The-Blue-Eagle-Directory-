project-root/
│── server.js              # Main entry point
│── package.json
│── /routes                # Handles routing (endpoints)
│    ├── userRoutes.js
│    ├── productRoutes.js
│── /controllers           # Business logic
│    ├── userController.js
│    ├── productController.js
│── /models                # Database queries / ORM models
│    ├── userModel.js
│    ├── productModel.js
│── /config
│    ├── db.js             # Database connection (Postgres or Supabase client)
│── /middleware
│    ├── authMiddleware.js # Example middleware (auth, logging, etc.)