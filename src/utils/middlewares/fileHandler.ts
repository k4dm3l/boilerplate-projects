import multer from 'multer';
import boom from '@hapi/boom';

const availablesFileMimeTypes: Array<string> = [];

const multerOptions: any = {
  storage: multer.memoryStorage(),
  fileFilter(req: Request, file: any, next: any) {
    const isAvailable = availablesFileMimeTypes.includes(file.mimetype);

    if (!isAvailable) {
      next(boom.badRequest('The file type is not an available type'));
    } else {
      next(null, true);
    }
  },
};

const multerOptionsMultipleFiles: any = {
  storage: multer.memoryStorage(),
  fileFilter(req: Request, file: any, next: any) {
    const isAvailable = availablesFileMimeTypes.includes(file.mimetype);

    if (!isAvailable) {
      next(boom.badRequest('The file type is not an available type'));
    } else {
      next(null, true);
    }
  },
};

const receiveFile = multer(multerOptions).single('file');
const receiveMultipleFiles = multer(multerOptionsMultipleFiles).any();

export { receiveFile, receiveMultipleFiles };
