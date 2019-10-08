export default (res, { message, status = 500 }) => {
  res.status(status).json({
    status: "error",
    message
  })
}


