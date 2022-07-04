import express  from "express";
import { createCategory, deleteCategory, getCategories, getCategory, updateCategory } from "../controllers/category.js";
import {auth} from '../middleware/auth'
const router=express.Router();


/**
 * @swagger
 * components:
 *   schemas:
 *      Category:
 *       type: object
 *       required:
 *          - name
 *          - createdBy
 *       properties:
 *          id:
 *            type: string
 *            description: auto generated id of book
 *          name:
 *            type: string
 *            description: name of category
 *          createdBy:
 *            type: string
 *            description: user who created category           
 *       example:
 *         id: jasdiawheuui829832
 *         name: revision
 *         createdBy: kerie
 */ 

/**
 *@swagger
 * /categories:
 *    get:
 *      summary: Get All categories
 *      tags: [Categories]
 *      responses:
 *        200:
 *          description: Success      
 *          contens:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Category' 
 */       
router.get('/',getCategories);
/**
 * @swagger
 * /categories/{id}:
 *   get:
 *     summary: Get category by id
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           required: true
 *           description: The category id
 *     responses:
 *       200:
 *         description: category by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 */
router.get('/:id',getCategory);

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: create category
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: successfully created book
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       500:
 *         description:  some server error
 */

router.post('/',createCategory);
/**
 * @swagger
 * /categories/{id}:
 *  put:
 *   summary: updated  category
 *   tags: [Categories]
 *   parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: string
 *         required: true
 *         description: category to update id
 *   requestBody:
 *       required: true
 *       content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Category'
 *   responses:
 *       200:
 *         description: success updating category
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       404:
 *         description: category not found
 *       500:
 *         description: internal server error
 *         
 */ 




router.put('/:id',updateCategory);
router.delete('/:id',deleteCategory);

export default router