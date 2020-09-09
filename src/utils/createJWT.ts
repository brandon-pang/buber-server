import jwt from "jsonwebtoken";

const JwtToken = process.env.JWT_TOKEN;

const createJWT = (id: number): string => {
    const token = jwt.sign(
        {
            id
        },
        JwtToken || ""
    );
    return token;
};

export default createJWT;