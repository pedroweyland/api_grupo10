const apiKeyMiddleware = (req, res, next) => {
  const apiKey = req.headers['api-key-grupo10'] || req.headers['API-KEY-GRUPO10']

  if (!apiKey) {
    return res.status(401).json({
      status: 401,
      message: 'API key is missing'
    })
  }

  if (apiKey !== process.env.API_KEY_GRUPO10) {
    return res.status(403).json({
      status: 403,
      message: 'Invalid API KEY'
    })
  }

  next()
}

export default apiKeyMiddleware
