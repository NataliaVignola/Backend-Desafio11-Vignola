import { Router } from "express";
import { signinController, signupController, logoutController, changeUserRoleController } from '../controllers/userController';
import passport from "passport";

const router = Router();

/**
 * @swagger
 * /users/signup:
 *   post:
 *     summary: Registra un nuevo usuario
 *     responses:
 *       200:
 *         description: Registro exitoso
 *       500:
 *         description: Error del servidor
 */

/**
 * @swagger
 * /users/signin:
 *   get:
 *     summary: Inicia sesión con las credenciales del usuario
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso
 *       401:
 *         description: Credenciales no válidas
 *       500:
 *         description: Error del servidor
 */

/**
 * @swagger
 * /users/logout:
 *   get:
 *     summary: Cierra sesión y redirige al usuario a la página principal
 *     responses:
 *       200:
 *         description: Cierre de sesión exitoso
 *       500:
 *         description: Error del servidor
 */

/**
 * @swagger
 * /users/premium/{uid}:
 *   post:
 *     summary: Cambia el rol del usuario a premium
 *     parameters:
 *       - in: path
 *         name: uid
 *         required: true
 *         description: ID del usuario cuyo rol se cambiará
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Rol de usuario cambiado a premium con éxito
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error del servidor
 */

router.post('/signup', passport.authenticate('signup'), signupController);

router.get('/signin', passport.authenticate('signin'), signinController);

router.get('/logout', logoutController);

router.post('/premium/:uid', changeUserRoleController);

export default router;
