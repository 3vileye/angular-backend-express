import express from 'express';
import {register,login} from '../controllers/auth.ctrl';


//import controller
// import {testapi} from '../controllers/user.ctrl.js';
// import {autoAsign} from '../controllers/order.ctrl.js';
// import {InstanceFeController,feDailyEarnings} from '../controllers/Fe.ctrl.js';
// import {Campaign} from '../controllers/campaign.ctrl.js';
// import {ControllerApi} from '../controllers/TawseelahApiController.ctrl.js';
// import AppDependencies from '../Helpers/appVersion.js';
// import middleware
// import {requestCheckHeader,requestCheckAuth,validateRequest} from '../middlewares/requestCheck.midlwre.js';
// import {campaignReport} from "../middlewares/validator.js";

const router = express.Router();
//router.get("/:message", showMessage);
// readdirSync('./routes').map((r) =>
//  app.use('/api', require(`./routes/${r}`))
//  );
/*c2c visiting reports*/
// router.post("/report-c2c-visiting-user",requestCheckAuth,validateRequest('c2cReport'), ControllerApi.ReportVisitingUsers.bind(ControllerApi));
// router.post("/add-c2c-visiting-user",validateRequest('addVisitingUser'), ControllerApi.AddVisitingUser.bind(ControllerApi));
// router.post("/auto-asign", autoAsign);
//fe earnings apis
// router.post("/earnings",feDailyEarnings);//functional approach
// router.post("/fe-daily-earnings", requestCheckHeader ,InstanceFeController.feDailyEarnings.bind(InstanceFeController)); // class baseed approach
//campaign routes apis
// router.get("/campaign/fetch-campaign-customer-nos",requestCheckAuth,Campaign.CampaignMsgNo.bind(Campaign));
// router.post("/campaign/fetch-campaign-reports",requestCheckAuth,validateRequest('campaignReport'),Campaign.CampaignReports.bind(Campaign));
//router.post("/login", login);appversion
//api for version
// router.get("/app-version",requestCheckAuth,AppDependencies.appversion.bind(AppDependencies));
// router.post("/register" ,testapi);


router.get("/world", (req,res)=>{
	console.log(req.body);
	res.send('hello');
});
router.post("/register", register);
router.post("/login", login);

//export default router;
module.exports = router;