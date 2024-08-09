import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return next(res.status(401).send("You are not authenticated!"));
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (error, user) => {
        if (error) return next(res.status(403).send("Token is not valid!"));
        req.user = user;
        next();
    })
}

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            return res.status(403).send("You are not authorized!");
        }
    });
};

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            return res.status(403).send("You are not admin!");
        }
    });
};


// export const verifyToken = (req, res, next) => {
//     const token = req.headers["authorization"];
//     if (!token) return res.status(403).send("A token is required for authentication");
//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = decoded;
//     } catch (err) {
//         return res.status(401).send("Invalid Token");
//     }
//     return next();
// };