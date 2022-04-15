import express from 'express';
import * as imageController from '../controller/imageController.js';
export const router = express.Router()

router.get('/', (req, res) => {

imageController.renderIndex(req, res);

});

router.get('/nextTen', (req, res) => {
  imageController.renderNextTen(req, res);
}
    
);

router.get('/prevTen', (req, res) => {
  imageController.renderPrevTen(req, res);
} 
);

router.get('/reset', (req, res) => {
  imageController.reset(req, res);
}
);