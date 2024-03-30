const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, _req, res, _next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    //check for mongoose bad ObjectId

    if (err.name === "CastError" && err.kind === "ObjectId") {
        message = "Resource  not found";
        statusCode = 404;

    }

    res.status(statusCode).json({
        message,
        stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack
    });
};

export { notFound, errorHandler };