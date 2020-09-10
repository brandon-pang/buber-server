import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";
import User from "../../../entities/User";
import Verification from "../../../entities/Vertification";
import { sendVerificationEmail } from "../../../utils/sendEmail";
import { RequestEmailVerificationResponse } from "src/types/graph";

const resolvers:Resolvers ={
    Mutation:{
        RequestEmailVerification: privateResolver(async (_,__,{req}):Promise<RequestEmailVerificationResponse> =>{
            const user:User=req.user;
            if(user.email && !user.verifiedEmail){
                try {
                    const oldVerification=await Verification.findOne({
                        payload: user.email
                    });
                    if(oldVerification){
                        oldVerification.remove();
                    }
                    const newVerification = await Verification.create({
                        payload: user.email,
                        target: "EMAIL"
                    }).save()
                    await sendVerificationEmail(user.email, user.fullName, newVerification.key);
                    return{
                        ok:true,
                        error:null
                    }
                } catch (error) {
                    return{
                        ok:false,
                        error: error.message
                    }
                }
            } else{
                return{
                    ok:false,
                    error:"Your user has no email to verify"
                }
            }

        })
        
    }
}

export default resolvers;