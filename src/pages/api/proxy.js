import https from "https";

export default async function handler(req, res) {
  const headers = ["X-API-Key", "Content-Type", "Authorization"].reduce((obj, key) => {
    if (req.headers && req.headers.hasOwnProperty(key.toLowerCase())) {
      obj[key] = req.headers[key.toLowerCase()];
    }
    return obj;
  }, {});

  try {
    // this agent allows us to bypass the certificate check
    // which is required for most self-signed certificates
    const httpsAgent = new https.Agent({
      rejectUnauthorized: false,
    });

    const result = await fetch(req.query.url, {
      agent: httpsAgent,
      method: req.method,
      headers: headers,
      body: req.method == "GET" || req.method == "HEAD" ? null : req.body,
    }).then((res) => res);

    const forward = await result.text();
    return res.status(result.status).send(forward);
  } catch {
    return res.status(500).send({
      error: "query failed",
    });
  }
}
