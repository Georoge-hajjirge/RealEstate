declare namespace Express {
    interface Request {
      file?: Express.Multer.File; // For single file upload
      files?: Express.Multer.File[]; // If you plan to use multiple files
    }
  }