import { Router } from "express";
import { scanQrcode } from "./qrcodeController.js";

const router = Router();

router.post("/scanQrcode", scanQrcode);

export default router;